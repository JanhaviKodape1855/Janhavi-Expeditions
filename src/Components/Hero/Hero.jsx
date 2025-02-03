import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Adventure awaits those who dare to seek it.</h1>
        <p>Our journey together is just beginning—let's explore the unknown. Embark on a journey with us where every step leads to new discoveries.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
