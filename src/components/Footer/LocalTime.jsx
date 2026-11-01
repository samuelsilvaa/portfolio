

import { useEffect, useState } from 'react'

// local time do footer
function getTime(timeZone) {
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone,
  }).format(new Date())
}

function LocalTime({ place, timeZone }) {
  const [time, setTime] = useState(() => getTime(timeZone))

  useEffect(() => {
    const timer = setInterval(() => setTime(getTime(timeZone)), 10000)
    return () => clearInterval(timer)
  }, [timeZone])

  return (
    <span className="footer-time">
      {place} {time}
    </span>
  )
}

export default LocalTime