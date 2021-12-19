import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './pop.scss'


function Popup(props) {
    const [close, setclose] = useState("");
    const handleclose = () => {props.toggle(close);}

    return (
        <div class="Modall">
            <div class="Modal_content">
                <span
                    onClick={handleclose}>
                    <FaTimes className="close" />
                </span>
                <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{marginLeft:'80px',marginTop:'230px'}}>
                <button 
                    className="addButton"
                  >
                    Accept
                </button></div>
                <div>
                <button style={{marginLeft:'10px',marginTop:'230px'}}
                    className="addButton"
                   >
                    Decline
                </button>
                </div>
                </div>
            </div>
        </div >
    );
}

export default Popup;