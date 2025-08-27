import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'subtle' | 'transparent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  selected?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-2 py-1 text-caption-1 rounded-[6px]',
  md: 'px-3 py-1.5 text-body-1 rounded-[8px]',
  lg: 'px-4 py-2 text-body-2 rounded-[10px]',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: clsx(
    'bg-brandFg text-neutralFg-selected',
    'hover:bg-brandFg-hover',
    'active:bg-brandFg-pressed',
    'data-[selected=true]:bg-brandFg-selected',
    'disabled:bg-neutralBg-disabled disabled:text-neutralFg-disabled'
  ),
  secondary: clsx(
    'bg-transparent text-neutralFg-selected border border-brandStroke',
    'hover:bg-brandFg2-hover',
    'active:bg-brandFg2-pressed',
    'data-[selected=true]:bg-brandFg2-selected',
    'disabled:bg-neutralBg-disabled disabled:text-neutralFg-disabled disabled:border-neutralStroke-disabled'
  ),
  subtle: clsx(
    'bg-neutralBg-0 text-brandFg-link',
    'hover:bg-brandFg2-hover',
    'active:bg-brandFg2-pressed',
    'data-[selected=true]:bg-brandFg2-selected',
    'disabled:bg-neutralBg-disabled disabled:text-neutralFg-disabled disabled:border-neutralStroke-disabled'
  ),
  transparent: clsx(
    'bg-transparent text-brandFg-link',
    'hover:text-neutralFg-selected',
    'active:text-neutralFg',
    'data-[selected=true]:text-brandFg-link',
    'disabled:text-neutralFg-disabled'
  ),
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconOnly = false,
  selected = false,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      data-selected={selected}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        iconOnly && 'p-2 aspect-square',
        className
      )}
    >
      {icon && <span className={clsx(!iconOnly && 'mr-2')}>{icon}</span>}
      {!iconOnly && children}
    </button>
  );
};

export default Button;
