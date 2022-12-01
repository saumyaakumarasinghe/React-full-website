import React from 'react'
import { Link } from 'react-router-dom'
// import BannerImage from '../assets/d.webp'
import BannerImage from '../assets/banner.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1> Hey there!.. </h1> 
        <h1> Welcome to donut king </h1>
        <p> Let it rain donuts and wait for the sunshine!</p>

        <Link to='/menu'>
          <button> TRY NOW </button>
        </Link>

      </div>
    </div>
  );
}

export default Home;
