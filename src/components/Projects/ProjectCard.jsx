import TypedText from './TypedText'

function ProjectCard({ project, index, total }) {
  const number = String(index + 1).padStart(2, '0')
  const count = String(total).padStart(2, '0')
  const soon = project.comingSoon

  return (
    <article className="project-card" aria-live="polite">

      <svg className="card-border" aria-hidden="true">
        <rect width="100%" height="100%" rx="6" />
      </svg>


      <div className="project-card-body" key={project.id}>
        <div className="project-card-top">
          <span>
            Projeto {number} / {count}
          </span>
          <span className={`project-status${soon ? ' is-soon' : ''}`}>
            {soon ? 'Em desenvolvimento' : project.status}
          </span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-text">
          <TypedText text={project.description} />
        </p>

        {!soon && (
          <>
            <ul className="project-stack" aria-label="Tecnologias">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="project-links">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link--primary"
                >
                  Ver projeto ↗
                </a>
              )}
              {project.links.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver código
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </article>
  )
}

export default ProjectCard