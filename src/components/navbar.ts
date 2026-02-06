export function createNavbar(): string {
  return `
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="nav-brand">Gavin Sonntag</a>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">My Work</a></li>
        </ul>
      </div>
    </nav>
  `
}
