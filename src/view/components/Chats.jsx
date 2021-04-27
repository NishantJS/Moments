import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  EllipsisButton,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

const Chats = ({ user }) => {
  const [messageInputValue, setMessageInputValue] = useState("");

  return (
    <ChatContainer>
      <ConversationHeader>
        <ConversationHeader.Back />
        <Avatar src={user.photoURL} name="Nishant" />
        <ConversationHeader.Content userName="Nishant" info="Online" />
        <ConversationHeader.Actions>
          <VoiceCallButton />
          <VideoCallButton />
          <EllipsisButton orientation="vertical" />
        </ConversationHeader.Actions>
      </ConversationHeader>
      <MessageList>
        <MessageSeparator content={new Date().toLocaleDateString()} />
        <Message
          model={{
            message: "Hello",
            sentTime: "15 mins ago",
            sender: "Me",
            direction: "incoming",
            position: "single",
          }}
        >
          <Avatar src={user.photoURL} name="Nishant" />
        </Message>
        <Message
          model={{
            message: "Hello Nishant",
            sentTime: "15 mins ago",
            sender: "Me",
            direction: "outgoing",
            position: "single",
          }}
          avatarSpacer
        />
      </MessageList>
      <MessageInput
        placeholder="Type message here"
        value={messageInputValue}
        onChange={(val) => setMessageInputValue(val)}
      />
    </ChatContainer>
  );
}

export default Chats
