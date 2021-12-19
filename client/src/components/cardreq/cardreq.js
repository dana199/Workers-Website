import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import PoPUp from "../pop/pop"
import './cardreq.scss';

function Cardreq(props) {
    const [pressed, setPressed] = useState(false);
    const PopUp = () => { setPressed(!pressed) }
    return (
        <div className="Card">
            <div style={{paddingTop:'5%',paddingLeft:'5%'}}>
                <h>Name</h><br></br>
                <h>Title</h><br></br>
                <h>City</h>
            </div>
            <div className="Add">
                    <button
                       onClick={PopUp}
                        className="Icon">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            {props.name}
            {pressed && <PoPUp toggle={ PopUp} />} 
        </div>
         
    );
}

export default Cardreq;