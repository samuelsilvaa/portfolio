function Marquee({ text }) {
  const words = [0, 1, 2]


  const copy = (key) => (
    <span className="marquee-copy" key={key}>
      {words.map((i) => (
        <span key={i}>
          {text}
          <span className="marquee-sep">/</span>
        </span>
      ))}
    </span>
  )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {copy('a')}
        {copy('b')}
      </div>
    </div>
  )
}

export default Marquee