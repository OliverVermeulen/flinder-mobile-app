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

  const now = new Date();
  const current = now.getHours() + ":" + now.getMinutes();

  // Add Message
  const addMessage = async () => {
    const message = {
      timestamp: new Date().toISOString(),
      time: now.getHours() + ":" + now.getMinutes(),
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
        required={true}
        maxLength="500"
      />

      <div className="input-buttons">
        {/* Send Message */}
        <button className="input-button" onClick={addMessage} title="Submit">
          <MdSend />
        </button>

        {/* Refresh Chat */}
        <button className="input-button" onClick={refreshPage} title="Refresh">
          <MdRefresh />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
