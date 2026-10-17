import Reveal from '../Reveal/Reveal'
import './About.css'

const paragrafo = [<>
    Olá! Meu nome é Samuel, estudo{' '}
    <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> e estou
    sempre empolgado para aprender coisas novas.
</>,
<>
    Comecei com <strong>JavaScript, HTML e CSS</strong>, mas foi ao conhecer
    o desenvolvimento back-end que descobri um interesse ainda maior pela
    programação. Hoje estudo <strong>React, Node.js, JavaScript e MySQL</strong>,
    aprendendo algo novo a cada dia.
</>,
<>
    Estou em busca de um <strong>estágio em desenvolvimento de software</strong>{' '}
    para ganhar experiência prática e contribuir com projetos reais. No
    futuro, pretendo me tornar um desenvolvedor full stack, aprofundando meus
    conhecimentos em C#, SaaS e inteligência artificial.
</>,]

function About() {

    return (
            <section class='about' id='sobre'>
                <div className='container about-grid'>
                    <div className='about-header'>
                        <Reveal>
                            <span className='about-label'>01 / Sobre</span>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2>
                                Um pouco <em>sobre mim</em>
                            </h2>
                        </Reveal>
                    </div>

                    <div className='about-text'>
                        {paragrafo.map((text, index) => (
                            <Reveal key={index} delay={index * 150}>
                                <p>{text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
    )

}

export default About