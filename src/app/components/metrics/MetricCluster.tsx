'use client';
import * as React from 'react';
import clsx from 'clsx';
import MetricItem from './MetricItem';
import { Metric, MetricClusterProps } from './types';
import Divider from '../divider';

type Columns = 2 | 3 | 4 | 5;

export default function MetricCluster({
  items,
  className,
  dense = false,
  columns = 3,               // how many columns on md+ (2–5)
  showVerticalDividers = true,
  showRowDivider = true,
}: MetricClusterProps & {
  columns?: Columns;
  showVerticalDividers?: boolean;
  showRowDivider?: boolean;
}) {
  const firstRow = items.slice(0, columns);
  const secondRow = items.slice(columns);

  const rowGrid =
    columns === 2 ? 'md:grid-cols-2' :
    columns === 3 ? 'md:grid-cols-3' :
    columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-5';

  const cellPadding = dense ? 'p-3 md:p-3.5' : 'p-4 md:p-6';

  // vertical dividers between columns (not on the far left)
  const vDividers = showVerticalDividers
    ? 'md:[&>div:not(:first-child)]:border-l md:[&>div]:border-[#CFCFCF]'
    : '';

  const chunk = <T,>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) },
    (_, i) => arr.slice(i * size, i * size + size));

const rows = chunk(items, 2);


return (
  <section className="rounded-md bg-[#EDEFE7] p-4 md:p-6 lg:p-8 my-8">
    {rows.map((row, rowIndex) => (
      <React.Fragment key={rowIndex}>
{rowIndex > 0 && (
  <>
    {/* Mobile: match divide-y (no extra vertical spacing) */}
    <div className="block md:hidden border-t border-[#CFCFCF]" />

    {/* Desktop: roomy divider between row groups */}
    <Divider
      padding="none"
      className="hidden md:block my-6 !border-[#AFAFAF]"
    />
  </>
)}
        {/* each row = exactly 2 columns on md+ */}

    <div className="grid grid-cols-1 md:grid-cols-2 w-full
                    divide-y divide-[#CFCFCF]
                    md:divide-y-0 md:divide-x">
                        
          {row.map((item, i) => (
            <div key={`${rowIndex}-${i}`} className={clsx('flex items-start p-4 w-full h-full', cellPadding)}>
              <MetricItem {...(item as Metric)} />
            </div>
          ))}
        </div>
      </React.Fragment>
    ))}
  </section>
);
}
