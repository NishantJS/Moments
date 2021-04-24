import { useState } from "react";
import Calendar from "../components/Calendar";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Add from "@material-ui/icons/Add.js";
import Popup from "../components/Popup";

const Create = () => {
  const styles = {
    margin: 0,
    top: "auto",
    right: 10,
    bottom: 60,
    left: "auto",
    position: "fixed",
  };

  const [date, setDate] = useState(new Date());
  const [isVisible, setVisible] = useState(false)
  
  const onChangeCurrentDate = (newDate) => setDate(newDate);
  const onAddClicked = () => setVisible(p=>!p)
  
  const splitDate = () => {
    let month = "" + (date.getMonth() + 1),
      day = "" + date.getDate(),
      year = date.getFullYear();

    if(month.length < 2) month = "0" + month;
    if(day.length < 2) day = "0" + day;

    return [year, month, day];
  };

  const onFormSubmit = ({ formData }) => {
    let moments = localStorage.hasOwnProperty("moments") ? JSON.parse(localStorage.getItem("moments")) : {};

    const [year, month, day] = splitDate();

    (function checkKeyValue() {
      if (moments) {
        if (moments[year]) {
          if (moments[year][month]) {
            if (moments[year][month][day]) {
            } else moments[year][month][day] = {};
          } else moments[year][month] = { [day]: {} };
        } else moments[year] = { [month]: { [day]: {} } };
      } else moments = { [year]: { [month]: { [day]: {} } } };  
    })()
    
    moments = {...moments, [year]: { ...moments[year], [month]: { ...moments[year][month], [day]: { ...formData }} }}

    localStorage.setItem("moments", JSON.stringify(moments));

    setVisible(p => !p);
  }

  const toRender = isVisible ? <Popup isOpen={isVisible} cancelHandler={onAddClicked} successHandler={onFormSubmit} date={date} formatedDate={splitDate().join("-")}/> : <></>;

  return (
    <>
      {toRender}
      <Calendar onChangeDate={onChangeCurrentDate} />
      <Zoom in={true} timeout={{ enter: 500, exit: 500 }}>
        <Fab style={styles} size="medium" color="primary" onClick={onAddClicked}>
          <Add />
        </Fab>
      </Zoom>
    </>
  );
};

export default Create;
