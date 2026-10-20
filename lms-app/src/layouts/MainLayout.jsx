import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from './MainLayout.module.css'

// Shared shell for every page: Header and Footer wrap the routed content.
function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
