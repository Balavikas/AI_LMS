import { Link } from 'react-router-dom'
import CourseCard from '../../components/CourseCard/CourseCard'
import { ROUTES } from '../../constants/navigation'
import { FEATURED_COURSES, PLATFORM_FEATURES } from '../../data/courses'
import styles from './Home.module.css'

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Learn without limits</h1>
          <p className={styles.heroText}>
            Build in-demand skills with expert-led courses. Start learning today and
            move your career forward.
          </p>
          <div className={styles.actions}>
            <Link to={ROUTES.COURSES} className="btn btn-primary">
              Browse courses
            </Link>
            <Link to={ROUTES.REGISTRATIONS} className="btn btn-secondary">
              Register now
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="featured-heading">
        <div className="container">
          <h2 id="featured-heading" className={styles.sectionTitle}>
            Featured courses
          </h2>
          <div className={styles.grid}>
            {FEATURED_COURSES.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`} aria-labelledby="why-heading">
        <div className="container">
          <h2 id="why-heading" className={styles.sectionTitle}>
            Why learn with us
          </h2>
          <ul className={styles.grid}>
            {PLATFORM_FEATURES.map(({ id, title, text }) => (
              <li key={id} className={styles.feature}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Home
