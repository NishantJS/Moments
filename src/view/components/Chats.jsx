import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  ConversationHeader,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import { useState, useRef } from "react";
import { firestore, useAuthHook, serverStore, useCollections } from "../services/firebase.js";

const Chats = ({ email, displayName, photoURL, updateChatScreen }) => {
  const [messageInputValue, setMessageInputValue] = useState("");
  const [username,] = email.split("@");
  const [firstname, lastname] = displayName.split(" ");
  const [user] = useAuthHook();

  const getInitials = () => {
    let initials = "";
    let [first] = firstname.split("");
    if (lastname) {
      let [last] = lastname.split("");
      initials = first + last;
    } else {
      initials = first;
    }
    return initials;
  };

  let [me,] = user.email.split("@");
  let docName = [me, username].sort().join("");
  const messageRef = firestore.collection(`user/messages/${docName}`);
  // const query=messageRef
  //   .collection([me, username].sort().join(""))
  //   .orderBy("createAt")
  //   .limit(25);
  
  // const [
  //   messages
  // ] = useDocumentData( {
  //   idField: `chats/${[me, username].sort().join("")}`,
  // });
  
  console.log({ pp: useCollections(`user/messages/${docName}`) });
  const sendMessage = async (value) => {
    await messageRef.add({
      text: value,
      createAt: serverStore.serverTimestamp(),
      user: me
    });
  
    setMessageInputValue("")
  }

  return (
    <ChatContainer>
      <ConversationHeader>
        <ConversationHeader.Back onClick={updateChatScreen}/>
        <Avatar src={photoURL} name={getInitials()} />
        <ConversationHeader.Content userName={displayName} info={`@${username}`} />
        <ConversationHeader.Actions>
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
          <Avatar src={photoURL} name={getInitials()} />
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
        onChange={(value) => setMessageInputValue(value)}
        onSend={(value)=>sendMessage(value)}
      />
    </ChatContainer>
  );
}

export default Chats
