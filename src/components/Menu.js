import React from 'react'
import './Menu.css'
const Menu = ({toggleMenu, setToggleMenu}) => {
    return (
        <div className = {'menu ' + (toggleMenu && 'active')}>
            <ul>
                
                <a href = '#home'><li>Home</li></a>
                <a href = '#about'><li>About</li></a>
                <a href = '#projects'><li>Projects</li></a>
                <a href = '#contact'><li>Contact</li></a>
            </ul>
            
        </div>
    )
}

export default Menu
