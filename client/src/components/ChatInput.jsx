import { useState } from "react";
import axios from "axios";

const ChatInput = ({
  user,
  clickedUser,
  getUserMessages,
  getClickedUsersMessages,
}) => {
  const [textArea, setTextArea] = useState("");
  const userId = user?.user_id;
  const clickUserId = clickedUser?.user_id;

  // add message
  const addMessage = async () => {
    const message = {
      timestamp: new Date().toISOString(),
      from_userId: userId,
      to_userId: clickUserId,
      message: textArea,
    };

    try {
      await axios.post("http://localhost:8000/message", { message });
      getUserMessages();
      getClickedUsersMessages();
      setTextArea("");
    } catch (error) {
      console.log(error);
    }
  };

  // refresh page
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="chat-input">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        className="chat-text-input"
        placeholder="Message"
        required
      />
      <div>
      <button className="secondary-button" onClick={addMessage}>
        ✔
      </button>
      <button className="secondary-button" onClick={refreshPage}>
        ↻
      </button>
      </div>
    </div>
  );
};

export default ChatInput;
