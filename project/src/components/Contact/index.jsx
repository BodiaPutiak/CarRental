import './index.scss';
import TopBanner from '../TopBanner';
import BookingBanner from '../BookingBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faLocationArrow
} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <section className="contact-section">
            <TopBanner header='Contact'/>
            <div className="contact-container">
                <div className="info-text-container">
                    <h2>
                        Need additional information?
                    </h2>
                    <p>
                        A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.
                    </p>
                    <div className="info">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>(123)-456-789</p> 
                    </div>
                    <div className="info">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>carrental@gmail.com</p> 
                    </div>
                    <div className="info">
                        <FontAwesomeIcon icon={faLocationArrow} />
                        <p>Warsaw, Poland</p> 
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <label htmlFor="full-name">
                            Full Name<span>*</span>
                        </label>
                        <input type='text' name='full-name' placeholder='Full Name' required />
                        <label htmlFor="full-name">
                            Email<span>*</span>
                        </label>
                        <input type='text' name='email' placeholder='youremal@example.com' required />
                        <label htmlFor="full-name">
                            Tell us about it<span>*</span>
                        </label>
                        <textarea placeholder='Message' name="message" required></textarea>
                        <button className="primary-button" type='submit'>
                            <FontAwesomeIcon icon={faEnvelope} /> Send Message
                        </button>
                    </form>
                </div>
            </div>
            <BookingBanner />
        </section>
    )
}


export default Contact;
