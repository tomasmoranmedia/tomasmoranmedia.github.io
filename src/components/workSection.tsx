import type { ReactNode } from 'react'

interface WorkSectionProps {
  title?: string
  description?: string
  children: ReactNode
}

function WorkSection({ title, description, children }: WorkSectionProps) {
  return (
    <section>
      {title && <h2 className="section-subtitle">{title}</h2>}
      {description && <p className="section-note">{description}</p>}
      {children}
    </section>
  )
}

export default WorkSection
