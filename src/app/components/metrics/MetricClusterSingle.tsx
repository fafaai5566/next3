'use client';

import * as React from 'react';
import clsx from 'clsx';
import MetricItem from './MetricItem';
import type { Metric } from './types';

type Props = {
  items: Metric[];
  className?: string;

  /** Dividers between items (defaults on) */
  showDividers?: boolean;
  dividerClassName?: string; // e.g. 'divide-[#CFCFCF]' or 'divide-neutralStroke'

  /** Padding applied to each item row */
  itemPaddingClassName?: string; // default: 'py-4 md:py-6'
};

export default function MetricClusterSingle({
  items,
  className,
  showDividers = true,
  dividerClassName = 'divide-[#CFCFCF]',
  itemPaddingClassName = 'py-4 md:py-6',
}: Props) {
  return (
    <section className={clsx('w-full font-sans', className)}>
      <div
        className={clsx(
          'grid grid-cols-1',           // ← always one per row
          showDividers && 'divide-y',
          showDividers && dividerClassName
        )}
      >
        {items.map((item, i) => (
          <div key={i} className={itemPaddingClassName}>
            <MetricItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
