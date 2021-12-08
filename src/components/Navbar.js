import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logo from "./lol.jpg"
const Navbar = () => {
    return (
<>
<nav>
    <NavLink to="/"><img src={Logo} alt="logo" className="logo"/></NavLink>
    <h2>Aplikacja LOL</h2>
    <div className="navmenu">
    <NavLink to="/home" className={({ isActive }) => (isActive ? "linkactive" : "link")}>Strona Głowna</NavLink>
    <NavLink to="/summoners" className={({ isActive }) => (isActive ? "linkactive" : "link")}>Summoners</NavLink>
    <NavLink to="/2" className={({ isActive }) => (isActive ? "linkactive" : "link")}>2</NavLink>
    <NavLink to="/3" className={({ isActive }) => (isActive ? "linkactive" : "link")}>3</NavLink>
    <NavLink to="/4" className={({ isActive }) => (isActive ? "linkactive" : "link")}>4</NavLink>
    </div>
    <nav className="divbutton">
    <NavLink to='/logowanie' className="button">Rejestracja</NavLink>
    </nav>
</nav>
</>
    )
}

export default Navbar
