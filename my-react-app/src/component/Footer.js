import react,{Fragment} from 'react';

const Footer = (props) => {
    
    return(
        <Fragment>
            <div style={{position: 'fixed', left: '0', bottom: '0', width: '100%'}}>
            <hr/>
            <center>
                <h3>&copy;  Developer's Funnel {props.year} {props.month}</h3>
            </center>
            </div>
            
        </Fragment>
    )
}
export default Footer;
