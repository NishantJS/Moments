import {
  Search,
} from "@chatscope/chat-ui-kit-react";
import FriendList from "./FreindList.jsx";
import Container from "@material-ui/core/Container";

const ChatList = ({user}) => {
  return (
    <Container style={{ innerWidth: "100vw" }}>
      <Search placeholder="Search..." style={{ margin: "20px 0" }} />
      <FriendList user={user} />
      <FriendList user={user} />
      <FriendList user={user} />
    </Container>
  );
};

export default ChatList;
