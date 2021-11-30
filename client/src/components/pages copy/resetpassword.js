import React from 'react';
import './resetpassword.css';

function resetpassword(){
    const ColorblackLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2.5
            }}
        />
    );
    return (
        <div className="Page">
        <div class="container">
           <form>
          <h1>Reset Password</h1> 
          <ColorblackLine/>
          <span><i class="fas fa-unlock-alt"></i></span>
          <label for="cpass"><b>Current password</b></label>
          <input type='text' placeholder="Current password" name="cpass" id="cpass" required/>

          <span><i class="fas fa-unlock-alt"></i></span>
          <label for="npass"><b>New password</b></label>
          <input type='password' placeholder="New password" name="npass" id="npass" required/>
          
          <span><i class="fas fa-unlock-alt"></i></span>
          <label for="copass"><b>Confirm password</b></label>
          <input type='password' placeholder="Confirm password" name="copass" id="copass" required/>

          <button type='submit' class="resetbtn">Reset Password </button>

</form>
    </div>
    </div>
  );
}
export default resetpassword;