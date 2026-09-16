export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  stack: string[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'work' | 'education' | 'project';
  location?: string;
  technologies?: string[];
}

export interface Tech {
  id?: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'devops';
  icon: string;
}
