import { useEffect, useState } from 'react'

function TypedText({ text, speed = 20, maxDuration = 1800, delay = 150 }) {
  const [reduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [count, setCount] = useState(reduceMotion ? text.length : 0)

  useEffect(() => {
    if (reduceMotion) {
      setCount(text.length)
      return
    }

    setCount(0) // sempre recomeça do zero

    const step = Math.min(speed, maxDuration / text.length)
    let letters = 0
    let timer

    const start = setTimeout(() => {
      timer = setInterval(() => {
        letters += 1
        setCount(letters)
        if (letters >= text.length) clearInterval(timer)
      }, step)
    }, delay)

    return () => {
      clearTimeout(start)
      clearInterval(timer)
    }
  }, [text, speed, maxDuration, delay, reduceMotion])

  return (
    <span className="typed">
      <span className="sr-only">{text}</span>
      <span className="typed-ghost" aria-hidden="true">
        {text}
      </span>
      <span className="typed-live" aria-hidden="true">
        {text.slice(0, count)}
        {count < text.length && <span className="typed-cursor" />}
      </span>
    </span>
  )
}

export default TypedText