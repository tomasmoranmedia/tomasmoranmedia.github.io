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
    <div className="television-list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>{' '}
            <span className="television-date">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkList
