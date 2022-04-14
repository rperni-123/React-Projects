import React from 'react';
import LatestMovies from './latestDisplay';
import axios from 'axios';
import JSON from '../../db.json';
// const url = "http://localhost:7222/movies";

class MovieAPI extends React.Component{
    constructor(props){
        super();

        this.state = {
            // moviedata : ''
            moviedata : JSON
        }
    
    }

    render(){
        return(
            <LatestMovies mvlist={this.state.moviedata}/>
        )
    }

    // componentDidMount() {
    //     axios.get(`${url}`).then((res) => {this.setState({moviedata:res.data})})
    // }
}
export default MovieAPI