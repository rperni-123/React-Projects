import React from 'react';
import { Route, Link} from 'react-router-dom'

class Product extends React.Component {
    
Products = ({match}) => {
    return(
    <p>{match.params.id}</p>
    )
}

render() {
    return (
        <div>
        <h1>Product</h1>
        <h3>select a Product</h3>
        <Link to="/Product/Secret, Alchemist, SCOOP">Books</Link>&nbsp;<br/>
        <Link to="/Product/Addgel, Trimax, Cello">Pen</Link>
        <Route path= "/Product/:id" component ={this.Products} />
        </div>
        )
    }
}
export default Product