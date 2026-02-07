import { Link } from 'react-router-dom'

interface WorkPageHeroProps {
  category: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

function WorkPageHero({ category, title, description, imageSrc, imageAlt }: WorkPageHeroProps) {
  return (
    <div className="television-hero">
      <div className="television-hero-media">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="television-hero-copy">
        <p className="television-kicker"><Link className="television-kicker" to="/work">My Work</Link> · {category}</p>
        <h1>{title}</h1>
        <p className="television-lead">{description}</p>
      </div>
    </div>
  )
}

export default WorkPageHero
