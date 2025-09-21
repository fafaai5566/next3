// app/components/ArticleCluster.tsx
'use client';

import * as React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode; // expect multiple <ArticleSplit />
  className?: string;
  /** Control divider spacing between items */
  dividerY?: '6' | '8' | '10';
  /** Background tone to use from your tokens */
  backgroundClassName?: string; // e.g., 'bg-neutralBg-level2' (default)
};

export default function ArticleCluster({
  children,
  className,
  dividerY = '8',
  backgroundClassName,
}: Props) {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <section
      className={clsx(
        'font-sans rounded-md p-6 md:p-8 bg-[#F7f7f7]', // uses --font-roboto
        backgroundClassName, // default bg-neutralBg-level2
        className
      )}
    >
      {items.map((child, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <hr className={clsx('border-neutralStroke', `my-${dividerY}`)} />
          )}
          {child}
        </React.Fragment>
      ))}
    </section>
  );
}
