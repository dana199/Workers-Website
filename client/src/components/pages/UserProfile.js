import axios from 'axios';
import React, { Component } from 'react';
import './UserProfile.css';
export class UserProfile extends Component {

  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
   /* constructor(props){
    super(props)
    this.state={
      posts:[]
    }

  }*/
 /* componentDidMount(){
    axios.get("http://localhost:3001/api/get")
    .then(response=>{
     console.log(response)
     this.setState({posts:response.data})
    })
    .catch(error=>{
        console.log(error)
    })
  };*/
 
	render() {
   // const{posts} =this.state
    const { profileImg} = this.state
		return (
			<div className="page">
				<div className="container">
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
          </div>

				</div>
			</div>
		);
	}
}

export default UserProfile;