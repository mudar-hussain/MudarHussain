export interface ProjectStack {
  id: string;
  icon: any; // Replace 'any' with a more specific type if available (e.g., a custom Icon type)
  name: string;
}

export interface Project {
  id: string;
  title: string;
  github: string;
  link: string;
  image: any; // This could be a string (URL) or an imported asset reference
  content: string;
  stack: ProjectStack[];
}
