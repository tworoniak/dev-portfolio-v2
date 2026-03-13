export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  lessons?: string;
};
