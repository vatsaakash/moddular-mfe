import React from 'react';
import styles from './HeroBanner.module.scss';

export interface FloatingCardData {
  icon?: React.ReactNode;
  label: string;
  value: string;
  trend?: {
    value: string;
    isUp: boolean;
  };
}

export type PredefinedBlobShape = 'organic' | 'circle' | 'square' | 'pill' | 'leaf';

const PREDEFINED_SHAPES: Record<PredefinedBlobShape, string> = {
  organic: '40% 60% 70% 30% / 40% 50% 60% 50%',
  circle: '50%',
  square: '12%',
  pill: '9999px',
  leaf: '0% 100% 0% 100% / 0% 100% 0% 100%',
};

export interface HeroBannerProps {
  /**
   * Main heading of the hero section
   */
  title: string | React.ReactNode;
  /**
   * Smaller text displayed above the title
   */
  badge?: string;
  /**
   * Descriptive text under the title
   */
  description?: string;
  /**
   * Primary call to action button text
   */
  ctaText?: string;
  /**
   * Link for the primary call to action
   */
  ctaHref?: string;
  /**
   * Source for the main image
   */
  imageSrc?: string;
  /**
   * Alt text for the main image
   */
  imageAlt?: string;
  /**
   * Position of the image relative to the content
   * @default 'right'
   */
  imagePosition?: 'left' | 'right';
  /**
   * Optional floating stats/info cards to display over or near the image
   */
  floatingCards?: FloatingCardData[];
  /**
   * Optional className for the root element
   */
  className?: string;
  /**
   * Component level theme override
   */
  theme?: 'light' | 'dark';
  /**
   * Custom CSS border-radius for the background blob or a predefined shape key
   * @default 'organic'
   */
  blobShape?: PredefinedBlobShape | string;
  /**
   * Animation duration for the blob movement (e.g. '15s', '0s' to disable)
   * @default '20s'
   */
  blobAnimationDuration?: string;
}

/**
 * A premium, highly configurable Hero Section component.
 * Supports image positioning, floating info cards, and full theming.
 */
export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  badge,
  description,
  ctaText,
  ctaHref = '#',
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',
  floatingCards = [],
  className = '',
  theme,
  blobShape = 'organic',
  blobAnimationDuration,
}) => {
  const rootClasses = [
    styles.hero,
    styles[`image-${imagePosition}`],
    className
  ].filter(Boolean).join(' ');

  const resolvedBlobShape = PREDEFINED_SHAPES[blobShape as PredefinedBlobShape] || blobShape;

  const style = {
    '--blob-shape': resolvedBlobShape,
    '--blob-animation-duration': blobAnimationDuration,
  } as React.CSSProperties;

  return (
    <section className={rootClasses} data-theme={theme} style={style}>
      <div className={styles.container}>
        <div className={styles.content}>
          {badge && (
            <span className={styles.badge} aria-label="Welcome message">
              {badge}
            </span>
          )}
          
          <h1 className={styles.title}>
            {title}
          </h1>

          {description && (
            <p className={styles.description}>
              {description}
            </p>
          )}

          {ctaText && (
            <div className={styles.actions}>
              <a href={ctaHref} className={styles.cta}>
                {ctaText}
                <span className={styles.arrow} aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>

        {imageSrc && (
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.imageWrapper}>
              <div 
                className={styles.blob} 
                data-organic={blobShape === 'organic' || !blobShape}
              />
              <img src={imageSrc} alt={imageAlt} className={styles.image} />
              
              {floatingCards.map((card, index) => (
                <div 
                  key={index} 
                  className={`${styles.floatingCard} ${styles[`card-${index + 1}`]}`}
                >
                  {card.icon && <div className={styles.cardIcon}>{card.icon}</div>}
                  <div className={styles.cardContent}>
                    <div className={styles.cardValue}>{card.value}</div>
                    <div className={styles.cardLabel}>{card.label}</div>
                  </div>
                  {card.trend && (
                    <div className={`${styles.trend} ${card.trend.isUp ? styles.up : styles.down}`}>
                      {card.trend.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
