import styles from './InstructorTable.module.css'

const COLUMNS = [
  { key: 'serial', label: 'S.No' },
  { key: 'name', label: 'Instructor name' },
  { key: 'email', label: 'Email address' },
  { key: 'courseName', label: 'Course name' },
]

function InstructorTable({ instructors }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <caption className="visually-hidden">Instructors and the courses they teach</caption>
        <thead>
          <tr>
            {COLUMNS.map(({ key, label }) => (
              <th key={key} scope="col">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {instructors.map(({ id, name, email, courseName }, index) => (
            <tr key={id}>
              {/* data-label feeds the stacked mobile layout */}
              <td data-label="S.No">{index + 1}</td>
              <td data-label="Instructor name">{name}</td>
              <td data-label="Email address">
                <a href={`mailto:${email}`}>{email}</a>
              </td>
              <td data-label="Course name">{courseName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InstructorTable
