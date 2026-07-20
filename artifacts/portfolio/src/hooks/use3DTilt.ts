/**
 * use3DTilt Hook
 * Calculate 3D tilt transforms based on mouse position
 */

import { useState, useCallback } from 'react';
import { MotionStyle } from 'framer-motion';

export interface Use3DTiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  transitionDuration?: number;
}

export interface Use3DTiltReturn {
  tiltStyle: MotionStyle;
  tiltHandlers: {
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave: () => void;
  };
  tiltValues: {
    rotateX: number;
    rotateY: number;
  };
}

export const use3DTilt = (options: Use3DTiltOptions = {}): Use3DTiltReturn => {
  const {
    maxTilt = 10,
    perspective = 1000,
    scale = 1.05,
    transitionDuration = 0.3,
  } = options;

  const [tiltValues, setTiltValues] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * maxTilt * 2;
      const rotateX = (0.5 - y) * maxTilt * 2;

      setTiltValues({ rotateX, rotateY });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTiltValues({ rotateX: 0, rotateY: 0 });
  }, []);

  const tiltStyle: MotionStyle = {
    perspective,
    rotateX: tiltValues.rotateX,
    rotateY: tiltValues.rotateY,
    transformStyle: 'preserve-3d',
    transition: `all ${transitionDuration}s ease-out`,
  };

  return {
    tiltStyle,
    tiltHandlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    tiltValues,
  };
};

export default use3DTilt;
