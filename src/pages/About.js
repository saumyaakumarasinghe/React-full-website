import React from 'react';
// import DonutAbout from '../assets/PizzaAbout.jpg';
import DonutAbout from '../assets/DonutAbout.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{backgroundImage: `url(${DonutAbout})`}}
      ></div>
      <div className='aboutBottom'>
        <h1>ABOUT US </h1>
        <p> We, do have donuts, situated at Athurugiriya, Sri Lanka. DonutKing is the most popular
            donut outlet in the country, serving lip smacking donut to our connoisseurd. We ensure
            that our food enthrals all our customers and leave then coming back for more. Each of 
            our food items is made using the best of ingredients that leave a memorable aftertase. 
            Order for our delicious donut today and you won't be disappointed! You can order donuts
            online using our social media and visit our store. </p>
      </div>
    </div>
  )
}

export default About
