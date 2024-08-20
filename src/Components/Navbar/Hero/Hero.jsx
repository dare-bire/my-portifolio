import React from 'react';
import './Hero.css';
import img1 from '../../../assets/Profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id = 'home' className='hero'>
      <img src={img1} alt="Profile" />
      <h1><span>I 'm Derartu,</span> a fullstack developer</h1>
      <p>I am a fullstack developer from Ethiopia, with 3 years of experience.</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
