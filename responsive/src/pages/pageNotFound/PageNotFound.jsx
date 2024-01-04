import { Link } from 'react-router-dom'
import './pageNotFound.css'

const PageNotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Home</Link>
      </div>
    </section>
  )
}

export default PageNotFound