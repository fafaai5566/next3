// app/components/ArticleSplit.tsx
'use client';

import * as React from 'react';
import clsx from 'clsx';

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
  /** Optional: pick from your existing heading sizes */
  titleSize?: 'title-3' | 'title-2' | 'title-1' | 'large-title';
  className?: string;
};

export default function ArticleSplit({
  title,
  children,
  titleSize = 'title-2',
  className,
}: Props) {
  return (
    <section
      className={clsx(
        'font-sans', // uses --font-roboto
        'grid grid-cols-1 md:grid-cols-[minmax(220px,28ch)_1fr] gap-x-10 gap-y-3',
        className
      )}
    >
      {/* Left column: title (top-aligned) */}
      <header className="md:pr-4 self-start">
        <h3 className={clsx(titleSize, 'leading-snug mt-0 text-neutralFg-selected')}>
          {title}
        </h3>
      </header>

      {/* Right column: content */}
      <div className="space-y-4 text-body-3 leading-relaxed text-neutralFg">
        {children}
      </div>
    </section>
  );
}
