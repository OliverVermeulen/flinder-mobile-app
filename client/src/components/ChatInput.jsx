import { useState } from "react";
import axios from "axios";
import InputEmoji from "react-input-emoji";
import { MdSend, MdRefresh } from "react-icons/md";

const ChatInput = ({
  user,
  clickedUser,
  getUserMessages,
  getClickedUsersMessages,
}) => {
  const [textArea, setTextArea] = useState("");
  const userId = user?.user_id;
  const clickUserId = clickedUser?.user_id;

  // Add Message
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

  // Refresh Page
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    // Chat Input
    <div className="chat-input">
      {/* Message Input */}
      <InputEmoji
        value={textArea}
        onChange={setTextArea}
        cleanOnEnter
        placeholder="Type a message"
        required
        maxLength="300"
      />

      <div className="input-buttons">
        {/* Send Message */}
        <button className="input-button" onClick={addMessage}>
          <MdSend />
        </button>

        {/* Refresh Chat */}
        <button className="input-button" onClick={refreshPage}>
          <MdRefresh />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
