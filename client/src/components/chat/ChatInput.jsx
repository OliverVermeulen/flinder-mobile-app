// Packages
import { useState } from "react";
import { MdSend, MdRefresh } from "react-icons/md";
import InputEmoji from "react-input-emoji";
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
  const now = new Date();

  // Add Message
  const addMessage = async () => {
    const message = {
      timestamp: new Date().toISOString(),
      time: now.getHours() + ":" + now.getMinutes(), // Calculate Time Sent
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
        placeholder="Message"
        required={true}
        minLength="1"
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
