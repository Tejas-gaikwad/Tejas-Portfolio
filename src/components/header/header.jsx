import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSoocials from './HeaderSoocials'
    
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Tejas Gaikwad</h1>
        <h5 className='text-light'>Full Stack Developer </h5>
        <CTA />
        <HeaderSoocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header