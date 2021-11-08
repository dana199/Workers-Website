
import React, { Component } from 'react';
import './UserProfile.css';
export class UserProfile extends Component {

  render(){
   const ColorblackLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 2.5,
        }}
      />
    );
    return(
      <div className="page">
<div className="containe">
      <div className="img-holderr">
        <img  alt="" id="img" className="imgg" />
      </div> 
      <p className="p">Name of worker</p> 
      <ColorblackLine color="black" />
</div>
</div>
)
  }
}
export default UserProfile;
