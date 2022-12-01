import React from 'react'
import Logo from '../assets/iceCreamLogo.jpg'                   //Import logo picture 
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='navbar'> 

        <div className='leftSide'>
            <img src={Logo}/> 
        </div>

        <div className='rightSide'>
          <Link to='/'> Home </Link>
          <Link to='/menu'> Menu </Link>
          <Link to='/about'> About </Link>
          <Link to='/contact'> Contact </Link>
        </div>
        
    </div>
  )
}

export default NavBar
