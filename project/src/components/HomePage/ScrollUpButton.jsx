import './index.scss';
import { useState, useEffect } from 'react';

function ScrollUpButton(){
    const [scrollShow, setScrollShow] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.srollTop;
        setScrollShow(scrollTop > 50)
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () =>
            window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <button className={`scroll-up-button ${scrollShow ? 'show-scroll' : ''}`} onClick={scrollUp}>
            ^
        </button>
    )
}
export default ScrollUpButton;