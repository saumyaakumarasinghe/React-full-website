import React from 'react';
import Insta from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Fb from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Insta/><Twitter/><Fb/><LinkedIn/>
        </div>
        <p> &copy; 2022 donutking.com</p>
    </div>
  )
}

export default Footer
