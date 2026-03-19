interface WorkCardProps {
  href?: string
  imageSrc: string
  imageAlt: string
  title: string
  date?: string
  subdued?: boolean
  onClick?: () => void
}

function WorkCard({ href, imageSrc, imageAlt, title, date, subdued, onClick }: WorkCardProps) {
  const content = (
    <>
      <img src={imageSrc} alt={imageAlt} className="media-card-image" />
      <div className="media-card-body">
        <h3 className="story-headline">{title}</h3>
        {date && <p className="story-meta">{date}</p>}
      </div>
    </>
  )

  const className = `media-card${subdued ? ' subdued' : ''}`

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <div className={className} onClick={onClick}>
      {content}
    </div>
  )
}

export default WorkCard
