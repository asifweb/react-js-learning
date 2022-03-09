import React from 'react'
import user from '../images/user.png'
import { useLocation, Link } from 'react-router-dom';

const ContactDetail = (props) => {
    const location = useLocation()
    const { state: {contact}} = location
  return (
    <div className='ui main container'>
        <div className="ui card centered">
            <div className="image">
                <img src={user} alt="user" />
            </div>
            <div className="content">
                <div className="header">{contact.name}</div>
                <div className="description">{contact.email}</div>
            </div>
        </div>
        <div className="center-div">
            <Link to="/" className="ui button blue center">Back to Contact List</Link>
        </div>
    </div>
  )
}

export default ContactDetail