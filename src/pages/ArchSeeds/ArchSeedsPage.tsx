import React from 'react';
import { Layout, Footer } from '@/components/shared/Layout';
import { Seed } from '@/components/shared/Seed';
import { SeedData } from '@/types';
import { Link } from 'react-router-dom';

const ArchSeedsPage: React.FC = () => {
  // Optimization: Eagerly load seed modules for synchronous access.
  const modules = import.meta.glob('./seeds/*.tsx', { eager: true });
  const seeds = Object.values(modules)
    .map((mod: any) => mod.data as SeedData)
    .filter(Boolean);

  return (
    <Layout>
      <div className="animate-fade-up">
        <header className="py-20 border-b border-border relative">
          <div className="flex gap-2 mb-8 flex-wrap">
            <Link to="/cogni" className="font-mono text-[0.6rem] tracking-widest px-3 py-1 rounded-full border border-border text-ink-dim hover:text-arch hover:border-arch-dim transition-colors">CogniSeeds · Reasoning</Link>
            <Link to="/lingua" className="font-mono text-[0.6rem] tracking-widest px-3 py-1 rounded-full border border-border text-ink-dim hover:text-arch hover:border-arch-dim transition-colors">LinguaSeeds · Voice</Link>
            <Link to="/arch" className="font-mono text-[0.6rem] tracking-widest px-3 py-1 rounded-full border border-arch/30 text-arch bg-arch/10">ArchSeeds · Structure</Link>
          </div>

          <div className="font-mono text-[0.7rem] tracking-wider text-arch uppercase mb-6 flex items-center gap-3">
            System Architecture · Structural Design · v1.0
            <span className="flex-1 h-px bg-arch-dim opacity-40"></span>
          </div>

          <h1 className="font-serif text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink mb-6">
            Arch<br /><em className="italic text-arch">Seeds</em>
          </h1>

          <p className="text-[1.05rem] text-ink-mid max-w-[600px] leading-[1.8] border-l-2 border-l-arch-dim pl-5 mt-8">
            Systems do not fail because they lack features. They fail because they lack
            <strong className="text-ink font-medium">Invariants</strong>. ArchSeeds are high-density structural heuristics that
            dictate how components interact, fail, and scale — the physics of the design,
            ensuring that as complexity increases, entropy remains manageable.
          </p>

          <div className="flex gap-8 mt-10 flex-wrap">
            <div className="font-mono text-[0.7rem] text-ink-dim tracking-wide">Status <span className="text-ink-mid ml-1">Operational · Active</span></div>
            <div className="font-mono text-[0.7rem] text-ink-dim tracking-wide">Category <span className="text-ink-mid ml-1">System Architecture</span></div>
            <div className="font-mono text-[0.7rem] text-ink-dim tracking-wide">Compatibility <span className="text-ink-mid ml-1">Human · LLM · Software · Organization</span></div>
          </div>
        </header>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline transition-colors gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-arch-dim tracking-widest min-w-[2.5rem]">01</span>
            <h2 className="font-serif text-[1.4rem] text-ink">The Problem — The Complexity Trap</h2>
          </div>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85] mb-4">
            System design falls into the <strong className="text-ink font-medium ml-1">Abstraction Abyss</strong>. We build "flexible" systems
            so decoupled they become incomprehensible, or so rigid they shatter on the first change request.
          </p>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85]">
            Traditional architecture is documented in static diagrams that go out of date the moment
            they are saved. <strong className="text-ink font-medium">ArchSeeds are generative</strong> — planted in the design phase to
            ensure every subsequent decision respects the core structural logic of the system.
            An ArchSeed is not a best practice. It is a <em className="italic text-arch">hard constraint</em>.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline transition-colors gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-arch-dim tracking-widest min-w-[2.5rem]">02</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Seed Schema — Structural Integrity Check</h2>
          </div>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85] mb-6">Every ArchSeed must be load-bearing. It must hold weight under real system stress.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-[4px] overflow-hidden">
            {[
              { key: 'Compression', val: 'Under 12 words. Must be a load-bearing phrase — no decorative language.' },
              { key: 'Generative', val: 'Must dictate the relationship between at least two components.' },
              { key: 'Falsifiable', val: 'If ignored, the system becomes brittle or leaky. The failure mode is specific.' },
              { key: 'Decompressible', val: 'Must imply the failure it prevents — circular dependency, state drift, silent corruption.' }
            ].map((item) => (
              <div key={item.key} className="bg-bg p-6 relative transition-colors">
                <div className="font-mono text-[0.6rem] tracking-widest text-arch uppercase mb-1.5">{item.key}</div>
                <p className="text-[0.875rem] text-ink-mid leading-relaxed m-0">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline transition-colors gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-arch-dim tracking-widest min-w-[2.5rem]">03</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Seed Registry — v1.0</h2>
          </div>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85] mb-6">The registry defines the laws of the build. Append-only — no seed is ever removed.</p>

          <div className="bg-border border border-border rounded-md overflow-hidden flex flex-col gap-px">
            {seeds.map((seed) => (
              <Seed key={seed.id} data={seed} variant="card" />
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline transition-colors gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-arch-dim tracking-widest min-w-[2.5rem]">04</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Deployment — Planting the Skeleton</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bg border border-border rounded-md p-6 transition-colors">
              <h3 className="font-mono text-[0.7rem] tracking-widest text-arch uppercase mb-4">In Software Engineering</h3>
              <p className="text-[0.85rem] text-ink-mid leading-[1.7] mb-4">Instead of a 50-page architecture doc, use a <strong className="text-ink font-medium">Seed Block</strong> in the README.</p>
              <div className="border-l-2 border-arch-dim pl-4 italic text-ink-dim text-[0.8rem]">"This service operates under the Rumor Seed and the Delete Seed. No local caching of user data; every module must be removable in under 1 hour."</div>
            </div>
            <div className="bg-bg border border-border rounded-md p-6 transition-colors">
              <h3 className="font-mono text-[0.7rem] tracking-widest text-arch uppercase mb-4">In Prompt Engineering</h3>
              <p className="text-[0.85rem] text-ink-mid leading-[1.7] mb-4">Use ArchSeeds to define the world logic for an LLM agent.</p>
              <div className="border-l-2 border-arch-dim pl-4 italic text-ink-dim text-[0.8rem]">"Apply the Interface Seed: do not suggest implementation details for the backend — only define the JSON contract."</div>
            </div>
            <div className="bg-bg border border-border rounded-md p-6 transition-colors">
              <h3 className="font-mono text-[0.7rem] tracking-widest text-arch uppercase mb-4">In System Audits</h3>
              <p className="text-[0.85rem] text-ink-mid leading-[1.7]">Run each seed as a diagnostic question against an existing system.</p>
              <p className="text-[0.85rem] text-ink-mid leading-[1.7] mt-4 italic text-arch">"Where does truth live — and is it rumored anywhere else?" <span className="text-ink-dim not-italic ml-2">One question. Full SSoT audit.</span></p>
            </div>
            <div className="bg-bg border border-border rounded-md p-6 transition-colors">
              <h3 className="font-mono text-[0.7rem] tracking-widest text-arch uppercase mb-4">In Logic and Synthesis</h3>
              <p className="text-[0.85rem] text-ink-mid leading-[1.7]">Use the <strong className="text-ink font-medium">Gravity Seed</strong> to evaluate any proposed solution. If it requires storing too much state — memory, context, history — the seed flags it as a high-entropy, high-risk path before a line of code is written.</p>
            </div>
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline transition-colors gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-arch-dim tracking-widest min-w-[2.5rem]">05</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Contribution Rules</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { id: 'R1', title: 'Force the Friction.', desc: 'A seed must make a lazy architecture impossible — not just unlikely.' },
              { id: 'R2', title: 'Structural, Not Aesthetic.', desc: 'If the seed describes how something looks rather than how it holds together, it belongs in LinguaSeeds.' },
              { id: 'R3', title: 'The Seismic Invariant.', desc: 'If the system is shaken by 10x load or a 50% staff cut, the ArchSeed should be the thing still standing.' }
            ].map(rule => (
              <div key={rule.id} className="flex gap-4 p-4 bg-bg border border-border rounded-sm items-baseline transition-colors">
                <span className="font-mono text-[0.65rem] text-arch-dim min-w-[1.5rem]">{rule.id}</span>
                <div className="text-[0.9rem] text-ink-mid">
                  <strong className="text-ink font-medium">{rule.title}</strong> {rule.desc}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-10 border border-arch-dim/30 rounded-md bg-bg text-center relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-0.5 bg-bg border border-arch-dim/30 text-[0.6rem] font-mono tracking-[0.2em] text-arch-dim">META-SEED</div>
            <div className="font-serif italic text-xl text-ink leading-relaxed">"A perfect system is not one where nothing is added, but one where nothing can be removed."</div>
          </div>

          <div className="mt-8 p-8 border border-border rounded-md bg-bg">
            <div className="font-mono text-[0.75rem] text-ink-mid tracking-wide mb-6 pb-6 border-b border-border">
              Peter Naur — <em className="italic text-arch">"the code is just the shadow of the program"</em>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { q: 'Where does state live?', a: 'who owns the truth' },
                { q: 'Where does feedback live?', a: 'how does the system know itself' },
                { q: 'What breaks if I delete this?', a: 'blast radius awareness' }
              ].map(item => (
                <div key={item.q} className="flex items-baseline transition-colors gap-4 text-[0.875rem]">
                  <span className="font-serif italic text-arch min-w-[200px]">{item.q}</span>
                  <span className="font-mono text-[0.65rem] text-arch-dim">→</span>
                  <span className="text-ink-mid text-[0.85rem]">{item.a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 flex justify-between items-center text-[0.65rem] font-mono tracking-wider text-ink-dim uppercase">
          <div>ArchSeeds · Structural Integrity Protocol · Public Domain</div>
          <div className="px-3 py-1 rounded-full border border-arch-dim/30 text-arch bg-arch-bg">v1.0 · Registry Open</div>
        </footer>
      </div>
    </Layout>
  );
};

export default ArchSeedsPage;
