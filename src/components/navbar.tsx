import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const path = location.pathname

  const navItems = [
    { to: '/', label: 'Latest' },
    { to: '/work/television', label: 'Television' },
    { to: '/work/radio', label: 'Radio' },
    { to: '/work/print', label: 'Print' },
    { to: '/work/documentary', label: 'Documentary' },
    { to: '/work/social', label: 'Social' },
    { to: '/about', label: 'About' },
  ]

  return (
    <header className="masthead">
      <div className="masthead-top">
        <Link to="/" className="masthead-name">Tomas Moran</Link>
        <p className="masthead-tagline">Journalist &middot; Lima &middot; Chicago &middot; Northwestern</p>
      </div>
      <nav className="masthead-nav">
        {navItems.map(item => (
          <Link
            key={item.to}
            to={item.to}
            className={path === item.to ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
