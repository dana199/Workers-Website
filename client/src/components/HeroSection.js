import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

class HeroSection extends Component {
  
 componentDidMount=()=>{ 
  const config ={
    headers:{ Authorization: 'Bearer' + localStorage.getItem('token')  }
  };
   
  axios.get('user',config).then(
    res =>{
      console.log(res);
    },
    err =>{
      console.log(err);
    }
  )}
  render(){
  return (
   
    <div className='hero-container'>
      <h1>WELCOME</h1>
      <p>Do you want to be member with us?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Join Us
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}
}
export default HeroSection;