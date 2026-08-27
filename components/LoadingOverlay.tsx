"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), prefersReducedMotion ? 100 : 900);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] overflow-hidden bg-black text-[#f5f5f2]"
          initial={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.72, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto] p-5 sm:p-8 lg:p-12">
            <motion.div
              className="micro-type flex items-center justify-between text-white/45"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
            >
              <span>Selected work</span>
              <span>MMXXVI</span>
            </motion.div>

            <div className="self-end overflow-hidden pb-8 sm:pb-10">
              <motion.p
                className="display-type text-[clamp(6.75rem,26vw,23rem)] leading-[0.68] tracking-[-0.035em]"
                initial={{ opacity: 0, y: "108%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                Literal
              </motion.p>
            </div>

            <motion.div
              className="flex items-end justify-between gap-8 pt-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.16, ease: [0.32, 0.72, 0, 1] }}
            >
              <p className="max-w-[19rem] text-sm leading-5 text-white/60">
                Full-stack developer &amp; systems architect
              </p>
              <span className="micro-type shrink-0 text-white/45">Portfolio</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
