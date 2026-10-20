export const APP_NAME = 'LearnHub'

export const ROUTES = Object.freeze({
  HOME: '/',
  COURSES: '/courses',
  REGISTRATIONS: '/registrations',
  CONTACT: '/contact',
  INSTRUCTORS: '/instructors',
})

// Single source of truth for the navbar and footer links.
export const NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Courses', path: ROUTES.COURSES },
  { label: 'Registrations', path: ROUTES.REGISTRATIONS },
  { label: 'Contact', path: ROUTES.CONTACT },
  { label: 'Instructor', path: ROUTES.INSTRUCTORS },
]
