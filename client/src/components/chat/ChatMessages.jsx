// Packages
import { useCookies } from "react-cookie";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatMessages = ({ descendingOrderMessages }) => {
  const [cookies] = useCookies(["user"]);
  const userId = cookies.UserId;

  return (
    <>
      <div className="chat-box">
        {/* Scroll Chat To Bottom */}
        <ScrollToBottom className="chat-display">
          {descendingOrderMessages.map((message, _index) => (
            <div key={_index}>
              {/* Divides Chat */}
              <div
                className={`chat-message ${
                  message.from_userId === userId && "user"
                }`}
              >
                {/* User / Match Profile Picture */}
                <div className="img-container">
                  <img src={message.img} alt={message.name + " profile"} />
                </div>

                {/* Message */}
                <div className="message">
                  <p>{message.message}</p>
                  <p className="timestamp">{message.time}</p> {/* Time Sent */}
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
    </>
  );
};

export default ChatMessages;
