'use client';

import React, { useRef, useState, useEffect, FC } from 'react';
import Image from 'next/image';
import { useTransition } from '../TransitionContext';

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  videoSrc: string;
  videoScale: number;
  videoOffsetY: number;
  targetPath: string;
  onClick: () => void;
}

const Card: FC<CardProps> = ({
  title,
  description,
  imageSrc,
  videoSrc,
  videoScale = 1,
  videoOffsetY = 0,
  targetPath,
  onClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reverseIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isReversing, setIsReversing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { startTransition } = useTransition();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!videoRef.current || isMobile) return;

    if (reverseIntervalRef.current) {
      clearInterval(reverseIntervalRef.current);
      reverseIntervalRef.current = null;
      setIsReversing(false);
    }

    videoRef.current.currentTime = 0;
    videoRef.current.playbackRate = 1;
    videoRef.current.play().catch(console.error);
  };

  const handleMouseLeave = () => {
    if (!videoRef.current || isMobile) return;

    const video = videoRef.current;
    if (!isReversing) {
      setIsReversing(true);
      video.pause();

      reverseIntervalRef.current = setInterval(() => {
        if (video.currentTime <= 0) {
          clearInterval(reverseIntervalRef.current!);
          reverseIntervalRef.current = null;
          setIsReversing(false);
        } else {
          video.currentTime -= 0.04;
        }
      }, 40);
    }
  };

  const handleClick = () => {
    startTransition(targetPath, videoSrc); // layoutId not needed
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-xl border border-neutralStroke p-4 sm:p-4 flex w-full max-w-xl gap-4 items-center cursor-pointer transition-shadow hover:shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] rounded-lg overflow-hidden flex items-center justify-center bg-white shrink-0">
        {isMobile ? (
          <Image
            src={imageSrc}
            alt={title}
            width={100}
            height={100}
            className="object-contain w-full h-full"
            priority
          />
        ) : (
          <div className="relative w-full h-full z-0 overflow-hidden">
            <video
              ref={videoRef}
              src={videoSrc}
              className="absolute top-1/2 left-1/2 w-full h-full object-contain"
              style={{
                transform: `translate(-50%, -50%) scale(${videoScale}) translateY(${videoOffsetY}px)`,
                transformOrigin: 'center center',
              }}
              muted
              playsInline
            />
          </div>
        )}
      </div>

      <div>
        <h3 className="text-body-2-strong sm:text-subtitle-1 text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="hidden sm:block text-body-2 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
