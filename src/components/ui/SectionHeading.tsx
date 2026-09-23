import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, center, className = '' }: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <div className={`mb-4 flex items-center gap-2.5 ${center ? 'justify-center' : ''}`}>
            <span className="h-px w-6 bg-accent/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={120}>
          <p className={`mt-5 text-base leading-relaxed text-white/50 sm:text-lg text-pretty ${center ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

type BadgeProps = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

export function Badge({ children, className = '', icon }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface-200/50 px-3 py-1 text-xs font-medium text-white/60 backdrop-blur-md ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
