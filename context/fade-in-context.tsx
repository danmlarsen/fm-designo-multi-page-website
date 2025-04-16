'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const FadeInContext = createContext<{
  seenIds: Set<string>;
  markSeen: (id: string) => void;
  isReady: boolean;
}>({
  seenIds: new Set(),
  markSeen: () => {},
  isReady: false,
});

export function FadeInProvider({ children }: { children: React.ReactNode }) {
  const [seenIds, setSeenIds] = useState<Set<string>>(new Set());
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('fadeInSeen');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSeenIds(new Set(parsed));
        }
      } catch (err) {
        console.error('Failed to parse fadeInSeen from sessionStorage', err);
      }
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      sessionStorage.setItem('fadeInSeen', JSON.stringify([...seenIds]));
    }
  }, [seenIds, isReady]);

  const markSeen = (id: string) => {
    setSeenIds(prev => {
      if (prev.has(id)) return prev;
      const updated = new Set(prev);
      updated.add(id);
      return updated;
    });
  };

  return <FadeInContext.Provider value={{ seenIds, markSeen, isReady }}>{children}</FadeInContext.Provider>;
}

export const useFadeIn = () => useContext(FadeInContext);
