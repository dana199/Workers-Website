import React ,{useState,useEffect} from "react";
import "./SignUp.css";
import { Link,useHistory } from "react-router-dom";
import Axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

function Register(props) {
  let history = useHistory();
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
  const [faceac,setfaceac] = useState('');
  const [Disc,setDisc] = useState('');

  const [img,setimg] =useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
  const [data,setdata] = useState({
          name:'',
          email:'',
          city:'',
          PhoneNumber:''});

  const register = () =>
  {
     Axios.post("insert",{
       Name: Name,
       City: city,
       disc:Disc,
       phoneNumber:PhoneNumber,
       Face:faceac,
       servicesoffered: servesesoffered,
       Email: Email,
       password:password,
       resetpassword:resetpassword,
     
       
     }).then(()=>{
      history.push({pathname:'/UserProfile',state:data});
      alert("successful Insert");
     });
  };
  useEffect (() =>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      console.log(response);
    })
  },[])
 
  const imageHandler = (e) => {
    setimg(URL.createObjectURL(e.target.files[0]))
   /* const reader = new FileReader();
    reader.onload= () =>{
      if(reader.readyState === 2){
        this.setState({img: reader.result})
    }
    }
    reader.readAsDataURL(e.target.files[0])*/
  }
 
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
      <span >  <i className="material-icons">add_photo_alternate</i> </span>
      </label>
      </div>
      <div style={{marginTop:'-7rem' , marginLeft:'1rem'}}> 
      <ColorblackLine/>
        <form action="/UserProfile">
          <div>
       <span> <i class="fas fa-user-circle"></i> </span>
        <label for="name">
          <b>Your Name OR Your Company Name </b>
        </label>
        <input
           icon='user circle'
          type="text"
          placeholder="Enter Your Name OR Your Company Name"
          name="name"
          onChange={(e)=>{setusername(e.target.value)}}
          id="name"
          required
        />
        </div>

        <div>
         <span> <i class="fas fa-city"></i> </span>
         <label for="City">
          <b> City</b>
         </label>
         <select  name ="city" value={city} label="city" onChange={handleChange}>
          <option>Nablus</option>
          <option>Jenin</option>
          <option>Ramallah</option>
          </select>
          <br></br>
          </div>

          <div>
           
         <span> <i class="fas fa-address-card"></i></span>
        <label for="disc">
          <b> Description</b>
         </label>
        <input
          type="text"
          placeholder="Enter Discreption"
          name="disc"
          onChange={(e)=>{setDisc(e.target.value)}}
          id="disc"
          required
        />
      </div>

         <div>
        
         <span> <i class="fas fa-phone-square-alt"></i></span>
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
      </div>

      <div>
         <span> <i class="fab fa-facebook"></i></span>
        <label for="Face">
          <b> Facebook Account</b>
         </label>
        <input
          type="text"
          placeholder="Enter Facebook Account"
          name="Face"
          onChange={(e)=>{setfaceac(e.target.value)}}
          id="Face"
          required
        />
      </div>

      <div>
        <label for="services">
          <b>Services that are offered</b>
        </label>
        <select name="services" value={servesesoffered} onChange={handlechange2}>
          <option>Electricals</option>
          <option>Carpentry</option>
          <option>Furniture transfare</option>
          <option>Painting</option>
          <option>Cleaning</option>
          <option>Plumping</option>
          <option>Car Washing</option>
          <option>Air conditioner</option>
          <option>Blacksmith</option>
          </select>
          <br></br>
       </div>

        <div>
        
        <span><i class="fas fa-envelope-square"></i></span>
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
        </div>

<span><i class="fas fa-key"></i></span>
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

<span><i class="fas fa-key"></i></span>
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
        <button style={{background: 'rgb(39, 134, 212)'}} onClick={register} type="submit" class="registerbtn">
          Sign up
        </button>
        <div style={{paddingLeft:'30%'}} >
          <p >
            Already have an account? <Link to="/log-in">Log in</Link>.
          </p>
        </div>
        
        </form>

      </div>
    </div>
  </div>
    </div>
  );
}
export default Register;
