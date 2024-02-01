import './index.scss';
import Hero from './Hero';
import BookCalendar from './BookCalendar';
import QuickRentalCards from './QuickRentalCards';
import Banner from './Banner';
import WhyUs from './WhyUs';
import Testemonials from './Testemonials';
import Faq from './Faq';
import Download from './Download';
import PickCar from './PickCar';
import ScrollUpButton from './ScrollUpButton';
import Modal from '../Modal';

function Home(){
    return (
        <main>
            <Modal />
            <ScrollUpButton />
            <Hero />
            <BookCalendar />
            <QuickRentalCards />
            <PickCar />
            <Banner />
            <WhyUs />
            <Testemonials />
            <Faq />
            <Download />
        </main>
    )
}
export default Home;