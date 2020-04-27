import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosAddCircleOutline } from 'react-icons/io'

import './Header.css'

const Header = ({}) => {
  return (
    <header className="header">
      <NavLink className="navLink" activeStyle={{ color: '#f1e3f3' }} to="/">
        <h3 className="logo">CDTimer</h3>
      </NavLink>
      <NavLink
        className="navLink"
        activeStyle={{ color: '#f1e3f3' }}
        to="/add-event"
      >
        <IoIosAddCircleOutline />
      </NavLink>
    </header>
  )
}

export default Header
