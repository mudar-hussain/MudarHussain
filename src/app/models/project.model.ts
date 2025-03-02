export interface ProjectStack {
  id: string;
  icon: any; 
  name: string;
}

export interface Project {
  id: string;
  title: string;
  github: string;
  url?: string;
  image: any; // This could be a string (URL) or an imported asset reference
  tagline: string;
  content: string;
  stack: ProjectStack[];
}
