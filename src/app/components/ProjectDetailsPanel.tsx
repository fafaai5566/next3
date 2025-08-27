interface ProjectDetailsPanelProps {
  children: React.ReactNode;
}

export default function ProjectDetailsPanel({ children }: ProjectDetailsPanelProps) {
  return (
    <aside className="project-details-scroll bg-neutralBg-level2 rounded-xl sm:rounded-none sm:rounded-r-xl border-0 sm:border-l sm:border-neutralStroke p-8 h-[70vh] sm:h-full overflow-y-auto">
  {children}
</aside>

  );
}
