'use client';

import { useState, useCallback, useId } from 'react';
import styles from './Accordion.module.scss';

export interface AccordionItem {
  /** Panel heading */
  title: string;
  /** Panel content */
  content: string | React.ReactNode;
  /** Disable this panel */
  disabled?: boolean;
}

export interface AccordionProps {
  /** Array of accordion panels */
  items: AccordionItem[];
  /** Allow multiple panels open at once */
  allowMultiple?: boolean;
  /** Indices of panels open by default */
  defaultOpen?: number[];
  /** Visual variant */
  variant?: 'bordered' | 'flush' | 'separated';
  /** Additional CSS class */
  className?: string;
  /** Force a specific theme for this component */
  theme?: 'light' | 'dark';
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  variant = 'bordered',
  className = '',
  theme,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    new Set(defaultOpen)
  );
  const baseId = useId();

  const toggle = useCallback(
    (index: number) => {
      if (items[index]?.disabled) return;
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
    [allowMultiple, items]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      const enabledIndices = items
        .map((_, i) => i)
        .filter((i) => !items[i].disabled);
      const currentPos = enabledIndices.indexOf(index);

      let targetIndex: number | null = null;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          targetIndex =
            enabledIndices[(currentPos + 1) % enabledIndices.length];
          break;
        case 'ArrowUp':
          e.preventDefault();
          targetIndex =
            enabledIndices[
              (currentPos - 1 + enabledIndices.length) % enabledIndices.length
            ];
          break;
        case 'Home':
          e.preventDefault();
          targetIndex = enabledIndices[0];
          break;
        case 'End':
          e.preventDefault();
          targetIndex = enabledIndices[enabledIndices.length - 1];
          break;
      }

      if (targetIndex !== null) {
        const btn = document.getElementById(
          `${baseId}-trigger-${targetIndex}`
        );
        btn?.focus();
      }
    },
    [items, baseId]
  );

  return (
    <div
      className={`${styles.accordion} ${styles[variant]} ${className}`}
      data-theme={theme}
    >
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={index}
            className={`${styles.item} ${isOpen ? styles.open : ''} ${
              item.disabled ? styles.disabled : ''
            }`}
          >
            <h3 className={styles.heading}>
              <button
                id={triggerId}
                className={styles.trigger}
                onClick={() => toggle(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-disabled={item.disabled}
                disabled={item.disabled}
                type="button"
              >
                <span className={styles.title}>{item.title}</span>
                <span className={styles.indicator} aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={styles.panel}
              hidden={!isOpen}
            >
              <div className={styles.content}>
                {typeof item.content === 'string' ? (
                  <p>{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
