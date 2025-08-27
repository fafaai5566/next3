'use client';

import { FC, useEffect, useRef, useState } from 'react';

export interface TransitionVideoOverlayProps {
  video: string;
  onComplete: () => void;
}

const TransitionVideoOverlay: FC<TransitionVideoOverlayProps> = ({
  video,
  onComplete,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(true); // Safe default for SSR

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.play().catch(console.error);
    const timeout = setTimeout(onComplete, 1500);
    return () => clearTimeout(timeout);
  }, [video, onComplete, isMobile]);

  if (!isMobile) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-white">
      <video
        ref={videoRef}
        src={video}
        muted
        autoPlay
        playsInline
        className="w-[160px] h-auto object-contain"
      />
    </div>
  );
};

export default TransitionVideoOverlay;
