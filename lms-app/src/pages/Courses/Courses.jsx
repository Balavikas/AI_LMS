import { useMemo, useState } from 'react'
import CourseCard from '../../components/CourseCard/CourseCard'
import PageHeader from '../../components/PageHeader/PageHeader'
import { COURSES, COURSE_CATEGORIES, COURSE_LEVELS } from '../../data/courses'
import styles from './Courses.module.css'

const ALL = 'All'
const INITIAL_FILTERS = { search: '', category: ALL, level: ALL }

const matchesFilters = (course, { search, category, level }) => {
  const term = search.trim().toLowerCase()
  const matchesSearch =
    !term ||
    course.title.toLowerCase().includes(term) ||
    course.description.toLowerCase().includes(term)

  return (
    matchesSearch &&
    (category === ALL || course.category === category) &&
    (level === ALL || course.level === level)
  )
}

function Courses() {
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  const visibleCourses = useMemo(
    () => COURSES.filter((course) => matchesFilters(course, filters)),
    [filters],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <PageHeader
        title="Courses"
        subtitle="Explore our catalogue and find the right course for your goals."
      />

      <section className={`container ${styles.content}`}>
        <form className={styles.filters} role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            name="search"
            className={styles.search}
            placeholder="Search courses..."
            aria-label="Search courses"
            value={filters.search}
            onChange={handleChange}
          />
          <select name="category" aria-label="Filter by category" value={filters.category} onChange={handleChange}>
            {[ALL, ...COURSE_CATEGORIES].map((category) => (
              <option key={category} value={category}>
                {category === ALL ? 'All categories' : category}
              </option>
            ))}
          </select>
          <select name="level" aria-label="Filter by level" value={filters.level} onChange={handleChange}>
            {[ALL, ...COURSE_LEVELS].map((level) => (
              <option key={level} value={level}>
                {level === ALL ? 'All levels' : level}
              </option>
            ))}
          </select>
        </form>

        <p className={styles.count} aria-live="polite">
          Showing {visibleCourses.length} of {COURSES.length} courses
        </p>

        {visibleCourses.length > 0 ? (
          <div className={styles.grid}>
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No courses match your filters.</p>
            <button type="button" className="btn btn-secondary" onClick={() => setFilters(INITIAL_FILTERS)}>
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default Courses
