import React from 'react';
import clsx from 'clsx';

interface ProjectItemProps {
  id: string;
  title: string;
  subtitle?: string;      // <-- optional
  description?: string;   // <-- optional
  timeline?: string;      // <-- optional
  imageSrc?: string;
  selected?: boolean;
  onClick?: () => void;
  bgColor?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  subtitle,
  description,
  timeline,
  imageSrc,
  selected = false,
  onClick,
  bgColor,
}) => {


  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex flex-col gap-4 p-4 transition-colors cursor-pointer',
        selected
          ? 'bg-neutralBg-selected border-brandFg-selected'
          : 'hover:bg-brandFg2-hover active:bg-brandFg2-pressed'
      )}
    >
      {/* Image */}
      <div className="w-full h-[150px] sm:h-28 rounded overflow-hidden flex items-center justify-center" style={{ backgroundColor: bgColor }}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title || 'Project image'}
          className=" h-full object-cover"
        />
      ) : (
        <div className=" h-full" />
      )}
      </div>

      {/* Text Block */}
      <div className="space-y-1">
        <div className="text-body-2-strong text-neutralFg-selected">{title}</div>
        <div className="text-body-1-strong text-neutralFg">{subtitle}</div>
        <div className="text-body-1 text-neutralFg">{description}</div>
        <div className="text-body-1 text-neutralFg">{timeline}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
