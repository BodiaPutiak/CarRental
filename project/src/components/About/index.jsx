import './index.scss';
import QuickRentalCards from '../HomePage/QuickRentalCards';
import TopBanner from '../TopBanner';
import BookingBanner from '../BookingBanner';
import aboutMain from '../../assets/img/about-main.jpg';
import carSide from '../../assets/img/side-car.png';
import carRepair from '../../assets/img/car-repair.png';
import carInGarage from '../../assets/img/car-in-garage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone
} from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <section className="about-section">
            <TopBanner header='About'/>
            <div className="wrapper">
                <div className="about-company">
                    <div className="img-container">
                        <img src={aboutMain} alt="" />
                    </div>
                    <div className="text-container">
                        <h5>About Company</h5>
                        <h2>You start the engine and your adventure begins</h2>
                        <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                        <div className="stats-container">
                            <div className="icon-number">
                                <img src={carSide} alt="" />
                                <div className="number">
                                    <h3>20</h3>
                                    <p>Car Types</p>
                                </div>
                            </div>
                            <div className="icon-number">
                                <img src={carInGarage} alt="" />
                                <div className="number">
                                    <h3>80</h3>
                                    <p>Rental Outlets</p>
                                </div>
                            </div>
                            <div className="icon-number">
                                <img src={carRepair} alt="" />
                                <div className="number">
                                    <h3>75</h3>
                                    <p>Repair Shops</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <QuickRentalCards />
            <BookingBanner />
        </section>
    )
}


export default About;
