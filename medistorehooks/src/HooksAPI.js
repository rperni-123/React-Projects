import React,{useState,useEffect} from 'react';
import Display from './Display';
import axios from 'axios'

const url = "http://localhost:4111/Medical";

function HooksAPI(){
    const [title] = useState('Medical Store');
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get(`${url}`)
        .then((res) => {setProducts(res.data)})
        console.log(products)
    })
   

    return(
        <div>
            <center><h1>{title}</h1></center><hr/>
            <Display prodlst={products}/>
        </div>
    )
}

export default HooksAPI