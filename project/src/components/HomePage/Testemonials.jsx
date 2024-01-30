import './index.scss';
import HarryPotterImg from '../../assets/img/harry-potter-image.jpg';
import RonRizzlyImg from '../../assets/img/ron-rizzly-image.jpg';
import Quotes from '../../assets/img/quotes-img.png';

function Testemonials(){
    return (
        <section className='testemonials-section'>
            <div className="testemonials-title-container">
                <h5>Reviewed by People</h5>
                <h1>Client's Testemonials</h1>
                <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className="testemonials-container">
                <div className="testemonial-card">
                    <div className="testemonial-text">
                        <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                    </div>
                    <div className="author-container">
                        <div className="author-img-container">
                            <img src={HarryPotterImg} alt="Harry Potter image" />
                        </div>
                        <div className="author-info">
                            <h5>Parry Hotter</h5>
                            <h6>Warsaw</h6>
                        </div> 
                    </div>
                    <img className='quotes' src={Quotes} alt="" />                       
                </div>
            </div>
        </section>
    )
}
export default Testemonials;