export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
};
