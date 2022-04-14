import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import MovieAPI from './LatestMovies/MovieAPI';
import MovieDetails from './Details/MovieDetailAPI';
import TicketBooking from './Booking/TicketBooking';
import FinalBooking from './Booking/FinalBooking'

const Routing = () => {
    return(
        <div className='container'>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/LatestMovies" component={MovieAPI}/>
                <Route path="/MovieDetails/:id" component={MovieDetails}/>
                <Route path="/Booking" component={TicketBooking}/>
                <Route path="/FinalBooking" component={FinalBooking}/>
            </BrowserRouter>
        </div>
    )
}

export default Routing

