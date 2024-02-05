import './index.scss';
import TopBanner from '../TopBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone
} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <section className="contact-section">
            <TopBanner header='Contact'/>
        </section>
    )
}


export default Contact;
