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
    <div className={`photo-grid${className ? ` ${className}` : ''}`}>
      {items.map((item, idx) => {
        const content = item.type === 'video' ? (
          <video className="photo-grid-video" src={item.src} controls playsInline muted loop />
        ) : (
          <img src={item.src} alt={item.alt} className="photo-grid-image" />
        )

        const key = `${item.src}-${idx}`
        const itemClass = `photo-grid-item${item.subdued ? ' subdued' : ''}`

        if (item.href) {
          return (
            <a key={key} className={itemClass} href={item.href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          )
        }

        return (
          <div key={key} className={itemClass}>
            {content}
          </div>
        )
      })}
    </div>
  )
}

export default MediaGrid
