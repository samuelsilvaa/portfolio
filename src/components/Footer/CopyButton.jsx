import { useEffect, useRef, useState } from 'react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  // ao sair da tela, cancela o relógio de 2 segundos
  useEffect(() => () => clearTimeout(timer.current), [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // plano B: se o navegador bloquear a cópia, abre o e-mail
      window.location.href = `mailto:${text}`
    }
  }

  return (
    <>
      <button
        type="button"
        className="footer-btn footer-btn--primary"
        onClick={handleCopy}
      >
        {copied ? 'Copiado!' : 'Copiar e-mail'}
      </button>
      <span className="sr-only" role="status">
        {copied ? 'E-mail copiado' : ''}
      </span>
    </>
  )
}

export default CopyButton