import { ProjectData } from '@/types/ProjectData';

export const projectsC: ProjectData[] = [
  {
    id: 'project-1',
    title: 'Bank Albilad Commercial Banking',
    thumbnail: '/images/projects/albilad/albiladLogo.png',
    bgColor: '#CFE0EC',
    description: 'Modernizing legacy banking into a seamless digital experience',
    timeline: 'Sep 2024 - Jan 2025',
    subtitle: 'Bank Albilad',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Modernizing legacy banking into a seamless digital experience
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
  {
    id: 'project-2',
    title: 'Mango Digital Wallet',
    subtitle: 'Mango Kiosk',
    description: 'Designing a Digital Wallet Tailored for the UAE Market',
    timeline: 'Jun 2022 - Aug 2022',
    thumbnail: '/images/projects/mango/mangoLogo.png',
    bgColor: '#F5CA83',
    content: (
      <>
        <p className="text-subtitle-1 mb-6 text-neutralFg">Designing a Digital Wallet Tailored for the UAE Market
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