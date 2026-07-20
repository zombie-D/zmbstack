/**
 * useScrollAnimation Hook
 * Trigger animations when elements enter viewport
 */

import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  margin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.2,
    triggerOnce = true,
    margin = '0px',
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: margin as any,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else if (!triggerOnce) {
      controls.start('initial');
    }
  }, [inView, controls, triggerOnce]);

  return { ref, controls, inView };
};

export default useScrollAnimation;
