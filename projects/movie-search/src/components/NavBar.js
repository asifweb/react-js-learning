import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation();
  const routePath = location.pathname.split('/')
  
  return (
    <div className="menu">
        <ul>
        <li><Link className={routePath[1] === '' ? 'active' : '' } to="/"><i className="home"></i></Link></li>
        <li><Link className={routePath[1] === 'videos' ? 'active' : '' } to="/videos"><div className="video"><i className="videos"></i><i className="videos1"></i></div></Link></li>
        <li><Link className={routePath[1] === 'reviews' ? 'active' : '' } to="/reviews"><div className="cat"><i className="watching"></i><i className="watching1"></i></div></Link></li>
        <li><Link className={routePath[1] === 'contact' ? 'active' : '' } to="/contact"><div className="cnt"><i className="contact"></i><i className="contact1"></i></div></Link></li>
        <li><Link className={routePath[1] === 'not-found' ? 'active' : '' } to="/not-found"><div className="bk"><i className="booking"></i><i className="booking1"></i></div></Link></li>
        </ul>
    </div>
  )
}

export default NavBar