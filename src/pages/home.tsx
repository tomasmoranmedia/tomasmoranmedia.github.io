import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <main>
      <div className="front-page">
        {/* Lead story + sidebar */}
        <div className="front-page-lead">
          <Link to="/work/documentary" className="lead-story" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/documentary/camera.webp" alt="Filming in Lima, Peru" className="lead-story-image" />
            <div className="story-category">Documentary</div>
            <h2 className="story-headline">How Does Basketball Survive Without a National Team?</h2>
            <p className="story-deck">
              A bilingual documentary about the state of Peruvian basketball and former Northwestern player Keenan Fitzmorris' experience playing in Lima. Currently in production with WNUR Sports.
            </p>
            <p className="story-meta">Spring 2026</p>
          </Link>

          <div className="sidebar-stories">
            <a href="https://www.instagram.com/reel/DO95Us8DKlj" target="_blank" rel="noopener noreferrer" className="sidebar-story">
              <img src="/television/espn_ahora_o_nunca_new.jpg" alt="ESPN Ahora o Nunca appearance" className="sidebar-story-image" />
              <div className="story-category">Television</div>
              <h3 className="story-headline">Appearance on ESPN's "Ahora o Nunca"</h3>
              <p className="story-meta">July 10, 2025</p>
            </a>
            <a href="https://illatinonews.com/encendidos-sector-latinos-passion-on-and-off-the-pitch/" target="_blank" rel="noopener noreferrer" className="sidebar-story">
              <div className="story-category">Print</div>
              <h3 className="story-headline">Encendidos: Sector Latino's Passion On And Off The Pitch</h3>
              <p className="story-deck">Illinois Latino News Network</p>
              <p className="story-meta">Nov 21, 2025</p>
            </a>
            <a href="https://youtu.be/XjcVv2HnGms?si=wKuWv9zX9wQYA3Sj" target="_blank" rel="noopener noreferrer" className="sidebar-story">
              <div className="story-category">Television</div>
              <h3 className="story-headline">"SportsNight" Studio Anchoring</h3>
              <p className="story-meta">March 12, 2026</p>
            </a>
          </div>
        </div>

        {/* ── TELEVISION SECTION ── */}
        <section className="front-section">
          <div className="front-section-header">
            <h2 className="section-label">Television</h2>
            <Link to="/work/television" className="section-see-all">All Television &rarr;</Link>
          </div>
          <div className="story-grid story-grid-3">
            <a href="https://drive.google.com/file/d/1JOeiImnmEFLfLfNq14pGVbyOYHfRJZnx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="story-grid-item">
              <img src="/television/costa_verde_road.webp" alt="Keenan Fitzmorris package" className="story-grid-image" />
              <div className="story-category">Package</div>
              <h3 className="story-headline">Keenan Fitzmorris in Peru</h3>
              <p className="story-deck">SportsNight feature on a Northwestern athlete's journey to Lima</p>
              <p className="story-meta">Feb 26, 2026</p>
            </a>
            <a href="https://drive.google.com/file/d/1-OioAaqjvQN9YNYeUVnN3Mvkf5GDo4Vd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="story-grid-item">
              <img src="/television/noticiero_northwestern.webp" alt="Noticiero Northwestern" className="story-grid-image" />
              <div className="story-category">Explainer</div>
              <h3 className="story-headline">"Noticiero Northwestern" Bad Bunny Super Bowl Explainer</h3>
              <p className="story-deck">Spanish-language news broadcast</p>
              <p className="story-meta">Feb 3, 2026</p>
            </a>
            <a href="https://drive.google.com/file/d/1jejO3DuJPaXHHr3LPD8zmbIsyFxK-rtS/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="story-grid-item">
              <img src="/television/politicat_on-desk.webp" alt="Politicat" className="story-grid-image" />
              <div className="story-category">Explainer</div>
              <h3 className="story-headline">"Politicat" One Year of Trump</h3>
              <p className="story-deck">English-language political analysis segment</p>
              <p className="story-meta">Jan 20, 2026</p>
            </a>
          </div>
        </section>

        {/* ── RADIO SECTION ── */}
        <section className="front-section">
          <div className="front-section-header">
            <h2 className="section-label">Radio</h2>
            <Link to="/work/radio" className="section-see-all">All Radio &rarr;</Link>
          </div>
          <div className="front-section-feature">
            <a href="https://youtube.com/playlist?list=PLgEoIkUdTg4Nq_3iWBsVDVPMxXJ7EbCYv" target="_blank" rel="noopener noreferrer" className="feature-row">
              <img src="/radio/obscure_ballers_setup.webp" alt="Obscure Ballers" className="feature-row-image" />
              <div className="feature-row-text">
                <div className="story-category">Talk Show</div>
                <h3 className="story-headline">Obscure Ballers: A 14-Week WNUR Talk Show</h3>
                <p className="story-deck">Co-hosted a live sports talk show broadcast on radio and YouTube every Sunday during fall 2025. Covering the overlooked corners of sports, from Peruvian basketball to stolen bases.</p>
                <p className="story-meta">Sep–Dec 2025</p>
              </div>
            </a>
          </div>
          <div className="front-section-list">
            <a href="https://www.instagram.com/reel/DRF9b1zkrDV/" target="_blank" rel="noopener noreferrer" className="list-row">
              <span className="list-row-title">Men's Basketball: Northwestern at DePaul Broadcast Clip</span>
              <span className="list-row-meta">Nov 14, 2025</span>
            </a>
            <a href="https://www.instagram.com/reel/DP6pWjpjVPJ/" target="_blank" rel="noopener noreferrer" className="list-row">
              <span className="list-row-title">Women's Soccer: Northwestern vs Illinois Broadcast Clip</span>
              <span className="list-row-meta">Oct 16, 2025</span>
            </a>
            <a href="https://www.instagram.com/reel/DPE2b0qiQvd/?igsh=MXM2Y3R2ejJzaTNqcg==" target="_blank" rel="noopener noreferrer" className="list-row">
              <span className="list-row-title">Women's Soccer: Northwestern vs #23 Ohio State (Spanish)</span>
              <span className="list-row-meta">Sep 25, 2025</span>
            </a>
          </div>
        </section>

        {/* ── PRINT SECTION ── */}
        <section className="front-section">
          <div className="front-section-header">
            <h2 className="section-label">Print</h2>
            <Link to="/work/print" className="section-see-all">All Articles &rarr;</Link>
          </div>
          <div className="front-section-list">
            <a href="https://illatinonews.com/encendidos-sector-latinos-passion-on-and-off-the-pitch/" target="_blank" rel="noopener noreferrer" className="list-row list-row--with-pub">
              <span className="list-row-pub">Illinois Latino News Network</span>
              <span className="list-row-title">Encendidos: Sector Latino's Passion On And Off The Pitch</span>
              <span className="list-row-meta">Nov 21, 2025</span>
            </a>
            <a href="https://www.insidenu.com/2025/6/12/24448134/northwestern-softball-is-finally-getting-a-20-million-stadium-of-its-own-in-2026" target="_blank" rel="noopener noreferrer" className="list-row list-row--with-pub">
              <span className="list-row-pub">Inside NU</span>
              <span className="list-row-title">Swinging for the Fences: Northwestern Softball's New $20M Stadium</span>
              <span className="list-row-meta">June 12, 2025</span>
            </a>
            <a href="https://www.chicagolandsoccer.org/news_article/show/1339883" target="_blank" rel="noopener noreferrer" className="list-row list-row--with-pub">
              <span className="list-row-pub">Chicagoland Soccer</span>
              <span className="list-row-title">Randall, New Trier Power Past Addison Trail for Regional Title</span>
              <span className="list-row-meta">May 27, 2025</span>
            </a>
            <a href="https://evanstonroundtable.com/2025/05/10/community-mulls-chandler-newberger-tot-lot-renovation/" target="_blank" rel="noopener noreferrer" className="list-row list-row--with-pub">
              <span className="list-row-pub">Evanston RoundTable</span>
              <span className="list-row-title">Community Mulls Chandler-Newberger Tot Lot Renovation</span>
              <span className="list-row-meta">May 10, 2025</span>
            </a>
            <a href="https://evanstonroundtable.com/2025/03/17/from-the-allen-center-to-the-lakefill-bridge-nus-campus-is-getting-a-facelift/" target="_blank" rel="noopener noreferrer" className="list-row list-row--with-pub">
              <span className="list-row-pub">Evanston RoundTable</span>
              <span className="list-row-title">From the Allen Center to the Lakefill Bridge, NU's Campus Is Getting a Facelift</span>
              <span className="list-row-meta">Mar 17, 2025</span>
            </a>
          </div>
        </section>

        {/* ── SOCIAL MEDIA SECTION ── */}
        <section className="front-section">
          <div className="front-section-header">
            <h2 className="section-label">Social Media</h2>
            <Link to="/work/social" className="section-see-all">All Social &rarr;</Link>
          </div>
          <div className="story-grid story-grid-3">
            <a href="https://www.instagram.com/reel/DVR2kC5kSmJ/?igsh=MTRwa3BxNHB0aGI5eQ==" target="_blank" rel="noopener noreferrer" className="story-grid-item">
              <img src="/social/lima_cerro.webp" alt="Peru road trip reel" className="story-grid-image" />
              <div className="story-category">Reel</div>
              <h3 className="story-headline">WNUR Sports Peru Road Trip</h3>
              <p className="story-meta">Feb 27, 2026</p>
            </a>
            <a href="https://www.instagram.com/reel/DRdkAIwjXZG" target="_blank" rel="noopener noreferrer" className="story-grid-item">
              <img src="/social/encendidos.jpg" alt="Chicago Fire FC interviews" className="story-grid-image" />
              <div className="story-category">Interview</div>
              <h3 className="story-headline">Chicago Fire FC Sector Latino</h3>
              <p className="story-deck">Bilingual interviews from the MLS playoff run</p>
              <p className="story-meta">Nov 24, 2025</p>
            </a>
            <a href="https://www.instagram.com/reel/DPj97HJis6i/" target="_blank" rel="noopener noreferrer" className="story-grid-item">
              <img src="/social/football_field.webp" alt="Latino Alumni Homecoming" className="story-grid-image" />
              <div className="story-category">Package</div>
              <h3 className="story-headline">Latino Alumni Homecoming Tailgate</h3>
              <p className="story-deck">Spanish-language social media package for NNN News</p>
              <p className="story-meta">Oct 8, 2025</p>
            </a>
          </div>
        </section>

        {/* ── STANDUPS / FIELD REPORTING ── */}
        <section className="front-section">
          <div className="front-section-header">
            <h2 className="section-label">Field Reporting</h2>
            <Link to="/work/television" className="section-see-all">All Standups &rarr;</Link>
          </div>
          <div className="standup-showcase">
            <img src="/television/welsh-ryan_arena_2.webp" alt="Welsh-Ryan Arena standup" className="standup-showcase-image" />
            <img src="/television/football_sidelines.webp" alt="Football sidelines standup" className="standup-showcase-image" />
          </div>
          <div className="front-section-list">
            <a href="https://x.com/NNNSports/status/2017092728224452837?s=20" target="_blank" rel="noopener noreferrer" className="list-row">
              <span className="list-row-title">Men's Basketball: Northwestern vs Penn State Postgame</span>
              <span className="list-row-meta">Jan 29, 2026</span>
            </a>
            <a href="https://x.com/NNNSports/status/2011620412665541087" target="_blank" rel="noopener noreferrer" className="list-row">
              <span className="list-row-title">Men's Basketball: Northwestern vs #13 Illinois Pregame</span>
              <span className="list-row-meta">Jan 14, 2026</span>
            </a>
            <a href="https://x.com/NNNSports/status/1920983647101837351" target="_blank" rel="noopener noreferrer" className="list-row">
              <span className="list-row-title">Baseball at Wrigley Field: Northwestern vs Ohio State Pregame</span>
              <span className="list-row-meta">May 9, 2025</span>
            </a>
            <a href="https://x.com/NNNSports/status/1888683929387102461" target="_blank" rel="noopener noreferrer" className="list-row">
              <span className="list-row-title">Women's Basketball: Northwestern vs Penn State Halftime</span>
              <span className="list-row-meta">Feb 9, 2025</span>
            </a>
          </div>
        </section>

        {/* ── EXPLORE MORE ── */}
        <nav className="front-bottom-nav">
          <h2>Explore More</h2>
          <div className="front-bottom-grid">
            <Link to="/work/television" className="front-bottom-card">
              <img src="/television/wrigley_standup.webp" alt="Television" className="front-bottom-card-image" />
              <span className="front-bottom-card-label">Television</span>
            </Link>
            <Link to="/work/radio" className="front-bottom-card">
              <img src="/radio/soccer_broadcast.webp" alt="Radio" className="front-bottom-card-image" />
              <span className="front-bottom-card-label">Radio</span>
            </Link>
            <Link to="/work/print" className="front-bottom-card">
              <img src="/print/2023-finals.webp" alt="Print" className="front-bottom-card-image" />
              <span className="front-bottom-card-label">Print</span>
            </Link>
            <Link to="/work/documentary" className="front-bottom-card">
              <img src="/documentary/camera.webp" alt="Documentary" className="front-bottom-card-image" />
              <span className="front-bottom-card-label">Documentary</span>
            </Link>
            <Link to="/work/social" className="front-bottom-card">
              <img src="/social/teresa_limon.webp" alt="Social Media" className="front-bottom-card-image" />
              <span className="front-bottom-card-label">Social Media</span>
            </Link>
            <Link to="/about" className="front-bottom-card">
              <img src="/home/headshot.webp" alt="About" className="front-bottom-card-image" />
              <span className="front-bottom-card-label">About</span>
            </Link>
          </div>
        </nav>

      </div>
    </main>
  )
}

export default HomePage
