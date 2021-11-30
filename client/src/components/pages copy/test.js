import React,{useState} from "react";

function Test(){
  const [date, setdate] = useState();
  return(
      <>
      <h1>SELECTED DATE: {date}</h1>
      <input type="date" onChange={e=>setdate(e.target.value)}/> 
      </>
  );
}
export default Test;