import { Link } from 'react-router-dom'
import { APP_NAME, NAV_LINKS } from '../../constants/navigation'
import styles from './Footer.module.css'

const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>{APP_NAME}</p>
          <p className={styles.tagline}>Learn new skills, anytime, anywhere.</p>
        </div>

        <nav aria-label="Footer">
          <ul className={styles.list}>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link to={path} className={styles.link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className={styles.copy}>
        &copy; {CURRENT_YEAR} {APP_NAME}. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
