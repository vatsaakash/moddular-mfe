'use client';

import { useEffect, useId, useState } from 'react';
import styles from './Toast.module.scss';

export interface ToastProps {
  /** Main toast body content */
  message: string | React.ReactNode;
  /** Optional heading */
  title?: string;
  /** Semantic visual variant */
  variant?: 'success' | 'error' | 'info' | 'warning';
  /** Auto-dismiss time in milliseconds (0 disables auto-dismiss) */
  duration?: number;
  /** Show close button */
  showClose?: boolean;
  /** Optional callback when toast is dismissed */
  onClose?: () => void;
  /** Optional action label */
  actionLabel?: string;
  /** Optional action callback */
  onAction?: () => void;
  /** Show leading status icon */
  showIcon?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Force a specific theme for this component */
  theme?: 'light' | 'dark';
}

const icons = {
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3l-8.47-14.14a2 2 0 0 0-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  ),
};

export function Toast({
  message,
  title,
  variant = 'info',
  duration = 5000,
  showClose = true,
  onClose,
  actionLabel,
  onAction,
  showIcon = true,
  className = '',
  theme,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const titleId = useId();
  const messageId = useId();

  useEffect(() => {
    if (!isVisible || duration <= 0) return;

    const timer = window.setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, isVisible, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const role = variant === 'error' || variant === 'warning' ? 'alert' : 'status';

  return (
    <section
      className={`${styles.toast} ${styles[variant]} ${className}`}
      role={role}
      aria-live={role === 'alert' ? 'assertive' : 'polite'}
      aria-atomic="true"
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={messageId}
      data-component-theme={theme}
    >
      {showIcon && <span className={styles.icon} aria-hidden="true">{icons[variant]}</span>}

      <div className={styles.content}>
        {title && (
          <h4 id={titleId} className={styles.title}>
            {title}
          </h4>
        )}
        <div id={messageId} className={styles.message}>
          {message}
        </div>
      </div>

      {(actionLabel || showClose) && (
        <div className={styles.actions}>
          {actionLabel && onAction && (
            <button type="button" className={styles.actionBtn} onClick={onAction}>
              {actionLabel}
            </button>
          )}

          {showClose && (
            <button
              type="button"
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Dismiss notification"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Toast;
