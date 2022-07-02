import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubMenu} = useGlobalContext()
  //const data=useGlobalContext();
  //console.log(data);//data coming form contex js

  return (
    <section className="hero" onMouseOver={closeSubMenu} >
      <div className="hero-center">
        <article className='hero-info'>
        <h1>Payments infrastructure for the internet</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Asperiores, itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className='phone-img'/>
        </article>
      </div>
    </section>
  )
}

export default Hero
