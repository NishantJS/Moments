import {Conversation, Avatar} from "@chatscope/chat-ui-kit-react"

const FriendList = ({ user }) => {
  const {uid, email, photoURL, displayName } = user;
  return (
    <Conversation name={displayName} lastSenderName="You" info="Hello Nishant">
      <Avatar src={photoURL} name="Nishant" status="available" />
    </Conversation>
  );
}

export default FriendList;
