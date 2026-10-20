import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import Registrations from './pages/Registrations/Registrations'
import Contact from './pages/Contact/Contact'
import Instructors from './pages/Instructors/Instructors'
import NotFound from './pages/NotFound/NotFound'
import { ROUTES } from './constants/navigation'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.COURSES} element={<Courses />} />
        <Route path={ROUTES.REGISTRATIONS} element={<Registrations />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.INSTRUCTORS} element={<Instructors />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
