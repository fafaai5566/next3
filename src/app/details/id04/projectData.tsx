import { ProjectData } from '@/types/ProjectData';

export const projectsD: ProjectData[] = [
  {
    id: 'project-1',
    title: 'Rakoo learning platform',
    thumbnail: '/images/projects/rakoo/rakooLogo.png',
    bgColor: '#94C3E7',
    description: 'Transform a learning platform into a digital learning experience',
    timeline: 'Jan 2021 - Apr 2022',
    subtitle: 'Rakoo',
    content: (
      <>
<p className="text-subtitle-1 mb-6 text-neutralFg">Transform a learning platform into a digital learning experience
        </p>
        
        <div className="bg-neutralBg-level3 px-12 py-12 rounded-md mt-12 mb-16 flex flex-col items-center text-center">
  <img
    src="/images/projects/emptystate3D.png"
    alt="empty state illustration"
    className="w-[150px] h-auto mb-4"
  />
  <p className="text-body-3 text-neutralFg">
    This story isn’t ready yet, but it’s on the way
  </p>
</div>
        
      </>
    ),
  },
  
];