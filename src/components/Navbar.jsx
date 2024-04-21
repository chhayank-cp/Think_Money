import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <nav className='main-nav'>
        <div className='logo'>
           <h2>
           <span>T</span>hink
            <span>M</span>oney
           </h2>
        </div>


        <div className='menu-link'>
            <ul>
               <li>
               <Link to="/">Home</Link>
                </li> 
                <li>
                <Link to="/Investment">Investment</Link>
                </li> 
                <li>
                <Link to="/Advice">Advice</Link>
                </li> 
                <li>
                <Link to="/Team">Team</Link>
                </li> 
            </ul>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar
