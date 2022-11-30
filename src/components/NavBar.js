import React from 'react'
import Logo from '../assets/iceCreamLogo.jpg'                   //Import logo picture 


function NavBar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}/> 
        </div>
        <div className='rightSide'></div>
    </div>
  )
}

export default NavBar
