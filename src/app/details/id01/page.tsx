'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '../../components/button'; // adjust path if needed
import InteractionTag from '../../components/InteractionTag'; // adjust path if needed
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ListType1 from '../../components/list-type1';
import PersonalCard from '../../components/PersonalCard';
import { useState, useEffect } from 'react';
import { ContentCopy } from '@mui/icons-material';
import ProjectList from '../../components/ProjectList';
import HeaderBar from '../../components/HeaderBar';
import { useRouter } from 'next/navigation';
import { projectsA } from './projectData';
import ProjectDetails from '../../components/ProjectDetails';
import ProjectAContent from './ProjectAContent';
import ProjectLayout from '@/app/components/ProjectLayout';
import { ProjectData } from '@/types/ProjectData'; 
import useIsMobile from '@/hooks/useIsMobile';



export default function Id01Page() {
  const [showTag, setShowTag] = useState(true);

  const router = useRouter();
  const isMobile = useIsMobile();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  
    // On mount, preselect first project for desktop only
useEffect(() => {
  if (isMobile === false && projectsA.length > 0) {
    setSelectedProject(projectsA[0]);
  }
}, [isMobile]);




  return (
    <div className="bg-neutralBg justify-center">
    <div className="min-h-screen flex flex-col p-8 sm:p-10 space-y-6 justify-center max-w-7xl mx-auto">

      <div>
      <HeaderBar title="Enterprise Platform" onBack={() => router.back()} />
        </div>
<div className="flex-1 overflow-hidden">
<ProjectLayout
      projects={projectsA}
      selectedProject={selectedProject}
      onSelect={(project) => setSelectedProject(project)}
      onCloseDetails={() => setSelectedProject(null)}
      renderDetails={(project) => <ProjectAContent project={project} />}
    />
</div>

    

    </div>
    </div>
  );
}
