import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { APP_NAME, NAV_LINKS, ROUTES } from '../../constants/navigation'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to={ROUTES.HOME} className={styles.brand} onClick={closeMenu}>
          {APP_NAME}
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}
        >
          <ul className={styles.list}>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <NavLink to={path} end className={getLinkClass} onClick={closeMenu}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
