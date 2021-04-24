import React, { useState } from 'react';
import Calender from 'react-calendar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Calender.scss';


const Calendar = ({onChangeDate}) => {
  const [currentDate, setDate] = useState(new Date());
  
  const onDateChange = (newDate) => {
    onChangeDate(newDate);
    setDate(newDate);
  }

  return (
    <>
      <Calender onChange={(newDate)=> onDateChange(newDate)} value={currentDate} />
    </>)
}

export default Calendar;