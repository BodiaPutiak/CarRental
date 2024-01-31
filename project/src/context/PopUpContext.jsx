import { createContext, useContext, useState, useEffect } from "react";

const PopUpContext = createContext();

export function usePopUp() {
    return useContext(PopUpContext);
}

export function PopUpProvider({children }) {
    const [openPopUp, setOpenPopUp] = useState(false);

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
    return (
        <PopUpContext.Provider value={{openPopUp, handleCloseButton, handleOpenPopUp}}>
            {children}
        </PopUpContext.Provider>
    )
}