import MediaGrid from '../components/mediaGrid'

function TelevisionPage() {
  return (
    <main className="television-page">
      <div className="television-hero">
        <div className="television-hero-media">
          <img src="/television/wrigley_standup.webp" alt="Television standup at Wrigley Field" />
        </div>
        <div className="television-hero-copy">
          <p className="television-kicker">My Work · Television</p>
          <h1>Stories in studio and on the sidelines</h1>
          <p className="television-lead">I’m a reporter, editor and anchor for Northwestern News Network (NNN) Sports and News! Here are clips of my work in front of and behind the camera.</p>
        </div>
      </div>

      <section className="television-section">
        <div className="television-section-head">
          <h2>In Studio</h2>
        </div>
        <div className="television-grid">
          <a className="television-card" href="https://drive.google.com/file/d/1-OioAaqjvQN9YNYeUVnN3Mvkf5GDo4Vd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src="/television/noticiero_northwestern.webp" alt="Noticiero Northwestern set" className="television-card-image" />
            <div className="television-card-body">
              <h3>“Noticiero Northwestern” Bad Bunny Super Bowl Explainer (Spanish)</h3>
              <p className="television-date">2/3/26</p>
            </div>
          </a>
          <a className="television-card" href="https://drive.google.com/file/d/1jejO3DuJPaXHHr3LPD8zmbIsyFxK-rtS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src="/television/politicat_on-desk.webp" alt="Politicat on-desk" className="television-card-image" />
            <div className="television-card-body">
              <h3>“Politicat” One Year of Trump Explainer</h3>
              <p className="television-date">1/20/26</p>
            </div>
          </a>
          <a className="television-card" href="https://youtu.be/uJTdrvqxRCE" target="_blank" rel="noopener noreferrer">
            <img src="/television/sportsnight_on-desk.webp" alt="SportsNight anchoring" className="television-card-image" />
            <div className="television-card-body">
              <h3>“SportsNight” Anchoring</h3>
              <p className="television-date">11/13/25</p>
            </div>
          </a>
          <a className="television-card" href="https://www.instagram.com/reel/DO95Us8DKlj" target="_blank" rel="noopener noreferrer">
            <img src="/television/espn_ahora_o_nunca.webp" alt="Appearance on ESPN Ahora o Nunca" className="television-card-image" />
            <div className="television-card-body">
              <h3>Appearance on ESPN’s “Ahora o Nunca” (Spanish)</h3>
              <p className="television-date">7/10/25</p>
            </div>
          </a>
          <a className="television-card" href="https://youtu.be/323xQc-qSJU" target="_blank" rel="noopener noreferrer">
            <img src="/television/wildcat_gameday_preview_on-desk.webp" alt="Wildcat Gameday Preview desk" className="television-card-image" />
            <div className="television-card-body">
              <h3>“Wildcat Gameday Preview” Anchoring</h3>
              <p className="television-date">10/11/24</p>
            </div>
          </a>
        </div>
      </section>

      <section className="television-section">
        <div className="television-section-head">
          <h2>Standup Packages</h2>
        </div>

        <MediaGrid
          items={[
            {
              title: 'Welsh-Ryan Arena 2',
              subtitle: 'Basketball coverage',
              src: '/television/welsh-ryan_arena_2.webp',
              alt: 'Welsh-Ryan Arena standup',
              subdued: true,
            },
            {
              title: 'Football sidelines',
              subtitle: 'Pregame & postgame hits',
              src: '/television/football_sidelines.webp',
              alt: 'Football sidelines standup',
              subdued: true,
            },
            {
              title: 'WBB sidelines',
              subtitle: 'Courtside reporting',
              src: '/television/wbb_sidelines.webp',
              alt: 'Women’s basketball sidelines',
              subdued: true,
            },
            {
              title: 'Welsh-Ryan Arena 1',
              subtitle: 'Men’s basketball coverage',
              src: '/television/welsh-ryan_arena_1.webp',
              alt: 'Welsh-Ryan Arena standup',
              subdued: true,
            },
          ]}
        />

        <div className="television-section-head">
          <h2>Highlights</h2>
        </div>
        <div className="television-list">
          <ul>
            <li><a href="https://x.com/NNNSports/status/2017092728224452837?s=20" target="_blank" rel="noopener noreferrer">Men’s Basketball: Northwestern vs Penn State Postgame Standup</a> <span className="television-date">1/29/26</span></li>
            <li><a href="https://x.com/NNNSports/status/2011620412665541087" target="_blank" rel="noopener noreferrer">Men’s Basketball: Northwestern vs #13 Illinois Pregame Standup</a> <span className="television-date">1/14/26</span></li>
            <li><a href="https://x.com/NNNSports/status/2007568993284956531" target="_blank" rel="noopener noreferrer">Men’s Basketball: Northwestern vs Minnesota Pregame Standup</a> <span className="television-date">1/3/26</span></li>
            <li><a href="https://x.com/NNNSports/status/1996413955775123614" target="_blank" rel="noopener noreferrer">Women’s Basketball vs Kansas Postgame Standup</a> <span className="television-date">12/3/25</span></li>
            <li><a href="https://x.com/NNNSports/status/1974560702053675038" target="_blank" rel="noopener noreferrer">Football: Northwestern vs ULM Pregame Standup</a> <span className="television-date">10/4/25</span></li>
            <li><a href="https://x.com/NNNSports/status/1964111420045287425" target="_blank" rel="noopener noreferrer">Football: Northwestern vs Western Illinois Pregame Standup</a> <span className="television-date">9/5/25</span></li>
            <li><a href="https://x.com/NNNSports/status/1920983647101837351" target="_blank" rel="noopener noreferrer">Baseball at Wrigley Field: Northwestern vs Ohio State Pregame Standup</a> <span className="television-date">5/9/25</span></li>
            <li><a href="https://x.com/NNNSports/status/1888683929387102461" target="_blank" rel="noopener noreferrer">Women’s Basketball: Northwestern vs Penn State Halftime Standup</a> <span className="television-date">2/9/25</span></li>
            <li><a href="https://x.com/NNNSports/status/1880385871381402044" target="_blank" rel="noopener noreferrer">Men’s Basketball: Northwestern vs Maryland Postgame Standup</a> <span className="television-date">1/16/25</span></li>
            <li><a href="https://x.com/NNNSports/status/1860402788083114320" target="_blank" rel="noopener noreferrer">Women’s Basketball: Northwestern vs Harvard Halftime Standup</a> <span className="television-date">11/23/24</span></li>
            <li><a href="https://x.com/NNNSports/status/1857587132593844234" target="_blank" rel="noopener noreferrer">Men’s Basketball: Northwestern vs Eastern Illinois Pregame Standup</a> <span className="television-date">11/15/24</span></li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default TelevisionPage
