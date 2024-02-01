import { createContext, useContext, useState, useEffect } from "react";

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
        setOpenPopUp(true)
    }

    const handleCar = (e) => {
        const carTypeValue = e.target.value;
        setCarType(carTypeValue);
        setCarImg(carTypeValue)
    }

    return (
        <PopUpContext.Provider 
        value={{
            handleCar, 
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
            handleCloseButton, 
            handleOpenPopUp
            }}>
            {children}
        </PopUpContext.Provider>
    )
}