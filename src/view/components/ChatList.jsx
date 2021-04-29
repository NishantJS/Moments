import { Search } from "@chatscope/chat-ui-kit-react";
import FriendList from "./FreindList.jsx";
import Container from "@material-ui/core/Container";

const ChatList = ({ photoURL, email, displayName, updateChatScreen}) => {
  let props = { email, displayName, photoURL };

  const click = () => {
    updateChatScreen({
      email: "ishant79@gmail.com",
      displayName: "ishanttt h",
      photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14GjGSxffFAqHYK9t01vMvWWD1zYVn1WJzVPE9EQCrg=s96-c",
    });
  }

  return (
    <Container style={{ innerWidth: "100vw" }}>
      <Search placeholder="Search..." style={{ margin: "20px 0" }} />
      <FriendList {...props}/>
      <FriendList {...props} email="nishant@gmail.com" displayName="Nis"/>
      <FriendList {...props} email="ishant@gmail.com" displayName="ishant " handler={()=>updateChatScreen({email: "ishant@gmail.com"})}/>
      <FriendList {...props} email="ishant79@gmail.com" displayName="ishanttt Ishant" handler={click}/>
      </Container>
  );
};

export default ChatList;
