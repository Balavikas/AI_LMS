import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/navigation'

function NotFound() {
  return (
    <section className="page container">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={ROUTES.HOME} className="btn btn-primary">
        Back to home
      </Link>
    </section>
  )
}

export default NotFound
