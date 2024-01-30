import './index.scss';
import { CAR_DATA } from '../../data/CarData';
import { useState } from 'react';


function PickCar(){
    const [selectedCar, setSelectedCar] = useState(CAR_DATA[0]);
    const [loading, setLoading] = useState(false);

    const handleCarImgChange = (car) => {
        if (car !== selectedCar) {
            setLoading(true);
        }
        setTimeout(() => {
            setSelectedCar(car);
            setLoading(false);
        }, 1000)
    }
    return (
        <section className='pick-car-section'>
            <div className="pick-car-title-container">
                <h5>Vehicle Models</h5>
                <h1>Our rental fleet</h1>
                <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            </div>
            <div className="pick-car-vehicles-container">
                <div className="vehicle-buttons-container">
                    {CAR_DATA.map((item, key) => {
                        return (
                            <button onClick={() => {handleCarImgChange(item)}} id={key}>{item.name}</button>
                        )
                    })}
                </div>
                <div className="vehicle-img-container">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        selectedCar && <img src={selectedCar.img} alt={selectedCar} />
                    )}
                </div>
                <div className="vehicle-characteristics-container">
                    {selectedCar && (
                        <ul>
                            <li className='price'><span>${selectedCar.price}</span> / rent per day</li>
                            <li>
                                <span>Model </span>
                                <span>{selectedCar.model}</span>
                            </li>
                            <li>
                                <span>Mark </span>
                                <span>{selectedCar.mark}</span>
                            </li>
                            <li>
                                <span>Year </span>
                                <span>{selectedCar.year}</span>
                            </li>
                            <li>
                                <span>Doors </span>
                                <span>{selectedCar.doors}</span>
                            </li>
                            <li>
                                <span>AC</span>
                                <span>{selectedCar.air}</span>
                            </li>
                            <li>
                                <span>Transmission </span>
                                <span>{selectedCar.transmission}</span>
                            </li>
                            <li>
                                <span>Fuel </span>
                                <span>{selectedCar.fuel}</span>
                            </li>
                        </ul>
                    )}
                    <button className="primary-button">RESERVE NOW</button>
                </div>
            </div>
        </section>
    )
}
export default PickCar;