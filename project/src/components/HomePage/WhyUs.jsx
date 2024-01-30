import './index.scss';
import CrossCountryIcon from '../../assets/img/cross-country-icon.png';
import InclusivepricingIcon from '../../assets/img/inclusive-pricing-icon.png';
import NoHiddenChargesIcon from '../../assets/img/no-hidden-charges.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleRight
} from '@fortawesome/free-regular-svg-icons';



function WhyUs(){
    return (
        <section className='why-us-section'>
            <div className="why-us-text-container">
                <h5>Why Choose Us</h5>
                <h1>Best valued deals you will ever find</h1>
                <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                <button className='primary-button'>
                    Book Your Ride
                    <FontAwesomeIcon icon={faArrowAltCircleRight} color='white' />
                </button>
            </div>
            <div className="why-us-list">
                <div className="reason-container">
                    <div className="reason-img-container">
                        <img src={CrossCountryIcon} alt="Cross country icon" />
                    </div>
                    <div className="reason-text-container">
                        <h3>Cross Country Drive</h3>
                        <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                    </div>
                </div>
                <div className="reason-container">
                    <div className="reason-img-container">
                        <img src={InclusivepricingIcon} alt="Inclusive pricing icon" />
                    </div>
                    <div className="reason-text-container">
                        <h3>All Inclusive Pricing</h3>
                        <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                    </div>
                </div>
                <div className="reason-container">
                    <div className="reason-img-container">
                        <img src={NoHiddenChargesIcon} alt="No hidden charges icon" />
                    </div>
                    <div className="reason-text-container">
                        <h3>No Hiddeng Charges</h3>
                        <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhyUs;