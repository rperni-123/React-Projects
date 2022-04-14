import React from 'react';
import { Link } from 'react-router-dom';


class TicketBooking extends React.Component {
    constructor(props) {
        super();

        this.state = {
            Date: '',
            Time: '',
            seats: '',
            
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {

        localStorage.setItem('details', JSON.stringify(this.state))
        let name = JSON.parse(localStorage.getItem('details'))
        // console.log(name.Date)
        // console.log(typeof(name))
        // this.props.history.push('/FinalBooking')
    }

    render() {
        return (
            <div style={{ marginTop: '100px' }}>
                <h1><center>Book for the show</center></h1>
                <hr style={{ borderTop: "1px solid gray", marginBottom: '50px' }} />
                <form action="/action_page.php">
                    <label htmlFor="date">Select Date:</label>
                    <input type="date" name="Date" value={this.state.Date} onInput={this.handleChange} />
                    <div><b>Select Time:</b>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="Time" id="inlineRadio1" value="10:00AM" onClick={this.handleChange} />
                            <label class="form-check-label" htmlFor="inlineRadio1">10:00AM</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="Time" id="inlineRadio2" value="6:00PM" onClick={this.handleChange} />
                            <label class="form-check-label" htmlFor="inlineRadio2">6:00PM</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="Time" id="inlineRadio3" value="10:00PM" onClick={this.handleChange} />
                            <label class="form-check-label" htmlFor="inlineRadio3">10:00PM</label>
                        </div>
                    </div>
                    <div><b>How many seats:</b>
                        <input type="number" min="1" max="10" name="seats" onInput={this.handleChange} />
                    </div>

                </form>
                <Link to="/FinalBooking">
                <button class="btn btn-success" onClick={this.handleSubmit}>Submit</button>                            
                 
                </Link>
                    
                    
            </div >
        )
    }
}
export default TicketBooking