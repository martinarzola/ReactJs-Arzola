import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'
import React, { useState } from 'react'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/' >
            <h2>Ecommerce</h2>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/leche`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Leche</NavLink>
                <NavLink to={`/category/queso`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Queso</NavLink>
                <NavLink to={`/category/Mantequilla`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mantequilla</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar