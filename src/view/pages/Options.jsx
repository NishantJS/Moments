import { useState } from "react";
import { signInWithGoogle, signOutWithGoogle } from "../services/firebase.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Switch from '@material-ui/core/Switch';
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Profile from '@material-ui/icons/PersonOutlined';
import Theme from "@material-ui/icons/BrightnessMediumOutlined";
import { useAuthHook } from "../services/firebase.js";
import Loading from "../components/Loading.jsx";

const Options = () => {
  let [isAccountOpen, setAccountOpen] = useState(false);

    const [user, loading, error] = useAuthHook();

    const toRender = loading ? (
      <Loading />
    ) : error || !user ? (
      <ListItem onClick={signInWithGoogle} button>
        <ListItemText primary="Login" />
      </ListItem>
    ) : (
      <ListItem onClick={signOutWithGoogle} button>
        <ListItemText primary="Logout" />
      </ListItem>
    );

  
  return (
    <List>
      <ListItem button onClick={() => setAccountOpen((p) => !p)}>
        <ListItemIcon children={<Profile />} />
        <ListItemText primary="Account" />
      </ListItem>
      <Collapse in={isAccountOpen}>
        <List style={{ paddingLeft: "58px" }}>
          {toRender}
        </List>
      </Collapse>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <Theme />
        </ListItemIcon>
        <ListItemText primary="Theme" />
        <Switch value="Theme" inputProps={{ "aria-label": "Switch Theme" }} />
      </ListItem>
    </List>
  );
}

export default Options;
