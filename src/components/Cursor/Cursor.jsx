import { useEffect, useRef } from 'react'
import './Cursor.css'

function Cursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)

    useEffect(() => {

        // só ativa em dispositivos com mouse
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

        let mouseX = 0
        let mouseY = 0
        let ringX = 0
        let ringY = 0
        let frame

        const onMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY

            if (!ringRef.current.classList.contains('active')) {
                ringX = mouseX
                ringY = mouseY
                ringRef.current.classList.add('active')
            }
        }

        const onOver = (e) => {
            const interactive = e.target.closest('a, button')
            ringRef.current.classList.toggle('hover', Boolean(interactive))
        }

        const animate = () => {
            // o anel anda 15% do caminho a cada quadro: é isso que cria o atraso suave
            ringX += (mouseX - ringX) * 0.15
            ringY += (mouseY - ringY) * 0.15
            ringRef.current.style.translate = `${ringX}px ${ringY}px`
            frame = requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseover', onOver)
        animate()

        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseover', onOver)
            cancelAnimationFrame(frame)
        }
    }, [])

    return (
        <>
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
        </>
    )
}

export default Cursor