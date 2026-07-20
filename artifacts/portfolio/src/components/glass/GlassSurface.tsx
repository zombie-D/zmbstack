/**
 * GlassSurface Component
 * Core glassmorphism surface with configurable blur, tint, opacity, borders, and elevation
 */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface GlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  
  // Glass effect configuration
  blur?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  tint?: 'light' | 'lighter' | 'lightest' | 'dark' | 'darker' | 'darkest';
  opacity?: number;
  
  // Border configuration
  border?: 'subtle' | 'visible' | 'glow' | 'none';
  
  // Shadow elevation
  elevation?: 0 | 1 | 2 | 3 | 4;
  
  // Interaction
  hoverable?: boolean;
  
  // 3D depth
  depth3d?: boolean;
  
  // Animation support
  animated?: boolean;
  
  // Additional props
  onClick?: () => void;
  style?: React.CSSProperties;
}

const GlassSurface = React.forwardRef<HTMLElement, GlassSurfaceProps>(
  (
    {
      children,
      className,
      as = 'div',
      blur = 'lg',
      tint = 'light',
      opacity,
      border = 'subtle',
      elevation = 2,
      hoverable = false,
      depth3d = false,
      animated = false,
      onClick,
      style,
      ...props
    },
    ref
  ) => {
    const Component = (animated ? motion[as as keyof typeof motion] || motion.div : as) as any;

    // Build blur class
    const blurClass = `backdrop-blur-${blur}`;

    // Build tint class based on theme
    const tintClasses: Record<string, string> = {
      light: 'bg-white/5',
      lighter: 'bg-white/8',
      lightest: 'bg-white/12',
      dark: 'bg-black/5',
      darker: 'bg-black/8',
      darkest: 'bg-black/12',
    };

    // Build border class
    const borderClasses: Record<string, string> = {
      subtle: 'border border-white/10',
      visible: 'border border-white/20',
      glow: 'border border-blue-500/30',
      none: 'border-0',
    };

    // Build elevation class
    const elevationClass = elevation > 0 ? `glass-elevation-${elevation}` : '';

    // Build hover class
    const hoverClass = hoverable
      ? 'transition-all duration-200 hover:bg-white/12 hover:border-white/15 hover:shadow-lg hover:-translate-y-0.5'
      : '';

    // Build 3D depth class
    const depth3dClass = depth3d ? 'transform-gpu perspective-1000' : '';

    // Build border radius - organic shapes
    const radiusVariants: Record<string, string> = {
      'rounded-2xl': 'rounded-[32px_8px_32px_8px]', // Asymmetric organic
      'rounded-3xl': 'rounded-[40px_12px_40px_12px]',
      'rounded-lg': 'rounded-[24px_24px_4px_24px]',
      'rounded-xl': 'rounded-[28px_8px_28px_8px]',
    };

    const baseRadius = radiusVariants['rounded-2xl'] || 'rounded-[32px_8px_32px_8px]';

    const classes = cn(
      baseRadius,
      blurClass,
      tintClasses[tint],
      borderClasses[border],
      elevationClass,
      hoverClass,
      depth3dClass,
      onClick ? 'cursor-pointer' : '',
      'transition-all duration-200', // Smooth morphing
      className
    );

    const inlineStyle: React.CSSProperties = {
      ...(opacity !== undefined && { opacity }),
      WebkitBackdropFilter: `blur(var(--blur-${blur}))`,
      ...style,
    };

    const componentProps = {
      ref,
      className: classes,
      style: inlineStyle,
      onClick,
      ...props,
    };

    return <Component {...componentProps}>{children}</Component>;
  }
);

GlassSurface.displayName = 'GlassSurface';

export default GlassSurface;
