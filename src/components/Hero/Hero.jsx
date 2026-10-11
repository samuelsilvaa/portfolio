import useTypewriter from '../../hooks/useTypewriter'
import { useRef } from 'react'
import './Hero.css'
import Reveal from '../Reveal/Reveal'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi' //icons de contatos


const words = ['Samuel Silva', 'Desenvolvedor Web']
function Hero() {
    const text = useTypewriter(words, { typeSpeed: 130, deleteSpeed: 70, pause: 2200 })


    // efeito de passar o mouse na tela
    const heroRef = useRef(null)
    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2   // de -1 a 1
        const y = (e.clientY / window.innerHeight - 0.5) * 2
        heroRef.current.style.setProperty('--mx', x)
        heroRef.current.style.setProperty('--my', y)
    }

    const handleMouseLeave = () => {
        heroRef.current.style.setProperty('--mx', 0)
        heroRef.current.style.setProperty('--my', 0)
    }

    return (

        <>
            <section id='inicio' className='hero' ref={heroRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                {/* badge de "Dispnivel para oportunidades" */}
                <Reveal delay={200}>
                    <div className="hero-badge">
                        <span className="hero-badge-dot" aria-hidden="true" />
                        Disponível para estágio
                    </div>
                </Reveal>

                <h1 className='hero-title' aria-label='Samuel Silva, Desenvolvedor Web'>
                    <span aria-hidden="true">{text}</span>
                    <span className='cursor' aria-hidden='true' />
                </h1>

                {/* descrição */}
                <Reveal delay={1000}>
                    <p className='hero-text'>
                        <strong>Desenvolvedor Front-End.</strong> Transformando ideias em interfaces funcionais, organizadas
                        e sempre com vontade de aprender.
                    </p>
                </Reveal>

                {/* socials badge */}
                <Reveal delay={1300}>
                    <div className="hero-socials">
                        <a
                            href="https://github.com/samuelsilvaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/samuel-silva-8a7469404"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={20} />
                        </a>
                        <a href="mailto:samuelsillvaacontato@gmail.com" aria-label="Enviar e-mail">
                            <FiMail size={20} />
                        </a>
                    </div>
                </Reveal>


                <div className='hero-scroll' aria-hidden='true'>
                    <span>Scroll</span>
                    <div className='hero-scroll-line' />
                </div>

            </section>


        </>
    )
}

export default Hero