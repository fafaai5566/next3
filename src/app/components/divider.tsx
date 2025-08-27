import React from 'react';
import clsx from 'clsx';

export type DividerPadding = 'none' | 'standard';

export interface DividerProps {
  padding?: DividerPadding;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ padding = 'standard', className }) => {
  return (
    <hr
      className={clsx(
        'border-t border-neutralStroke',
        padding === 'none' ? 'px-0' : 'px-4',
        className
      )}
    />
  );
};

export default Divider;

