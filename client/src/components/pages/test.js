import React, { useState } from "react";
import MultipleDatePicker from 'react-multiple-datepicker';

 function Test() {

  return   <div>
  < MultipleDatePicker
        onSubmit={dates => console.log('selected date', dates[0])}
        
    />
    </div>;
}
export default Test;