import { IT_COURSES } from '../constants/itCourses'
import { getJson } from './apiClient'

// Pick a course from the instructor's id so each instructor keeps the same
// "random" course across reloads instead of reshuffling on every fetch.
const assignCourse = (id) => IT_COURSES[(id * 7) % IT_COURSES.length]

// Maps API users to the shape the UI needs.
const toInstructor = ({ id, name, email }) => ({
  id,
  name,
  email,
  courseName: assignCourse(id),
})

export async function fetchInstructors({ signal } = {}) {
  const users = await getJson('/users', { signal })
  return users.map(toInstructor)
}
