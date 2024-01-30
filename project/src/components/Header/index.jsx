import './index.scss'
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';
import Logo from '../../assets/img/logo.png';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMultiply,
    faBars
} from '@fortawesome/free-solid-svg-icons';

function Header(){
    const [scrolling, setScrolling] = useState(false);
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleBurgerMenuButton = () => {
        setOpen(!open);
    };

    const closeMobileNavBar = () => {
        setOpen(false);
    };

    return (
        <header className={scrolling ? 'white-bg' : ''}>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="nav-container">
                <nav className="nav-bar">
                    <NavBar />
                </nav>

                <div className="button-container">
                    <button className='secondary-button'>Sign In</button>
                    <button className='primary-button'>Register</button>
                </div>
            </div>
            <div className={`${open ? 'hide' : ''}`}>
                <button className='burger-menu' onClick={handleBurgerMenuButton}>
                    <FontAwesomeIcon icon={faBars} color='black'/>
                </button>
            </div>

            <nav className={`mobile-nav-bar ${open ? 'show' : ''}`}>
                <div className="logo-cross-container">
                    <img className='mobile-logo' src={Logo} alt="" />
                    <NavLink className='cross' onClick={() => {handleBurgerMenuButton()}}>
                        <FontAwesomeIcon icon={faMultiply} color='black'/>
                    </NavLink >
                </div>
                <MobileNavBar closeMobileNavBar={closeMobileNavBar}/>
            </nav>         
        </header>
    )
}
export default Header;