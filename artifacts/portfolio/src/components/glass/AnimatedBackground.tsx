/**
 * AnimatedBackground Component
 * Animated gradient background with particle effects and theme adaptation
 */

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type GradientVariant = 'aurora' | 'sunset' | 'ocean' | 'forest' | 'midnight';

export interface AnimatedBackgroundProps {
  variant?: GradientVariant;
  duration?: number;
  particles?: boolean;
  particleCount?: number;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const gradientPresets: Record<GradientVariant, string> = {
  aurora: 'linear-gradient(135deg, #8B5CF6 0%, #3B6BFF 25%, #06B6D4 50%, #8B5CF6 75%, #3B6BFF 100%)',
  sunset: 'linear-gradient(135deg, #F97316 0%, #EC4899 25%, #8B5CF6 50%, #F97316 75%, #EC4899 100%)',
  ocean: 'linear-gradient(135deg, #06B6D4 0%, #3B6BFF 25%, #8B5CF6 50%, #06B6D4 75%, #3B6BFF 100%)',
  forest: 'linear-gradient(135deg, #10B981 0%, #06B6D4 25%, #3B6BFF 50%, #10B981 75%, #06B6D4 100%)',
  midnight: 'linear-gradient(135deg, #1E293B 0%, #3B6BFF 25%, #8B5CF6 50%, #1E293B 75%, #3B6BFF 100%)',
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'aurora',
  duration = 15,
  particles = false,
  particleCount = 20,
  intensity = 'medium',
  className,
}) => {
  // Generate random particles
  const particleElements = useMemo(() => {
    if (!particles) return null;

    const count = intensity === 'low' ? particleCount / 2 : intensity === 'high' ? particleCount * 1.5 : particleCount;

    return Array.from({ length: Math.floor(count) }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
  }, [particles, particleCount, intensity]);

  // Adjust intensity based on media query (mobile gets reduced intensity)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const effectiveIntensity = isMobile ? 'low' : intensity;

  const opacityMap = {
    low: 0.3,
    medium: 0.5,
    high: 0.7,
  };

  return (
    <div className={cn('fixed inset-0 -z-10 overflow-hidden', className)}>
      {/* Animated Gradient */}
      <motion.div
        className="absolute inset-0 gpu-accelerated"
        style={{
          background: gradientPresets[variant],
          backgroundSize: '200% 200%',
          opacity: opacityMap[effectiveIntensity],
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Particles */}
      {particles && particleElements && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particleElements.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/20 blur-sm"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient Overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default AnimatedBackground;
