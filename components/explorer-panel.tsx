'use client';

import { useState } from 'react';
import { EXPLORER_ITEMS } from '@/lib/home-content';
import { FadeUp } from '@/components/motion-ui';

export function ExplorerPanel() {
  const [active, setActive] = useState(EXPLORER_ITEMS[0].id);
  const item = EXPLORER_ITEMS.find((q) => q.id === active) ?? EXPLORER_ITEMS[0];
  const index = EXPLORER_ITEMS.findIndex((q) => q.id === active);

  return (
    <section className="dd-section dd-explorer" id="how">
      <FadeUp onView>
        <div className="dd-section-intro dd-section-intro--wide">
          <h2 className="dd-h2">See how we get it done for you</h2>
          <p className="dd-sub">
            Explore typical AI questions and how we resolve them.
          </p>
        </div>
      </FadeUp>

      <div className="dd-explorer-layout">
        <FadeUp onView className="dd-explorer-nav-wrap">
          <ul className="dd-explorer-nav" role="list">
            {EXPLORER_ITEMS.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  className={`dd-explorer-item${q.id === active ? ' is-active' : ''}`}
                  onClick={() => setActive(q.id)}
                  aria-current={q.id === active ? 'true' : undefined}
                >
                  {q.question}
                </button>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp onView delay={0.08} className="dd-explorer-panel-wrap">
          <div className="dd-explorer-panel">
            <div className="dd-explorer-panel-head">
              <span className="dd-tag">{item.category}</span>
              <span className="dd-panel-count">
                {index + 1}/{EXPLORER_ITEMS.length}
              </span>
            </div>
            <h3>{item.question}</h3>
            <p className="dd-explorer-answer">{item.answer}</p>
            <p className="dd-explorer-detail">{item.detail}</p>
            <div className="dd-explorer-visual" aria-hidden="true">
              <div className="dd-explorer-bars">
                <span style={{ width: '72%' }} />
                <span style={{ width: '48%' }} />
                <span style={{ width: '86%' }} />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
