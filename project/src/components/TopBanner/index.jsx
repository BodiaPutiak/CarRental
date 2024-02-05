import './index.scss';


function TopBanner(props) {
    return (
        <div className="hero-banner-bg">
            <div className="overlay"></div>
            <h2>{props.header}</h2>
        </div> 
    )
}


export default TopBanner;
