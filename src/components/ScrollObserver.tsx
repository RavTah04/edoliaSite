// components/ScrollObserver.tsx
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollObserverProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
  animationClass?: string;
  delay?: number;
}

const ScrollObserver = ({
  children,
  threshold = 0.1,
  className = '',
  animationClass = 'animate-reveal-bottom',
  delay = 0
}: ScrollObserverProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animationClass, 'visible');
              observer.unobserve(entry.target);
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, animationClass, delay]);

  return (
    <div ref={ref} className={`${className} opacity-0`}>
      {children}
    </div>
  );
};

export default ScrollObserver;