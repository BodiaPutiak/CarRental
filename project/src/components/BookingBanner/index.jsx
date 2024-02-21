import './index.scss';
import QuickRentalCards from '../HomePage/QuickRentalCards';
import TopBanner from '../TopBanner';
import aboutMain from '../../assets/img/about-main.jpg';
import carSide from '../../assets/img/side-car.png';
import carRepair from '../../assets/img/car-repair.png';
import carInGarage from '../../assets/img/car-in-garage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone
} from '@fortawesome/free-solid-svg-icons';

function BookingBanner() {
    return (
        <div className="booking-banner">
            <div className="overlay"></div>
            <div className="banner-info">
                <h3>Book a car by getting in touch with us</h3>
                <div className='phone-number'>
                    <FontAwesomeIcon icon={faPhone} color='#ff4d30' />
                    <p>(123)-456-789</p>
                </div>
            </div>
        </div>
    )
}


export default BookingBanner;
