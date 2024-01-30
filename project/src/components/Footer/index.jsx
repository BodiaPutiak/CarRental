import './index.scss';
import Logo from '../../assets/img/logo.png';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';


function Footer(){
    return (
        <footer>
             <div className="contact-info-container">
                <img src={Logo} alt="" />
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                <div className="number">
                    <FontAwesomeIcon icon={faPhone} color='black' />
                    <h5>+48 123 456 789</h5>
                </div>
                <div className="mail">
                    <FontAwesomeIcon icon={faEnvelope} color='black' />
                    <h5>carrental@gmail.com</h5>
                </div>
                <p>Design by Bogdan Putiak</p>
             </div>
             <div className="company-navigation-container">
                <h5>COMPANY</h5>
                <p>Warsaw</p>
                <p>Careers</p>
                <p>Mobile</p>
                <p>Blog</p>
                <p>How do we work?</p>
             </div>
             <div className="working-hours-container">
                <h5>WORKING HOURS</h5>
                <p>Mon - Fri: 9:00AM - 9:00PM</p>
                <p>Sat: 9:00AM - 19:00PM</p>
                <p>San: Closed</p>
             </div>

             <div className="subscription-container">
                <Form />
             </div>
        </footer>
    )
}
export default Footer;