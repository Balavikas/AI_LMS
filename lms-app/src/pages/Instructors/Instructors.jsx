import InstructorTable from '../../components/InstructorTable/InstructorTable'
import PageHeader from '../../components/PageHeader/PageHeader'
import useFetch from '../../hooks/useFetch'
import { fetchInstructors } from '../../services/instructorService'
import styles from './Instructors.module.css'

const loadInstructors = (signal) => fetchInstructors({ signal })

function Instructors() {
  const { data: instructors, isLoading, error, retry } = useFetch(loadInstructors)

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className={styles.status} role="status">
          <span className={styles.spinner} aria-hidden="true" />
          Loading instructors...
        </div>
      )
    }

    if (error) {
      return (
        <div className={`${styles.status} ${styles.error}`} role="alert">
          <p>We couldn&rsquo;t load the instructors. {error.message}.</p>
          <button type="button" className="btn btn-secondary" onClick={retry}>
            Try again
          </button>
        </div>
      )
    }

    if (instructors.length === 0) {
      return <p className={styles.status}>No instructors found.</p>
    }

    return <InstructorTable instructors={instructors} />
  }

  return (
    <>
      <PageHeader
        title="Our instructors"
        subtitle="Learn from experienced professionals who teach what they practise every day."
      />
      <section className="container" aria-busy={isLoading}>
        {renderContent()}
      </section>
    </>
  )
}

export default Instructors
