import React from 'react';
import Display from './CourseDisplay';


const url = "http://localhost:4111/coursedetail"

class CourseAPI extends React.Component {
    constructor(props) {
        super()

        this.state = {
            courses:''
        }        
    }

    render(){
        return (
            
            <div>
                <center><h1>Online Courses</h1></center>
                <hr/>   
                
                <Display courselist={this.state.courses}/>             
            </div>
        )
    }

   

    componentDidMount(){
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{this.setState({courses:data})})
        .catch((err)=>{console.log(err)})
    }
}
export default CourseAPI