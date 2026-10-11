
import { useEffect, useRef, useState } from "react";
import './Reveal.css'


function Reveal({children, delay = 0, as: Tag = 'div'}) {

    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    // efeito de entrada
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect
                }
            },
            { threshold: 0.15 }
        )
        observer.observe(ref.current)
        return () => observer.disconnect()

    }, [])


    return (
        <Tag ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    )
}

export default Reveal