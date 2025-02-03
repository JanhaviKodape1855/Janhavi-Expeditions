import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/test-1.jpg'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/test-3.jpg'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Ankita Wankhede</h3>
                            <span>Explorer, Hiking Enthusiast</span>
                        </div>
                    </div>
                    <p>"The expedition was beyond anything I could have imagined. From the moment we set foot on the trail, every step felt like a new chapter of an adventure story. The guides were incredibly knowledgeable, and the scenery—breathtaking.Can't wait for the next journey!"</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>David L. </h3>
                            <span>First-Time Adventurer</span>
                        </div>
                    </div>
                    <p>"What a journey! This wasn't just a trip; it was an opportunity to challenge myself, connect with nature, and meet amazing people. The personalized approach to the expedition made it feel like it was designed just for me. Highly recommend it to anyone looking for an adventure!"</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Gayatri Kolte</h3>
                            <span>Veteran Traveler

</span>
                        </div>
                    </div>
                    <p>"As someone who's traveled extensively, this was by far one of the best experiences I’ve had. The team made sure every detail was taken care of, and the level of sustainability in their expeditions made me feel good about the impact we left behind. Truly unforgettable!"</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Alex B.</h3>
                            <span>Adventure Seeker</span>
                        </div>
                    </div>
                    <p>"The best part of this adventure was the sense of camaraderie. I went with strangers, but by the end, we were all family. The landscape was stunning, and the guides were second to none. Every moment was a highlight. If you're looking for something real, this is it."</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
