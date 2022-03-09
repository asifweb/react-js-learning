import React from 'react'
import ContactCard from './ContactCard'
import {Link, withRouter} from 'react-router-dom'

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} clickHandler={props.removeContactHandler}/>
        )
    })

  return (
    <div className="ui main container">
      <h2>Contact List
      <Link to="/add" className='ui button blue right floated'>Add Contact</Link>
      </h2>
      <div className='ui celled list container'>
          {renderContactList}
      </div>
    </div>
  )
}

export default withRouter(ContactList)