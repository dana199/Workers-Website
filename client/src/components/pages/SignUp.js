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
  const handleChange = (event) =>{ setcity(event.target.value); };
  const [PhoneNumber,setPhoneNumber] =  useState('');
  const [servesesoffered,setservesesoffered] =  useState('');
  const handlechange2 =(event) =>{setservesesoffered(event.target.value);};
  const [Email,setemail] =  useState('');
  const [password,setpassword] =  useState('');
  const [resetpassword,setresetpassword] =  useState('');

  const [img,setimg] =useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');


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
 
  const imageHandler = ((e) => {
    const reader = new FileReader();
    reader.onload= () =>{
      if(reader.readyState === 2){
        this.setState({img: reader.result})
    }
    }
    reader.readAsDataURL(e.target.files[0])
  });
 
  return (
    <div className="cont">
    <div className="Page">
    <div className="containerr">
      <div className="img-holder">
        <img src={img} alt="" id="img" className="img" />
      </div>
      <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
      <div className="label">
      <label className="image-upload" htmlFor="input" onChange={(e)=>{setimg(e.target.value)}}>
        <i className="material-icons">add_photo_alternate</i>
        Choose your Photo
      </label>
      </div>
    </div>
  </div>
    
    <div className="container">
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
        <select  name ="city" value={city} label="city" onChange={handleChange}>
          <option>Nablus</option>
          <option>Jenin</option>
          <option>Ramallah</option>
          </select>
      
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
        <select name="services" value={servesesoffered} onChange={handlechange2}>
          <option>Electricals</option>
          <option>Carpentry</option>
          <option>furniture transfare</option>
          <option>painting</option>
          <option>Cleaning</option>
          <option>plumping</option>
          <option>Car Washing</option>
          <option>Air condition</option>
          <option>Blacksmith</option>
          </select>

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

    </div>
  );
}

export default Register;
