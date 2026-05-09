// candera-app.jsx
// Main app: header, hero, tree section, practice grid, playbooks, office hours, about, footer.
// Plus Tweaks panel.

const { useState, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "treeStyle": "botanical",
  "typePair": "newsreader-inter",
  "accent": "#B85A2C",
  "showPlate": true,
  "denseLayout": false
}/*EDITMODE-END*/;

const TYPE_PAIRS = {
  "newsreader-inter": {
    serif: '"Newsreader", "Source Serif 4", Georgia, serif',
    sans: '"Inter", -apple-system, sans-serif',
    label: "Newsreader / Inter"
  },
  "spectral-ibmplex": {
    serif: '"Spectral", "Source Serif 4", Georgia, serif',
    sans: '"IBM Plex Sans", -apple-system, sans-serif',
    label: "Spectral / IBM Plex"
  },
  "cormorant-workSans": {
    serif: '"Cormorant Garamond", Georgia, serif',
    sans: '"Work Sans", -apple-system, sans-serif',
    label: "Cormorant / Work Sans"
  },
  "sourceserif-figtree": {
    serif: '"Source Serif 4", Georgia, serif',
    sans: '"Figtree", -apple-system, sans-serif',
    label: "Source Serif / Figtree"
  }
};

const AUDIENCES = [
  { no: "01", role: "a coffee shop owner",   note: "Menu costing, reviews, scheduling — without losing the texture of the place." },
  { no: "02", role: "a teacher",             note: "Lesson planning, differentiation, parent communication — quietly." },
  { no: "03", role: "an athlete",            note: "NIL deals, recovery, brand — the business of you, after the season." },
  { no: "04", role: "an actor",              note: "Auditions, self-tapes, agents, the 1099 paperwork nobody teaches." },
  { no: "05", role: "a founder",             note: "Hiring, fundraising, GTM, and everything else that wasn’t in the deck." },
  { no: "06", role: "a real estate agent",   note: "Listings, lead nurturing, market analysis without the slop." },
  { no: "07", role: "a parent",              note: "Schedules, school communications, the unending research project." },
  { no: "08", role: "a freelancer",          note: "Proposals, deliverables, the IP fine print everyone waves at." },
  { no: "09", role: "a job seeker",          note: "Resumes, interview prep, the salary conversation no one rehearses." },
];

const PLAYBOOKS = [
  {
    no: "01",
    title: "Choosing a model in 2026",
    desc: "A short, opinionated tour of the four families worth your attention. What each is good at, what each costs you, and when none of them are the answer.",
    year: "April 2026"
  },
  {
    no: "02",
    title: "The hour-long eval",
    desc: "Most small-business AI failures are eval failures. A scrappy method for catching them before customers do.",
    year: "March 2026"
  },
  {
    no: "03",
    title: "RAG without the regret",
    desc: "Retrieval is the easy part. Knowing what to retrieve is harder. Notes from twelve real implementations.",
    year: "January 2026"
  },
  {
    no: "04",
    title: "When the answer is not a chatbot",
    desc: "A field guide to AI features that don't talk back — quietly the most useful kind for most small businesses.",
    year: "November 2025"
  },
  {
    no: "05",
    title: "First-principles prompting",
    desc: "Why most prompt advice ages badly, and a small set of habits that don't.",
    year: "September 2025"
  }
];

function Header() {
  return (
    <header className="hdr">
      <a href="#top" className="wordmark">Candera</a>
      <nav aria-label="primary">
        <a href="#practice">Practice</a>
        <a href="#playbooks">Playbooks</a>
        <a href="#office-hours">Office Hours</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <span className="eyebrow">Candera · Applied AI Advisory · Est. 2026</span>
      <h1>Applied AI for <em>everyone else.</em></h1>
      <p className="lede">
        Candera is an advisory firm helping small businesses use artificial intelligence well.
        We work in public — our playbooks are free, our office hours are open.
      </p>
    </section>
  );
}

function TreePanel({ activeId, hoveredId, onClose }) {
  const id = activeId || hoveredId;
  const branch = TREE_BRANCHES.find((b) => b.id === id);

  if (!branch) {
    return (
      <div className="tree-panel empty" aria-live="polite">
        <div className="meta">
          <span className="eyebrow">Practice</span>
          <h3 style={{ fontStyle: "italic", color: "var(--ink-3)" }}>
            Six branches.
          </h3>
        </div>
        <div className="body">
          <p style={{ color: "var(--ink-3)" }}>
            The trunk is the firm. The roots are how we work — clarity, accessibility,
            applied rigor. The branches are the work itself.
          </p>
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

function TreeSection({ variant }) {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

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
      <TreePanel activeId={active} hoveredId={hovered} onClose={() => setActive(null)} />
    </section>
  );
}

function Audiences() {
  const [active, setActive] = useState(0);
  const sceneRefs = React.useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const top = visible.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b
        );
        setActive(Number(top.target.dataset.idx));
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
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
                className={`aud-card ${i === active ? "is-on" : i < active ? "is-past" : "is-future"}`}
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
            ref={(el) => (sceneRefs.current[i] = el)}
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
        <h2>Six things we do, and a few we <em>politely don't.</em></h2>
      </div>
      <div className="practice-grid">
        {TREE_BRANCHES.map((b) => (
          <div className="item" key={b.id}>
            <span className="num">— {b.no}</span>
            <h3>{b.name}</h3>
            <p>{b.short} {b.description.split(". ").slice(0, 1).join(". ")}.</p>
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
        <span className="eyebrow">§ III · Recent Playbooks</span>
        <h2>Field notes, written down so we don't have to <em>say them twice.</em></h2>
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
          <h2 style={{ marginTop: 18 }}>Free, and open.</h2>
        </div>
        <div>
          <p>
            Office Hours are free and open. Anyone running a small business can book
            thirty minutes to ask anything about AI. No pitch, no follow-up sales call.
          </p>
          <a className="calendly" href="https://calendly.com/candera" rel="noopener">
            Book thirty minutes — calendly.com/candera →
          </a>
          <dl className="meta-block">
            <div>
              <dt>When</dt>
              <dd>Tuesdays and Thursdays, 2–5pm ET</dd>
            </div>
            <div>
              <dt>Who</dt>
              <dd>Anyone with a real business and a real question</dd>
            </div>
            <div>
              <dt>How</dt>
              <dd>Video call, no preparation needed</dd>
            </div>
            <div>
              <dt>Cost</dt>
              <dd>None, now or later</dd>
            </div>
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
        <h2>A short note on the <em>through-line.</em></h2>
      </div>
      <div className="about-grid">
        <div>
          <span className="eyebrow">Founded by</span>
        </div>
        <div>
          <p>
            Candera was founded by an applied AI engineer who has spent ten years making complicated
            systems usable by people who didn't build them. Previously at Palantir, where the work was
            getting messy enterprise data into the hands of analysts who needed answers by Friday. Now
            building AI infrastructure at WithCoverage, and before all of that, writing software for
            rural irrigation districts in central California — water schedules, sensor networks, the
            unglamorous middle layer between a real-world problem and a working tool.
          </p>
          <p>
            The through-line is the same in every chapter: take a complex system, make it accessible
            to the people it's supposed to serve, and try not to make a fuss about it. Candera is
            that work, pointed at small businesses and AI.
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
        <a href="mailto:hello@candera.co">hello@candera.co</a>
      </div>
      <div className="ftr-meta" style={{ textAlign: "right" }}>
        Candera LLC · New York · MMXXVI
      </div>
    </footer>
  );
}

// ── Tweaks ──────────────────────────────────────────────────────────
function CanderaTweaks({ tweaks, setTweak }) {
  const pair = TYPE_PAIRS[tweaks.typePair];
  return (
    <TweaksPanel>
      <TweakSection label="Identity" />
      <TweakRadio
        label="Tree style"
        value={tweaks.treeStyle}
        options={["botanical", "blueprint", "minimal"]}
        onChange={(v) => setTweak("treeStyle", v)}
      />
      <TweakSelect
        label="Type pairing"
        value={tweaks.typePair}
        options={Object.keys(TYPE_PAIRS)}
        renderOption={(k) => TYPE_PAIRS[k].label}
        onChange={(v) => setTweak("typePair", v)}
      />
      <TweakColor
        label="Accent"
        value={tweaks.accent}
        options={["#B85A2C", "#1A1A18", "#3E5E3A", "#2E4A6B"]}
        onChange={(v) => setTweak("accent", v)}
      />
      <TweakSection label="Layout" />
      <TweakToggle
        label="Show plate corners"
        value={tweaks.showPlate}
        onChange={(v) => setTweak("showPlate", v)}
      />
      <TweakToggle
        label="Dense layout"
        value={tweaks.denseLayout}
        onChange={(v) => setTweak("denseLayout", v)}
      />
    </TweaksPanel>
  );
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const pair = TYPE_PAIRS[tweaks.typePair] || TYPE_PAIRS["newsreader-inter"];

  // Apply CSS vars from tweaks
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--serif", pair.serif);
    r.style.setProperty("--sans", pair.sans);
    r.style.setProperty("--accent", tweaks.accent);
    document.body.style.fontSize = tweaks.denseLayout ? "15px" : "16px";
  }, [tweaks, pair]);

  // Plate visibility via class
  useEffect(() => {
    document.documentElement.classList.toggle("no-plate", !tweaks.showPlate);
  }, [tweaks.showPlate]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
