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
import Modulo from '../Modulo';

function Home(){
    return (
        <main>
            <Modulo />
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