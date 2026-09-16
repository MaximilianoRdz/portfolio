import { Tech } from '../models/portfolio.models';

export const TECH_STACK: Tech[] = [
  { 
    name: 'JavaScript', 
    category: 'frontend',
    icon: 'logos:javascript'
  },
  { 
    name: 'TypeScript', 
    category: 'frontend',
    icon: 'logos:typescript-icon'
  },
  { 
    name: 'Angular', 
    category: 'frontend',
    icon: 'logos:angular-icon'
  },
  { 
    name: 'Node.js', 
    category: 'backend',
    icon: 'logos:nodejs-icon'
  },
  { 
    name: 'Express', 
    category: 'backend',
    icon: 'simple-icons:express'
  },
  { 
    name: 'Django', 
    category: 'backend',
    icon: 'simple-icons:django'
  },
  { 
    id: 'drf',
    name: 'Django REST Framework', 
    category: 'backend',
    icon: 'custom:drf'
  },
  { 
    name: 'PostgreSQL', 
    category: 'database',
    icon: 'logos:postgresql'
  }
];
