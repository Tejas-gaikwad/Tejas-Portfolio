import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
import {FaAward, } from "react-icons/fa"
import {FiUsers} from 'react-icons/fi'
import {AiFillFolder} from 'react-icons/ai'


const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h1>About Me</h1>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="" /> 
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/> 
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
        

           
            <article className='about_card'>
              <FiUsers className='about_icon'/> 
              <h5>Clients</h5>
              <small>300+ worldwide</small>   
            </article>
        

           
            <article className='about_card'> 
              <AiFillFolder className='about_icon'/> 
              <h5>Projects</h5>
              <small>50+</small>
            </article>
            </div> 

            <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace
            </p>         

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about  