import React from 'react';
import './Style.css';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div class="row" id="buttonPadding">                
                <div class="col-md-4">
                    <button class="btn btn-default" id="btnStyle">Upcoming Movies</button>
                </div>
                <div class="col-md-4">
                    <Link to="/LatestMovies">
                    <button class="btn btn-default" id="btnStyle">Latest Movies</button>
                    </Link>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-default" id="btnStyle">Nearby Events</button>
                </div>
            </div>

            {/* image slider code */}

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                {/* <!-- Wrapper for slides --> */}
                <div class="carousel-inner">
                    <div class="item active">
                        <img id="imgStyle" src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4595/674595-h"/>
                    </div>
                    <div class="item">
                        <img id="imgStyle" src="https://i.ytimg.com/vi/Sb5aNbjnNoc/maxresdefault.jpg"/>
                    </div>

                    <div class="item">
                        <img id="imgStyle" src="https://images.hdqwalls.com/wallpapers/wonder-woman-2017-hd-ad.jpg"/>
                    </div>
                </div>

            {/* <!-- Left and right controls --> */}
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>                            
            </div>

            {/* Recommended Movies code */}
            <hr/>
            <div>
                <center><h4>Recommended Movies</h4></center>
            </div>
            
            <div class="row">
                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="https://bloggyblogger.com/wp-content/uploads/2022/03/RRR-Full-Movie-Download-in-hindi-480p-1.jpg"/>
                        <div class="caption">
                            <button id="bookBtn" class="btn btn-success">Book</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="https://www.pinkvilla.com/imageresize/vd_4_0.jpg?width=752&format=webp&t=pvorg"/>
                        <div class="caption">
                            <button id="bookBtn" class="btn btn-success">Book</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="https://www.pinkvilla.com/imageresize/jai_bhim_out_of_oscar.jpg?width=752&format=webp&t=pvorg"/>
                        <div class="caption">
                            <button id="bookBtn" class="btn btn-success">Book</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="https://cdn.lifestyleasia.com/wp-content/uploads/sites/7/2022/01/05170924/MV5BYWFmYWEzMzItOWNjZC00NjExLWFiMzktYWU1NzY5NjdjNzgyXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_-e1641382840951-1024x957.jpg"/>
                        <div class="caption">
                            <button id="bookBtn" class="btn btn-success">Book</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home