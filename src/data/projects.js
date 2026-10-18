export const projects = [
  {
    id: 1,
    title: 'Nome do projeto 1',
    status: 'Concluído',
    comingSoon: false,
    description:
      'Duas ou três linhas sobre o que o projeto faz e qual problema ele resolve.',
    stack: ['React', 'CSS'],
    highlights: ['Algo que você aprendeu', 'Um desafio que você resolveu'],
    links: {
      demo: '',
      code: 'https://github.com/SEU-USUARIO/repositorio',
    },
    atom: { x: 22, y: 68, size: 34 },
    symbols: '<>{}/=',
  },
  {
    id: 2,
    title: 'Nome do projeto 2',
    status: 'Em andamento',
    comingSoon: false,
    description: 'Descrição curta do projeto 2.',
    stack: ['Node.js', 'MySQL'],
    highlights: ['Destaque 1', 'Destaque 2'],
    links: {
      demo: '',
      code: 'https://github.com/SEU-USUARIO/repositorio-2',
    },
    atom: { x: 45, y: 36, size: 32 },
    symbols: '=>;()%*',
  },
  {
    id: 3,
    title: 'Em breve',
    comingSoon: true,
    description:
      'Este espaço está reservado para um próximo projeto, que ainda está em desenvolvimento.',
    stack: [],
    highlights: [],
    links: {},
    atom: { x: 69, y: 59, size: 38 },
    symbols: '#%*',
  },
  {
    id: 4,
    title: 'Em breve',
    comingSoon: true,
    description:
      'Este espaço está reservado para um próximo projeto, que ainda está em desenvolvimento.',
    stack: [],
    highlights: [],
    links: {},
    atom: { x: 86, y: 29, size: 26 },
    symbols: '#%*',
  },
]