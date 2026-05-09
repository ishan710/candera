// candera-tree.jsx
// The Tree of Knowledge. SVG only, ink lines, no fills.
// Linnaean-illustration energy: trunk + 6 branches + 3 named roots,
// each branch with twigs + lance-leaves. Hover/click/keyboard interactive.

const TREE_W = 1200;
const TREE_H = 800;

// ── Tree geometry ──────────────────────────────────────────────────
// Each branch: id, name, description, samples, main path, twig paths,
// leaf positions [cx, cy, angle, length], label position.
const TREE_BRANCHES = [
  {
    id: "strategy",
    no: "I",
    name: "AI Strategy",
    short: "Where AI fits, where it doesn't.",
    description:
      "Two days with your team. We leave with a clear plan — what to build, what to buy, what to ignore. Usually the answer is smaller than you think.",
    samples: [
      { num: "01", title: "Two-day strategy intensive", year: "—" },
      { num: "02", title: "Quarterly roadmap reviews", year: "—" },
      { num: "03", title: "Vendor & model selection memos", year: "—" },
    ],
    path:
      "M 605 245 C 660 218 740 195 830 178 C 895 165 945 140 985 108",
    twigs: [
      "M 770 188 C 790 170 815 158 838 140",
      "M 870 165 C 882 150 895 138 905 118",
    ],
    leaves: [
      [820, 178, -34, 16, 0.9],
      [848, 162, -38, 18, 1.1],
      [890, 135, -50, 16, 1.0],
      [938, 116, -55, 17, 0.9],
      [978, 110, -65, 14, 1.0],
      [800, 175, 25, 13, 0.8],
      [728, 200, 18, 12, 0.7],
    ],
    label: { x: 1000, y: 92, anchor: "start" },
  },
  {
    id: "education",
    no: "II",
    name: "Education",
    short: "Lectures, workshops, free reading.",
    description:
      "Workshops for teams who want to understand how this actually works. Prompting, retrieval, evals — no hype, no slides. Free for libraries and public schools.",
    samples: [
      { num: "01", title: "Half-day team workshops", year: "—" },
      { num: "02", title: "Reading list & syllabus", year: "—" },
      { num: "03", title: "Open seminar, monthly", year: "—" },
    ],
    path:
      "M 595 270 C 540 248 440 225 340 205 C 285 192 245 162 210 130",
    twigs: [
      "M 405 218 C 388 200 372 188 358 168",
      "M 290 178 C 278 162 268 148 258 130",
    ],
    leaves: [
      [365, 200, 200, 16, 0.9],
      [320, 188, 210, 17, 1.1],
      [275, 168, 220, 16, 1.0],
      [230, 140, 230, 17, 0.9],
      [205, 122, 240, 13, 0.85],
      [395, 215, 165, 13, 0.8],
      [470, 224, 162, 12, 0.7],
    ],
    label: { x: 195, y: 112, anchor: "end" },
  },
  {
    id: "custom-dev",
    no: "III",
    name: "Custom Development",
    short: "We build the thing.",
    description:
      "When nothing off the shelf fits, we build it. Short engagements, real code, good docs. Internal tools, retrieval pipelines, evals. We ship and we leave.",
    samples: [
      { num: "01", title: "Internal tool engagements", year: "—" },
      { num: "02", title: "Retrieval & eval pipelines", year: "—" },
      { num: "03", title: "Light-touch maintenance", year: "—" },
    ],
    path:
      "M 605 350 C 670 348 770 332 850 320 C 935 308 1000 298 1055 282",
    twigs: [
      "M 800 326 C 815 312 830 300 845 282",
      "M 935 308 C 950 295 962 285 968 270",
    ],
    leaves: [
      [820, 322, -26, 16, 1.0],
      [870, 314, -32, 17, 1.1],
      [930, 305, -38, 16, 1.0],
      [988, 296, -44, 17, 0.9],
      [1042, 286, -50, 14, 0.85],
      [810, 328, 22, 13, 0.8],
      [752, 340, 18, 12, 0.7],
    ],
    label: { x: 1068, y: 268, anchor: "start" },
  },
  {
    id: "playbooks",
    no: "IV",
    name: "Playbooks",
    short: "Free, working, opinionated.",
    description:
      "The questions we keep getting asked, written down properly. How to pick a model. How to run an eval. How to write a prompt that holds up. Free to read, free to use.",
    samples: [
      { num: "01", title: "Choosing a model in 2026", year: "2026" },
      { num: "02", title: "The hour-long eval", year: "2026" },
      { num: "03", title: "RAG without the regret", year: "2025" },
    ],
    path:
      "M 595 370 C 530 368 430 358 350 350 C 270 340 200 322 145 305",
    twigs: [
      "M 380 354 C 365 342 350 332 332 320",
      "M 240 332 C 226 320 210 312 198 295",
    ],
    leaves: [
      [380, 355, 198, 16, 1.0],
      [325, 348, 205, 17, 1.1],
      [268, 338, 212, 16, 1.0],
      [212, 326, 218, 17, 0.9],
      [158, 308, 224, 14, 0.85],
      [395, 360, 158, 13, 0.8],
      [462, 363, 156, 12, 0.7],
    ],
    label: { x: 132, y: 290, anchor: "end" },
  },
  {
    id: "design",
    no: "V",
    name: "Design Review",
    short: "We read your AI features carefully.",
    description:
      "We read the AI parts of your product and tell you what's wrong. Where the model is doing too much, where users won't trust it, where it'll break. You get a memo. We don't redesign your app.",
    samples: [
      { num: "01", title: "Single-feature design review", year: "—" },
      { num: "02", title: "End-to-end product audit", year: "—" },
      { num: "03", title: "Trust & disclosure pass", year: "—" },
    ],
    path:
      "M 605 440 C 670 460 770 470 855 472 C 925 472 975 478 1015 484",
    twigs: [
      "M 780 472 C 800 488 818 498 830 512",
      "M 920 472 C 940 488 955 502 962 520",
    ],
    leaves: [
      [810, 480, 30, 16, 1.0],
      [860, 478, 36, 17, 1.1],
      [918, 478, 42, 16, 1.0],
      [970, 482, 48, 17, 0.9],
      [1010, 488, 52, 14, 0.85],
      [800, 466, -22, 13, 0.8],
      [738, 462, -18, 12, 0.7],
    ],
    label: { x: 1028, y: 504, anchor: "start" },
  },
  {
    id: "talent",
    no: "VI",
    name: "Talent & Hiring",
    short: "The first AI hire is the hardest.",
    description:
      "The first AI hire is hard to get right. We help you find them, interview them, and set them up to actually succeed. We've done a lot of these interviews. We know what to ask.",
    samples: [
      { num: "01", title: "Interview loop design", year: "—" },
      { num: "02", title: "Candidate technical screens", year: "—" },
      { num: "03", title: "First-90-days onboarding plan", year: "—" },
    ],
    path:
      "M 595 460 C 530 480 430 492 340 490 C 275 488 220 488 175 488",
    twigs: [
      "M 410 491 C 392 504 378 514 365 528",
      "M 270 489 C 258 504 248 516 240 530",
    ],
    leaves: [
      [395, 498, 158, 16, 1.0],
      [340, 498, 152, 17, 1.1],
      [285, 498, 148, 16, 1.0],
      [230, 498, 145, 17, 0.9],
      [185, 498, 142, 14, 0.85],
      [385, 482, -28, 13, 0.8],
      [448, 488, -22, 12, 0.7],
    ],
    label: { x: 162, y: 510, anchor: "end" },
  },
];

// ── Roots ──────────────────────────────────────────────────────────
const TREE_ROOTS = [
  {
    id: "clarity",
    label: "CLARITY",
    path: "M 600 660 C 580 695 510 718 410 728 C 320 736 250 748 180 770",
    pos: { x: 60, y: 778, anchor: "start" },
    tendrils: [
      "M 460 723 C 450 740 444 752 442 768",
      "M 350 732 C 342 748 336 758 332 772",
    ],
  },
  {
    id: "accessibility",
    label: "ACCESSIBILITY",
    path: "M 600 660 C 600 700 598 730 596 778",
    pos: { x: 600, y: 798, anchor: "middle" },
    tendrils: [
      "M 596 720 C 580 738 568 752 558 768",
      "M 596 720 C 612 738 624 752 634 768",
    ],
  },
  {
    id: "applied-rigor",
    label: "APPLIED RIGOR",
    path: "M 600 660 C 620 695 690 718 790 728 C 880 736 950 748 1020 770",
    pos: { x: 1140, y: 778, anchor: "end" },
    tendrils: [
      "M 740 723 C 750 740 756 752 758 768",
      "M 850 732 C 858 748 864 758 868 772",
    ],
  },
];

// Trunk: sinuous main, plus parallel hatching strokes for shading
const TRUNK_MAIN =
  "M 600 660 C 590 600 615 540 600 478 C 588 418 612 360 598 290 C 590 232 608 200 600 168";
const TRUNK_HATCH_LEFT = [
  "M 588 612 C 580 580 588 552 583 522",
  "M 605 470 C 598 444 604 416 600 392",
  "M 590 360 C 584 332 588 308 586 282",
  "M 604 240 C 600 220 604 200 602 184",
];
const TRUNK_HATCH_RIGHT = [
  "M 614 600 C 620 568 614 540 619 510",
  "M 596 458 C 604 432 598 410 602 388",
  "M 612 350 C 618 322 612 300 614 274",
];

// ── Helpers ────────────────────────────────────────────────────────
function leafPath(cx, cy, angleDeg, length, plumpness = 1) {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad), sin = Math.sin(rad);
  const tipX = cx + length * cos;
  const tipY = cy + length * sin;
  // perpendicular vector
  const pX = -sin, pY = cos;
  const half = length * 0.32 * plumpness;
  const c1x = cx + length * 0.3 * cos + half * pX;
  const c1y = cy + length * 0.3 * sin + half * pY;
  const c2x = cx + length * 0.7 * cos + half * pX;
  const c2y = cy + length * 0.7 * sin + half * pY;
  const c3x = cx + length * 0.7 * cos - half * pX;
  const c3y = cy + length * 0.7 * sin - half * pY;
  const c4x = cx + length * 0.3 * cos - half * pX;
  const c4y = cy + length * 0.3 * sin - half * pY;
  return `M ${cx} ${cy} C ${c1x} ${c1y} ${c2x} ${c2y} ${tipX} ${tipY} C ${c3x} ${c3y} ${c4x} ${c4y} ${cx} ${cy}`;
}

// ── Leaf style variants for tweaks ────────────────────────────────
function getTreeStyle(variant) {
  switch (variant) {
    case "blueprint":
      return {
        showHatching: false,
        showGround: true,
        leafLengthMult: 1,
        trunkStrokeBase: 1.5,
        branchStrokeBase: 1,
        leafStrokeBase: 0.9,
        plate: true,
      };
    case "minimal":
      return {
        showHatching: false,
        showGround: false,
        leafLengthMult: 0.85,
        trunkStrokeBase: 2,
        branchStrokeBase: 1.1,
        leafStrokeBase: 1,
        plate: false,
      };
    case "botanical":
    default:
      return {
        showHatching: true,
        showGround: true,
        leafLengthMult: 1,
        trunkStrokeBase: 2.4,
        branchStrokeBase: 1.2,
        leafStrokeBase: 1.05,
        plate: true,
      };
  }
}

function TreeOfKnowledge({ active, setActive, hovered, setHovered, variant = "botanical" }) {
  const style = getTreeStyle(variant);
  const isInteracting = hovered != null || active != null;

  const onKeyDown = (e, branchId, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(branchId);
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = TREE_BRANCHES[(idx + 1) % TREE_BRANCHES.length];
      document.getElementById(`branch-${next.id}`)?.focus();
      setHovered(next.id);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = TREE_BRANCHES[(idx - 1 + TREE_BRANCHES.length) % TREE_BRANCHES.length];
      document.getElementById(`branch-${prev.id}`)?.focus();
      setHovered(prev.id);
    } else if (e.key === "Escape") {
      setActive(null);
      setHovered(null);
    }
  };

  const activeOrHover = active || hovered;

  return (
    <svg
      className={`tree-svg ${isInteracting ? "has-hover" : ""}`}
      viewBox={`0 0 ${TREE_W} ${TREE_H}`}
      role="img"
      aria-label="Candera Tree of Knowledge"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Plate chrome removed for production look */}

      {/* Ground line */}
      {style.showGround && (
        <line x1="40" y1="660" x2={TREE_W - 40} y2="660" className="ground" />
      )}

      {/* Roots */}
      <g className="roots">
        {TREE_ROOTS.map((r) => (
          <g key={r.id}>
            <path d={r.path} className="ink-line" strokeWidth={style.branchStrokeBase * 1.2} />
            {r.tendrils.map((t, i) => (
              <path key={i} d={t} className="ink-line" strokeWidth={style.branchStrokeBase * 0.7} opacity="0.85" />
            ))}
            <text
              x={r.pos.x}
              y={r.pos.y}
              textAnchor={r.pos.anchor}
              className="root-label"
            >
              {r.label}
            </text>
          </g>
        ))}
      </g>

      {/* Trunk */}
      <g className="trunk">
        <path d={TRUNK_MAIN} className="ink-line" strokeWidth={style.trunkStrokeBase} />
        {style.showHatching && (
          <g opacity="0.55">
            {TRUNK_HATCH_LEFT.map((d, i) => (
              <path key={"hl" + i} d={d} className="ink-line" strokeWidth={0.7} />
            ))}
            {TRUNK_HATCH_RIGHT.map((d, i) => (
              <path key={"hr" + i} d={d} className="ink-line" strokeWidth={0.7} />
            ))}
          </g>
        )}
      </g>

      {/* Branches */}
      <g className="branches">
        {TREE_BRANCHES.map((b, idx) => {
          const isActive = activeOrHover === b.id;
          return (
            <g
              key={b.id}
              id={`branch-${b.id}`}
              className={`branch-group ${isActive ? "is-active" : ""}`}
              tabIndex={0}
              role="button"
              aria-label={`${b.name} branch. ${b.short}`}
              aria-pressed={active === b.id}
              onMouseEnter={() => setHovered(b.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive(active === b.id ? null : b.id)}
              onFocus={() => setHovered(b.id)}
              onBlur={() => setHovered(null)}
              onKeyDown={(e) => onKeyDown(e, b.id, idx)}
            >
              {/* Wider invisible hit region */}
              <path
                d={b.path}
                fill="none"
                stroke="transparent"
                strokeWidth="36"
                style={{ pointerEvents: "stroke" }}
              />
              {/* Main branch line */}
              <path d={b.path} className="ink-line" strokeWidth={style.branchStrokeBase} />
              {/* Twigs */}
              {b.twigs.map((t, i) => (
                <path key={i} d={t} className="ink-line" strokeWidth={style.branchStrokeBase * 0.65} />
              ))}
              {/* Leaves */}
              {b.leaves.map(([cx, cy, ang, len, plump], i) => (
                <path
                  key={i}
                  d={leafPath(cx, cy, ang, len * style.leafLengthMult, plump)}
                  className="leaf"
                  strokeWidth={style.leafStrokeBase}
                />
              ))}
              {/* Label */}
              <text
                x={b.label.x}
                y={b.label.y}
                textAnchor={b.label.anchor}
                className="label-text"
              >
                {b.name}
              </text>
              <text
                x={b.label.x}
                y={b.label.y + 14}
                textAnchor={b.label.anchor}
                className="label-id"
              >
                BRANCH · {b.no}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

// Export to window for cross-file access
Object.assign(window, { TreeOfKnowledge, TREE_BRANCHES });
