export default function ProjectBContent({ project }) {
  return (
    <div>
      <h2 className="text-title-2 mb-6">{project.title}</h2>
      <div className="text-body-1 space-y-4">
        {project.content}
      </div>
    </div>
  );
}
