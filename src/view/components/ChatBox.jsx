import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer} from "@chatscope/chat-ui-kit-react";
import Chats from "./Chats.jsx";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Add from "@material-ui/icons/Add.js";
import ChatList from "./ChatList.jsx";

const ChatBox = ({ user }) => {
  
  const { email, uid, displayName, photoURL } = user;
  
  const userData = { email, uid, displayName, photoURL };
  
  return (
    <div
      style={{
        height: "calc(100vh - 110px)",
      }}
    >
      <MainContainer>
        <ChatList user={userData}/>
        {/* <Chats user={userData}/> */}
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
