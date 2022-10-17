import pfp from "../images/pfp.jpg";
const Chat = () => {
  return (
    <>
      <header className="page-header">
        <div className="name-age">
          <p>Chat</p>
        </div>
      </header>
      <div className="profile-img">
        <img src={pfp} alt="" />
      </div>
    </>
  );
};

export default Chat;