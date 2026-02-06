export type MediaItem = {
  title?: string
  subtitle?: string
  src: string
  alt: string
  type?: 'image' | 'video'
  href?: string
  subdued?: boolean
}

interface MediaGridProps {
  items: MediaItem[]
  className?: string
}

function MediaGrid({ items, className }: MediaGridProps) {
  return (
    <div className={`television-grid standup-grid${className ? ` ${className}` : ''}`}>
      {items.map((item, idx) => {
        const content = item.type === 'video' ? (
          <video className="television-card-video" src={item.src} controls playsInline muted loop />
        ) : (
          <img src={item.src} alt={item.alt} className="television-card-image" />
        )

        const key = `${item.src}-${idx}`

        if (item.href) {
          return (
            <a
              key={key}
              className={`television-card${item.subdued ? ' subdued' : ''}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          )
        }

        return (
          <div key={key} className={`television-card${item.subdued ? ' subdued' : ''}`}>
            {content}
          </div>
        )
      })}
    </div>
  )
}

export default MediaGrid
