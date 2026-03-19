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
    <>
      <div className="section-page-header">
        <p className="section-breadcrumb"><Link to="/">Home</Link> &middot; {category}</p>
        <h1>{title}</h1>
        <p className="section-description">{description}</p>
      </div>
      <img src={imageSrc} alt={imageAlt} className="section-hero-image" />
    </>
  )
}

export default WorkPageHero
