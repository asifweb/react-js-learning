import React from 'react'
import {withRouter} from 'react-router-dom'

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    };
    handleForm = e => {
        e.preventDefault()
        if(this.state.email == '' || this.state.name == '') {
            alert('All fields are required')
        }
        this.props.handleAddContact(this.state)
        this.setState({name: "", email: ""})
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="ui main container">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.handleForm} >
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" placeholder='Name' value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" placeholder='Email' value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default withRouter(AddContact)