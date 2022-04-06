import React from 'react'
import {images} from '../utils/images'

const Header = () => {
  return (
    <div className="top-header">
        <div className="logo">
        <a href="index.html"><img src={images['logo.png']} alt="" /></a>
        <p>Movie Theater</p>
        </div>
        <div className="search">
        <form>
            <input type="text" placeholder="Search.."/>
            <input type="submit" value="" />
        </form>
        </div>
        <div className="clearfix"></div>
    </div>
  )
}

export default Header