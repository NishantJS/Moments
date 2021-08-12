import {
  ChatContainer,
  MessageList,
  Message,
  Avatar,MessageInput,
  ConversationHeader
} from "@chatscope/chat-ui-kit-react";
import {
  firestore,
  useAuthHook,
  useCollections,
  serverStore,
} from "../services/firebase.js";
import { useState } from "react";

const Chats = ({ email, displayName, photoURL, updateChatScreen }) => {
  const [username,] = email.split("@");
  const [firstname, lastname] = displayName.split(" ");
  const [user] = useAuthHook();
  const [messageInputValue, setMessageInputValue] = useState("");

  const sendMessage = async (value) => {
    if (value.length < 255) {
      await messageRef.add({
        text: value,
        createAt: serverStore.serverTimestamp(),
        user: me,
      });

      setMessageInputValue("");
    } else {
      setMessageInputValue(value);
    }
  };

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
    .limit(15);

  const [messages] = useCollections(docName, query);
    
  const getMessageTime = (date, index) => {
    const [day, time] = date.toLocaleString().split(", ");
    
    if (messages && messages.length>1) {
    
      if (index >= 1) {
        let prevDate = messages[index - 1].createAt.toDate().toLocaleDateString();

        if (day !== prevDate) {
          return `${day} ${time}`;
        } else {
          return time;
        }
      }
      else {
        return `${date.toLocaleString()}`;
      };
    }
    return;
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
        style={{ height: "100%", marginTop: "10px", overflow: "hidden" }}
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
                key={message.text + index}
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
      </MessageList>
      <MessageInput
        style={{ bottom: "0", right: "0", left: "0", width: "100%" }}
        placeholder="Type message here"
        value={messageInputValue}
        onChange={(value) => setMessageInputValue(value)}
        onSend={(value) => sendMessage(value)}
        sendDisabled={messageInputValue.length < 255 ? false : true}
      />
    </ChatContainer>
  );
}

export default Chats;
