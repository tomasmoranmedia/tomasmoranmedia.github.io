import MediaGrid from '../components/mediaGrid'

function RadioPage() {
  return (
    <main className="television-page radio-page">
      <div className="television-hero">
        <div className="television-hero-media">
          <img src="/radio/soccer_broadcast.webp" alt="Calling a Northwestern soccer match" />
        </div>
        <div className="television-hero-copy">
          <p className="television-kicker">My Work · Radio</p>
          <h1>Radio</h1>
          <p className="television-lead">As managing editor at WNUR Sports, I have the opportunity of live broadcasting Northwestern men’s and women’s soccer, men’s and women’s basketball, women’s volleyball, women’s lacrosse, football, softball and baseball. As a student intern at 98.3FM The Life, I connect with the Lake County community through high school football and basketball broadcasts and hosting the weekly “Swamp Ratt” college sports segment.</p>
        </div>
      </div>

      <section className="television-section">
        <div className="television-section-head">
          <h2>Pictures</h2>
        </div>
        <MediaGrid
          items={[
            { src: '/radio/ihsa_state_finals.webp', alt: 'Radio: IHSA State Finals', subdued: true },
            { src: '/radio/indiana.webp', alt: 'Radio: Indiana', subdued: true },
            { src: '/radio/philadelphia.webp', alt: 'Radio: Philadelphia', subdued: true },
            { src: '/radio/student_intern_award.webp', alt: 'Radio: Student Intern Award', subdued: true },
            { src: '/radio/united_center_court.webp', alt: 'Radio: United Center court', subdued: true },
            { src: '/radio/wbb_broadcast.webp', alt: 'Radio: WBB broadcast', subdued: true },
          ]}
        />
      </section>

      <section className="television-section">
        <div className="television-section-head">
          <h2>Obscure Ballers</h2>
          <p className="television-note">I co-hosted Obscure Ballers, a live WNUR Sports talk show broadcast on radio and YouTube every Sunday for its 14-week run in the fall of 2025. Here are the episodes and social media for the program!</p>
        </div>
        <div className="television-grid">
          <a className="television-card" href="https://youtube.com/playlist?list=PLgEoIkUdTg4Nq_3iWBsVDVPMxXJ7EbCYv" target="_blank" rel="noopener noreferrer">
            <img src="/radio/obscure_ballers_logo.webp" alt="Obscure Ballers logo" className="television-card-image" />
            <div className="television-card-body">
              <h3>Obscure Ballers Playlist</h3>
              <p className="television-date">9/7/25 - 12/7/25</p>
            </div>
          </a>
          <a className="television-card" href="https://www.youtube.com/live/H_-RM7-dQW0" target="_blank" rel="noopener noreferrer">
            <img src="/radio/obscure_ballers_setup.webp" alt="Obscure Ballers live show setup" className="television-card-image" />
            <div className="television-card-body">
              <h3>Obscure Ballers; Stolen Base Episode</h3>
              <p className="television-date">9/28/25</p>
            </div>
          </a>
          <div className="television-card subdued">
            <img src="/radio/obscure_ballers_logo.webp" alt="Obscure Ballers Instagram" className="television-card-image" />
            <div className="television-card-body">
              <h3>Obscure Ballers Instagram</h3>
              <p className="television-date">Social coverage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="television-section">
        <div className="television-section-head">
          <h2>Highlights</h2>
        </div>
        <div className="television-list">
          <ul>
            <li><a href="https://www.instagram.com/reel/DRF9b1zkrDV/" target="_blank" rel="noopener noreferrer">Men’s Basketball: Northwestern at DePaul Broadcast Clip</a> <span className="television-date">11/14/25</span></li>
            <li><a href="https://www.instagram.com/reel/DP6pWjpjVPJ/" target="_blank" rel="noopener noreferrer">Women’s Soccer: Northwestern vs Illinois Broadcast Clip</a> <span className="television-date">10/16/25</span></li>
            {/* <li><a href="https://www.youtube.com/live/H_-RM7-dQW0" target="_blank" rel="noopener noreferrer">Obscure Ballers; Stolen Base Episode</a> <span className="television-date">9/28/25</span></li> */}
            <li><a href="https://www.instagram.com/reel/DP6pWjpjVPJ/" target="_blank" rel="noopener noreferrer">Women’s Soccer: Northwestern vs #23 Ohio State Broadcast Clip (Spanish)</a> <span className="television-date">9/25/25</span></li>
            <li><a href="https://www.instagram.com/reel/DO1mdHqEmmY" target="_blank" rel="noopener noreferrer">Men’s Soccer: Northwestern vs Rutgers Broadcast Clip (Spanish)</a> <span className="television-date">9/19/25</span></li>
            {/* <li><span>Radio Broadcast Reel (Pending)</span> <span className="television-date">—</span></li> */}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default RadioPage
