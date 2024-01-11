import { Link } from "react-router-dom"
import Logo from '../images/shamuil_logo_v3_transparent.png'
import { FaLinkedin, FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"


const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>
                        291 Broadway, Suite 1006 <br/>
                        New York, New York 10007 <br/>
                        Email: <a>Help@NYDefense.org</a> <br/>
                        Tel: (212) 608-2757  |   Fax: (212) 608-1433
                    </p>
                    {/* TODO: make email a hyperlink */}
                    <div className="footer__socials">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/s">Support</Link>
                </article>                                
            </div>
            <div className="footer__copyright">
                <small>	&copy; 2012 MORRIS SHAMUIL | ALL RIGHTS RESERVED </small>
            </div>
        </footer>
    )
}

export default Footer