import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./firebase.js";
import ChatContainer from "../components/ChatContainer.jsx";
import Login from "../components/Login.jsx";
import Loading from "../components/Loading.jsx";

const Chat = () => {
  const [user, loading] = useAuthState(auth);

  const toRender = loading ? <Loading /> : user ? <ChatContainer user={user}/> : <Login />;
  
  return (
  <>
    {toRender}
  </>
  )
}

export default Chat;