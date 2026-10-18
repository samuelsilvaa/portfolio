import { useMemo } from 'react'

const W = 420
const H = 300
const CHARSET = '<>/{}[];#%()=&$*!?+~'.split('')

// pares de átomos ligados (índices na lista de projetos)
const BONDS = [[0, 1], [1, 2], [2, 3], [1, 3]]

// gerador de números "aleatórios" que sempre dá a mesma sequência
function createRandom(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
}

function toPoint(project) {
  return {
    x: (project.atom.x / 100) * W,
    y: (project.atom.y / 100) * H,
    r: project.atom.size,
  }
}

function round(n) {
  return Math.round(n * 10) / 10
}

function buildMolecule(projects) {
  const rand = createRandom(11)
  const items = []

  // 1. poeira de fundo
  for (let i = 0; i < 46; i++) {
    items.push({
      type: 'dust',
      x: rand() * W,
      y: rand() * H,
      char: CHARSET[Math.floor(rand() * CHARSET.length)],
    })
  }

  // 2. ligações entre os átomos
  BONDS.forEach(([a, b]) => {
    if (!projects[a] || !projects[b]) return
    const A = toPoint(projects[a])
    const B = toPoint(projects[b])
    const dx = B.x - A.x
    const dy = B.y - A.y
    const dist = Math.hypot(dx, dy)
    const ux = dx / dist
    const uy = dy / dist

    for (let t = A.r + 8; t <= dist - B.r - 8; t += 11) {
      items.push({
        type: 'bond',
        x: A.x + ux * t,
        y: A.y + uy * t,
        char: Math.floor(t / 11) % 2 ? ':' : ';',
      })
    }
  })

  // 3. os átomos: dois anéis de símbolos cada um
  projects.forEach((project, index) => {
    const { x, y, r } = toPoint(project)
    const chars = project.symbols.split('')
    const rings = [
      { radius: r, spacing: 11 },
      { radius: r * 0.62, spacing: 12 },
    ]

    rings.forEach(({ radius, spacing }) => {
      const count = Math.ceil((2 * Math.PI * radius) / spacing)
      for (let k = 0; k < count; k++) {
        const angle = (k / count) * Math.PI * 2 + rand() * 0.25
        const rr = radius + (rand() - 0.5) * 4
        items.push({
          type: 'atom',
          atom: index,
          x: x + Math.cos(angle) * rr,
          y: y + Math.sin(angle) * rr,
          char: chars[Math.floor(rand() * chars.length)],
        })
      }
    })
  })

  return items
}

function Molecule({ projects, selected, touched, onSelect }) {
  // gerado uma vez só: não refaz a cada clique ou re-render
  const symbols = useMemo(() => buildMolecule(projects), [projects])

  return (
    <div className="molecule">
      <svg
        className="molecule-svg"
        viewBox={`0 0 ${W} ${H}`}
        aria-hidden="true"
      >
        {symbols.map((item, i) => {
          const active = item.type === 'atom' && item.atom === selected
          return (
            <text
              key={i}
              x={round(item.x)}
              y={round(item.y)}
              className={`sym sym-${item.type}${active ? ' is-active' : ''}`}
            >
              {item.char}
            </text>
          )
        })}
      </svg>

      {projects.map((project, index) => (
        <button
          key={project.id}
          type="button"
          className="atom"
          style={{ left: `${project.atom.x}%`, top: `${project.atom.y}%` }}
          aria-pressed={index === selected}
          aria-label={`Projeto ${index + 1}: ${project.title}`}
          onClick={() => onSelect(index)}
        >
          {index + 1}
          <span className="atom-tip" aria-hidden="true">
            {'> '}
            {project.title}
          </span>
        </button>
      ))}

      {!touched && (
        <div className="molecule-hint" aria-hidden="true">
          Clique em um número
        </div>
      )}
    </div>
  )
}

export default Molecule