import React, { useEffect, useState } from 'react';
import { Layout, Footer } from '@/components/shared/Layout';
import { Seed } from '@/components/shared/Seed';
import { SeedData } from '@/types';
import { Link } from 'react-router-dom';

const LinguaSeedsPage: React.FC = () => {
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
            <Link to="/cogni" className="font-mono text-[0.6rem] tracking-widest px-3 py-1 rounded-full border border-border text-ink-dim hover:text-lingua hover:border-lingua-dim transition-colors">CogniSeeds · Reasoning</Link>
            <Link to="/lingua" className="font-mono text-[0.6rem] tracking-widest px-3 py-1 rounded-full border border-lingua/30 text-lingua bg-lingua/10">LinguaSeeds · Voice</Link>
            <Link to="/arch" className="font-mono text-[0.6rem] tracking-widest px-3 py-1 rounded-full border border-border text-ink-dim hover:text-lingua hover:border-lingua-dim transition-colors">ArchSeeds · Structure</Link>
          </div>

          <div className="font-mono text-[0.7rem] tracking-wider text-lingua uppercase mb-6 flex items-center gap-3">
            Linguistic Architecture · Human-Centric Synthesis · v1.0
            <span className="flex-1 h-px bg-lingua-dim opacity-40"></span>
          </div>

          <h1 className="font-serif text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink mb-6">
            Lingua<br /><em className="italic text-lingua">Seeds</em>
          </h1>

          <p className="text-[1.05rem] text-ink-mid max-w-[600px] leading-[1.8] border-l-2 border-l-lingua-dim pl-5 mt-8">
            Authenticity is not a <code className="font-mono text-[0.82em] bg-border text-lingua px-1.5 py-0.5 rounded-[3px]">STYLE.css</code>. It is the presence of <strong className="text-ink font-medium">Friction</strong> —
            the specific, jagged edges of human cognition that LLMs naturally smooth over into
            high-entropy slop. These seeds act as de-compressors for sterile text, injecting
            the structural inconsistencies that define human presence.
          </p>

          <div className="flex gap-8 mt-10 flex-wrap">
            <div className="font-mono text-[0.7rem] text-ink-dim tracking-wide">Status <span className="text-ink-mid ml-1">Operational · Active</span></div>
            <div className="font-mono text-[0.7rem] text-ink-dim tracking-wide">Category <span className="text-ink-mid ml-1">Linguistic Architecture</span></div>
            <div className="font-mono text-[0.7rem] text-ink-dim tracking-wide">Compatibility <span className="text-ink-mid ml-1">Human · LLM · System Prompt</span></div>
          </div>
        </header>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-lingua-dim tracking-widest min-w-[2.5rem]">01</span>
            <h2 className="font-serif text-[1.4rem] text-ink">The Problem — The Uncanny Valley of Syntax</h2>
          </div>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85] mb-4">
            AI-generated text suffers from <strong className="text-ink font-medium ml-1">Linguistic Entropy</strong>. It prioritizes the
            "most likely next token," which results in a frictionless, polite, and ultimately
            invisible voice. When every sentence is "pivotal" and "seamless," nothing is.
          </p>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85]">
            The humanizer task is not about adding slang. It is about restoring the
            <strong className="text-ink font-medium ml-1">resistance of a thinking mind</strong>. Traditional humanizer prompts are
            low-density lists of "don't say X." Seeds are generative heuristics that force the
            model to simulate the messy process of <em className="italic text-lingua">having an opinion</em>.
          </p>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-lingua-dim tracking-widest min-w-[2.5rem]">02</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Seed Schema — Structural Integrity Check</h2>
          </div>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85] mb-6">Every LinguaSeed must pass four invariants to ensure it generates <strong className="text-ink font-medium">soul</strong> rather than just synonyms.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-[4px] overflow-hidden">
            {[
              { key: 'Compression', val: 'Under 12 words. High-density heuristic — no room for qualifiers.' },
              { key: 'Generative', val: 'Must force a rewrite of structure, not just word choice.' },
              { key: 'Falsifiable', val: 'If ignored, the text remains AI-smooth. The failure is visible.' },
              { key: 'Decompressible', val: 'Must imply the specific AI-isms to be purged — no ambiguity about what to cut.' }
            ].map((item) => (
              <div key={item.key} className="bg-surface p-6 relative">
                <div className="font-mono text-[0.6rem] tracking-widest text-lingua uppercase mb-1.5">{item.key}</div>
                <p className="text-[0.875rem] text-ink-mid leading-relaxed m-0">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-lingua-dim tracking-widest min-w-[2.5rem]">03</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Seed Registry — v1.0</h2>
          </div>
          <p className="text-[0.95rem] text-ink-mid leading-[1.85] mb-6">Deploy these to collapse AI slop into grounded human prose. The registry is append-only.</p>

          <div className="bg-border border border-border rounded-md overflow-hidden flex flex-col gap-px">
            {seeds.map((seed) => (
              <Seed key={seed.id} data={seed} variant="card" />
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-lingua-dim tracking-widest min-w-[2.5rem]">04</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Deployment — How to Plant a Seed</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface border border-border rounded-md p-6">
              <h3 className="font-mono text-[0.7rem] tracking-widest text-lingua uppercase mb-4">In LLM System Prompts</h3>
              <p className="text-[0.85rem] text-ink-mid leading-[1.7] mb-4">Instead of a list of 200 forbidden words, inject the <strong className="text-ink font-medium">Seed Block</strong>.</p>
              <div className="border-l-2 border-lingua-dim pl-4 italic text-ink-dim text-[0.8rem]">"Operate under the Gravity Seed and the Stride Seed. If a sentence feels seamless, break it."</div>
              <p className="text-[0.85rem] text-ink-mid leading-[1.7] mt-4">This forces the model to rethink its internal probability map before a single token is generated.</p>
            </div>
            <div className="bg-surface border border-border rounded-md p-6">
              <h3 className="font-mono text-[0.7rem] tracking-widest text-lingua uppercase mb-4">In Content Editing</h3>
              <p className="text-[0.85rem] text-ink-mid leading-[1.7]">Use seeds as a diagnostic lens. If a paragraph feels off, ask: <em className="italic text-lingua">"Which seed is missing?"</em></p>
              <p className="text-[0.85rem] text-ink-mid leading-[1.7] mt-4">Missing <strong className="text-ink font-medium">Gravity</strong>? Add a hard fact. Missing <strong className="text-ink font-medium">Stride</strong>? Cut a sentence in half. Use a fragment.</p>
            </div>
            <div className="bg-surface border border-border rounded-md p-6 md:col-span-2">
              <h3 className="font-mono text-[0.7rem] tracking-widest text-lingua uppercase mb-4">The Anti-AI Recursive Pass — Dross Seed</h3>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-baseline">
                  <span className="font-mono text-[0.65rem] text-lingua-dim">01</span>
                  <div className="text-[0.85rem] text-ink-mid"><strong className="text-ink">Prompt:</strong> "Stare at this text. What makes it obviously AI?"</div>
                </div>
                <div className="flex gap-4 items-baseline">
                  <span className="font-mono text-[0.65rem] text-lingua-dim">02</span>
                  <div className="text-[0.85rem] text-ink-mid"><strong className="text-ink">Action:</strong> The model identifies its own tells — "I used the word 'landscape' three times."</div>
                </div>
                <div className="flex gap-4 items-baseline">
                  <span className="font-mono text-[0.65rem] text-lingua-dim">03</span>
                  <div className="text-[0.85rem] text-ink-mid"><strong className="text-ink">Prompt:</strong> "Now apply the Grip Seed and excise them."</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 border-b border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.65rem] text-lingua-dim tracking-widest min-w-[2.5rem]">05</span>
            <h2 className="font-serif text-[1.4rem] text-ink">Contribution Rules</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { id: 'R1', title: 'No Adjectives.', desc: 'If a seed requires an adjective to be understood, it is too weak. Strengthen the noun or verb.' },
              { id: 'R2', title: 'Linguistic Friction.', desc: 'A seed must make the writing harder to produce but easier to believe.' },
              { id: 'R3', title: 'The Mirror Invariant.', desc: 'If you can imagine a machine saying it without irony, it is not a LinguaSeed.' }
            ].map(rule => (
              <div key={rule.id} className="flex gap-4 p-4 bg-surface border border-border rounded-sm items-baseline">
                <span className="font-mono text-[0.65rem] text-lingua-dim min-w-[1.5rem]">{rule.id}</span>
                <div className="text-[0.9rem] text-ink-mid">
                  <strong className="text-ink font-medium">{rule.title}</strong> {rule.desc}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-10 border border-lingua-dim/30 rounded-md bg-bg text-center relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-0.5 bg-bg border border-lingua-dim/30 text-[0.6rem] font-mono tracking-[0.2em] text-lingua-dim">META-SEED</div>
            <div className="font-serif italic text-xl text-ink leading-relaxed">"A human writes to be understood; an AI writes to be correct."</div>
          </div>
        </section>

        <footer className="py-12 flex justify-between items-center text-[0.65rem] font-mono tracking-wider text-ink-dim uppercase">
          <div>LinguaSeeds · Linguistic Friction Protocol · Public Domain</div>
          <div className="px-3 py-1 rounded-full border border-lingua-dim/30 text-lingua bg-lingua-bg">v1.0 · Registry Open</div>
        </footer>
      </div>
    </Layout>
  );
};

export default LinguaSeedsPage;
