import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiExpress
} from 'react-icons/si'

// learning: true  → etiqueta tracejada (ainda praticando e aprofundando)
// icon: null      → mostra uma sigla de duas letras no lugar do logo
export const skillGroups = [
  {
    title: 'Back-end',
    items: [ 
      { name: 'Node.js', icon: SiNodedotjs, learning: true, color: '#5FA04E'},
      { name: 'Express', icon: SiExpress, learning: true, color: '#2C2C2C' },
    ],
  },
  {
    title: 'Banco de dados',
    items: [{ name: 'MySQL', icon: SiMysql, color: '#4479A1', learning: true }],
  },
  {
    title: 'Front-end',
    items: [
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, learning: true, color: '#61DAFB' },
    ],
  },
  {
    title: 'Ferramentas',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: 'var(--text)'},
      { name: 'Vite', icon: SiVite,  color: '#646CFF'},
    ],
  },
]