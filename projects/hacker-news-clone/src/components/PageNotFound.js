import React from 'react'
import {NavLink} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>Page Not found. Go to  <NavLink to="/">Home</NavLink></div>
  )
}

export default PageNotFound