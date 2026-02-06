function SocialMediaPage() {
  return (
    <main className="television-page social-page">
      <div className="television-hero">
        <div className="television-hero-media">
          <img src="/social/teresa_limon.webp" alt="Chicago Fire FC Sector Latino interviews" />
        </div>
        <div className="television-hero-copy">
          <p className="television-kicker">My Work · Social Media</p>
          <h1>Social Media</h1>
          <p className="television-lead">I edit and create bilingual social media content NNN Sports and News, WNUR Sports, Obscure Ballers and my own accounts. I was also able to cover the Chicago Fire’s 2025 MLS playoff run on socials with 98.3FM The Life.</p>
        </div>
      </div>

      <section className="television-section">
        <div className="television-grid">
          <a className="television-card" href="https://www.instagram.com/obscureballers" target="_blank" rel="noopener noreferrer">
            <img src="/radio/obscure_ballers_logo.webp" alt="Interview with Teresa Limon" className="television-card-image" />
            <div className="television-card-body">
              <h3>Obscure Ballers Instagram</h3>
            </div>
          </a>
          <a className="television-card" href="https://www.instagram.com/reel/DRdkAIwjXZG" target="_blank" rel="noopener noreferrer">
            <img src="/social/chicago_fire.webp" alt="Chicago Fire FC Sector Latino interviews" className="television-card-image" />
            <div className="television-card-body">
              <h3>Chicago Fire FC Sector Latino Interviews</h3>
              <p className="television-date">11/24/25</p>
            </div>
          </a>
          <a className="television-card" href="https://www.instagram.com/reel/DQf0pRuDKdW" target="_blank" rel="noopener noreferrer">
            <img src="/social/teresa_limon_interview.webp" alt="Interview with Rafael Ponce de Leon" className="television-card-image" />
            <div className="television-card-body">
              <h3>Interview with Rafael Ponce de Leon (Bilingual)</h3>
              <p className="television-date">10/31/25</p>
            </div>
          </a>
        </div>
      </section>

      <section className="television-section">
        <div className="television-section-head">
          <h2>Highlights</h2>
        </div>
        <div className="television-list">
          <ul>
            <li><a href="https://www.instagram.com/reel/DRdkAIwjXZG" target="_blank" rel="noopener noreferrer">Chicago Fire FC Sector Latino Interviews</a> <span className="television-date">11/24/25</span></li>
            <li><a href="https://www.instagram.com/reel/DQf0pRuDKdW" target="_blank" rel="noopener noreferrer">Interview with Rafael Ponce de Leon (Bilingual)</a> <span className="television-date">10/31/25</span></li>
            <li><a href="https://www.instagram.com/reel/DP5CQvoDNcc" target="_blank" rel="noopener noreferrer">Interview with Teresa Limon (Spanish)</a> <span className="television-date">10/16/25</span></li>
            <li><a href="https://www.instagram.com/reel/DPj97HJis6i/" target="_blank" rel="noopener noreferrer">Northwestern Latino Alumni Homecoming Tailgate Social Media Package (Spanish)</a> <span className="television-date">10/8/25</span></li>
            <li><a href="https://www.instagram.com/reel/DOzTr23DCdL" target="_blank" rel="noopener noreferrer">Men’s Soccer: Northwestern vs Rutgers Preview (Spanish)</a> <span className="television-date">9/19/25</span></li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default SocialMediaPage
