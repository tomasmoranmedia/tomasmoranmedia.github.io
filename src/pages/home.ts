export function createHomePage(): string {
  return `
    <main>
      <div class="hero">
        <div class="hero-left">
          <div class="portrait">
            <img src="/home/Headshot.jpeg" alt="Portrait of Tomas Moran">
          </div>
        </div>
        <div class="divider"></div>
        <div class="hero-right">
          <h1>Tomas Moran</h1>
          <h2 class="subtitle">Medill School of Journalism</h2>
          <h3 class="subsubtitle">Northwestern University</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div class="button-group">
            <a href="#work" class="btn btn-primary">My Work</a>
            <a href="#resume" class="btn btn-secondary">Resume</a>
          </div>
        </div>
      </div>
    </main>
  `
}
