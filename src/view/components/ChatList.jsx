import { Search } from "@chatscope/chat-ui-kit-react";
import FriendList from "./FreindList.jsx";
import Container from "@material-ui/core/Container";
import Data from "./ChatListData.json";

const ChatList = ({ updateChatScreen}) => {
  const click = (friend) => {
    updateChatScreen(friend);
  }

  return (
    <Container style={{ innerWidth: "100vw" }}>
      <Search placeholder="Search..." style={{ margin: "20px 0" }} />
      {Data.map(friend => {
        return <FriendList {...friend} handler={() => click(friend)} key={friend.email}/>
      })}
    </Container>
  );
};

export default ChatList;
