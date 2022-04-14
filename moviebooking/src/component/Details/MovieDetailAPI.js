import React from 'react';
import axios from 'axios';
import Display from './DetailDisplay';
import JSON from '../../db.json';

// const url = "http://localhost:7222/movies";

class MovieDetalAPI extends React.Component{
    constructor(props){
        super();

        this.state = {
            // detail : ''
            detail : JSON,
            value : props.match.params.id            
        }
    }

    render(){
        return(
            <div style={{marginTop:'100px'}}>
                <Display mvdetail={this.state}/>
            </div>                      
        )
    }

    // componentDidMount(){
    //     let value = this.props.match.params.id
    //     axios.get(`${url}/${value}`).then((res)=>{this.setState({detail:res.data})})
        
    // }

}
export default MovieDetalAPI