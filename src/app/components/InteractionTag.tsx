import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import CloseIcon from '@mui/icons-material/Close';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Popover from '@radix-ui/react-popover';


export type InteractionTagVariant = 'brand-filled' | 'brand-outline' | 'filled' | 'outline';

export interface InteractionTagProps {
  label: string;
  icon?: React.ReactNode;
  onRemove?: () => void;
  showDismiss?: boolean;
  selected?: boolean;
  disabled?: boolean;
  variant?: InteractionTagVariant;
  className?: string;
  hoverContent?: React.ReactNode; // ✅ now supports JSX, not just text
}

const baseStyles = 'inline-flex items-center gap-1 rounded-full px-2 py-[2px] text-body-1 text-caption-1 h-[32px] transition-colors';

const variantStyles: Record<InteractionTagVariant, string> = {
  'brand-filled': clsx(
    'bg-brandFg2 text-brandFg-link',
    'hover:bg-brandFg2-selected',
    'active:bg-brandFg2-pressed',
    'focus:outline focus:outline-2 focus:outline-brandStroke'
  ),
  'brand-outline': clsx(
    'bg-brandFg2 text-brandFg-link border border-brandStroke',
    'hover:bg-brandFg2-selected',
    'active:bg-brandFg2-pressed',
    'focus:outline focus:outline-2 focus:outline-brandStroke'
  ),
  'filled': clsx(
    'bg-neutralBg-level3 text-neutralFg',
    'hover:bg-neutralBg-level3Hover',
    'active:bg-neutralBg-level3Pressed',
    'focus:outline focus:outline-2 focus:outline-brandStroke'
  ),
  'outline': clsx(
    'bg-transparent text-brandFg-link border border-brandStroke',
    'hover:bg-brandFg2-selected',
    'active:bg-brandFg2-pressed',
    'focus:outline focus:outline-2 focus:outline-brandStroke'
  ),
};

const InteractionTag: React.FC<InteractionTagProps> = ({
  label,
  hoverContent, // ✅ ADD THIS
  icon,
  onRemove,
  showDismiss = true,
  selected = false,
  disabled = false,
  variant = 'brand-filled',
  className,
}) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const TagContent = (
    <div
      className={clsx(
        baseStyles,
        variantStyles[variant],
        disabled && 'opacity-50 pointer-events-none',
        className
      )}
    >
      {icon && <span className="text-inherit mr-1">{icon}</span>}
      <span>{label}</span>
      {onRemove && showDismiss && !disabled && (
        <button
          onClick={onRemove}
          type="button"
          className="p-1 w-6 h-6 flex items-center justify-center rounded-full hover:bg-brandFg-hover text-inherit hover:text-brandFg-linkHover active:text-brandFg-linkPressed"
        >
          <CloseIcon style={{ fontSize: 16 }} />
        </button>
      )}
    </div>
  );

  if (!hoverContent) return TagContent;

  // ✅ Use Popover on Mobile
  if (isMobile) {
    return (
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="focus:outline-none">{TagContent}</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="z-50 bg-white border border-neutralStroke shadow-lg rounded-md p-3 text-body-1 text-neutralFg-selected w-max max-w-md"
            side="top"
            sideOffset={8}
          >
            {hoverContent}
            <Popover.Arrow className="fill-white stroke-neutralStroke" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }

  // 🖥️ Use Tooltip on Desktop
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span>{TagContent}</span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-50 bg-white border border-b-0 border-neutralStroke text-body-2 text-neutralFg-selected shadow-lg rounded-md p-3 text-sm w-max max-w-md"
            side="top"
            sideOffset={8}
          >
            {hoverContent}
            <Tooltip.Arrow className="w-3 h-2 fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default InteractionTag;
