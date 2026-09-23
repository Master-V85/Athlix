import { type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
};

/** Wraps children in a scroll-triggered fade-up reveal. */
export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
