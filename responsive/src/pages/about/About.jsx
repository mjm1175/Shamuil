import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/alt_skyline.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad porro aut praesentium totam consequuntur soluta quibusdam, error harum fuga laudantium!
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor numquam earum voluptatibus eos? Qui quisquam quam voluptates vitae labore error nulla, laboriosam magnam aperiam accusantium illum officiis iste ab incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, natus? Tenetur dignissimos adipisci in et unde, illo maxime ad pariatur fuga libero esse fugit voluptatum consectetur sit veniam reiciendis architecto!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus repellendus pariatur asperiores, dicta consectetur sequi labore sed molestiae perspiciatis rem error nam exercitationem beatae autem eum? Adipisci harum similique earum.</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
      <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor numquam earum voluptatibus eos? Qui quisquam quam voluptates vitae labore error nulla, laboriosam magnam aperiam accusantium illum officiis iste ab incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, natus? Tenetur dignissimos adipisci in et unde, illo maxime ad pariatur fuga libero esse fugit voluptatum consectetur sit veniam reiciendis architecto!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus repellendus pariatur asperiores, dicta consectetur sequi labore sed molestiae perspiciatis rem error nam exercitationem beatae autem eum? Adipisci harum similique earum.</p>
        </div>        
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>    

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor numquam earum voluptatibus eos? Qui quisquam quam voluptates vitae labore error nulla, laboriosam magnam aperiam accusantium illum officiis iste ab incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, natus? Tenetur dignissimos adipisci in et unde, illo maxime ad pariatur fuga libero esse fugit voluptatum consectetur sit veniam reiciendis architecto!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus repellendus pariatur asperiores, dicta consectetur sequi labore sed molestiae perspiciatis rem error nam exercitationem beatae autem eum? Adipisci harum similique earum.</p>
        </div>
      </div>
    </section>       
    </>
  )
}

export default About