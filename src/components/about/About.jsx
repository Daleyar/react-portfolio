import React from 'react'
import './about.css'
import ME from '../../assets/headshot.png'
import {FaAward} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt='Headshot' />
          </div>
        </div>

        <div className="about-content">
          <div className="about-card-group">
            <article className='about-card'>
              <FaAward className='about-icon>' />
              <h5>Experience</h5>
              <small>~2 years Working</small>
            </article>

            <article className='about-card'>
              <AiFillGithub className='about-icon>' />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>

          <p>
          As an early career Full Stack Developer, I am passionate about creating scalable and well-documented software that meets user needs. I excel at working collaboratively with others but can also drive projects forward independently. I take pride in my deep expertise in programming languages, development tools, and industry best practices. I remain dedicated to staying up-to-date with the latest industry trends and creating innovative solutions that deliver real value to end-users.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Connect!</a>
        </div>
      </div>
    </section>
  )
}

export default About