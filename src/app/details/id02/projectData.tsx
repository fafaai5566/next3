import { ProjectData } from '@/types/ProjectData';

export const projectsB: ProjectData[] = [
  {
    id: 'project-1',
    title: 'Enterpise Banking Platform',
    thumbnail: '/images/projects/entitymaster/entitymaster.svg',
    bgColor: '#788c5d',
    description: 'A comprehensive study on urban transport challenges.',
    timeline: 'Jan 2023 - Dec 2023',
    subtitle: 'Bank Albilad',
    content: (
      <>
        <p className="mb-4">This project explores urban transport challenges...</p>
        <img src="/images/mobility1.jpg" className="w-full rounded-lg mb-4" />
        <p className="mb-4">We conducted surveys in 12 major cities...</p>
        <img src="/images/mobility2.jpg" className="w-full rounded-lg mb-4" />
        <p>Our final concept reduced commute times by 23%.</p>
        <p className="mb-4">This project explores urban transport challenges...</p>
        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="mb-4">This project explores urban transport challenges...</p>
        <p className="mb-4">This project explores urban transport challenges...</p>
        <p className="mb-4">This project explores urban transport challenges...</p>
        <p className="mb-4">This project explores urban transport challenges...
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <p className="mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </>
    ),
  },
  {
    id: 'project-2',
    title: 'Mango wallet',
    subtitle: 'Hexaware Technologies',
    description: 'A smart home system to optimize energy usage.',
    timeline: 'Jan 2023 - Dec 2023',
    thumbnail: '/images/projects/entitymaster/entitymaster.svg',
    bgColor: '#A39F8D',
    content: (
      <>
        <video src="/videos/smarthome.mp4" controls className="w-full rounded-lg mb-4" />
        <p className="mb-4">This project aimed to reduce energy waste in homes...</p>
        <div className="grid grid-cols-3 gap-4">
          <img src="/images/smarthome1.jpg" className="rounded-lg" />
          <img src="/images/smarthome2.jpg" className="rounded-lg" />
          <img src="/images/smarthome3.jpg" className="rounded-lg" />
        </div>
      </>
    ),
  },
];
