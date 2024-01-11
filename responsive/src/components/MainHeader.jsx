/*import './home.css'*/
import { Link } from 'react-router-dom'
import Image from '../images/law_icon.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          {/*<h4>#100DaysOfWorkout</h4>*/}
          <h1>Your Rights Come First</h1>
          <p>
           Put our extensive experience to work for you
          </p>
          <Link to="/plans" className='btn lg'>Schedule an Appointment</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader