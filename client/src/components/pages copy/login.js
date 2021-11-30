
import React, { useState,useEffect } from 'react';
import './login.css';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';



function Login(props) {
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

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    //const[name,setName]=useState("");
    //const [loginStatus, setLoginStatus] = useState("");
    //Axios.defaults.withCredentials = true;

const loginbutt = () => {

   Axios.post("http://localhost:3001/api/login",{
     email:email,
     password:password,
   }).then(()=>{
    history.push('/UserProfile');
   }).catch((error)=>{
    console.log("Api call error");
 });

   console.log("EEEEEEER");
  };
     /* useEffect(() => {
        Axios.get("http://localhost:3001/api/login").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].username);
          }
        });
      }, []);*/

    return (
      <div className="Page">
      <div className="containerr">
           <form>
          <h1>Log in</h1> 
          <ColorblackLine/>
          <span> <i class="fas fa-user-circle"></i> </span>
          <label for="username"><b>User name</b></label>
          <input type='text' placeholder="Enter User name" name="email"
          onChange={(e)=>{setemail(e.target.value)}}
          id="uname" required/>
            
          <span><i class="fas fa-unlock-alt"></i></span>
          <label for="password"><b>Password</b></label>
      <input type='password' placeholder="Enter Password" name="password" 
      onChange={(e)=>{setPassword(e.target.value)}}
       id="psw" required/>
    
     <button type='submit'
      onClick={loginbutt}
      //onClick={() =>(loginbutt)}
      class="registerbtn"
   
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