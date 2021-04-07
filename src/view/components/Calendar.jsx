import React, { useState } from 'react';
import Calender from 'react-calendar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Calendar.css';


const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return ( 
  <div>
    
    
    <Calender onChange={onChange} value={value} />
  </div>
  
   );
}
 
export default Calendar;