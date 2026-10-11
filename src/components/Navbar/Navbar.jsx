import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import './Navbar.css'
import useTheme from '../../hooks/useTheme'


function Navbar() {

    // mudar o tema
    const {isDark, toggleTheme} = useTheme()

    // menu para o celular
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    const links = [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Projetos', href: '#projetos' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contato', href: '#contato' }
    ]


    return (

        <>

            <header className='navbar'>

                {/* NAVBAR LOGO */}
                <nav className='navbar-content'>
                    <a href="#inicio" className='navbar-logo'>
                        Samuel<span>.dev</span>
                    </a>


                    {/* NAVBAR LINKS */}
                    <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                        {links.map(link => (
                            <li key={link.href}>
                                <a href={link.href} onClick={closeMenu}>{link.label}</a>
                            </li>
                        ))}

                        <li className='navbar-links-cv'>
                            <a href="/curriculo-samuel.pdf" onClick={closeMenu}>Currículo</a>
                        </li>
                    </ul>


                    <div className='navbar-actions'>

                        <button className='button-theme'
                            aria-label='Alternar Tema'
                            onClick={toggleTheme}>

                            {isDark ? <Moon size={18} /> : <Sun size={18} />}

                        </button>
                        <a href="/curriculo-samuel.pdf" className='navbar-cv' /*download*/>
                            Currículo
                        </a>


                        <button
                        className='navbar-toggle'
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}>

                            {isOpen ? <X size={20}/> :  <Menu size={20}/>}

                        </button>
                    </div>
                </nav>

            </header>

        </>
    )

}

export default Navbar