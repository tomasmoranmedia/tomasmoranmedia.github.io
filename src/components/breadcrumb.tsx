import { Link } from 'react-router-dom'

interface BreadcrumbProps {
  currentPage: string
}

function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      <Link to="/work" className="breadcrumb-link">MY WORK</Link>
      <span className="breadcrumb-separator"> . </span>
      <span className="breadcrumb-current">{currentPage.toUpperCase()}</span>
    </nav>
  )
}

export default Breadcrumb
