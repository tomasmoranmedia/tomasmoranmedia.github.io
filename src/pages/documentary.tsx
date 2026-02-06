import MediaGrid from '../components/mediaGrid'

function DocumentaryPage() {
  return (
    <main className="television-page documentary-page">
      <div className="television-hero">
        <div className="television-hero-media">
          <img src="/documentary/camera.webp" alt="Holding a camera while filming in Lima" />
        </div>
        <div className="television-hero-copy">
          <p className="television-kicker">My Work · Documentary</p>
          <h1>Documentary</h1>
          <p className="television-lead">How does basketball survive in the only country that lacks a national team due to governmental instability? I’m currently producing a bilingual basketball documentary about the state of Peruvian basketball and former Northwestern player Keenan Fitzmorris' experience playing in Lima. Having wrapped filming in December, it’s set to be published by WNUR Sports this spring!</p>
        </div>
      </div>

      <section className="television-section">
        <div className="television-section-head">
          <h2>Pictures</h2>
        </div>
        <MediaGrid
          items={[
            {
              title: 'Coliseo Dibós',
              subtitle: 'Lima arena exterior',
              src: '/documentary/coliseo-outside.webp',
              alt: 'Documentary: Coliseo Dibós exterior',
              subdued: true,
            },
            {
              title: 'Filming on the beach',
              subtitle: 'Costa Verde sunrise setup',
              src: '/documentary/beach.webp',
              alt: 'Filming on the beach in Lima',
              subdued: true,
            },
            {
              title: 'Filming seagulls',
              subtitle: 'Ambient B-roll capture',
              src: '/documentary/seagulls.mp4',
              alt: 'Filming seagulls',
              type: 'video',
            },
            {
              title: 'Interviewing at Coliseo Dibós',
              subtitle: 'Player sit-down',
              src: '/documentary/coliseo_dibos.webp',
              alt: 'Interviewing at Coliseo Dibós',
              subdued: true,
            },
          ]}
        />
      </section>

      <section className="television-section">
        <div className="television-section-head">
          <h2>Coverage</h2>
        </div>
        <div className="television-list">
          <ul>
            <li><a href="https://drive.google.com/file/d/1C73yh56cpyNcX1QjrYyW7RgKnwFFi9SE/view?usp=sharing" target="_blank" rel="noopener noreferrer">“Noticiero Northwestern” Keenan Fitzmorris in Peru Package (Spanish)</a> <span className="television-date">2/3/26</span></li>
            <li><a href="https://www.instagram.com/reel/DSOU9GkDE2p" target="_blank" rel="noopener noreferrer">La Liga de Basket de Lima Finals Game 2 Pregame Standup</a> <span className="television-date">12/13/25</span></li>
            <li><a href="https://www.instagram.com/reel/DSLr_2GErFi" target="_blank" rel="noopener noreferrer">Interview with Chiki Villalobos (Spanish)</a> <span className="television-date">12/12/25</span></li>
            <li><a href="https://www.instagram.com/reel/DSDl-T0kfC2" target="_blank" rel="noopener noreferrer">La Liga de Basket de Lima Finals Game 1 Preview (English)</a> <span className="television-date">12/9/25</span></li>
            <li><a href="https://www.instagram.com/reel/DSDhqv-EpGj" target="_blank" rel="noopener noreferrer">La Liga de Basket de Lima Finals Game 1 Preview (Spanish)</a> <span className="television-date">12/9/25</span></li>
            <li><a href="https://www.instagram.com/reel/DR8VYjkDN-D" target="_blank" rel="noopener noreferrer">La Liga de Basket de Lima Semifinals Pregame Standup (Spanish)</a> <span className="television-date">12/6/25</span></li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default DocumentaryPage
