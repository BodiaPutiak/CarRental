import './index.scss';
import TopBanner from '../TopBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone
} from '@fortawesome/free-solid-svg-icons';

function OurTeam() {
    return (
        <section className="team-section">
            <TopBanner header='Our Team'/>
        </section>
    )
}


export default OurTeam;
