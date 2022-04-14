import React from 'react';
import { render } from 'react-dom';
import './style.css'

const Display = (props) => {
    const renderProducts = ({prodlst}) =>{
        if(prodlst){
            return prodlst.map((item) => {
                return(
                    <div key={item.id}>
                        <div className='card col-md-3'>
                            <div className='row'>
                                <img src={item.image} alt=""/>
                                <span className='topTemp'>
                                    {item.name}
                                </span><br/>
                                <div className="card-body">
                                    <h4>cost: {item.cost}</h4>
                                </div>                                
                            </div>
                        </div>                  
                    </div>
                )
            })
        }
    }


   return(
       <div className="container">
           {renderProducts(props)}
       </div>
   )
}

export default Display;