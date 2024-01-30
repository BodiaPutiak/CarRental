import './index.scss';
import contactOperatorIcon from '../../assets/img/contact-operator-icon.png';
import letsDriveIcon from '../../assets/img/lets-drive-icon.png';
import selectCarIcon from '../../assets/img/select-car-icon.png';

function QuickRentalCards(){
    return (
        <section className='quick-rental-cards-section'>
            <div className="plan-title-container">
                <h5>Plan your trip now</h5>
                <h1>Quick & easy car rental</h1>
            </div>
            <div className="cards-grid">
                <div className='card'>
                    <img src={selectCarIcon} alt="Select car icon" />
                    <h5>Select Car</h5>
                    <p>We offer a wide range of vehicles for all your driving needs. We have the perfect car to meet your deepest desires.</p>
                </div>
                <div className='card'>
                    <img src={contactOperatorIcon} alt="Contact operator icon" />
                    <h5>Contact Operator</h5>
                    <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns.</p>
                </div>
                <div className='card'>
                    <img src={letsDriveIcon} alt="Let's drive icon" />
                    <h5>Let's Drive</h5>
                    <p>Whether you're hitting the open road, we've got you covered with our wide range of cars.</p>
                </div>
            </div>
        </section>
    )
}
export default QuickRentalCards;