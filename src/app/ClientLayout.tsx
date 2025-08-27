'use client';

import { TransitionProvider } from './TransitionContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TransitionProvider>{children}</TransitionProvider>;
}
