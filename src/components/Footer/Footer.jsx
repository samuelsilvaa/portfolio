import { contact } from '../../data/contact'
import { skillGroups } from '../../data/skills'
import Reveal from '../Reveal/Reveal'
import LocalTime from './LocalTime'
import CopyButton from './CopyButton'
import './Footer.css'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
]

// a faixa usa os nomes do skills.js
function TechStrip() {
  const names = skillGroups.flatMap((group) => group.items.map((i) => i.name))
  const repeated = [...names, ...names, ...names]

  const copy = (key) => (
    <span className="strip-copy" key={key}>
      {repeated.map((name, i) => (
        <span key={`${name}-${i}`}>
          {name}
          <span className="strip-sep">/</span>
        </span>
      ))}
    </span>
  )

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {copy('a')}
        {copy('b')}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <span className="footer-label">
            <i className="footer-square" aria-hidden="true" />
            Contato
          </span>
          <LocalTime place={contact.place} timeZone={contact.timeZone} />
        </div>

        <Reveal>
          <h2 className="footer-title">
            Quer me chamar 
            <br/>
            para um <em>estágio?</em>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="footer-cols">
            <div className="footer-contact">
              <a className="footer-email" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <div className="footer-actions">
                <CopyButton text={contact.email} />
                <a className="footer-btn" href={`mailto:${contact.email}`}>
                  Enviar mensagem ↗
                </a>
              </div>
            </div>

            <nav className="footer-nav" aria-label="Navegação do rodapé">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="footer-info">
              {contact.status && (
                <li className="footer-status">
                  <i className="footer-dot" aria-hidden="true" />
                  {contact.status}
                </li>
              )}
              <li>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </li>
              {contact.cv && (
                <li>
                  <a href={contact.cv} download>
                    Currículo ↓
                  </a>
                </li>
              )}
            </ul>
          </div>
        </Reveal>
      </div>

      <TechStrip />

      <div className="container footer-bottom">
        <span className="footer-signature" aria-hidden="true">
          {contact.signature}
        </span>
        <div className="footer-meta">
          <a href="#inicio">Voltar ao topo ↑</a>
          <span>© {new Date().getFullYear()} Samuel</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer