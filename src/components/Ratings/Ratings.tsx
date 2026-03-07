'use client';

import { useState, useCallback, useId } from 'react';
import styles from './Ratings.module.scss';

export interface RatingsProps {
  /** Maximum number of stars/icons */
  max?: number;
  /** Current value (controlled) */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Callback when rating changes */
  onChange?: (value: number) => void;
  /** Read-only display mode */
  readonly?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Icon type */
  icon?: 'star' | 'heart' | 'circle';
  /** Show numeric label */
  showLabel?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Force a specific theme for this component */
  theme?: 'light' | 'dark';
}

const icons = {
  star: {
    filled: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    empty: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  heart: {
    filled: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    empty: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  circle: {
    filled: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    empty: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
};

export function Ratings({
  max = 5,
  value: controlledValue,
  defaultValue = 0,
  onChange,
  readonly = false,
  size = 'md',
  icon = 'star',
  showLabel = false,
  className = '',
  theme,
}: RatingsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState(0);
  const componentId = useId();

  const currentValue =
    controlledValue !== undefined ? controlledValue : internalValue;

  const handleClick = useCallback(
    (rating: number) => {
      if (readonly) return;
      setInternalValue(rating);
      onChange?.(rating);
    },
    [readonly, onChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, rating: number) => {
      if (readonly) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        const next = Math.min(rating + 1, max);
        handleClick(next);
        const nextBtn = document.getElementById(
          `${componentId}-star-${next}`
        );
        nextBtn?.focus();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        const prev = Math.max(rating - 1, 1);
        handleClick(prev);
        const prevBtn = document.getElementById(
          `${componentId}-star-${prev}`
        );
        prevBtn?.focus();
      }
    },
    [readonly, max, handleClick, componentId]
  );

  const displayValue = hoverValue || currentValue;

  return (
    <div
      className={`${styles.ratings} ${styles[size]} ${
        readonly ? styles.readonly : ''
      } ${className}`}
      role="group"
      aria-label={`Rating: ${currentValue} out of ${max}`}
      data-component-theme={theme}
    >
      <div className={styles.stars} role="radiogroup">
        {Array.from({ length: max }, (_, i) => {
          const rating = i + 1;
          const isFilled = rating <= displayValue;

          return (
            <button
              key={rating}
              id={`${componentId}-star-${rating}`}
              type="button"
              className={`${styles.starBtn} ${isFilled ? styles.filled : ''}`}
              onClick={() => handleClick(rating)}
              onMouseEnter={() => !readonly && setHoverValue(rating)}
              onMouseLeave={() => !readonly && setHoverValue(0)}
              onKeyDown={(e) => handleKeyDown(e, rating)}
              role="radio"
              aria-checked={rating === currentValue}
              aria-label={`${rating} ${icon}${rating !== 1 ? 's' : ''}`}
              tabIndex={rating === currentValue || (currentValue === 0 && rating === 1) ? 0 : -1}
              disabled={readonly}
            >
              {isFilled ? icons[icon].filled : icons[icon].empty}
            </button>
          );
        })}
      </div>
      {showLabel && (
        <span className={styles.label}>
          {currentValue} / {max}
        </span>
      )}
    </div>
  );
}

export default Ratings;
