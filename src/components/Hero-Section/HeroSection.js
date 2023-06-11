import React from 'react';
import '../../App.css';

import './heroSection.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/water3.mp4' autoPlay loop muted className='hero-video' /> */}
      {/* <h1>Drinking Clean Water </h1>
      <p>is essential for maintaining good health.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        <Link to='/store' className='hero-btns1'>
        Place Order
        </Link>
          
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
        <Link to='/about' className='hero-btns1'>
        WHAT WE DO <i className='far fa-play-circle' />
        </Link>
          
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;