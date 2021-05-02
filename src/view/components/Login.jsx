import { signInWithGoogle } from "../services/firebase.js";

const Login = () => {
  return (
    <section>
      <h1 onClick={signInWithGoogle}>Login</h1>
    </section>
  );
};

export default Login;
