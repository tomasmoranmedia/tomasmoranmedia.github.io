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
          <!--<h2 class="subtitle">Medill School of Journalism</h2>
          <h3 class="subsubtitle">Northwestern University</h3>-->
          <p>Hi, I'm Tomas Moran, a bilingual Northwestern student journalist! I have multimedia experience, including television, radio, print and social media. Storytelling in English and Spanish is my passion.</p>
          <div class="button-group">
            <a href="#work" class="btn btn-primary">My Work</a>
            <a href="#resume" class="btn btn-secondary">Resume</a>
          </div>
        </div>
      </div>
    </main>
  `
}
