import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleRight,
    faCheckCircle
} from '@fortawesome/free-regular-svg-icons';
import heroBg from '../../assets/img/hero-bg.png';
import mainCar from '../../assets/img/main-car.png';


function Hero(){
    return (
        <section className='hero-section'>
            <div className="hero-text-container">
                <h5>Plan your trip now</h5>
                <h1>Save <span>big</span> with our car rental</h1>
                <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                <div className="hero-button-container">
                    <button className='primary-button'>
                        Book Ride
                        <FontAwesomeIcon icon={faCheckCircle} color='white'/>
                    </button>
                    <button className='tetrary-button'>
                        Learn More
                        <FontAwesomeIcon icon={faArrowAltCircleRight} color='white'/>
                    </button>
                </div>
            </div>
            <div className="hero-img-container">
               <img className='bg' src={heroBg} alt="" />
               <img className='car' src={mainCar} alt="" />
            </div>
        </section>
    )
}
export default Hero;