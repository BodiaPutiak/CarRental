import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MiniCooperBg from '../../assets/img/mini-cooper-image-bg.png';

function Faq(){
    const [openQuestionIds, setOpenQuestionIds] = useState([]);

    const handleFaqDropDownButton = (id) => {
        setOpenQuestionIds((prevIds) => {
            if (prevIds.includes(id)) {
                return prevIds.filter((prevId) => prevId !== id)
            } else {
                return [...prevIds, id];
            }
        })
    }

    const faqs = [
        {
            id: 1,
            question: '1. What is CarRental?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi incidunt, iste nisi neque cupiditate ut ad ea est at impedit excepturi libero, delectus possimus consectetur! Aliquam officia quae fugit nihil! Repellat nostrum consectetur minima, dolorem fuga animi labore? Libero sit assumenda vitae numquam at cumque enim placeat quisquam excepturi.'
        }, 
        {
            id: 2,
            question: '2. How can I request a new car?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi incidunt, iste nisi neque cupiditate ut ad ea est at impedit excepturi libero, delectus possimus consectetur! Aliquam officia quae fugit nihil! Repellat nostrum consectetur minima, dolorem fuga animi labore? Libero sit assumenda vitae numquam at cumque enim placeat quisquam excepturi.'
        },
        {
            id: 3,
            question: '3. Is there a mobile app?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi incidunt, iste nisi neque cupiditate ut ad ea est at impedit excepturi libero, delectus possimus consectetur! Aliquam officia quae fugit nihil! Repellat nostrum consectetur minima, dolorem fuga animi labore? Libero sit assumenda vitae numquam at cumque enim placeat quisquam excepturi.'
        },
        {
            id: 4,
            question: '4. What about other car rentals?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi incidunt, iste nisi neque cupiditate ut ad ea est at impedit excepturi libero, delectus possimus consectetur! Aliquam officia quae fugit nihil! Repellat nostrum consectetur minima, dolorem fuga animi labore? Libero sit assumenda vitae numquam at cumque enim placeat quisquam excepturi.'
        },
    ]
    return (
        <section className='faq-section'>
            <img className='mini-cooper-bg' src={MiniCooperBg} alt="" />
            <div className="faqs-container">
                <div className="faq-title-container">
                    <h5>FAQ</h5>
                    <h1>Frequently Asked Questions</h1>
                    <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
                </div>
                <div className="faqs">
                    {faqs.map((faq) => (
                        <div className="question-and-answer-container" key={faq.id}>
                            <div className={`question ${openQuestionIds.includes(faq.id) ? 'active' : ''}`} onClick={() => handleFaqDropDownButton(faq.id)}>
                                {faq.question}
                                <FontAwesomeIcon className={`${openQuestionIds.includes(faq.id) ? 'active-arrow' : ''}`} icon={faChevronDown} color='black'/>
                            </div>
                            <div className={`answer ${openQuestionIds.includes(faq.id) ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Faq;