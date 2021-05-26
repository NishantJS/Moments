import {
  ChatContainer,
  MessageList,
  Message,
  Avatar,
  ConversationHeader
} from "@chatscope/chat-ui-kit-react";
import { firestore, useAuthHook, useCollections } from "../services/firebase.js";
import InputMessage from "./InputMessage.jsx";

const Chats = ({ email, displayName, photoURL, updateChatScreen }) => {
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

  let docName = ["user","messages",[me, username].sort().join("")].join("/");
  
  const messageRef = firestore.collection(docName);

  const query = messageRef.orderBy("createAt")
    .limit(10);

  const [messages] = useCollections(docName, query);
    
  const getMessageTime = (date, index) => {
    const [day, time] = date.toLocaleString().split(", ");
    
    if (messages && messages.length>1) {
    
      if (index >= 1) {
        let prevDate = messages[index - 1].createAt.toDate().toLocaleDateString();

        if (day === prevDate) return `${time}`
        else {
          if (day === new Date().toLocaleDateString()) {
            if (time !== new Date().toLocaleTimeString()) {
              return `today ${time}`;
            } else {
              return `just now`;
            }
          }
            else return `${day} ${time}`;
        }
      }
    }
    return `${day} ${time}`;
  }

  return (
    <ChatContainer>
      <ConversationHeader>
        <ConversationHeader.Back onClick={updateChatScreen} />
        <Avatar src={photoURL} name={getInitials()} />
        <ConversationHeader.Content
          userName={displayName}
          info={`@${username}`}
        />
        <ConversationHeader.Actions></ConversationHeader.Actions>
      </ConversationHeader>
      <MessageList
        style={{ height: "100%", marginTop: "10px", overflow: "hidden"}}
      >
          {messages &&
            messages.map((message, index) => {
              return (
                <Message
                  model={{
                    message: message.text,
                    sentTime: "",
                    sender: message.user === me ? "Me" : message.user,
                    direction: message.user !== me ? "incoming" : "outgoing",
                    position: "single",
                  }}
                >
                  {" "}
                  <Avatar src={photoURL} name={getInitials()} />
                  <Message.Footer
                    sentTime={
                      message.createAt &&
                      getMessageTime(message.createAt.toDate(), index)
                    }
                  />
                </Message>
              );
            })}
        <InputMessage messageRef={messageRef} me={me} />
      </MessageList>
    </ChatContainer>
  );
}

export default Chats;
