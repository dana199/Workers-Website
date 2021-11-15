
import React, { useState,useEffect } from 'react';
import './login.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();

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

    //const[name,setName]=useState("");
    const [loginStatus, setLoginStatus] = useState("");
    //Axios.defaults.withCredentials = true;

const loginbutt = () => {
   history.push('/UserProfile')
  }
      


      useEffect(() => {
        Axios.get("http://localhost:3001/api/login").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].username);
          }
        });
      }, []);

    return (
        <div class="Container">
           <form>
          <h1>Log in</h1> 
          <ColorblackLine color="black" />
          <label for="username"><b>User name</b></label>
          <input type='text' placeholder="Enter User name" name="username"
          onChange={(e)=>{setUsername(e.target.value)}}
          id="uname" required/>

          <label for="password"><b>Password</b></label>
      <input type='password' placeholder="Enter Password" name="password" 
      onChange={(e)=>{setPassword(e.target.value)}}
       id="psw" required/>
    
     <button type='submit'
      onClick={loginbutt}
      class="registerbtn"
   
     >Log in </button> 
      <div class="Container signin">
      <p>Don't have an account?<a href="/Sign-Up">Sign up</a>.</p>

      <div class="Container signin">
      <p>Forget passward?<a href="/reset-pass">Reset </a>.</p> </div>
    </div>
  </form>
    </div>
  );
}

export default Login;