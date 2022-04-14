import React from 'react';
import { Link } from 'react-router-dom';

const DetailDisplay = (props) => {
    let mvdata = props.mvdetail.detail   
    let value = props.mvdetail.value    
    const renderMovieDetail = mvdata.map((item) => {
        if(item.id == value){
            let mvname = localStorage.setItem('Title', item.title)
        return (
            <div id="box" key={item.id}>
            <div class="row">
                <div class="col-md-6">
                    <img id="imgdetail" src={item.image} alt="" />
                </div>
                <div class="col-md-6">
                    <h2>Title: {item.title}</h2>
                    <hr style={{ borderTop: "1px solid gray" }} />
                    <h3>Duration: {item.Duration}</h3>
                    <hr style={{ borderTop: "1px solid gray" }} />
                    <h3>Rating: {item.Rating}</h3>
                    <hr style={{ borderTop: "1px solid gray" }} />
                    <h3>Releasing on: {item.Date}</h3>
                </div>
            </div>
            <Link to="/Booking">
            <button style={{ marginTop: '10px' }} id="bookBtn" class="btn btn-success">Book Now</button>
            </Link>
        </div>
        )}
    })
    

    return (
        <div style={{ marginTop: '100px' }}>
            <center><h2>Movie Details</h2></center><hr/>
            {renderMovieDetail}
        </div>
    )
}

export default DetailDisplay