import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/navigation'
import styles from './CourseCard.module.css'

function CourseCard({ id, title, description, category, level, duration }) {
  return (
    <article className={styles.card}>
      <div className={styles.tags}>
        <span className={styles.badge}>{level}</span>
        {category && <span className={styles.category}>{category}</span>}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.meta}>{duration}</span>
        <Link
          to={`${ROUTES.REGISTRATIONS}?course=${id}`}
          className={styles.enroll}
          aria-label={`Enrol in ${title}`}
        >
          Enrol &rarr;
        </Link>
      </div>
    </article>
  )
}

export default CourseCard
