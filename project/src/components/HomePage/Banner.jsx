import './index.scss';
import MainImg from '../../assets/img/main-image.png'



function Banner(){
    return (
        <section className='banner-section'>
            <div className="banner-text-container">
                <h1>Save big with our affordable car rental!</h1>
                <h2>Top Airporst. Local Suppliers. <span>24/7</span> Support.</h2>
            </div>
            <div className="banner-img">
                <img src={MainImg} alt="" />
            </div>
        </section>
    )
}
export default Banner;