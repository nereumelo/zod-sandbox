import { Link } from 'react-router-dom'

export function ErrorPage() {
  return (
    <div>
      <h3>Error 404!</h3>
      <p>Return to <Link to="/">Home</Link></p>
    </div>
  )
}
