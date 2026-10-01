import { Link } from 'react-router-dom'

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
          <p>Hi, I'm Tomas Moran, a third-year student journalist at Northwestern University! Currently, I'm a politics reporter for the Medill News Service and interning on CNN's The Lead with Jake Tapper in Washington, DC. I have multimedia experience, including television, radio, print and social media. As a fully bilingual and bicultural Peruvian American, reporting the facts through storytelling is my passion.</p>
          <div className="button-group">
            <Link to="/work" className="btn btn-primary">My Work</Link>
            <Link to="/resume" className="btn btn-secondary">Resume</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
