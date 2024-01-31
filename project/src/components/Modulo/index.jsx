import './index.scss';
import mainCar from '../../assets/img/main-car.png';
import { usePopUp } from '../../context/PopUpContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMultiply
} from '@fortawesome/free-solid-svg-icons';

function Modulo(){
    const { openPopUp, handleCloseButton } = usePopUp()
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
                    <h3>Upon completing this reservation enquiry, you will receive:</h3>
                    <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
                </div>
            </div>
        </div>  
    )
}
export default Modulo;