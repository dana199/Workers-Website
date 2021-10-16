import React ,{useState,useEffect} from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Axios from 'axios';

function Register() {
  const ColorblackLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2.5,
      }}
    />
  );
  const [Name,setusername] =  useState('');
  const [city,setcity] =  useState('');
  const [PhoneNumber,setPhoneNumber] =  useState('');
  const [servesesoffered,setservesesoffered] =  useState('');
  const [Email,setemail] =  useState('');
  const [password,setpassword] =  useState('');
  const [resetpassword,setresetpassword] =  useState('');



  const register = () =>
  {
     Axios.post("http://localhost:3001/api/insert",{
       Name: Name,
       City: city,
       phoneNumber:PhoneNumber,
       servicesoffered: servesesoffered,
       Email: Email,
       password:password,
       resetpassword:resetpassword
     }).then(()=>{
       alert("successful Insert");
     });
  };
  useEffect (() =>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      console.log(response);
    })
  },[])

  /*function handleSubmit(e) {
    e.preventDefault();
    console.log(Name,city,PhoneNumber,servesesoffered,Email,password,resetpassword);
    // clearing the values
    setusername("");
    setcity("");
    setPhoneNumber("");
    setservesesoffered("");
    setemail("");
    setpassword("");
    setresetpassword("");
  }*/

  return (
    <div class="container">
      <form >
        <h1>SIGN UP</h1> <br />
        <p>Please fill your information to create your account.</p> <br />
        <ColorblackLine color="black" />
      
        <label for="name">
          <b>Your Name OR Your Company Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Your Name OR Your Company Name"
          name="name"
          onChange={(e)=>{setusername(e.target.value)}}
          id="name"
          required
        />
        <label for="City">
          <b> City</b>
        </label>
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          onChange={(e)=>{setcity(e.target.value)}}
          id="city"
          required
        />
        <label for="PhoneNumber">
          <b> Phone Number</b>
        </label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="PhoneNumber"
          onChange={(e)=>{setPhoneNumber(e.target.value)}}
          id="PhoneNumber"
          required
        />
      
        <label for="services">
          <b>Services that are offered</b>
        </label>
        <input
          type="text"
          placeholder="Enter Services that are offered"
          name="services"
          onChange={(e)=>{setservesesoffered(e.target.value)}}
          id="services"
          required
        />
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={(e)=>{setemail(e.target.value)}}
          id="email"
          required
        />
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={(e)=>{setpassword(e.target.value)}}
          id="psw"
          required
        />
        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          onChange={(e)=>{setresetpassword(e.target.value)}}
          id="psw-repeat"
          required
        />
        <button onClick={register} type="submit" class="registerbtn">
          Sign up
        </button>
        <div class="container signin">
          <p>
            Already have an account? <Link to="/log-in">Log in</Link>.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
