import { ProjectData } from '@/types/ProjectData';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

interface ProjectLayoutProps {
  projects: ProjectData[];
  selectedProject: ProjectData | null;
  onSelect: (project: ProjectData) => void;
  onCloseDetails: () => void;
  renderDetails: (project: ProjectData) => React.ReactNode;
}

export default function ProjectLayout({
  projects,
  selectedProject,
  onSelect,
  onCloseDetails,
  renderDetails,
}: ProjectLayoutProps) {
  return (
    <div className="flex flex-col sm:flex-row border border-neutralStroke rounded-xl overflow-hidden gap-0 h-[85vh]">
      {/* Left column: Project List */}
      <div className="w-full sm:w-1/3 overflow-y-auto">
        <ProjectList
          projects={projects}
          selectedId={selectedProject?.id}
          onSelect={onSelect}
        />
      </div>

      {/* Details - ProjectDetails decides drawer vs panel */}
      <div className="w-full sm:w-2/3">
        <ProjectDetails
          open={!!selectedProject}
          onClose={onCloseDetails}
        >
          {selectedProject && renderDetails(selectedProject)}
        </ProjectDetails>
      </div>
    </div>
  );
}
