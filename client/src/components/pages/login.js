
import React, { useState,useEffect } from 'react';
import './login.css';
import Axios from 'axios';

function Login() {

    const ColorblackLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2.5
            }}
        />
    );
const [uname,setusername] =  useState('');
const [psw,setpass] =  useState('');
const loginbutt= () =>{
Axios.post('http://localhost:3000/')
};
    return (
        <div class="container">
           <form>
          <h1>Log in</h1> 
          <ColorblackLine color="black" />
          <label for="uname"><b>User name</b></label>
          <input type='text' placeholder="Enter User name" name="uname"
          onChange={(e)=>{setusername(e.target.value)}}
          id="uname" required/>

          <label for="psw"><b>Password</b></label>
      <input type='password' placeholder="Enter Password" name="psw" 
      onChange={(e)=>{setpass(e.target.value)}}
       id="psw" required/>
      <button type='submit'
      onClick={loginbutt}
      class="registerbtn">Log in </button>

      <div class="container signin">
      <p>Don't have an account?<a href="/Sign-Up">Sign up</a>.</p>

      <div class="container signin">
      <p>Forget passward?<a href="/reset-pass">Reset </a>.</p> </div>
    </div>
  </form>
    </div>
  );
}

export default Login;