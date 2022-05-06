import React from 'react'
import Logo from '../../images/logo.svg'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_inner_container'>
            <div className='logo_container'>
                <img src = {Logo} alt = "logo" />
                <span className='logoText'>
                    Arctic Travels
                </span>
            </div>
            <ul className='link_container'>
                <li>About Us</li>
                <li>Support</li>
                <li>Language</li>
            </ul>
        </div>
        <button>
            Sign In
        </button>
    </div>
  )
}

export default Navbar