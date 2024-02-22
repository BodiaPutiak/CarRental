import './index.scss';
import TopBanner from '../TopBanner';
import BookingBanner from '../BookingBanner';
import John1 from '../../assets/img/John1.png';
import John2 from '../../assets/img/John2.png';
import John3 from '../../assets/img/John3.png';
import John4 from '../../assets/img/John4.png';
import John5 from '../../assets/img/John5.png';
import John6 from '../../assets/img/John6.png';

const teamData = [
    {
      name: 'Sakura Tanaka',
      img: John1, 
      job: 'Customer Service Representative'
    },
    {
      name: 'Mateo Rodriguez',
      img: John2, 
      job: 'Fleet Manager'
    },
    {
      name: 'Aisha Al-Farsi',
      img: John3, 
      job: 'Reservation Specialist'
    },
    {
      name: 'Olga Ivanova',
      img: John4, 
      job: 'Branch Manager'
    },
    {
      name: 'Ravi Patel',
      img: John5, 
      job: 'Marketing Coordinator'
    },
    {
      name: 'Kenjiro Yoshida',
      img: John6, 
      job: 'Maintenance Technician'
    },
];

function OurTeam() {
    return (
        <section className="team-section">
            <TopBanner header='Our Team'/>
            <div className="grid-container">
                {teamData.map((item, id) => {
                    return (
                        <div className="card" key={id}>
                            <div className="img-container">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="text-container">
                                <h3>{item.name}</h3>
                                <p>{item.job}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <BookingBanner />
        </section>
    )
}


export default OurTeam;
