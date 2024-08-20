import React from 'react';
import './About.css';
import img1 from '../../../assets/theme_pattern.svg';
import profile from '../../../assets/Profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={ img1} alt='' />
        </div>
      <div className='about-section'>
        <div className='about-left'>
          <img src={profile} alt='' />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I am an experienced Frontend and Backend developer with over a decode of professional expertise in the field thoughout mycareer.I have had the privilage of collabarating with prestigious,organization,contributing to their success and growth.</p>
            <p>My passion for fullstack development is not only reflected in my extensive experience but also in the enthusiam and dedication I bring to each project.</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS</p>
              <hr style={{ width: '90%' }} />
            </div>
            <div className='about-skill'>
              <p>JavaScript</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className='about-skill'>
              <p>ReactJS</p>
              <hr style={{ width: '90%' }} />
            </div>
            <div className='about-skill'>
              <p>NodeJS</p>
              <hr style={{ width: '80%' }} />
            </div>
            <div className='about-skill'>
              <p>ExpressJS</p>
              <hr style={{ width: '90%' }} />
            </div>
            <div className='about-skill'>
               <p>NextJS</p>
                 <hr style={{ width: '70%' }} />
            </div>
            <div className='about-skill'>
               <p>MongoDB</p>
            <hr style={{ width: '90%' }} />
            </div>
            <div className='about-skill'>
             <p>SQL</p>
             <hr style={{ width: '70%' }} />
             </div>
             <div className='about-skill'>
             <p>Mysql</p>
             <hr style={{ width: '90%' }} />
              </div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
