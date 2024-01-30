import './index.scss';
import DownloadBanner from '../../assets/img/download-banner-bg.png';
import AppStore from '../../assets/img/appstore.svg';
import GoogleApp from '../../assets/img/googleapp.svg';

function Download(){
    return (
       <section className="download-section">
            <div className="download-text-container">
                <h1>Download our app to get most out of it</h1>
                <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                <div className="download-button-container">
                    <button>
                        <img src={GoogleApp} alt="Get it on Google" />
                    </button>
                    <button>
                        <img src={AppStore} alt="Download on the App Store" />
                    </button>
                </div>
            </div>
            <div className="download-banner-container">
               <img src={DownloadBanner} alt="" />
            </div>
       </section>
    )
}
export default Download;