'use client';

import { useState, useCallback, useId } from 'react';
import styles from './FAQ.module.scss';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  /** Array of question/answer pairs */
  items: FAQItem[];
  /** Allow multiple items to be open simultaneously */
  allowMultiple?: boolean;
  /** Indices of items open by default */
  defaultOpen?: number[];
  /** Additional CSS class */
  className?: string;
  /** Variant style */
  variant?: 'bordered' | 'flush' | 'card';
  /** Force a specific theme for this component */
  theme?: 'light' | 'dark';
}

export function FAQ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = '',
  variant = 'bordered',
  theme,
}: FAQProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    new Set(defaultOpen)
  );
  const baseId = useId();

  const toggle = useCallback(
    (index: number) => {
      setOpenIndices((prev) => {
        const next = new Set(allowMultiple ? prev : []);
        if (prev.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        return next;
      });
    },
    [allowMultiple]
  );

  return (
    <div
      className={`${styles.faq} ${styles[variant]} ${className}`}
      role="list"
      data-component-theme={theme}
    >
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);
        const headingId = `${baseId}-heading-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={index}
            className={`${styles.item} ${isOpen ? styles.open : ''}`}
            role="listitem"
          >
            <button
              id={headingId}
              className={styles.trigger}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              type="button"
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.icon} aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={styles.panel}
            >
              <div className={styles.answer} aria-hidden={!isOpen}>
                <div>{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
