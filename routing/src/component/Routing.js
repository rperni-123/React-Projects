import react,{Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';

const Routing = () => {
    
    return(     
        <div className="container">
        <BrowserRouter>        
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Post" component={Post}/>
                <Route path="/Post/:topic" component={PostDetails}/>
                <Route path="/Profile" component={Profile}/>
            <Footer/>        
        </BrowserRouter>
        </div>
    )
}
export default Routing;