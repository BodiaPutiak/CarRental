import './index.scss';
import TopBanner from '../TopBanner';
import Testemonial from '../HomePage/Testemonial';
import BookingBanner from '../BookingBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone
} from '@fortawesome/free-solid-svg-icons';

function Testemonials() {
    return (
        <>
            <TopBanner header='Testemonials' />
            <Testemonial />
            <BookingBanner />
        </>
            
    )
}


export default Testemonials;
