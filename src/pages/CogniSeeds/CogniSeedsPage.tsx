import React, { useEffect, useState } from 'react';
import { Layout, Footer } from '@/components/shared/Layout';
import { Seed } from '@/components/shared/Seed';
import { SeedData } from '@/types';
import { Link } from 'react-router-dom';

const CogniSeedsPage: React.FC = () => {
  const [seeds, setSeeds] = useState<SeedData[]>([]);

  useEffect(() => {
    const loadSeeds = async () => {
      // @ts-ignore
      const modules = import.meta.glob('./seeds/*.tsx');
      const loadedSeeds: SeedData[] = [];
      for (const path in modules) {
        const mod = await modules[path]() as any;
        if (mod.data) {
          loadedSeeds.push(mod.data);
        }
      }
      setSeeds(loadedSeeds);
    };
    loadSeeds();
  }, []);

  return (
    <Layout>
      <div className="animate-fade-up">
        <header className="py-20 border-b border-border relative">
          <div className="flex gap-2 mb-8 flex-wrap">
            <Link to="/cogni" className="font-mono text-[0.6rem] tracking-widest px-3 py-1 rounded-full border border-cogni/30 text-cogni bg-cogni/10">CogniSeeds · Reasoning</Link>
            <Link to="/lingua" className="font-mono text-[0.6rem] tracking-widest px-3 py-1 rounded-full border border-border text-ink-dim hover:text-cogni hover:border-cogni-dim transition-colors">LinguaSeeds · Voice</Link>
            <Link to="/arch" className="font-mono text-[0.6rem] tracking-widest px-3 py-1 rounded-full border border-border text-ink-dim hover:text-cogni hover:border-cogni-dim transition-colors">ArchSeeds · Structure</Link>
          </div>

          <div className="font-mono text-[0.7rem] tracking-wider text-cogni uppercase mb-6 flex items-center gap-3">
            Epistemic Architecture · Prompt Optimization · v1.0
            <span className="flex-1 h-px bg-cogni-dim opacity-40"></span>
          </div>

          <h1 className="font-serif text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink mb-6">
            Cogni<br /><em className="italic text-cogni">Seeds</em>
          </h1>

          <p className="text-[1.05rem] text-ink-mid max-w-[600px] leading-[1.8] border-l-2 border-l-cogni-dim pl-5 mt-8">
            Wisdom is not stored as a <code className="font-mono text-[0.82em] bg-border text-cogni px-1.5 py-0.5 rounded-[3px]">SKILL.md</code>. It is distilled into <strong className="text-ink font-medium">Seeds</strong> —
            high-density, generative metaphors that allow complex systems to be held in mind
            without structural collapse. Unlike instructions, seeds are not consumed — they grow.
          </p>

          <div className="flex gap-8 mt-10 flex-wrap">
            <div className="font-mono text-[0.7rem] text-ink-dim tracking-wide">Status <span className="text-ink-mid ml-1">Experimental · Active</span></div>
            <div className="font-mono text-[0.7rem] text-ink-dim tracking-wide">Category <span className="text-ink-mid ml-1">Cognitive Compression</span></div>
            <div className="font-mono text-[0.7rem] text-ink-dim tracking-wide">Compatibility <span className="text-ink-mid ml-1">Human · LLM · System Prompt</span></div>
          </div>
        </header>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-cogni-dim tracking-widest min-w-[2.5rem]">01</span>
            <h2 className="font-serif text-[1.4rem] text-ink">The Problem — Contextual Collapse</h2>
          </div>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85] mb-4">
            Traditional documentation — long SKILL files, instruction chains, rule lists — suffers from
            <strong className="text-ink font-medium ml-1">linear decay</strong>. As the context window fills, the spirit of the instruction
            dissolves into the letter of the text. Detailed manuals are low-density: massive token cost,
            marginal reasoning ROI.
          </p>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85]">
            The human mind does not store wisdom as bullet points. It holds it as
            <strong className="text-ink font-medium ml-1">compressed, reactivatable patterns</strong> — patterns that unfold on contact
            with a problem. Seeds mirror this architecture exactly.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-cogni-dim tracking-widest min-w-[2.5rem]">02</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Seed Schema — Structural Integrity Check</h2>
          </div>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85] mb-6">A valid Wisdom Seed is not an aphorism. It is a <strong className="text-ink font-medium">functional reasoning tool</strong>. Every seed must pass four invariants before entry into the registry.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-[4px] overflow-hidden">
            {[
              { key: 'Compression', val: 'Under 12 words. If it cannot be compressed, it is documentation — not a seed.' },
              { key: 'Generative', val: 'Must unfold differently across domains — code, strategy, conversation, design.' },
              { key: 'Falsifiable', val: 'Must have a clear failure state. If the seed is ignored, something specific breaks.' },
              { key: 'Decompressible', val: 'An LLM should be able to expand it into a full reasoning chain without further prompting.' }
            ].map((item) => (
              <div key={item.key} className="bg-surface p-6 relative">
                <div className="font-mono text-[0.6rem] tracking-widest text-cogni uppercase mb-1.5">{item.key}</div>
                <p className="text-[0.875rem] text-ink-mid leading-relaxed m-0">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-cogni-dim tracking-widest min-w-[2.5rem]">03</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Seed Registry — v1.0</h2>
          </div>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85] mb-6">The vault is append-only. Seeds are never revised — only superseded by new seeds that contain them.</p>

          <div className="bg-border border border-border rounded-md overflow-hidden flex flex-col gap-px">
            {seeds.map((seed) => (
              <Seed key={seed.id} data={seed} variant="card" />
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-cogni-dim tracking-widest min-w-[2.5rem]">04</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Deployment — How to Plant a Seed</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'In Human Cognition', desc: 'Seeds act as active filters. Drop a seed into a problem space and observe how it unfolds. It reduces cognitive load by providing pre-built mental geometry — you don\'t think from scratch, you think from structure.' },
              { title: 'In LLM System Prompts', desc: 'Inject seeds as heuristic activators. Instead of 2,000 words of documentation, a seed block reshapes how the model processes every subsequent token — an OS update, not a sticky note.' },
              { title: 'In Code Review', desc: 'Use seeds as shorthand for systemic failures. "This PR violates the floor/ceiling seed" communicates a full architectural critique in five words. Shared vocabulary, shared reasoning.' },
              { title: 'In Strategic Design', desc: 'Align teams on the vibe of a solution before writing the first line of code. Seeds provide a common epistemic frame that survives disagreement about implementation details.' }
            ].map(item => (
              <div key={item.title} className="bg-surface border border-border rounded-md p-6">
                <h3 className="font-mono text-[0.7rem] tracking-widest text-cogni uppercase mb-4">{item.title}</h3>
                <p className="text-[0.85rem] text-ink-mid leading-[1.7] m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-cogni-dim tracking-widest min-w-[2.5rem]">05</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Contribution Rules</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { id: 'R1', title: 'No Fluff.', desc: 'If a seed can be compressed without losing generative power, it must be compressed. Verbosity is a disqualifier.' },
              { id: 'R2', title: 'Cross-Domain Utility.', desc: 'If a seed only works for JavaScript, it is a snippet. A seed must apply equally to a codebase, a business strategy, and a conversation.' },
              { id: 'R3', title: 'The Aha Invariant.', desc: 'A seed is valid only when contact with a specific problem produces sudden expansion of clarity — in a human or an LLM. If it requires explanation to land, it is not yet a seed.' },
              { id: 'R4', title: 'Child-readable, Engineer-applicable.', desc: 'A seed must be explainable to a child and deployable by a senior engineer without modification.' },
              { id: 'R5', title: 'The vault is append-only.', desc: 'Seeds are never deleted. A better seed supersedes — it does not replace.' }
            ].map(rule => (
              <div key={rule.id} className="flex gap-4 p-4 bg-surface border border-border rounded-sm items-baseline">
                <span className="font-mono text-[0.65rem] text-cogni-dim min-w-[1.5rem]">{rule.id}</span>
                <div className="text-[0.9rem] text-ink-mid">
                  <strong className="text-ink font-medium">{rule.title}</strong> {rule.desc}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-10 border border-cogni-dim/30 rounded-md bg-bg text-center relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-0.5 bg-bg border border-cogni-dim/30 text-[0.6rem] font-mono tracking-[0.2em] text-cogni-dim">META-SEED</div>
            <div className="font-serif italic text-xl text-ink leading-relaxed">"The value of a seed is found in the shade of the tree it grows."</div>
          </div>
        </section>

        <footer className="py-12 flex justify-between items-center text-[0.65rem] font-mono tracking-wider text-ink-dim uppercase">
          <div>CogniSeeds · Epistemic Compression Protocol · Public Domain</div>
          <div className="px-3 py-1 rounded-full border border-cogni-dim/30 text-cogni bg-cogni-bg">v1.0 · Registry Open</div>
        </footer>
      </div>
    </Layout>
  );
};

export default CogniSeedsPage;
