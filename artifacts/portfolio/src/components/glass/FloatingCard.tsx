/**
 * FloatingCard Component
 * Glass card with 3D tilt effect and hover animations
 */

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import GlassSurface, { GlassSurfaceProps } from './GlassSurface';

export interface FloatingCardProps extends Omit<GlassSurfaceProps, 'animated' | 'hoverable'> {
  enableTilt?: boolean;
  maxTilt?: number;
  perspective?: number;
  enableFloat?: boolean;
  children: React.ReactNode;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className,
  enableTilt = true,
  maxTilt = 10,
  perspective = 1000,
  enableFloat = true,
  ...glassSurfaceProps
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for smooth tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 100,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 100,
    damping: 15,
  });

  // Handle mouse move for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    if (!enableTilt) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt
          ? {
              perspective,
              transformStyle: 'preserve-3d',
            }
          : {}
      }
      whileHover={
        enableFloat
          ? {
              y: -8,
              transition: { duration: 0.3, ease: 'easeOut' },
            }
          : {}
      }
      className={cn('group', className)}
    >
      <motion.div
        style={
          enableTilt
            ? {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }
            : {}
        }
        className="w-full h-full"
      >
        <GlassSurface
          {...glassSurfaceProps}
          className={cn(
            'transition-all duration-300',
            'group-hover:border-white/20 group-hover:shadow-xl',
            className
          )}
        >
          <div
            style={
              enableTilt
                ? {
                    transform: 'translateZ(20px)',
                    transformStyle: 'preserve-3d',
                  }
                : {}
            }
          >
            {children}
          </div>
        </GlassSurface>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCard;
