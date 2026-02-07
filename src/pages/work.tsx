import { Link } from 'react-router-dom'

function WorkPage() {
  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      <div className="work-container">
        <h1>My Work</h1>
        <div className="work-featured-cards">
          <Link className="work-card" to="/work/television" onClick={handleCardClick}>
            <img src="/television/wrigley_standup.webp" alt="Television standup at Wrigley Field" className="work-card-image" />
            <div className="work-card-body">
              <h2>Television</h2>
              <span className="work-card-cta">View page →</span>
            </div>
          </Link>
          <Link className="work-card" to="/work/radio" onClick={handleCardClick}>
            <img src="/radio/soccer_broadcast.webp" alt="Radio: calling a soccer broadcast" className="work-card-image" />
            <div className="work-card-body">
              <h2>Radio</h2>
              <span className="work-card-cta">View page →</span>
            </div>
          </Link>
          <Link className="work-card" to="/work/documentary" onClick={handleCardClick}>
            <img src="/documentary/camera.webp" alt="Documentary: holding camera in Lima" className="work-card-image" />
            <div className="work-card-body">
              <h2>Documentary</h2>
              <span className="work-card-cta">View page →</span>
            </div>
          </Link>
          <Link className="work-card" to="/work/print" onClick={handleCardClick}>
            <img src="/print/2023-finals.webp" alt="Print feature collage" className="work-card-image" />
            <div className="work-card-body">
              <h2>Print</h2>
              <span className="work-card-cta">View page →</span>
            </div>
          </Link>
          <Link className="work-card" to="/work/social" onClick={handleCardClick}>
            <img src="/social/teresa_limon.webp" alt="Social Media: Chicago Fire interviews" className="work-card-image" />
            <div className="work-card-body">
              <h2>Social Media</h2>
              <span className="work-card-cta">View page →</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default WorkPage
