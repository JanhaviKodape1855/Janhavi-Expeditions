import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-button.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Exploring New Extraordinary Horizons</h2>
        <p>At Janhavi-Expeditions, we believe in more than just journeys—we offer life-changing experiences that connect you with nature, challenge your limits, and push you towards new discoveries. Whether you're an experienced adventurer or a first-time explorer, our expeditions are tailored to your unique spirit of adventure.</p>
        <p>Every adventure is unique, and so are you. We offer customized expeditions designed around your preferences, whether it’s hiking, mountaineering, kayaking, or cultural exploration. Let us curate your perfect experience, whether you're seeking a thrilling challenge or a serene escape into nature.</p>
        <p>Our seasoned guides are more than just experts in their field—they’re passionate adventurers who share your love for exploration. With years of experience navigating diverse terrains, they’ll ensure that your safety and satisfaction come first, while also inspiring you with their vast knowledge of the environment and culture.</p>
      </div>
    </div>
  )
}

export default About
