import './index.scss';

function Form(){
    return (
        <form>
            <h5>SUBSCRIPTION</h5>
            <p>Subscribe to our news letter for the latest updates.</p>
            <input type='email' placeholder='Email'/>
            <button className='primary-button'>SUBSCRIBE</button>
        </form>
    )
}
export default Form;