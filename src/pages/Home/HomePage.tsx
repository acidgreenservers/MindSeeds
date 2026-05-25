import React, { useEffect, useState } from 'react';
import { Layout, Footer } from '@/components/shared/Layout';
import { Seed } from '@/components/shared/Seed';
import { SeedData } from '@/types';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [seeds, setSeeds] = useState<SeedData[]>([]);

  useEffect(() => {
    const loadSeeds = async () => {
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

  const cogniSeeds = seeds.filter(s => s.category === 'cogni');
  const linguaSeeds = seeds.filter(s => s.category === 'lingua');
  const archSeeds = seeds.filter(s => s.category === 'arch');

  return (
    <Layout>
      <div className="animate-fade-up">
        <div className="py-28 text-center relative">
          <div className="font-mono text-[0.65rem] tracking-widest text-ink-dim uppercase mb-3">
            Epistemic Compression Protocol · Public Domain
          </div>
          <div className="font-mono text-[0.68rem] tracking-wide text-ink-dim mb-8">
            <a href="https://acidgreenservers.github.io/MindSeeds/" target="_blank" rel="noopener noreferrer" className="text-ink-mid hover:text-ink transition-colors">MindSeeds Website</a> &nbsp;·&nbsp;
            Seed Family:
            <Link to="/cogni" className="text-ink-mid hover:text-ink transition-colors ml-2">CogniSeeds</Link> ·
            <Link to="/lingua" className="text-ink-mid hover:text-ink transition-colors mx-2">LinguaSeeds</Link> ·
            <Link to="/arch" className="text-ink-mid hover:text-ink transition-colors">ArchSeeds</Link>
          </div>
          <div className="font-serif text-[clamp(4rem,12vw,8rem)] leading-[0.95] tracking-tighter text-ink mb-10 relative inline-block hero-underline">
            Mind<br />Seeds
          </div>
          <p className="max-w-[560px] mx-auto mt-10 text-base text-ink-mid leading-[1.85]">
            Wisdom is not stored as documentation. It is distilled into <strong className="text-ink font-medium">Seeds</strong> —
            compressed, generative heuristics that unfold into full reasoning frameworks
            on contact with a problem. Three families. One schema. Infinite application.
          </p>
          <div className="mt-5 font-mono text-[0.65rem] tracking-wide text-ink-dim">
            Also on: <a href="https://acidgreenservers.github.io/Noosphere-Nexus/docs/prompting-for-cognition" target="_blank" rel="noopener noreferrer" className="text-ink-mid hover:text-ink transition-colors">Noosphere Nexus · Prompting For Cognition</a>
          </div>
        </div>

        <div className="border-y border-border py-12 mb-0">
          <div className="font-mono text-[0.65rem] tracking-wider text-ink-dim uppercase text-center mb-8">
            Shared Seed Schema — All families pass these four invariants
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-[4px] overflow-hidden">
            {[
              { key: 'Compression', val: 'Under 12 words. High-density. No qualifiers.' },
              { key: 'Generative', val: 'Unfolds differently across domains without modification.' },
              { key: 'Falsifiable', val: 'Ignoring it produces a specific, visible failure.' },
              { key: 'Decompressible', val: 'An LLM expands it into a full reasoning chain unprompted.' }
            ].map((item) => (
              <div key={item.key} className="bg-bg p-5 text-center transition-colors">
                <div className="font-mono text-[0.6rem] tracking-widest text-ink-dim uppercase mb-2">{item.key}</div>
                <div className="text-[0.82rem] text-ink-mid leading-relaxed">{item.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-16 bg-border border border-border rounded-lg overflow-hidden flex flex-col gap-px">
          <div className="bg-bg p-8 md:p-14 relative transition-all duration-250 cursor-default hover:bg-surface/50 border-l-[3px] border-l-cogni/40 hover:border-l-cogni">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <Link to="/cogni" className="font-serif text-[2rem] tracking-tight text-cogni no-underline">CogniSeeds</Link>
              <div className="font-mono text-[0.6rem] tracking-wide uppercase px-3 py-1 rounded-full border border-cogni-dim text-cogni bg-cogni-bg">
                Epistemic Architecture
              </div>
            </div>
            <p className="text-[0.95rem] text-ink-mid max-w-[580px] leading-[1.8] mb-8">
              Wisdom is not stored as a <strong className="text-ink font-medium">SKILL.md</strong>. It is distilled into compressed,
              reactivatable patterns that unfold on contact with a problem — mirrors of how the
              human mind actually holds knowledge without structural collapse.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {cogniSeeds.map(seed => (
                <Seed key={seed.id} data={seed} variant="pill" />
              ))}
            </div>
            <div className="flex gap-8 flex-wrap">
              <div className="font-mono text-[0.65rem] tracking-wide text-ink-dim uppercase">Seeds <span className="text-ink-mid">21 in registry</span></div>
              <div className="font-mono text-[0.65rem] tracking-wide text-ink-dim uppercase">Domain <span className="text-ink-mid">Reasoning · Epistemology · Decision</span></div>
              <div className="font-mono text-[0.65rem] tracking-wide text-ink-dim uppercase">Status <span className="text-ink-mid">v1.0 · Active</span></div>
            </div>
          </div>

          <div className="bg-bg p-8 md:p-14 relative transition-all duration-250 cursor-default hover:bg-surface/50 border-l-[3px] border-l-lingua/40 hover:border-l-lingua">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <Link to="/lingua" className="font-serif text-[2rem] tracking-tight text-lingua no-underline">LinguaSeeds</Link>
              <div className="font-mono text-[0.6rem] tracking-wide uppercase px-3 py-1 rounded-full border border-lingua-dim text-lingua bg-lingua-bg">
                Linguistic Friction Protocol
              </div>
            </div>
            <p className="text-[0.95rem] text-ink-mid max-w-[580px] leading-[1.8] mb-8">
              Authenticity is not a <strong className="text-ink font-medium">STYLE.css</strong>. It is the presence of Friction —
              the jagged edges of human cognition that LLMs smooth over into high-entropy slop.
              These seeds restore the resistance of a thinking mind.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {linguaSeeds.map(seed => (
                <Seed key={seed.id} data={seed} variant="pill" />
              ))}
            </div>
            <div className="flex gap-8 flex-wrap">
              <div className="font-mono text-[0.65rem] tracking-wide text-ink-dim uppercase">Seeds <span className="text-ink-mid">8 in registry</span></div>
              <div className="font-mono text-[0.65rem] tracking-wide text-ink-dim uppercase">Domain <span className="text-ink-mid">Voice · Writing · Human Presence</span></div>
              <div className="font-mono text-[0.65rem] tracking-wide text-ink-dim uppercase">Status <span className="text-ink-mid">v1.0 · Active</span></div>
            </div>
          </div>

          <div className="bg-bg p-8 md:p-14 relative transition-all duration-250 cursor-default hover:bg-surface/50 border-l-[3px] border-l-arch/40 hover:border-l-arch">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <Link to="/arch" className="font-serif text-[2rem] tracking-tight text-arch no-underline">ArchSeeds</Link>
              <div className="font-mono text-[0.6rem] tracking-wide uppercase px-3 py-1 rounded-full border border-arch-dim text-arch bg-arch-bg">
                Structural Integrity Protocol
              </div>
            </div>
            <p className="text-[0.95rem] text-ink-mid max-w-[580px] leading-[1.8] mb-8">
              Systems do not fail because they lack features. They fail because they lack
              <strong className="text-ink font-medium">Invariants</strong>. ArchSeeds are the physics of the design —
              hard constraints that ensure entropy remains manageable as complexity scales.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {archSeeds.map(seed => (
                <Seed key={seed.id} data={seed} variant="pill" />
              ))}
            </div>
            <div className="flex gap-8 flex-wrap">
              <div className="font-mono text-[0.65rem] tracking-wide text-ink-dim uppercase">Seeds <span className="text-ink-mid">30 in registry</span></div>
              <div className="font-mono text-[0.65rem] tracking-wide text-ink-dim uppercase">Domain <span className="text-ink-mid">Systems · Architecture · Engineering</span></div>
              <div className="font-mono text-[0.65rem] tracking-wide text-ink-dim uppercase">Status <span className="text-ink-mid">v1.0 · Active</span></div>
            </div>
          </div>
        </div>

        <div className="py-16 border-t border-border">
          <div className="font-mono text-[0.65rem] tracking-wider text-ink-dim uppercase mb-4">Why Seeds Work</div>
          <h2 className="font-serif text-[1.6rem] text-ink mb-4">Identity-Level Compression</h2>
          <p className="text-[0.95rem] text-ink-mid max-w-[600px] leading-[1.85] mb-8">
            Most prompt engineering is <strong className="text-ink font-medium">behavioral</strong> — lists of rules, forbidden words,
            style guides. Seeds operate at a deeper layer. They give a system a coherent
            <em className="italic text-ink-mid">epistemic identity</em> — a worldview from which correct behavior is derived,
            not prescribed. The model doesn't follow the rule. It becomes the kind of system
            that wouldn't violate it.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Compression', desc: 'Under 12 words forces the distillation of principle over procedure. If it needs more words, it is documentation — not a seed.' },
              { name: 'Generative', desc: 'A seed must produce different correct answers across different domains without modification. This is what separates heuristics from rules.' },
              { name: 'Falsifiable', desc: 'If you cannot name what breaks when the seed is ignored, you do not yet have a seed. The failure mode is part of the seed\'s definition.' },
              { name: 'Decompressible', desc: 'The seed must contain enough semantic density that an LLM can expand it into a complete reasoning framework unprompted. One line. Full chain.' }
            ].map(inv => (
              <div key={inv.name} className="border border-border rounded-[4px] p-6 bg-surface/50 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-cogni before:via-lingua before:to-arch before:opacity-50">
                <div className="font-mono text-[0.65rem] tracking-wide uppercase text-ink-mid mb-2">{inv.name}</div>
                <div className="text-[0.875rem] text-ink-mid leading-relaxed">{inv.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-border">
          <div className="font-mono text-[0.65rem] tracking-wider text-ink-dim uppercase mb-4">Seed Anatomy</div>
          <h2 className="font-serif text-[1.6rem] text-ink mb-4">How a Single Seed Passes All Four Invariants</h2>
          <p className="text-[0.95rem] text-ink-mid max-w-[600px] leading-[1.85] mb-8">Every seed in the registry survives this decomposition. If it cannot be unpacked this way, it does not qualify.</p>
          <div className="mt-8 border border-border rounded-md overflow-hidden">
            <div className="bg-surface p-8 text-center border-b border-border">
              <div className="font-serif italic text-2xl text-cogni">"The artifact is not the theory"</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {[
                { key: 'Compression ✓', val: '6 words. Zero qualifiers. Maximum density.', color: 'text-cogni' },
                { key: 'Generative ✓', val: 'Works for code review, AI output, architecture, research, legal drafting — unchanged.', color: 'text-lingua' },
                { key: 'Falsifiable ✓', val: 'If ignored: the output is treated as ground truth. The process that generated it becomes invisible and unrepeatable.', color: 'text-arch' },
                { key: 'Decompressible ✓', val: 'An LLM instantly derives: evaluate process, not output. Ask why, not what. Map the shadow back to the object.', color: 'text-ink-dim' }
              ].map(cell => (
                <div key={cell.key} className="bg-bg p-5">
                  <div className={`font-mono text-[0.58rem] tracking-wide uppercase mb-1.5 ${cell.color}`}>{cell.key}</div>
                  <div className="text-[0.8rem] text-ink-mid leading-relaxed">{cell.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 border-t border-border overflow-x-auto">
          <div className="font-mono text-[0.65rem] tracking-wider text-ink-dim uppercase mb-4">Cross-Family Reference</div>
          <h2 className="font-serif text-[1.6rem] text-ink mb-6">When to Use Which Family</h2>
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 font-mono text-[0.6rem] tracking-widest text-ink-dim uppercase">Context</th>
                <th className="py-4 font-mono text-[0.6rem] tracking-widest text-cogni uppercase">CogniSeeds</th>
                <th className="py-4 font-mono text-[0.6rem] tracking-widest text-lingua uppercase">LinguaSeeds</th>
                <th className="py-4 font-mono text-[0.6rem] tracking-widest text-arch uppercase">ArchSeeds</th>
              </tr>
            </thead>
            <tbody className="text-[0.82rem] text-ink-mid">
              {[
                { ctx: 'System Prompt', c: 'Epistemic discipline, reasoning depth, uncertainty handling', l: 'Voice authenticity, anti-sycophancy, friction injection', a: 'World logic, component contracts, failure assumptions' },
                { ctx: 'Code Review', c: 'Process/output distinction, invariant tracking', l: 'Documentation voice, comment clarity', a: 'SSoT, encapsulation, evolvability, observability' },
                { ctx: 'Content Editing', c: 'Epistemic honesty, source/claim mapping', l: 'Rhythm, concreteness, hedging removal, soul injection', a: 'Structure, argument load-bearing, logical removability' },
                { ctx: 'System Design', c: 'Mental model clarity, blast radius awareness', l: 'Documentation that survives the diagram going stale', a: 'All eight seeds apply directly' },
                { ctx: 'AI Agent Design', c: 'Reasoning identity, confidence calibration', l: 'Output voice, hallucination pattern removal', a: 'Interface contracts, failure-first design, observability' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                  <td className="py-4 font-medium text-ink pr-4">{row.ctx}</td>
                  <td className="py-4 pr-4 leading-relaxed">{row.c}</td>
                  <td className="py-4 pr-4 leading-relaxed">{row.l}</td>
                  <td className="py-4 leading-relaxed">{row.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="py-20 text-center border-t border-border">
          <div className="font-mono text-[0.65rem] tracking-wider text-ink-dim uppercase mb-8">The Seed of Seeds</div>
          <div className="font-serif italic text-[clamp(1.2rem,3vw,1.8rem)] text-ink leading-[1.4] max-w-[640px] mx-auto mb-6">
            "A seed is only valid if it grows every time you plant it in new soil."
          </div>
          <div className="text-[0.85rem] text-ink-dim italic">If a seed only works in one domain, it is a rule. Rules decay. Seeds compound.</div>
        </div>

        <footer className="py-12 border-t border-border flex justify-between items-start text-[0.65rem] font-mono tracking-wider text-ink-dim leading-relaxed uppercase">
          <div>
            MindSeeds · Epistemic Compression Protocol<br />
            CogniSeeds · LinguaSeeds · ArchSeeds<br />
            Public Domain · v1.0
          </div>
          <div className="flex gap-4">
            <span className="px-3 py-1 rounded-full border border-border bg-surface/50 text-ink-mid">59 Seeds</span>
            <span className="px-3 py-1 rounded-full border border-border bg-surface/50 text-ink-mid">3 Families</span>
            <span className="px-3 py-1 rounded-full border border-border bg-surface/50 text-ink-mid">1 Schema</span>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default HomePage;
