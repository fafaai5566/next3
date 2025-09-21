'use client';
import * as React from 'react';
import { Metric } from './types';
import clsx from 'clsx';

export default function MetricItem({
  eyebrow,
  title,
  kicker,
  description,
  icon,
}: Metric) {
  return (
    <div className="flex gap-2 md:gap-3 w-full h-full">
      {icon && <div className="mt-1 shrink-0">{icon}</div>}
      <div className="flex-1">
        {eyebrow && (
          <div className="text-[13px] uppercase tracking-wide text-neutral-500">
            {eyebrow}
          </div>
        )}
        <div className="flex items-baseline gap-2">
          {kicker && (
            <span className="font-semibold text-base md:text-lg">
              {kicker}
            </span>
          )}
          <h3 className={clsx(
                "text-subtitle-1 m-0",   // 👈 use your design token
    !kicker && "text-subtitle-1" // 👈 same style even when no kicker
          )}>
            {title}
          </h3>
        </div>
        {description && (
          <p className="mt-2 text-body-2 text-neutral-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
