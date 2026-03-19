interface WorkListItem {
  title: string
  href: string
  date: string
}

interface WorkListProps {
  items: WorkListItem[]
}

function WorkList({ items }: WorkListProps) {
  return (
    <div className="article-list">
      {items.map((item, index) => (
        <div className="article-list-item" key={index}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
          <span className="article-list-date">{item.date}</span>
        </div>
      ))}
    </div>
  )
}

export default WorkList
