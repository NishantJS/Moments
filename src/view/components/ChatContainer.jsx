const ChatContainer = ({ user }) => {
  const { photoURL, uid, email, displayName } = user;
  const [firstName, lastName] = displayName.split(" ");
  console.log({ firstName, lastName });

  return (
    <div>
      {firstName}
      <br />
      {lastName}
      <br />
      {email}
      <br />
      <img src={photoURL} alt={firstName[0] + lastName[0]} />
    </div>
  );
}

export default ChatContainer;
