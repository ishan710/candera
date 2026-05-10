'use client';

import { useState, useEffect, useRef } from 'react';
import { TreeOfKnowledge } from './candera-tree';
import type { TreeVariant } from './candera-tree';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakSelect,
  TweakColor,
  TweakToggle,
} from './tweaks-panel';
import { TREE_BRANCHES, AUDIENCES, PLAYBOOKS } from './data';
import { GET_IN_TOUCH_MAILTO } from '@/lib/contact';

const TYPE_PAIRS = {
  'newsreader-inter': {
    serif: 'var(--font-newsreader), Georgia, serif',
    sans: 'var(--font-inter), -apple-system, sans-serif',
    label: 'Newsreader / Inter',
  },
  'spectral-ibmplex': {
    serif: 'var(--font-spectral), Georgia, serif',
    sans: 'var(--font-ibm-plex-sans), -apple-system, sans-serif',
    label: 'Spectral / IBM Plex',
  },
  'cormorant-workSans': {
    serif: 'var(--font-cormorant-garamond), Georgia, serif',
    sans: 'var(--font-work-sans), -apple-system, sans-serif',
    label: 'Cormorant / Work Sans',
  },
  'sourceserif-figtree': {
    serif: 'var(--font-source-serif-4), Georgia, serif',
    sans: 'var(--font-figtree), -apple-system, sans-serif',
    label: 'Source Serif / Figtree',
  },
} as const;

type TypePairKey = keyof typeof TYPE_PAIRS;

interface CanderaTweakState {
  treeStyle: TreeVariant;
  typePair: TypePairKey;
  accent: string;
  showPlate: boolean;
  denseLayout: boolean;
}

const TWEAK_DEFAULTS: CanderaTweakState = {
  treeStyle: 'botanical',
  typePair: 'newsreader-inter',
  accent: '#B85A2C',
  showPlate: true,
  denseLayout: false,
};

function Header() {
  return (
    <header className="hdr">
      <a href="#top" className="wordmark">Candera</a>
      <nav aria-label="primary">
        <a href="#practice">Practice</a>
        <a href="#playbooks">Playbooks</a>
        <a href="#office-hours">Office Hours</a>
        <a href="/resources">Resources</a>
        <a href={GET_IN_TOUCH_MAILTO}>Get in touch</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <h1>AI for <em>everyone else.</em></h1>
      <p className="lede">
        We help small businesses use AI without getting burned.
        Playbooks are free. Office hours are open.
      </p>
    </section>
  );
}

function TreePanel({
  activeId,
  hoveredId,
}: {
  activeId: string | null;
  hoveredId: string | null;
}) {
  const id = activeId || hoveredId;
  const branch = TREE_BRANCHES.find((b) => b.id === id);

  if (!branch) {
    return (
      <div className="tree-panel empty" aria-live="polite">
        <div className="meta">
          <span className="eyebrow">Practice</span>
          <h3 style={{ fontStyle: 'italic', color: 'var(--ink-3)' }}>Six branches.</h3>
        </div>
        <div className="body">
          <p style={{ color: 'var(--ink-3)' }}>Click a branch.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tree-panel" aria-live="polite">
      <div className="meta">
        <span className="eyebrow">Branch · {branch.no}</span>
        <h3>{branch.name}</h3>
        <span className="meta-id">{branch.short}</span>
      </div>
      <div className="body">
        <p>{branch.description}</p>
        <ul className="samples">
          {branch.samples.map((s) => (
            <li key={s.num}>
              <span className="num">{s.num}</span>
              <span className="ttl">{s.title}</span>
              <span className="yr">{s.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TreeSection({ variant }: { variant: TreeVariant }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="tree-section" id="practice-tree">
      <div className="tree-head">
        <h2>The Tree of Knowledge</h2>
      </div>
      <div className="tree-wrap">
        <TreeOfKnowledge
          variant={variant}
          hovered={hovered}
          setHovered={setHovered}
          active={active}
          setActive={setActive}
        />
      </div>
      <TreePanel activeId={active} hoveredId={hovered} />
    </section>
  );
}

function Audiences() {
  const [active, setActive] = useState(0);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const top = visible.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b
        );
        const idx = (top.target as HTMLElement).dataset.idx;
        if (idx !== undefined) setActive(Number(idx));
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.5, 1] }
    );
    sceneRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="aud-scroll" id="who" aria-label="Built for —">
      <div className="aud-stage">
        <div className="aud-stage-inner page">
          <div className="aud-rotator" aria-live="polite">
            {AUDIENCES.map((a, i) => (
              <div
                key={a.no}
                className={`aud-card ${i === active ? 'is-on' : i < active ? 'is-past' : 'is-future'}`}
              >
                <h2 className="aud-role-big">
                  <span className="aud-iam">I am </span>
                  <em>{a.role}.</em>
                </h2>
                <p className="aud-note-big">{a.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="aud-track" aria-hidden="true">
        {AUDIENCES.map((a, i) => (
          <div
            key={a.no}
            data-idx={i}
            ref={(el) => {
              sceneRefs.current[i] = el;
            }}
            className="aud-scene"
          />
        ))}
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section className="practice" id="practice">
      <div className="section-head">
        <span className="eyebrow">§ II · Practice</span>
        <h2>What we <em>do.</em></h2>
      </div>
      <div className="practice-grid">
        {TREE_BRANCHES.map((b) => (
          <div className="item" key={b.id}>
            <span className="num">— {b.no}</span>
            <h3>{b.name}</h3>
            <p>{b.short} {b.description.split('. ').slice(0, 1).join('. ')}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Playbooks() {
  return (
    <section className="playbooks" id="playbooks">
      <div className="section-head">
        <span className="eyebrow">§ III · Playbooks</span>
        <h2>Things we keep getting asked. <em>Written down.</em></h2>
      </div>
      <div className="pb-list">
        {PLAYBOOKS.map((p) => (
          <a className="pb-row" href="#" key={p.no} style={{ borderBottom: 0 }}>
            <span className="pb-num">{p.no}</span>
            <h3>{p.title}</h3>
            <span className="pb-desc">{p.desc}</span>
            <span className="pb-yr">{p.year}</span>
            <span className="pb-arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function OfficeHours() {
  return (
    <section className="office" id="office-hours">
      <div className="office-grid">
        <div>
          <span className="eyebrow">§ IV · Office Hours</span>
          <h2 style={{ marginTop: 18 }}>Thirty minutes. <em>Free.</em></h2>
        </div>
        <div>
          <p>
            Book a call. Ask us anything about AI for your business.
            No pitch. No follow-up.
          </p>
          <a className="calendly" href="https://calendly.com/ishan710" rel="noopener">
            Book a slot — calendly.com/ishan710 →
          </a>
          <dl className="meta-block">
            <div><dt>When</dt><dd>Tuesdays & Thursdays, 2–5pm ET</dd></div>
            <div><dt>Who</dt><dd>Anyone with a real question</dd></div>
            <div><dt>How</dt><dd>Video call, no prep needed</dd></div>
            <div><dt>Cost</dt><dd>Nothing</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <span className="eyebrow">§ V · About</span>
        <h2>Who&apos;s <em>behind this.</em></h2>
      </div>
      <div className="about-grid">
        <div>
          <span className="eyebrow">The team</span>
        </div>
        <div>
          <p>
            We&apos;re a team from Palantir, Anthropic, xAI, and a few startups in between. We help
            small businesses use AI in a practical way—without paying for products they don&apos;t need.
          </p>
          <p>
            Free playbooks and office hours. Email us when you want hands-on help.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ftr" id="contact">
      <div className="ftr-mark">Candera</div>
      <div>
        <a href="/agent">What we do</a>
        <span aria-hidden="true"> · </span>
        <a href={GET_IN_TOUCH_MAILTO}>Get in touch</a>
        <span aria-hidden="true"> · </span>
        <a href="mailto:hello@candera.co">hello@candera.co</a>
      </div>
      <div className="ftr-meta" style={{ textAlign: 'right' }}>
        Candera LLC · New York · MMXXVI
      </div>
    </footer>
  );
}

function CanderaTweaks({
  tweaks,
  setTweak,
}: {
  tweaks: CanderaTweakState;
  setTweak: ReturnType<typeof useTweaks<CanderaTweakState>>[1];
}) {
  return (
    <TweaksPanel>
      <TweakSection label="Identity" />
      <TweakRadio
        label="Tree style"
        value={tweaks.treeStyle}
        options={['botanical', 'blueprint', 'minimal']}
        onChange={(v) => setTweak('treeStyle', v)}
      />
      <TweakSelect
        label="Type pairing"
        value={tweaks.typePair}
        options={(Object.keys(TYPE_PAIRS) as TypePairKey[]).map((k) => ({
          value: k,
          label: TYPE_PAIRS[k].label,
        }))}
        onChange={(v) => setTweak('typePair', v)}
      />
      <TweakColor
        label="Accent"
        value={tweaks.accent}
        options={['#B85A2C', '#1A1A18', '#3E5E3A', '#2E4A6B']}
        onChange={(v) => setTweak('accent', Array.isArray(v) ? v[0]! : v)}
      />
      <TweakSection label="Layout" />
      <TweakToggle
        label="Show plate corners"
        value={tweaks.showPlate}
        onChange={(v) => setTweak('showPlate', v)}
      />
      <TweakToggle
        label="Dense layout"
        value={tweaks.denseLayout}
        onChange={(v) => setTweak('denseLayout', v)}
      />
    </TweaksPanel>
  );
}

export default function CanderaApp() {
  const [tweaks, setTweak] = useTweaks<CanderaTweakState>(TWEAK_DEFAULTS);
  const pair = TYPE_PAIRS[tweaks.typePair];

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--serif', pair.serif);
    r.style.setProperty('--sans', pair.sans);
    r.style.setProperty('--accent', tweaks.accent);
    document.body.style.fontSize = tweaks.denseLayout ? '15px' : '16px';
  }, [tweaks, pair]);

  useEffect(() => {
    document.documentElement.classList.toggle('no-plate', !tweaks.showPlate);
  }, [tweaks.showPlate]);

  return (
    <>
      <div className="page">
        <Header />
        <Hero />
        <TreeSection variant={tweaks.treeStyle} />
        <Audiences />
        <Practice />
        <Playbooks />
        <OfficeHours />
        <About />
        <Footer />
      </div>
      <CanderaTweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}
