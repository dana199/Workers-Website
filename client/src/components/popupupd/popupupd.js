import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './popupupd.scss'
import axios from 'axios'
function Popupupd(props)
{    const [close, setclose] = useState("");
     const handleClickclose = () => {props.toggle(close);}

     const [Name,setusername] =  useState('');
     const [city,setcity] =  useState('');
     const [PhoneNumber,setPhoneNumber] =  useState('');
     const [Email,setemail] =  useState('');
     const [Description,setDescription] =  useState('');

     const update = () =>
     {
        axios.post("http://localhost:3001/update",{
          Name: Name,
          City: city,
          phoneNumber:PhoneNumber,
          Email: Email,
          Description:Description
        }).then(()=>{ alert("successful Insert");});
     };

  return(
    <div class="modal">
    <div class="modal_content">
        <span onClick={handleClickclose}>
            <FaTimes className="Close" />
        </span>
        <label>Name: </label>
        <input
            onChange={(e)=>{setusername(e.target.value)}}
            name="name"
            placeholder="Ahmad Saleh"
           
        />
         <label>Email: </label>
        <input
            onChange={(e)=>{setemail(e.target.value)}}
            name="email"
            placeholder="Ahmad@gmail.com"
         
        />
        <label>City: </label>
        <input
            onChange={(e)=>{setcity(e.target.value)}}
            name="city"
            placeholder="Nablus"
         
        />
        <label>Phone Number: </label>
        <input
            onChange={(e)=>{setPhoneNumber(e.target.value)}}
            name="phonenumber"
            placeholder="0599773793"
           
        />
          <label>Description: </label>
        <input
            onChange={(e)=>{setDescription(e.target.value)}}
            name="Description"
            placeholder=" I am 28 years old and I studied for the Tawjihi stage"
           
        />
        <button
            className="UpdateButton"
            onClick={update}
            >
            Update
        </button>
     </div>
   </div >
  );
}
export default Popupupd;
