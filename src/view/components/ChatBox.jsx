import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";
import {MainContainer} from "@chatscope/chat-ui-kit-react";
import Chats from "./Chats.jsx";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Add from "@material-ui/icons/Add.js";
import ChatList from "./ChatList.jsx";

const ChatBox = ({ user }) => {
  const { email, displayName, photoURL } = user;
  const [chatScreen, setChatScreen] = useState({isActive: false, email: false, displayName: false, photoURL: false});

  const updateChatScreen = ({ email = false, displayName = false, photoURL = false }) => {
    if (email && photoURL && displayName) {
      setChatScreen({ isActive: true, email, displayName, photoURL });
    } else {
      setChatScreen({isActive: false, email : false, displayName : false, photoURL : false })
    }
  }

  const props = { email, displayName, photoURL, updateChatScreen};

  const toRender =
    chatScreen.isActive && email && displayName ? (
      <Chats email={chatScreen.email} displayName={chatScreen.displayName} photoURL={chatScreen.photoURL} updateChatScreen={updateChatScreen}/>
    ) : (
      <ChatList {...props} />
    );

  return (
    <div
      style={{
        height: "calc(100vh - 110px)",
      }}
    >
      <MainContainer>
        {toRender}
        <Zoom in={true} timeout={{ enter: 500, exit: 500 }} style={{position: "absolute", bottom: "10px", right: "10px"}}>
          <Fab
            size="medium"
            color="primary"
            onClick={() => console.log(Math.floor(Math.random()*1000))}
          >
            <Add />
          </Fab>
        </Zoom>
      </MainContainer>
    </div>
  );
};

export default ChatBox;
