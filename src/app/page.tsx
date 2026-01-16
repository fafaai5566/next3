'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTransition } from './TransitionContext';
import Card from './components/Card';
import PersonalCard from './components/PersonalCard';

export default function Home() {
  const router = useRouter();
  const { isTransitioning, startTransition } = useTransition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (video: string, targetPath: string) => {
    if (isMobile) {
      startTransition(targetPath, video);
    } else {
      router.push(targetPath);
    }
  };

  return (
    <>
    
     {/* Fixed Top Block */}
    <div className="hidden sm:block fixed top-0 left-0 w-full h-12 bg-neutralBg z-[100]" />
    
     {/* Main content with padding to account for fixed block */}
    <div className="bg-neutralBg min-h-screen p-6 sm:p-15 sm:pt-12">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start justify-center max-w-7xl mx-auto">
      {/* Sticky Personal Card */}
      <div className="w-full sm:w-[320px] md:w-[360px] lg:w-[450px] flex-shrink-0 sm:sticky sm:top-12">
  <PersonalCard />
</div>

{/* Scrollable Card list */}
      <div className="flex flex-col w-full max-w-xl">
  <div className="text-title-3 text-neutralFg-selected 	bg-gradient-to-b from-neutralBg-hover/50 to-neutralBg-hover/0 border border-b-0 border-neutralStroke  px-6 py-4 rounded-xl rounded-b-none inline-block mb-0">
    Experience
  </div>

      
      {!isTransitioning && (
        <main className="flex flex-col space-y-4 sm:space-y-6 row-start-3 items-center sm:items-start w-full max-w-xl">
          <Card
            title="AI Exploration"
            description="Demonstrate AI-driven approaches to simplifying complex workflows."
            imageSrc="/images/aiExploration.png"
            videoSrc="/videos/aiExploration_360p.mp4"
            videoScale={1.2}
            videoOffsetY={0}
            targetPath="/details/id05"
            onClick={() =>
              handleCardClick('/videos/aiExploration_360p.mp4', '/details/id05')
            }
          />


          <Card
            title="Enterprise Platform"
            description="Designing enterprise tools that simplify complex workflow, foster collaboration, and modernize outdated systems."
            imageSrc="/images/enterprise-management.png"
            videoSrc="/videos/laptop-open_360p.mp4"
            videoScale={1.2}
            videoOffsetY={0}
            targetPath="/details/id01"
            onClick={() =>
              handleCardClick('/videos/laptop-open_360p.mp4', '/details/id01')
            }
          />

                    <Card
            title="Employee Digital Workspace"
            description="Designing a seamless and unified digital workspace for employees"
            imageSrc="/images/employee-digital-workspace.png"
            videoSrc="/videos/employee-digital-workspace_360p.mp4"
            videoScale={1.8}
            videoOffsetY={0}
            targetPath="/details/id02"
            onClick={() =>
              handleCardClick(
                '/videos/employee-digital-workspace_360p.mp4',
                '/details/id02'
              )
            }
          />

          <Card
            title="Fintech Experience"
            description="Creating Intuitive Digital Banking Experiences"
            imageSrc="/images/fintech.png"
            videoSrc="/videos/fintech_360p.mp4"
            videoScale={1.2}
            videoOffsetY={0}
            targetPath="/details/id03"
            onClick={() =>
              handleCardClick('/videos/fintech_360p.mp4', '/details/id03')
            }
          />

          <Card
            title="Learning System"
            description="Transform a learning platform into a digital learning experience."
            imageSrc="/images/e-learning.png"
            videoSrc="/videos/e-learning_360p.mp4"
            videoScale={1.1}
            videoOffsetY={10}
            targetPath="/details/id04"
            onClick={() =>
              handleCardClick('/videos/e-learning_360p.mp4', '/details/id04')
            }
          />
          


        </main>
      )}
      </div>

    </div>

    </div>
    </>
  );
}
