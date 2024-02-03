import './index.scss';

function PersonalInfo(){
    return (
        <div className="personal-info">
            <h3>PERSONAL INFORMATION</h3>
            <form>
                <div className="form-group">
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" className="half-column" placeholder='First Name' required />
                    </div>
                    
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Second Name:</label>
                        <input type="text" id="lastName" name="lastName" className="half-column" placeholder='Second Name' required />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-wrapper">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" className="half-column" placeholder='Phone Number' required />
                    </div>
                    
                    <div className="input-wrapper">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" className="half-column" placeholder='Age' required />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-wrapper">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className="full-column" placeholder='Email' required />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-wrapper">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" className="full-column" placeholder='Address' required />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-wrapper">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" className="half-column" placeholder='City' required />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input type="text" id="zipCode" name="zipCode" className="half-column" placeholder='Zip Code' required />
                    </div>
                </div>
                <div className="news-letter-check">
                    <input type="checkbox" id="newsCheckbox" name="newsCheckbox" />
                    <label htmlFor="newsCheckbox">
                        Please send me latest news and updates
                    </label>
                </div>
                <div className="button-wraper">
                    <button type="submit">RESERVE NOW</button>
                </div>
            </form>
        </div>
    )
}
export default PersonalInfo;