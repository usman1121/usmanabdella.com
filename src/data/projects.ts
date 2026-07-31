export interface ProjectSection {
  heading?: string;
  paragraphs: string[];
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  role: string;
  timeline: string;
  team?: string;
  summary: string;
  externalLink?: string;
  githubLink?: string;
  tech: string[];
  images: string[];
  sections: ProjectSection[];
}

export interface ProjectsData {
  projects: Project[];
}
