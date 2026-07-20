/**
 * GlassModal Component
 * Modal with glassmorphism styling using Radix Dialog
 * Fully responsive with mobile optimizations
 */

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { modalOverlay, modalContent } from '@/lib/animations';
import GlassSurface from './GlassSurface';

export interface GlassModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-full mx-4',
};

const GlassModal: React.FC<GlassModalProps> = ({
  open,
  onOpenChange,
  children,
  title,
  description,
  showCloseButton = true,
  className,
  size = 'md',
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Overlay with glass backdrop */}
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 backdrop-blur-2xl bg-black/60"
                variants={modalOverlay}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </Dialog.Overlay>

            {/* Modal Content */}
            <Dialog.Content asChild forceMount>
              <motion.div
                className={cn(
                  'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
                  'w-full max-h-[90vh] overflow-y-auto',
                  'focus:outline-none',
                  sizeClasses[size]
                )}
                variants={modalContent}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <GlassSurface
                  blur="xl"
                  tint="light"
                  border="visible"
                  elevation={4}
                  className={cn('relative p-4 sm:p-6 md:p-8 custom-scrollbar', className)}
                >
                  {/* Close button */}
                  {showCloseButton && (
                    <Dialog.Close asChild>
                      <motion.button
                        className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-lg p-2 text-muted-foreground hover:text-foreground transition-colors glass-button"
                        aria-label="Close"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <X className="h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.button>
                    </Dialog.Close>
                  )}

                  {/* Title */}
                  {title && (
                    <Dialog.Title className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 pr-8">
                      {title}
                    </Dialog.Title>
                  )}

                  {/* Description */}
                  {description && (
                    <Dialog.Description className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                      {description}
                    </Dialog.Description>
                  )}

                  {/* Content */}
                  <div className="text-sm sm:text-base">{children}</div>
                </GlassSurface>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default GlassModal;
