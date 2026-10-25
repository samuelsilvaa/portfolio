import Reveal from '../Reveal/Reveal'
import { skillGroups } from '../../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <Reveal>
            <span className="skills-label">03 / Skills</span>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              O que eu <em>uso e estudo</em>
            </h2>
          </Reveal>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 100}>
              <div className="skills-group">
                <h3 className="skills-group-title">{group.title}</h3>

                <ul className="skills-list">
                  {group.items.map(({ name, icon: Icon, color, learning }) => (
                    <li
                      key={name}
                      className={`skill${learning ? ' is-learning' : ''}`}
                      style={color ? { '--brand': color } : undefined}
                    >
                      {Icon ? (
                        <Icon className="skill-icon" aria-hidden="true" />
                      ) : (
                        <span className="skill-mono" aria-hidden="true">
                          {name.slice(0, 2)}
                        </span>
                      )}
                      <span>{name}</span>
                      {learning && <span className="sr-only"> (em estudo)</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="skills-legend">
          <span className="skills-legend-chip" aria-hidden="true" />
          Tracejado: ainda praticando e aprofundando
        </p>
      </div>
    </section>
  )
}

export default Skills