import React, {useState} from 'react';
import './UserProfile.css';
import Popup from '../popup/popup';
import PopUp from "../popupupd/popupupd";
import PoPUp from "../popupreq/popupreq";
import DatePicker from "react-multi-date-picker";
import MultipleDatePicker from 'react-multiple-datepicker';

//import { useLocation } from 'react-router';

function UserProfile ({}) {
  //const{name,email,city,PhoneNumber}=(location &&location.state) || {};
 
  /* constructor(props)
      {super(props)
        this.state = { openPopup: false,}
        const location = useLocation();
        this.userInfo = { } } */
        
      //popup Edit
    const [pressed, setPressed] = useState(false);
    const HandlePopUp = () => { setPressed(!pressed) }

      //popup Upload image
    const [openPopup, setopenPopup] = useState(false);
    const handlepopup=()=>{setopenPopup(!openPopup);}

     //popup Requests
    const [openreq, setopenreq] = useState(false);
    const handlepopupreq=()=>{setopenreq(!openreq);}
    
    //calender
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [values, setValues] = useState([today, tomorrow])
    
    //try to put icon calender
     const mult=()=>{<DatePicker multiple value={values} onChange={setValues}/>}
  
     //render(){
     //console.log('this.props.userInfo'+ this.location.userInfo);

     return(
      <div className="page">
        <div className="containe">
          <div className="img-holderr">
             <img  alt="" id="img" className="imgg" src="https://us.123rf.com/450wm/photochicken/photochicken2104/photochicken210400085/167621352-confident-asian-male-engineer-worker-standing-arm-crossed-happy-smile-for-enjoy-working-in-factory.jpg?ver=6" />
        <div><i class="far fa-bell" onClick={handlepopupreq}  style={{margin:'10px'}}>
           </i><i class="fas fa-user-edit" onClick={HandlePopUp} style={{margin:'10px'}} >
             </i> <i class="fas fa-upload" onClick={handlepopup}></i> </div>   
           </div> 
    
      <div className="UserInfo">
         <p className="p" style={{paddingBottom:".1%"}}>Ahmad Saleh</p> 
           <div style={{backgroundColor:'lightgray',width:"80%",height:"0px",textAlign:"center",padding:"1px",margin:"0 auto"}}></div>
            <p style={{margin:'8px'}}>Ahmad@gmail.com</p> 
            <p style={{margin:'8px'}}>Nablus</p> 
            <p style={{margin:'9px'}}>0599773793</p>
            <p style={{margin:'9px'}}> I am 28 years old and I studied for the Tawjihi stage</p>
            <div>
           
            {/* <FaCalendarAlt className="icon" /> */}
             {/*<MultipleDatePicker onSubmit={dates => console.log('selected date', dates[0])}/>*/}
                 <span style={{paddingRight:"1%"}}><i class="fas fa-calendar-week" ></i></span> 
               <span><DatePicker multiple value={values} onChange={setValues}/> </span>
              </div>
              <div><h>My Work</h></div>
              <div style={{display:'flex',flexDirection:'row'}}>
              <img  alt="" id="img" className="IMG" src="https://new-girls.ws/wp-content/uploads/2016/06/20160616-356.jpg" />
              <img  alt="" id="img" className="IMG" src="https://www.universe-magic.com/images/2018/11/wall-paints_2260_9_1541064457.jpg" />
              <img  alt="" id="img" className="IMG" src="https://www.universe-magic.com/images/2018/10/wall-paints_2260_10_1541016602.jpg" />
              <img  alt="" id="img" className="IMG" src=" https://blog.homestars.com/wp-content/uploads/2020/02/5ca5dc2d-52d6-4497-9c22-22e8771eb51e_what_do_interior_painters_do.jpg"/>
              </div>
          </div>
      </div>
      {openPopup && <Popup toggle={handlepopup} />} 
      {pressed && <PopUp toggle={HandlePopUp} />}
      {openreq && <PoPUp toggle={handlepopupreq}/>}
</div>
);}
    
   
export default UserProfile;
