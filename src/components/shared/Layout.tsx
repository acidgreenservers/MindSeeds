import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container-custom py-10">
      <ThemeToggle />
      {children}
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-10 flex flex-wrap justify-between items-center gap-4">
      <div className="font-mono text-[0.62rem] text-ink-dim tracking-wide leading-relaxed">
        MindSeeds · Epistemic Compression Protocol<br />
        CogniSeeds · LinguaSeeds · ArchSeeds<br />
        Public Domain · v1.0
      </div>
      <div className="flex gap-1.5">
        <span className="font-mono text-[0.58rem] tracking-widest px-2.5 py-1 rounded-full border border-border text-ink-dim">66 Seeds</span>
        <span className="font-mono text-[0.58rem] tracking-widest px-2.5 py-1 rounded-full border border-border text-ink-dim">3 Families</span>
        <span className="font-mono text-[0.58rem] tracking-widest px-2.5 py-1 rounded-full border border-border text-ink-dim">1 Schema</span>
      </div>
    </footer>
  );
};
