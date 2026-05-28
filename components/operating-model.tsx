'use client';

import { useState } from 'react';
import { OPERATING_MODEL } from '@/lib/home-content';
import { FadeUp } from '@/components/motion-ui';

export function OperatingModel() {
  const [active, setActive] = useState(OPERATING_MODEL[0].id);
  const step = OPERATING_MODEL.find((s) => s.id === active) ?? OPERATING_MODEL[0];
  const index = OPERATING_MODEL.findIndex((s) => s.id === active);

  return (
    <section className="dd-section dd-model" id="method">
      <FadeUp onView>
        <div className="dd-section-intro">
          <h2 className="dd-h2">Operating model</h2>
        </div>
      </FadeUp>

      <FadeUp onView delay={0.06}>
        <div className="dd-model-tabs" role="tablist" aria-label="Operating model">
          {OPERATING_MODEL.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={s.id === active}
              className={`dd-model-tab${s.id === active ? ' is-active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </FadeUp>

      <FadeUp onView delay={0.1}>
        <div className="dd-model-panel" role="tabpanel">
          <div className="dd-model-copy">
            <span className="dd-step-count">
              {String(index + 1).padStart(2, '0')} / {String(OPERATING_MODEL.length).padStart(2, '0')}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
          <div className="dd-model-visual" aria-hidden="true">
            <div className="dd-mock-ui">
              <div className="dd-mock-bar" />
              <div className="dd-mock-lines">
                <span />
                <span />
                <span className="short" />
              </div>
              <div className="dd-mock-chip-row">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
