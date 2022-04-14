import react,{Fragment} from 'react';
import './Header.css'

const ProductDisplay = (props) => {

    const renderProduct = props.prodData.map(item => {
        return(
            <div id="test1" key={item.id}>
                <ul id="test">
                    <li><img src={item.image} style={{height:100, width:100}}/></li>
                    <li><h3 style={{boxSizing:'content-box', width:'100%', height:'35px', fontSize:'15px'}}>{item.name}</h3></li>
                    <li><p>{item.brand}</p></li>
                </ul>       
                
                
            </div>
        )
    })
    
    return(
        <div>
            {renderProduct}
        </div>
    )
}
export default ProductDisplay;
