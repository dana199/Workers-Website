import React, {Component} from 'react';
import './UserProfile.css';
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import  { DateObject } from "react-multi-date-picker";
import Popup from '../popup/popup';

export class UserProfile extends Component {
  constructor(props) {
        super(props)
        this.state = {
         // currentDateTime: Date().toLocaleString(),
          board: Array(Math.pow(2,2)).fill(''),
          sqr: {width:'80px',height:'80px'},
          brd: {width:'200px',height:'200px'},
          values:[1, 2, 3].map((number) =>new DateObject().set({
            day: number,
            hour: number,
            minute: number,
            second: number,})
            ),
            openPopup: false,
            selectedDate:null
        }
        console.log(this.values);
       
      /*  this.state.board[0]=''
        this.onDateChange = this.onDateChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);*/
      }
 
  
     handlepopup=()=>{
        this.setState({openPopup:true});
      }
      handleclose=()=>{
        this.setState({openPopup:false});
      }
      onChangeEvent = event => {
        console.log(event);
        this.setState({ selectedDate: event });
    };

  render(){
    return(
      <div className="page">
        <div className="containe">
      <div className="img-holderr">
        <img  alt="" id="img" className="imgg" src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
        <div><i class="fas fa-envelope-square" ></i> <i class="far fa-bell" style={{margin:'10px'}}> </i><i class="fas fa-user-edit" style={{margin:'10px'}} ></i></div> 
      </div> 
    
      <div className="UserInfo">
         <p className="p">Name of worker</p> 
           <div style={{backgroundColor:'lightgray',width:"80%",height:"0px",textAlign:"center",padding:"1px",margin:"0 auto"}}></div>
            <p style={{margin:'10px'}}>Description</p>
            <p style={{margin:'10px'}}>phone number</p>
            <p style={{margin:'15px'}}>Address</p>

          <div className="label">
             <label className="image-upload1" htmlFor="input">
               <i class="fas fa-upload" onClick={this.handlepopup}></i>
               Upload Your Work 
             </label>
           </div>
      
            <div>
            <DatePicker 
                  value={this.values}
                  multiple
                  format="MM/DD/YYYY HH:mm:ss"
                  render={<Icon/>}
                  plugins={[
                  <TimePicker position="bottom" />,
                  <DatePanel markFocused />,
               ]}
                />
        
              </div>
          </div>
          
       <div style={this.state.brd} className="board"id="board" >
       {this.state.board.map((cell, index) => {
    if (index === 0) {
          return <div
            style={Object.assign({background: `url(https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?s=612x612)`}, this.state.sqr)}
            className="square">
            {cell}
            </div>;
    }
})}
       </div>
      </div>
      {this.state.openPopup && <Popup toggle={this.handlepopup} />}
   
</div>

)
  }
}
export default UserProfile;
