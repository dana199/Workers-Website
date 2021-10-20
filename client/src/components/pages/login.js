
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

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    Axios.defaults.withCredentials = true;

  const loginbutt = () => {
    Axios.post("http://localhost:3001/api/login",{
      username: username,
      password: password,
       }).then((response)=>{
    if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
  });
      };

      useEffect(() => {
        Axios.get("http://localhost:3001/api/login").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].username);
          }
        });
      }, []);

    return (
        <div class="container">
           <form>
          <h1>Log in</h1> 
          <ColorblackLine color="black" />
          <label for="uname"><b>User name</b></label>
          <input type='text' placeholder="Enter User name" name="uname"
          onChange={(e)=>{setUsername(e.target.value)}}
          id="uname" required/>

          <label for="psw"><b>Password</b></label>
      <input type='password' placeholder="Enter Password" name="psw" 
      onChange={(e)=>{setPassword(e.target.value)}}
       id="psw" required/>
      <button type='submit'
      onClick={loginbutt}
      class="registerbtn" 
      a href="/userprofile">Log in </button>

           <h1>{loginStatus}</h1>

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