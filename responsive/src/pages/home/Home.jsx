import HomeExperience from '../../components/HomeExperience'
import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './home.css'

const Home = () => {
  return (
    <>
    <MainHeader/>
    <Values/>    
    <HomeExperience/>
    {/*<Programs/>*/}
    <FAQs/>
    <Testimonials/>
    </>
  )
}

export default Home