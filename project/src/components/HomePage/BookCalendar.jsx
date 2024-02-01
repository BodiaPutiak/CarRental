import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCarSide, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { usePopUp } from '../../context/PopUpContext';
  

function BookCalendar(){
    const carOptions = [
        'Audi A1 S-Line',
        'VW Golf 6',
        'Toyota Camry',
        'BMW 320 ModernLine',
        'Mercedes-Benz GLK',
        'VW Passat CC',
    ];
    
    const cityOptions = [
        'Warszawa',
        'Kraków',
        'Wrocław',
        'Zielona Góra',
        'Katowice',
        'Gdańsk',
    ];
    
    const {
        handleCar, 
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
        handleOpenPopUp
    } = usePopUp();

    const handleInputChange = (setter) => (e) => setter(e.target.value);

   
    return (
        <section className='calendar-section'>
            <div className="booking-container">
                <h5>Book a Car</h5>
                <div className="message-container">
                    Error
                </div>
                <form>
                    <div className="grid-container">
                        <div className="box-form__car-type">
                            <label>
                                <FontAwesomeIcon icon={faCarSide} /> &nbsp;Car Type <b>*</b>
                            </label>
                            <select value={carType} onChange={handleCar}>
                                <option>Select your car type</option>
                                {carOptions.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })}
                            </select>
                        </div>
                        <div className="box-form__car-pickup">
                            <label>
                                <FontAwesomeIcon icon={faLocationDot} /> &nbsp; Pick Up <b>*</b>
                            </label>
                            <select value={pickUp} onChange={handleInputChange(setPickUp)}>
                                <option>Select your pick up location</option>
                                {cityOptions.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })}
                            </select>
                        </div>
                        <div className="box-form__car-pickup">
                            <label>
                                <FontAwesomeIcon icon={faLocationDot} /> &nbsp; Drop Off <b>*</b>
                            </label>
                            <select value={dropOff} onChange={handleInputChange(setDropOff)}>
                                <option>Select your drop off location</option>
                                {cityOptions.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })}
                            </select>
                        </div>
                        <div className="box-form__car-time">
                            <label>
                                <FontAwesomeIcon icon={faCalendar} /> &nbsp; Pick Up <b>*</b>
                            </label>
                            <input
                                id='picktime' 
                                type="date"
                                value={pickTime} 
                                onChange={handleInputChange(setPickTime)}
                            />
                        </div>
                        <div className="box-form__car-time">
                            <label>
                                <FontAwesomeIcon icon={faCalendar} /> &nbsp; Drop Off <b>*</b>
                            </label>
                            <input
                                id='droptime' 
                                type="date"
                                value={dropTime} 
                                onChange={handleInputChange(setDropTime)}
                            />
                        </div>
                        <div className="box-form__car-button">
                            <button className='primary-button' onClick={handleOpenPopUp}>Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default BookCalendar;