import React from 'react';
import './styling.css';
import {Link} from 'react-router-dom';
import Enquire from './Enquire'

const CourseDisplay = (props) => {
    const renderCourse = ({courselist}) => {
        console.log(courselist)
        if(courselist){
            return courselist.map((item) => {
                return(
                   <div id="card" key={item.id}>  
                   <center><h1>{item.name}</h1></center>                   
                    <hr/>     
                    <h3>Live classes</h3>
                    <h3>weekends</h3> 
                    <Link to="/Enquire">                 
                    <button>Enquire</button>
                    </Link>                    
                   </div>
                )
            })
        }
        
    }

    return (
        <>
        
       <div className="mainDiv"> 
                 
           {renderCourse(props)}
       </div>
        </>
    )
}
export default CourseDisplay