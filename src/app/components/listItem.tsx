import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import clsx from 'clsx';
import Image from 'next/image';

interface ListItemProps {
  title: string;
  subtitle: string;
  timeline: string;
  area: string;
  imageSrc?: string;
  showIcon?: boolean;
  isClickable?: boolean;
  expanded?: boolean;
  onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  timeline,
  area,
  imageSrc,
  showIcon = false,
  isClickable = false,
  expanded = false,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        'transition-colors',
        isClickable && 'cursor-pointer',
        expanded
          ? 'bg-neutralBg-level3 hover:bg-neutralBg-level3Hover active:bg-neutralBg-level3Pressed pl-4 pr-0 py-6'
          : 'hover:bg-neutralBg-hover active:bg-neutralBg-pressed px-0 py-6'
      )}
      onClick={isClickable ? onClick : undefined}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-4">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt=""
              className="w-10 h-10 object-cover rounded shrink-0"
            />
          ) : (
            <div className="w-10 h-10 bg-neutralBg-level2 rounded shrink-0" />
          )}

          <div className="space-y-1">
            <div className="text-body-2-strong text-neutralFg-selected">{title}</div>
            <div className="text-body-1-strong text-neutralFg">{subtitle}</div>
            <div className="text-body-1 text-neutralFg">{timeline}</div>
            <div className="text-body-1 text-neutralFg">{area}</div>
          </div>
        </div>

        {showIcon && (
          <div className="w-10 h-10 flex items-center justify-center self-center">
            {expanded ? (
              <ExpandLessIcon style={{ width: 32, height: 32 }} />
            ) : (
              <ExpandMoreIcon style={{ width: 32, height: 32 }} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
