import React ,{useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import './popupreq.scss'
import Card from '../cardreq/cardreq';


function Popupreq(props)
{   const [close, setclose] = useState("");
    const handleClickclose = () => {props.toggle(close);}
    
  return(
    <div class="modal">
    <div class="modal_content">
        <span  onClick={handleClickclose}>
            <FaTimes className="Close" />
        </span>
        <div>
       <Card> </Card>
        </div>
        <div style={{paddingTop:'5%'}}>
       <Card> </Card>
        </div>
        <div style={{paddingTop:'5%'}}>
       <Card> </Card>
        </div>
        <div style={{paddingTop:'5%'}}>
       <Card> </Card>
        </div>
       
       
     </div>
   </div >
  );
}
export default Popupreq;
