import { useState} from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Today from "@material-ui/icons/TodayOutlined.js";
import Event from "@material-ui/icons/ViewDayOutlined.js";
import Chat from "@material-ui/icons/ChatBubbleOutlineOutlined.js";
import Setting from "@material-ui/icons/TuneOutlined.js";
import {useHistory} from "react-router-dom";

const BottomNav = () => {
  let history = useHistory();

  const [selected,setSelected] = useState(0);
  function setLocation(currentIndex) {
    switch (currentIndex) {
      case 0:
        history.push("/create");
        setSelected(currentIndex);
        break;
      case 1:
        history.push("/moments");
        setSelected(currentIndex);
        break;
      case 2:
        history.push("/connect");
        setSelected(currentIndex);
        break;
      case 3:
        history.push("/options");
        setSelected(currentIndex);
        break;
      default:
        break;
    }
  }

  return (
    <BottomNavigation
      className="bottom_nav"
      onChange={(_original_index,current_index)=>setLocation(current_index)}
      value={selected}
    >
        <BottomNavigationAction icon={<Today />} label="Create" />

        <BottomNavigationAction icon={<Event />} label="Moments" />
     
        <BottomNavigationAction icon={<Chat />} label="Connect" />
     
        <BottomNavigationAction icon={<Setting />} label="Options" />
     </BottomNavigation>
  );
}

export default BottomNav;
