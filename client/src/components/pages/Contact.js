import React,{useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import './Contact.css'

function Contact(){
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [message, setMessage] = useState('');
  const [sent,setsent] = useState(false);
  const submitRequest = async (e) => {
    e.preventDefault();
    let data ={name:name,email:email,phone:phone,message:message};
    axios.post('http://localhost:3001/api/forma',data)
    .then(res=>{ 
       setsent(true);
       resetForm();
      }).catch(()=>{console.log("massege not sentt");})
}
const resetForm=()=>{
   setname('');
   setphone('');
   setEmail('');
   setMessage('');

}
  return (
  <div className="all">
    <div className="contact3 py-5">
    <div className="card-shadow">
        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" className="imge"/>
    </div>
    </div>
    <div className="he"> <h1>Quick Contact</h1>
    <form className="for" onSubmit={submitRequest}>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" placeholder="name" name="name" value={name} onChange={e => setname(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" placeholder="email address" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" placeholder="phone" name="phone" value={phone} onChange={e => setphone(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea className="form-control" rows="3" placeholder="message" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="contactbtn" ><span> SUBMIT</span></button>
                </div>
            </form> 
            <div className="ic">
              <div>
                  <div className="mr-6 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"/>
                  </div>
                  
                    <h6>Address</h6>
                    <p className="">Palestine-<br></br>
                              Ramallah,Nablus,Jenin</p>
                  
                 </div>
                 <div className="ph">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>
                  </div>
                  <div className="">
                    <h6>Phone</h6>
                    <p className="">(+970)0595167258 <br></br>
                    (+970)0599773793
                       </p>
                  </div>
                  </div>
                  <div className="em">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"/>
                  </div>
                  <div className="">
                    <h6 >Email</h6>
                    <p className="">
                    servicesh717@gmail.com
                    </p>
                  </div>
                  </div>


              </div> 
              </div>
    </div>
   
  );
}
export default Contact;