// Placeholder data until a backend API is available.
export const COURSE_LEVELS = ['Beginner', 'Intermediate', 'Advanced']

export const COURSES = [
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Components, hooks and state management for modern web apps.',
    category: 'Development',
    level: 'Beginner',
    duration: '6 weeks',
    featured: true,
  },
  {
    id: 'javascript-deep-dive',
    title: 'JavaScript Deep Dive',
    description: 'Closures, async patterns and the event loop explained clearly.',
    category: 'Development',
    level: 'Intermediate',
    duration: '8 weeks',
    featured: true,
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Essentials',
    description: 'Design accessible, user-centred interfaces from wireframe to prototype.',
    category: 'Design',
    level: 'Beginner',
    duration: '4 weeks',
    featured: true,
  },
  {
    id: 'node-api',
    title: 'Building APIs with Node.js',
    description: 'Design and ship REST APIs with Express, validation and testing.',
    category: 'Development',
    level: 'Intermediate',
    duration: '6 weeks',
  },
  {
    id: 'advanced-react-patterns',
    title: 'Advanced React Patterns',
    description: 'Compound components, render props, performance tuning and testing.',
    category: 'Development',
    level: 'Advanced',
    duration: '5 weeks',
  },
  {
    id: 'data-analysis-python',
    title: 'Data Analysis with Python',
    description: 'Clean, explore and visualise data using pandas and matplotlib.',
    category: 'Data',
    level: 'Beginner',
    duration: '7 weeks',
  },
  {
    id: 'machine-learning-intro',
    title: 'Introduction to Machine Learning',
    description: 'Core algorithms, model evaluation and practical scikit-learn projects.',
    category: 'Data',
    level: 'Advanced',
    duration: '10 weeks',
  },
  {
    id: 'design-systems',
    title: 'Building Design Systems',
    description: 'Create scalable component libraries, tokens and documentation.',
    category: 'Design',
    level: 'Advanced',
    duration: '5 weeks',
  },
]

export const COURSE_CATEGORIES = [...new Set(COURSES.map((course) => course.category))]

export const FEATURED_COURSES = COURSES.filter((course) => course.featured)

export const findCourseById = (id) => COURSES.find((course) => course.id === id)

export const PLATFORM_FEATURES = [
  { id: 'experts', title: 'Expert instructors', text: 'Learn from industry professionals with real-world experience.' },
  { id: 'flexible', title: 'Learn at your pace', text: 'Self-paced lessons available any time, on any device.' },
  { id: 'certified', title: 'Certificates', text: 'Earn a certificate when you complete each course.' },
]
