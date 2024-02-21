import TopBanner from '../TopBanner';
import BookingBanner from '../BookingBanner';
import { CAR_DATA } from '../../data/CarData'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCarSide } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

function Models() {

  return (
    <section className='models-section'>
      <TopBanner header='Vehicle Models'/>
      <div className="grid-container">
        {CAR_DATA.map((item, key) => {
          return (
            <div className="card-container" key={key}>
              <div className="img-container">
                <img src={item.img2} alt="" />
              </div>
              <div className="info-container">
                <div className="left-col">
                  <h3>{item.mark}</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="characteristics">
                    <FontAwesomeIcon icon={faCarSide} />
                    <p>{item.model}</p>
                  </div>
                  <div className="characteristics">
                    <FontAwesomeIcon icon={faCarSide} />
                    <p>{item.transmission}</p>
                  </div>
                </div>
                <div className="right-col">
                  <h3>${item.price}</h3>
                  <p>per day</p>
                  <div className="characteristics">
                    <p>{item.doors}</p>
                    <FontAwesomeIcon icon={faCarSide} />
                  </div>
                  <div className="characteristics">
                    <p>{item.fuel}</p>
                    <FontAwesomeIcon icon={faCarSide} />
                  </div>
                </div>
              </div>
              <div className="button-container">
                <button className="primary-button">
                  Book Ride
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <BookingBanner />
    </section>
  )
}

export default Models
