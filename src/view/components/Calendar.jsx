import React, { useState } from 'react';
import Calender from 'react-calendar';


import '../../styles/Calendar.scss';


const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ margin: 4 }}>


      <Calender onChange={onChange} value={value} />
    </div>

  );
}

export default Calendar;