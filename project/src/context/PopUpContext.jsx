import { createContext, useContext, useState, useEffect } from "react";
import { CAR_DATA } from '../data/CarData';

const PopUpContext = createContext();

export function usePopUp() {
    return useContext(PopUpContext);
}

export function PopUpProvider({children }) {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [carType, setCarType] = useState('');
    const [carImg, setCarImg] = useState('');
    const [pickUp, setPickUp] = useState('');
    const [dropOff, setDropOff] = useState('');
    const [pickTime, setPickTime] = useState('');
    const [dropTime, setDropTime] = useState('');
    const [error, setError] = useState('');

    if (openPopUp) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    const handleCloseButton = () => {
        setOpenPopUp(false);
    }

    const handleOpenPopUp = (e) => {
        e.preventDefault();
        if (!carType || !pickUp || !dropOff || !pickTime || !dropTime) {
            setError('Please fill in all required fields.')
            return
        };
        
        const pickTimeDate = new Date(pickTime);
        const dropTimeDate = new Date(dropTime);
        const today = new Date().toLocaleDateString();

        if (pickTimeDate >= dropTimeDate) {
            setError('Please choose correct date.');
            return
        } else if (today >= pickTimeDate || today >= dropTimeDate) {
            setError('Please choose correct date.')
            return
        }
        setOpenPopUp(true);
        setError('');
    }

    const handleCar = (e) => {
        const carTypeValue = e.target.value;
        const targetCar = CAR_DATA.find((car) => car.name === carTypeValue);
        setCarType(carTypeValue);
        setCarImg(targetCar.img);
    }

    const handleCloseError = () => {
        setError('');
    }

    return (
        <PopUpContext.Provider 
        value={{
            handleCar, 
            handleCloseError,
            handleCloseButton, 
            handleOpenPopUp,
            openPopUp,  
            setCarImg, 
            setCarType, 
            setDropOff, 
            setDropTime, 
            setPickTime, 
            setPickUp,
            pickUp,
            pickTime, 
            carType,
            carImg,
            dropOff,
            dropTime,
            error
            }}>
            {children}
        </PopUpContext.Provider>
    )
}