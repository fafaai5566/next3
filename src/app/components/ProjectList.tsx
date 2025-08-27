'use client';

import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import Divider from './divider';
import { ProjectData } from '@/types/ProjectData'; // adjust path if needed


interface ProjectListProps {
  projects: ProjectData[];
  selectedId?: string | null; // make optional
  onSelect: (project: ProjectData) => void; // pass full object
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, selectedId, onSelect }) => {
  return (
    <div className="bg-neutralBg-level2 h-full">
      <div className="bg-neutralBg-hover sticky top-0 px-4 py-3 text-subtitle-1 text-neutralFg-selected border-b border-neutralStroke">
        Projects
      </div>
      {projects.map((project, index) => (
        <div key={project.id}>
        <ProjectItem
          key={project.id}
          {...project}
          selected={selectedId === project.id}
          imageSrc={project.imageSrc ?? project.thumbnail}
          onClick={() => onSelect(project)} // pass full object
          bgColor={project.bgColor}
        />
        {index < projects.length - 1 && (
          <Divider padding="none" className="ml" />
        )}
      </div>
      ))}
    </div>
  );
};

export default ProjectList;
