'use client';

import { useFadeIn } from '@/context/fade-in-context';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function FadeInOnScroll({ id, children, threshold = 0.2 }: { id: string; children: React.ReactNode; threshold?: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });
  const { seenIds, markSeen, isReady, reduceMotion } = useFadeIn();

  const hasSeen = seenIds.has(id);

  useEffect(() => {
    if (inView && !hasSeen) {
      markSeen(id);
    }
  }, [inView, hasSeen, markSeen, isReady, id]);

  if (!isReady) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion || hasSeen ? false : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
