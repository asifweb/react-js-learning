import React from 'react'
import userImg from '../images/user.png'
import { Link, withRouter} from 'react-router-dom'

const ContactCard = ({contact, clickHandler}) => {
  
  return (
    <div className="item">
        <img src={userImg} alt="userimg" className='ui avatar image' />
        <div className="content">
          <Link to={{
            pathname:`/contact/${contact.id}`,
            state: {contact}
          }}>
            <div className="header">{contact.name}</div>
            <div>{contact.email}</div>
          </Link>
        </div>
            <i className="trash alternate outline icon right floated" style={{color: "red", marginTop: "7px"}} onClick={(e)=> clickHandler(contact.id)}></i>
    </div>
  )
}

export default withRouter(ContactCard)