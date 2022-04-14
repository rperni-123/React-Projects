import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Enquire from './Enquire';
import CourseAPI from './CourseAPI'

const Routing = () => {
    return(     
        <div className="container">
        <BrowserRouter>        
            <CourseAPI/>
            <Route  path="/Enquire" component={Enquire}/>
                     
        </BrowserRouter>
        </div>
    )
}

export default Routing;