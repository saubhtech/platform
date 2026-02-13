'use client';

import { useEffect } from 'react';

export default function ScrollAnimator() {
  useEffect(() => {
    // Small delay to ensure all components have rendered
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -30px 0px',
        }
      );

      const elements = document.querySelectorAll('.anim-up, .anim-left, .anim-scale');
      elements.forEach((el) => observer.observe(el));

      // Store ref for cleanup
      (window as unknown as Record<string, unknown>).__scrollObserver = observer;
    }, 100);

    return () => {
      clearTimeout(timer);
      const obs = (window as unknown as Record<string, unknown>).__scrollObserver as IntersectionObserver | undefined;
      if (obs) obs.disconnect();
    };
  }, []);

  return null;
}
