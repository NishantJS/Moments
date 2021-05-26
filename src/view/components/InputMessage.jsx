import { MessageInput } from "@chatscope/chat-ui-kit-react";
import { serverStore } from "../services/firebase.js";
import { useState } from "react";

const InputMessage = ({messageRef, me}) => {
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
  

  return (
    <MessageInput
      style={{ bottom: "0", right:"0", left: "0", width: "100%"}}
      placeholder="Type message here"
      value={messageInputValue}
      onChange={(value) => setMessageInputValue(value)}
      onSend={(value) => sendMessage(value)}
      sendDisabled={messageInputValue.length < 255 ? false : true}
    />
  );
}

export default InputMessage
