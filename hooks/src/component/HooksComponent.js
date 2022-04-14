import react,{useState,useEffect} from 'react';
import Display from './Display';

const url = "https://developerfunnel.herokuapp.com/location";


function HooksComponent(){
    const [title] = useState('React Hooks app');
    const [count, setCount] = useState(0);
    const [city, setCity] = useState();

    const updateCount = (event) => {
        setCount(count+1)
    }

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) =>{
            setCity(data)
        })
    })
  

    

    return (
        <div>
            <center>
                <h2>{title}</h2>
            </center>            
            <hr/>
            <button onClick={updateCount}>counter</button>
            <h1>{count}</h1>
            <Display myCity = {city}/>
        </div>
    )
}

export default HooksComponent;