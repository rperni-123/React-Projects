import react,{Fragment,Component} from 'react';
import "./Header.css" 

class Header extends Component {
    constructor() {
        super()

        this.state = {
            title : "Edureka",
            keyword: "user input here"
        }       
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({keyword: event.target.value?event.target.value:'user input here'})
        this.props.userText(event.target.value)
    }

    render() {
        return (
        
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div id="test" style={{color:'white', fontSize:'15px'}}>{this.state.keyword}</div>
                    </center>
                    <hr/>
                </header>                
            </Fragment>       
            
        )
    }

}


// const Header = () => {
//     return (
        
//         <Fragment>
//             <center>
//                 <h1>Edureka</h1>
//             </center>
//             <hr/>
//             </Fragment>
        
        
//     )
// }
export default Header;