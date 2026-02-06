function HomePage() {
  return (
    <main>
      <div className="hero">
        <div className="hero-left">
          <div className="portrait">
            <img src="/home/headshot.webp" alt="Portrait of Tomas Moran" />
          </div>
        </div>
        <div className="divider" />
        <div className="hero-right">
          <h1>Tomas Moran</h1>
          <p>Hi, I'm Tomas Moran, a bilingual Northwestern student journalist! I have multimedia experience, including television, radio, print and social media. Storytelling in English and Spanish is my passion.</p>
          <div className="button-group">
            <a href="#work" className="btn btn-primary">My Work</a>
            <a href="#resume" className="btn btn-secondary">Resume</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
