import image404 from '../assets/image-404.webp';

import checkpointZone from '../assets/checkpoint-zone.webp';
import boostup from '../assets/boostup.webp';
import alPasoApp from '../assets/alPasoApp.webp';
import heladitosApp from '../assets/heladitos-app.webp';
import readmeSpawner from '../assets/readme-spawner.webp';
import customLogger from '../assets/custom-logger.webp';

export interface ProjectCard {
  title: string;
  description: string;
  tags: string[];
  stack: string;
  image: string;
  url: string;
  github: string;
}

export const projects: ProjectCard[] = [
  {
    title: 'Checkpoint Zone',
    description:
      'Checkpoint Zone es un ecommerce de videojuegos con registro seguro, catálogo completo, filtros avanzados, carrito optimizado, pagos con PayPal, gestión de pedidos y soporte.',
    tags: ['React', 'Vite.js', 'Node.js', 'MySql'],
    stack: 'Backend',
    image: checkpointZone,
    url: 'https://checkpoint-zone.vercel.app/',
    github: 'https://github.com/No-Country-simulation/s19-05-m-webapp',
  },
  {
    title: 'Boostup',
    description:
      'BOOSTUP es una plataforma de financiamiento colectivo que conecta proyectos StartUp emergentes con inversores interesados en innovación y sostenibilidad.',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDb'],
    stack: 'Backend',
    image: boostup,
    url: 'https://boostup-testing-gilt.vercel.app/',
    github: 'https://github.com/No-Country-simulation/c21-21-m-node-react',
  },
  {
    title: 'AlPaso App',
    description:
      'Desarrollo freelancer de una página de catálogo menú, para un negocio local de comida rápida. Muestra productos destacados, ofertas, favoritos, si se encuentra abierto o cerrado y un mapa de la dirección del local.',
    tags: ['React', 'Next.js', 'Tailwind'],
    stack: 'Frontend',
    image: alPasoApp,
    url: 'https://al-pasoapp.vercel.app/',
    github: 'https://github.com/Marcos1up/AlPasoapp',
  },
  {
    title: 'Heladitos App',
    description:
      'E-commerce de helados, con filtros por nombre, categoría y orden por precio. Registro y personalización de usuarios, favoritos, compras seguras con Mercado Pago, reviews de su experiencia en la plataforma y correo electrónico de comprobantes de pagos.',
    tags: ['React', 'Node.js', 'MongoDb'],
    stack: 'Backend',
    image: heladitosApp,
    url: 'https://heladitos-app.vercel.app/',
    github: 'https://github.com/HeladitoApp/pf-Heladito',
  },
  {
    title: 'README Spawner',
    description:
      'Aplicación web para generar archivos README.md de manera eficiente y personalizada, con opciones de personalización y descarga directa.',
    tags: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit'],
    stack: 'Frontend',
    image: readmeSpawner,
    url: '',
    github: 'https://github.com/Marcos1up/readme-spawner',
  },
  {
    title: 'Custom-Logger',
    description:
      "Un logger personalizado y 'profesional' para NestJS que utiliza Winston y rotación diaria de archivos ('winston-daily-rotate-file'), configurado para días especificos por orden de importancia.",
    tags: ['Node.js', 'NestJS', 'Winston'],
    stack: 'Backend',
    image: customLogger,
    url: '',
    github: 'https://github.com/Marcos1up/custom-logger',
  },
  {
    title: 'Task-Tasker',
    description:
      'Task-Tasker es una pagina de tareas inspirada en Trello, hecha con stack MERN, con registro seguro, administración de tableros, gestión de tareas, etiquetas, filtros avanzados y soporte.',
    tags: ['React', 'Node.js', 'MongoDb'],
    stack: 'Fullstack',
    image: image404,
    url: '',
    github: 'https://github.com/Marcos1up/trello-react/tree/main',
  },
];
