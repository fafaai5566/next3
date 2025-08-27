import useIsMobile from '@/hooks/useIsMobile';
import ProjectDetailsPanel from './ProjectDetailsPanel';
import ProjectDetailsDrawer from './ProjectDetailsDrawer';

interface ProjectDetailsProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ProjectDetails({ open, onClose, children }: ProjectDetailsProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <ProjectDetailsDrawer open={open} onClose={onClose}>
        {children}
      </ProjectDetailsDrawer>
    );
  }

  return open ? <ProjectDetailsPanel>{children}</ProjectDetailsPanel> : null;
}
