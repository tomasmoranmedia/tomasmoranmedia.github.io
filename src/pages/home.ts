export function createHomePage(): string {
  return `
    <main>
      <div class="hero">
        <div class="hero-left">
          <div class="portrait">
            <img src="https://via.placeholder.com/300" alt="Portrait of Gavin Sonntag">
          </div>
        </div>
        <div class="divider"></div>
        <div class="hero-right">
          <h1>Gavin Sonntag</h1>
          <h2 class="subtitle">Computer Science student at UCLA</h2>
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
