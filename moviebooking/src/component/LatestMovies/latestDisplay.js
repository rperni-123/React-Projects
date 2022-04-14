import React from 'react';
import { Link } from 'react-router-dom';

const latestDisplay = (props) => {
  
    const renderMovies = props.mvlist.map((item) => {
        return (
            <div class="col-md-3" key={item.id}>
                <div class="row">
                    <div class="thumbnail" style={{ marginLeft: '30px' }}>
                        <img src={item.image} />
                        <div class="caption">
                            <Link to={`/MovieDetails/${item.id}`}>
                                <button id="bookBtn" class="btn btn-success">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div style={{ marginTop: '100px' }}>
            <center><h2>Latest Movies</h2></center><hr />
            {renderMovies}
        </div>
    )
}

export default latestDisplay