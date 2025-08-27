'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import TransitionVideoOverlay from './components/TransitionVideoOverlay';

type TransitionContextType = {
  startTransition: (path: string, videoSrc: string) => void;
  isTransitioning: boolean;
};

export const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [transitionVideo, setTransitionVideo] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(true); // Default to true for SSR

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const startTransition = useCallback(
    (path: string, videoSrc: string) => {
      if (isMobile) {
        setTransitionVideo(videoSrc);
        setTimeout(() => {
          router.push(path);
        }, 1500);
      } else {
        router.push(path);
      }
    },
    [router, isMobile]
  );

  const handleTransitionComplete = useCallback(() => {
    setTransitionVideo(null);
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        startTransition,
        isTransitioning: !!transitionVideo,
      }}
    >
      {children}
      {transitionVideo && (
        <TransitionVideoOverlay
          video={transitionVideo}
          onComplete={handleTransitionComplete}
        />
      )}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) throw new Error('useTransition must be used within TransitionProvider');
  return context;
}
