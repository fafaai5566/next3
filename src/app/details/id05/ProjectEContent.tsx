import { useEffect } from 'react';

export default function ProjectEContent({ project }) {
  useEffect(() => {
    // Scroll the details container back to the top
    const container = document.querySelector('.project-details-scroll');
    if (container) {
      container.scrollTop = 0;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [project.id]);

  return (
    <div>
      <h2 className="text-title-1 mb-6">{project.title}</h2>
      <div className="project-content">{project.content}</div>
    </div>
  );
}
