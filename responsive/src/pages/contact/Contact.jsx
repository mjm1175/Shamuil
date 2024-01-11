import Header from '../../components/Header'
import HeaderImage from '../../images/alt_park1.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'


const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusamus fuga reiciendis, nihil fugit illo facilis cupiditate porro ullam ab dolor nam omnis nulla in consequatur eligendi inventore laboriosam explicabo.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@egattor.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="http://m.me/ernest_achiever" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+233557097546" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact