import {Conversation, Avatar} from "@chatscope/chat-ui-kit-react"

const FriendList = ({ displayName, email, photoURL, handler }) => {

  let [username] = email.split("@");

  return (
    <Conversation name={displayName} info={`@${username}`} onClick={handler}>
      <Avatar src={photoURL} name="Nishant" status="available" />
    </Conversation>
  );
}

export default FriendList;
