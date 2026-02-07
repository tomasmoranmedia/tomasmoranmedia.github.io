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
  const CardContent = (
    <>
      <img src={imageSrc} alt={imageAlt} className="television-card-image" />
      <div className="television-card-body">
        <h3>{title}</h3>
        {date && <p className="television-date">{date}</p>}
      </div>
    </>
  )

  const cardClass = `television-card${subdued ? ' subdued' : ''}`

  if (href) {
    return (
      <a className={cardClass} href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {CardContent}
      </a>
    )
  }

  return (
    <div className={cardClass} onClick={onClick}>
      {CardContent}
    </div>
  )
}

export default WorkCard
