import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/banner.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1> Donut King </h1>
        <p> DONUT TO FIT ANY TASTE </p>

        <Link to='/menu'>
          <button> ORDER NOW </button>
        </Link>

      </div>
    </div>
  );
}

export default Home;
