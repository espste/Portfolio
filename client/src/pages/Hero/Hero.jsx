import './hero.css';
import profile from '../../images /meg.jpg';
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import { useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
  //tsParticles
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])
  //typewriter
  const {text} = useTypewriter({
    words: ['Espen', 'Stensland', 'Student', 'Web', 'Developer'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 500,
  });

  const cvIconClicked = () => {
    alert('Coming Soon!');
  };

  return (
    <>
      <div className="hero">  
        <div id="tsparticles">
          <Particles
            options={particlesOptions} 
            init={particlesInit} 
          />
        </div>
          
          <div className="fullName">
            <h1>{text}</h1>
          </div>

          <div className="cv">
            <span>
              <b>CV:&nbsp;</b>
              <a href="/#" target="_blank" rel="noreferrer">
                <i 
                  className="fas fa-file-pdf" 
                  id="cv-icon"
                  onClick={cvIconClicked}
                ></i>
              </a>
            </span>
          </div>

          <div className="personalInfo">
              <div className="personalInfo-details">
                <div className="info">
                  <label htmlFor='name'>Fullname: </label>
                  <h4>Espen Stensland</h4>
                </div>
                <div className="info">
                  <label htmlFor='occupation'>Occupation: </label>
                  <h4>Student Web Developer</h4>
                </div>
                <div className="info">
                  <label htmlFor='email'>Email: </label>
                  <h4>espste1337@gmail.com</h4>
                </div>
              </div>{/* /detail */}

            <div className="personalInfo-img">
              <img src={profile} alt="profile" />
            </div>  

          </div>{/* /personalInfo */}
      </div>
    </>
  )
}

export default Hero;