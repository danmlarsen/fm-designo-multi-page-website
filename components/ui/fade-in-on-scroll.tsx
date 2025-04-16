'use client';

import { useFadeIn } from '@/context/fade-in-context';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function FadeInOnScroll({ id, children }: { id: string; children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { seenIds, markSeen, isReady } = useFadeIn();

  const hasSeen = seenIds.has(id);

  useEffect(() => {
    if (inView && !hasSeen) {
      markSeen(id);
    }
  }, [inView, hasSeen, markSeen, isReady, id]);

  if (!isReady) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: hasSeen ? 1 : 0, y: hasSeen ? 0 : 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
