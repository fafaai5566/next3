'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Button from './button';
import CloseIcon from '@mui/icons-material/Close'; // Material Icon

interface ProjectDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ProjectDetailsDrawer({ open, onClose, children }: ProjectDetailsDrawerProps) {
  // Lock scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            className="fixed inset-x-0 bottom-0 z-50"
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="project-details-scroll bg-neutralBg-level2 rounded-t-2xl pt-0 p-6 sm:max-h-[70vh] h-[95vh] overflow-y-auto shadow-xl">

                {/* Sticky Close Button */}
              <div className="sticky top-0 flex justify-end pr-0 p-6 bg-white z-10">
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<CloseIcon fontSize="small" />}
                  iconOnly
                  onClick={onClose}
                />
              </div>

              {/* Drawer Content */}
              <div className="p-6 pt-0">{children}</div>
              
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
