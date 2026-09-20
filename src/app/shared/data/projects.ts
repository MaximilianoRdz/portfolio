import { Project } from '../models/portfolio.models';

export const PROJECTS: Project[] = [
  {
    id: 'gtopagos',
    name: 'GTOPagos',
    description: 'Sistema de pagos y gestión financiera para empresas.',
    stack: ['Angular', 'TypeScript', 'Python', 'Django REST', 'PostgreSQL'],
    featured: true,
    codeUrl: 'https://github.com/MaximilianoRdz/GTOPagos',
    backendCodeUrl: 'https://github.com/MaximilianoRdz/GTOPagos_Back',
    demoUrl: 'https://gtopagos.maxrdzs.com/demo'
  },
];
