import { useState } from "react";
// import firebase from "firebase/app";
import { signInWithGoogle } from "./firebase.js";
// import "firebase/auth";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Profile from '@material-ui/icons/PersonOutlined';
import Theme from "@material-ui/icons/BrightnessMediumOutlined";
import Switch from '@material-ui/core/Switch';
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

const Options = () => {
  let [isAccountOpen, setAccountOpen] = useState(false);
  
  // const loginUser = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       /** @type {firebase.auth.OAuthCredential} */
  //       const credential = result.credential;

  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // ...
  //       console.log({user})
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       const credential = error.credential;
  //       // ...
  //       console.log({error})
  //     });
  // }

  return (
    <List>
      <ListItem button onClick={()=>setAccountOpen(p=>!p)}>
        <ListItemIcon children={<Profile/>}/>
        <ListItemText primary="Account"/>
      </ListItem>
      <Collapse in={isAccountOpen}>
        <List style={{paddingLeft:"58px"}}>
          <ListItem onClick={signInWithGoogle}>
            <ListItemText primary="Login"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Logout"/>
          </ListItem>
          </List>
      </Collapse>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <Theme />
        </ListItemIcon>
        <ListItemText primary="Theme"/>
        <Switch value="Theme" inputProps={{ "aria-label": "Switch Theme" }} />
      </ListItem>
    </List>
  );
}

export default Options
