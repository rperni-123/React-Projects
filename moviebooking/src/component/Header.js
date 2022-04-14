import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-inverse navbar-default navbar-fixed-top">
                <div class="container">
                    <Link class="navbar-brand" to="/">Movie Booking</Link>
                    <form class="navbar-form navbar-right" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                        {/* <button type="submit" class="btn btn-default">Submit</button> */}
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header