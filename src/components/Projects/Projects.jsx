import { useState } from 'react'
import { projects } from '../../data/projects'
import Reveal from '../Reveal/Reveal'
import Molecule from './Molecule'
import ProjectCard from './ProjectCard'
import './Projects.css'
import Marquee from './Marquee' 

function Projects() {
  const [selected, setSelected] = useState(0)
  const [touched, setTouched] = useState(false)

  const handleSelect = (index) => {
    setSelected(index)
    setTouched(true)
  }

  return (
    <section id="projetos" className="projects">
      <Marquee text={"Projetos"}/>
      <div className="container">
        <div className="projects-header">
          <Reveal>
            <span className="projects-label">02 / Projetos</span>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              Alguns dos meus <em>projetos</em>
            </h2>
          </Reveal>
        </div>

        <div className="projects-layout">
          <Molecule
            projects={projects}
            selected={selected}
            touched={touched}
            onSelect={handleSelect}
          />
          <ProjectCard
            project={projects[selected]}
            index={selected}
            total={projects.length}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects