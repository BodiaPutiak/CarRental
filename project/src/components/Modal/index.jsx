import './index.scss';
import mainCar from '../../assets/img/main-car.png';
import { usePopUp } from '../../context/PopUpContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMultiply,
    faInfoCircle,
    faLocationPin,
} from '@fortawesome/free-solid-svg-icons';

function Modal(){
    const {
        handleCar, 
        handleCloseButton,
        openPopUp,      
        setDropOff, 
        setDropTime, 
        setPickTime, 
        setPickUp,
        pickUp,
        pickTime, 
        carType,
        dropOff,
        dropTime,
        carImg,
        handleOpenPopUp
    } = usePopUp();
    return (
        <div className={`background-overlay ${openPopUp ? 'show' : ''}`}>
            <div className='pop-up'>
                <div className="modal-header">
                    <h2>COMPLETE YOUR RESERVATION</h2>
                    <button onClick={handleCloseButton}>
                        <FontAwesomeIcon icon={faMultiply} color='#fff'/>
                    </button>
                </div>
                <div className="sub-header">
                    <h3>
                        <FontAwesomeIcon icon={faInfoCircle} color='#FF4C30'/>
                        Upon completing this reservation enquiry, you will receive:
                    </h3>
                    <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
                </div>
                <div className="wraper">
                    <div className="container">
                        <h3>
                            Location & Date
                        </h3>
                        <div className="info-icon-container">
                            <FontAwesomeIcon icon={faLocationPin} />
                            <div className="info-container">
                                <p>Pick-Up Date & Time</p>
                                <div className="info">
                                    {pickTime} / <input type="time" />
                                </div>
                            </div>
                        </div>
                        <div className="info-icon-container">
                            <FontAwesomeIcon icon={faLocationPin} />
                            <div className="info-container">
                                <p>Drop-Off Date & Time</p>
                                <div className="info">
                                    {dropTime} / <input type="time" />
                                </div>
                            </div>
                        </div>
                        <div className="info-icon-container">
                            <FontAwesomeIcon icon={faLocationPin} />
                            <div className="info-container">
                                <p>Pick-Up Location</p>
                                <div className="info">
                                    {pickUp}
                                </div>
                            </div>
                        </div>
                        <div className="info-icon-container">
                            <FontAwesomeIcon icon={faLocationPin} />
                            <div className="info-container">
                                <p>Drop-Off Location</p>
                                <div className="info">
                                    {dropOff}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="car-container">
                        <h3>Car - {carType}</h3>
                        <img src={carImg} alt="" />
                    </div>
                </div>
            </div>
            {/* <p>{carType}</p>
                    <p>{pickUp}</p>
                    <p>{dropOff}</p>
                    <p>{pickTime}</p>
                    <p>{dropTime}</p> */} 
        </div> 
    )
}
export default Modal;