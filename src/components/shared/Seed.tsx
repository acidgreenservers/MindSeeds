import React, { useRef, useState } from 'react';
import { SeedData, SeedVariant } from '@/types';
import { useClipboard } from '@/hooks/useClipboard';
import { Toast } from './Toast';

interface SeedProps {
  data: SeedData;
  variant: SeedVariant;
}

export const Seed: React.FC<SeedProps> = ({ data, variant }) => {
  const { copy, copiedId } = useClipboard();
  const [toastPos, setToastPos] = useState({ x: 0, y: 0 });
  const pillRef = useRef<HTMLSpanElement>(null);

  const handleCopy = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setToastPos({
      x: rect.left + (variant === 'pill' ? rect.width / 2 : 20),
      y: rect.top,
    });
    copy(data.text, data.id);
  };

  if (variant === 'pill') {
    const categoryColors = {
      cogni: 'hover:text-cogni hover:border-cogni-dim',
      lingua: 'hover:text-lingua hover:border-lingua-dim',
      arch: 'hover:text-arch hover:border-arch-dim',
    };

    const copiedColors = {
      cogni: 'text-cogni border-cogni',
      lingua: 'text-lingua border-lingua',
      arch: 'text-arch border-arch',
    };

    const isCopied = copiedId === data.id;

    return (
      <>
        <span
          ref={pillRef}
          onClick={handleCopy}
          className={'font-serif italic text-[0.78rem] px-3 py-1.5 rounded-[3px] border border-border bg-surface text-ink-mid cursor-pointer select-none transition-all duration-800 ease-out ' +
            (data.category ? categoryColors[data.category] : '') + ' ' +
            (isCopied ? '!duration-50 ' + (data.category ? copiedColors[data.category] : '') : '')
          }
        >
          {data.text}
        </span>
        <Toast x={toastPos.x} y={toastPos.y} visible={isCopied} />
      </>
    );
  }

  const accentBorder = {
    cogni: 'hover:before:bg-cogni',
    lingua: 'hover:before:bg-lingua',
    arch: 'hover:before:bg-arch',
  };

  const isCopied = copiedId === data.id;

  return (
    <div className={'bg-surface/40 p-7 md:grid md:grid-cols-3 gap-8 items-start transition-colors duration-200 relative group hover:bg-surface before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100 ' + (data.category ? accentBorder[data.category] : '')}>
      <div className="flex gap-4 col-start-1">
        <button
          onClick={handleCopy}
          className={`mt-1 h-5 w-5 flex-shrink-0 flex items-center justify-center rounded border border-border bg-surface text-ink-dim hover:text-ink hover:border-text-mid transition-all duration-800 ease-out opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none cursor-pointer ${isCopied ? '!text-green-500 !border-green-500/50 opacity-100 !duration-50' : ''}`}
          title="Copy Seed"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isCopied ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            )}
          </svg>
        </button>
        <div className={'font-serif italic text-base leading-snug ' +
          (data.category === 'cogni' ? 'text-cogni' :
           data.category === 'lingua' ? 'text-lingua' :
           data.category === 'arch' ? 'text-arch' : 'text-ink')}>
          {data.text}
        </div>
        <Toast x={toastPos.x} y={toastPos.y} visible={isCopied} />
      </div>

      <div className="col-start-2 mt-4 md:mt-0">
        <div className={'font-mono text-[0.6rem] tracking-wide uppercase mb-1 ' + (data.category === 'lingua' ? 'text-warm' : 'text-green-400')}>
          {data.category === 'arch' ? 'Pattern · ' + data.family : 'Pattern'}
        </div>
        <p className="text-[0.82rem] m-0 text-ink-mid leading-relaxed">
          {data.pattern}
        </p>
        {data.failureMode && (
          <div className="inline-block font-mono text-[0.58rem] tracking-tight text-failure bg-failure-bg border border-failure-border rounded-[3px] px-2 py-0.5 mt-2">
            Prevents: {data.failureMode}
          </div>
        )}
      </div>

      <div className="col-start-3 mt-4 md:mt-0">
        <div className="font-mono text-[0.6rem] tracking-wide uppercase mb-1 text-ink-dim">
          Deploy When
        </div>
        <p className="text-[0.82rem] m-0 text-ink-dim leading-relaxed">
          {data.deployWhen}
        </p>
      </div>
    </div>
  );
};
