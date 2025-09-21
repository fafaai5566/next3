export type Metric = {
  eyebrow?: string;      // e.g. "Visual upgrade"
  title: string;         // e.g. "UX Maturity UP"
  kicker?: string;       // e.g. "2X faster", "↑"
  description?: string;  // short one-liner
  icon?: React.ReactNode;// optional icon (e.g. lucide-react)
};

export type MetricClusterProps = {
  items: Metric[];
  className?: string;
  dense?: boolean;       // tighter padding when true
  showDividers?: boolean;// vertical separators between items
};
