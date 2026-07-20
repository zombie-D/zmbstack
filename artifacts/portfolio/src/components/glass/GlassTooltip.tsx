/**
 * GlassTooltip Component
 * Tooltip with glassmorphism styling using Radix Tooltip
 * Responsive and accessible
 */

import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { tooltip } from '@/lib/animations';

export interface GlassTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
  className?: string;
}

const GlassTooltip: React.FC<GlassTooltipProps> = ({
  children,
  content,
  side = 'top',
  align = 'center',
  delayDuration = 200,
  className,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <AnimatePresence>
          {open && (
            <Tooltip.Portal forceMount>
              <Tooltip.Content
                side={side}
                align={align}
                sideOffset={8}
                asChild
                forceMount
              >
                <motion.div
                  className={cn(
                    'z-50 overflow-hidden rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground',
                    'backdrop-blur-md bg-white/10 border border-white/20',
                    'shadow-glass-lg',
                    'max-w-xs sm:max-w-sm',
                    className
                  )}
                  variants={tooltip}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {content}
                  <Tooltip.Arrow className="fill-white/10" width={12} height={6} />
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </AnimatePresence>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default GlassTooltip;
