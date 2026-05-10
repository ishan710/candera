'use client';

import { TREE_BRANCHES, TREE_ROOTS, TRUNK_MAIN, TRUNK_HATCH_LEFT, TRUNK_HATCH_RIGHT } from './data';

const TREE_W = 1200;
const TREE_H = 800;

function leafPath(cx, cy, angleDeg, length, plumpness = 1) {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad), sin = Math.sin(rad);
  const tipX = cx + length * cos;
  const tipY = cy + length * sin;
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

function getTreeStyle(variant) {
  switch (variant) {
    case 'blueprint':
      return { showHatching: false, showGround: true, leafLengthMult: 1, trunkStrokeBase: 1.5, branchStrokeBase: 1, leafStrokeBase: 0.9 };
    case 'minimal':
      return { showHatching: false, showGround: false, leafLengthMult: 0.85, trunkStrokeBase: 2, branchStrokeBase: 1.1, leafStrokeBase: 1 };
    case 'botanical':
    default:
      return { showHatching: true, showGround: true, leafLengthMult: 1, trunkStrokeBase: 2.4, branchStrokeBase: 1.2, leafStrokeBase: 1.05 };
  }
}

export function TreeOfKnowledge({ active, setActive, hovered, setHovered, variant = 'botanical' }) {
  const style = getTreeStyle(variant);
  const isInteracting = hovered != null || active != null;

  const onKeyDown = (e, branchId, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActive(branchId);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = TREE_BRANCHES[(idx + 1) % TREE_BRANCHES.length];
      document.getElementById(`branch-${next.id}`)?.focus();
      setHovered(next.id);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = TREE_BRANCHES[(idx - 1 + TREE_BRANCHES.length) % TREE_BRANCHES.length];
      document.getElementById(`branch-${prev.id}`)?.focus();
      setHovered(prev.id);
    } else if (e.key === 'Escape') {
      setActive(null);
      setHovered(null);
    }
  };

  const activeOrHover = active || hovered;

  return (
    <svg
      className={`tree-svg ${isInteracting ? 'has-hover' : ''}`}
      viewBox={`0 0 ${TREE_W} ${TREE_H}`}
      role="img"
      aria-label="Candera Tree of Knowledge"
      preserveAspectRatio="xMidYMid meet"
    >
      {style.showGround && (
        <line x1="40" y1="660" x2={TREE_W - 40} y2="660" className="ground" />
      )}

      <g className="roots">
        {TREE_ROOTS.map((r) => (
          <g key={r.id}>
            <path d={r.path} className="ink-line" strokeWidth={style.branchStrokeBase * 1.2} />
            {r.tendrils.map((t, i) => (
              <path key={i} d={t} className="ink-line" strokeWidth={style.branchStrokeBase * 0.7} opacity="0.85" />
            ))}
            <text x={r.pos.x} y={r.pos.y} textAnchor={r.pos.anchor} className="root-label">
              {r.label}
            </text>
          </g>
        ))}
      </g>

      <g className="trunk">
        <path d={TRUNK_MAIN} className="ink-line" strokeWidth={style.trunkStrokeBase} />
        {style.showHatching && (
          <g opacity="0.55">
            {TRUNK_HATCH_LEFT.map((d, i) => (
              <path key={'hl' + i} d={d} className="ink-line" strokeWidth={0.7} />
            ))}
            {TRUNK_HATCH_RIGHT.map((d, i) => (
              <path key={'hr' + i} d={d} className="ink-line" strokeWidth={0.7} />
            ))}
          </g>
        )}
      </g>

      <g className="branches">
        {TREE_BRANCHES.map((b, idx) => {
          const isActive = activeOrHover === b.id;
          return (
            <g
              key={b.id}
              id={`branch-${b.id}`}
              className={`branch-group ${isActive ? 'is-active' : ''}`}
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
              <path d={b.path} fill="none" stroke="transparent" strokeWidth="36" style={{ pointerEvents: 'stroke' }} />
              <path d={b.path} className="ink-line" strokeWidth={style.branchStrokeBase} />
              {b.twigs.map((t, i) => (
                <path key={i} d={t} className="ink-line" strokeWidth={style.branchStrokeBase * 0.65} />
              ))}
              {b.leaves.map(([cx, cy, ang, len, plump], i) => (
                <path key={i} d={leafPath(cx, cy, ang, len * style.leafLengthMult, plump)} className="leaf" strokeWidth={style.leafStrokeBase} />
              ))}
              <text x={b.label.x} y={b.label.y} textAnchor={b.label.anchor} className="label-text">
                {b.name}
              </text>
              <text x={b.label.x} y={b.label.y + 14} textAnchor={b.label.anchor} className="label-id">
                BRANCH · {b.no}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
