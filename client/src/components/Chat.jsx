import { useCookies } from "react-cookie";

const Chat = ({ descendingOrderMessages}) => {
  const [cookies] = useCookies(["user"]);
  const userId = cookies.UserId;
  return (
    <>
      <div className="chat-box">
        <div className="chat-display">
          {descendingOrderMessages.map((message, _index) => (
            <div key={_index}>
              <div className={`chat-message-header ${message.from_userId === userId && "owner"}`}>
                <div className="img-container">
                  <img src={message.img} alt={message.name + " profile"} />
                </div>
                <p className="text-message">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chat;
