export interface ProjectData {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  timeline?: string;
  imageSrc?: string;
  thumbnail?: string;
  bgColor?: string;
  content?: React.ReactNode; // flexible JSX content
}
