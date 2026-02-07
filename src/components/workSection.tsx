import type { ReactNode } from 'react'

interface WorkSectionProps {
  title?: string
  description?: string
  children: ReactNode
}

function WorkSection({ title, description, children }: WorkSectionProps) {
  return (
    <section className="television-section">
      {(title || description) && (
        <div className="television-section-head">
          {title && <h2>{title}</h2>}
          {description && <p className="television-note">{description}</p>}
        </div>
      )}
      {children}
    </section>
  )
}

export default WorkSection
