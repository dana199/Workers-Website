
import React, { useState,useEffect } from 'react';
import './login.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

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
    const [Email, setemail] = useState("");
    const [password, setPassword] = useState("");

const loginbutt = () => {
  let data={ email:Email,
         password:password }
   Axios.post("http://localhost:3001/login",data).then(res =>{
    if (res.data['error'] != null ){
      alert("Email or password  not found");
    console.log(res.data['error']);
    }
    else {
      alert("login successful");
      history.push({ pathname: '/UserProfile', state: res.data} );// send res.data to userProfile
    }
   })
   .catch(err=>{console.log(err)})
  };
     /* useEffect(() => {
        Axios.get("http://localhost:3001/api/login").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].username);
          }
        });
      }, []);*/
      const handlesubmit = e =>{
        e.preventDefault();
           console.log('works');
      };

    return (
      <div className="Page">
      <div className="containerr">
           <form onSubmit={handlesubmit}>
          <h1>Log in</h1> 
          <ColorblackLine/>
          <span> <i class="fas fa-user-circle"></i> </span>
          <label for="username"><b>User name</b></label>
          <input type='text' placeholder="Enter Email" name="email"
          onChange={(e)=>{setemail(e.target.value)}}
          id="uname" required/>
            
          <span><i class="fas fa-unlock-alt"></i></span>
          <label for="password"><b>Password</b></label>
      <input type='password' placeholder="Enter Password" name="password" 
      onChange={(e)=>{setPassword(e.target.value)}}
       id="psw" required/>
    
     <button type='submit'
      onClick={loginbutt}
      class="registerbtn"
      style={{background: 'rgb(39, 134, 212)'}}
     >Log in </button> 
      <div class="Container signin">
      <p>Don't have an account?<a href="/Sign-Up">Sign up</a>.</p>

      <div class="Container signin">
      <p>Forget passward?<a href="/reset-pass">Reset </a>.</p> </div>
    </div>
  </form>
    </div>
    </div>
  );
}

export default Login;