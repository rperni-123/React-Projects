import React from 'react';

const url = "http://localhost:4111/enquiredetail"

class Enquire extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            emailid: '',
            Mobile: '',
            Query: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})

        // console.log(event.target.name)
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(url,
            {
                method: 'POST',
                headers:{
                    'accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(this.props.history.push('/CourseAPI'))
    }

    handleClose = () => {
        this.props.history.push('/CourseAPI')
    }

    render(){
        return(
           
            <div className="container">    
                
                <div className="modal-dialog" id="reveal-model">
    
                    
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Enter your Queries here!!</h4>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the modal.</p>
                        <form>
                            Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/><br/>
                            EmailId: <input type="email" name="emailid" value={this.state.emailid} onChange={this.handleChange}/><br/><br/>
                            Phone: <input type="phone" name="Mobile" value={this.state.Mobile} onChange={this.handleChange}/><br/><br/>
                            Query: <textarea name="Query" cols="30" rows="5" value={this.state.Query} onChange={this.handleChange}></textarea>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={this.handleClose}>Close</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.handleSubmit}>Submit</button>
                    </div>                   
    
                </div>
                </div>   
                
            </div>
        )
    }
}
export default Enquire;



// export default Enquire