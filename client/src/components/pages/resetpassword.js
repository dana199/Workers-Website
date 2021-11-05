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
        <div class="container">
           <form>
          <h1>Reset Password</h1> 
          <ColorblackLine color="black" />
          <label for="cpass"><b>Current password</b></label>
          <input type='text' placeholder="Current password" name="cpass" id="cpass" required/>

          <label for="npass"><b>New password</b></label>
          <input type='password' placeholder="New password" name="npass" id="npass" required/>
          
          <label for="copass"><b>Confirm password</b></label>
          <input type='password' placeholder="Confirm password" name="copass" id="copass" required/>

          <button type='submit' class="resetbtn">Reset Password </button>

</form>
    </div>
  );
}
export default resetpassword;