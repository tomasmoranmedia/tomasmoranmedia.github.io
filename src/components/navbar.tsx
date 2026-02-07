import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">Tomas Moran</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">My Work</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
