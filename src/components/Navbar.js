import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logo from "./lol.jpg"
const Navbar = () => {
    return (
<>
<nav>
<a href='https://www.leagueoflegends.com'>
    <img src={Logo} alt="logo" className="logo"/>
    </a>
    <a href='/home'>
        <h2>League of Legends <br/> Player Stats</h2>
    </a>
    
    <div className="navmenu">
    <NavLink to="/home" className={({ isActive }) => (isActive ? "linkactive" : "link")}>Strona Głowna</NavLink>
    <NavLink to="/summoners" className={({ isActive }) => (isActive ? "linkactive" : "link")}>Summoners</NavLink>
    
    <NavLink to="/Autorzy" className={({ isActive }) => (isActive ? "linkactive" : "link")}>Autorzy</NavLink>
    
    </div>
    <nav className="divbutton">
    
    </nav>
</nav>
</>
    )
}

export default Navbar
