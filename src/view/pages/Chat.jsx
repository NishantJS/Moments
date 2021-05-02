import { useAuthHook } from "../services/firebase.js";
import ChatBox from "../components/ChatBox.jsx";
import Login from "../components/Login.jsx";
import Loading from "../components/Loading.jsx";

const Chat = () => {
  const [user, loading, error] = useAuthHook();

  const toRender = loading ? (
    <Loading />
  ) : error || !user ? (
    <Login />
  ) : (
    <ChatBox user={user}/>
  );
  
  return (
    <>
      {toRender}
    </>
  );
}

export default Chat;