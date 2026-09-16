import { Experience } from '../models/portfolio.models';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'High Technologies Analytics',
    role: 'Software Engineer',
    period: '2025 - Presente',
    type: 'work',
    description: [
      'Mantenimiento y evolución del sistema empresarial Itool utilizando Python y Django.',
      'Desarrollo de funcionalidades Front-End y Back-End consumiendo APIs REST.',
      'Resolución de incidencias críticas y optimización de rendimiento en entornos productivos.'
    ],
    technologies: ['JavaScript', 'JQuery','Python', 'Django', 'MySQL']
  },
  {
    id: '2',
    company: 'SVAM International de México',
    role: 'Ingeniero de Software - YoFacturo',
    period: '2024',
    type: 'work',
    description: [
      'Corrección y análisis de incidencias en el sistema de facturación YoFacturo.',
      'Desarrollo y mantenimiento sobre tecnologías C# y ASP.NET.',
      'Documentación técnica y colaboración con líderes de proyecto.'
    ],
    technologies: ['JavaScript', 'JQuery', 'C#', 'ASP.NET', 'POSTGRESQL']
  },
  {
    id: '3',
    company: 'SVAM International de México',
    role: 'Desarrollador Full Stack - HRMS',
    period: '2024',
    type: 'work',
    description: [
      'Desarrollo completo del sistema HRMS basado en requerimientos del cliente.',
      'Implementación del frontend utilizando Angular y TypeScript.',
      'Construcción de APIs REST con Node.js y Express y uso de PostgreSQL.'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL']
  },
  {
    id: '4',
    company: 'Universidad Politécnica de Victoria',
    role: 'Ingeniería en Tecnologías de la Información',
    period: '2020 - 2024',
    type: 'education',
    description: [
      'Formación en desarrollo de software, bases de datos y redes.',
      'Participación en proyectos orientados a resolver problemas reales.'
    ]
  }
];
