import React from 'react';

interface ToastProps {
  x: number;
  y: number;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ x, y, visible }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none font-mono text-[0.58rem] tracking-wider uppercase text-ink bg-surface border border-border px-2 py-1 rounded-[3px] z-[10000] animate-toast-fade"
      style={{ left: x, top: y }}
    >
      Copied
    </div>
  );
};
