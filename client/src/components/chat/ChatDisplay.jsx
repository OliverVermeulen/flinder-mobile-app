// Packages
import axios from "axios";
import { useState, useEffect } from "react";
// Components
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatDisplay = ({ user, clickedUser }) => {
  const userId = user?.user_id;
  const clickedUserId = clickedUser?.user_id;
  const [usersMessages, setUsersMessages] = useState(null);
  const [clickedUsersMessages, setClickedUsersMessages] = useState(null);
  const messages = [];

  // Get User Messages
  const getUsersMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8000/messages", {
        params: { userId: userId, correspondingUserId: clickedUserId },
      });
      setUsersMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Clicked User Messages
  const getClickedUsersMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8000/messages", {
        params: { userId: clickedUserId, correspondingUserId: userId },
      });
      setClickedUsersMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Executes getUsersMessages And getClickedUsersMessages Functions After Render
  useEffect(() => {
    getUsersMessages();
    getClickedUsersMessages();
  }, []);

  // Loop Through User Messages And Push To Messages Array
  usersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = user?.first_name;
    formattedMessage["img"] = user?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["from_userId"] = message.from_userId;
    formattedMessage["timestamp"] = message.timestamp;
    formattedMessage["time"] = message.time;
    messages.push(formattedMessage);
  });

  // Loop Through Clicked User Messages And Push To Messages Array
  clickedUsersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = clickedUser?.first_name;
    formattedMessage["img"] = clickedUser?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    formattedMessage["time"] = message.time;
    messages.push(formattedMessage);
  });

  // Order Messages Based on Timestamp
  const descendingOrderMessages = messages?.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp)
  );

  return (
    <>
      {/* Chat Messages */}
      <ChatMessages descendingOrderMessages={descendingOrderMessages} />

      {/* Chat Input */}
      <ChatInput
        user={user}
        clickedUser={clickedUser}
        getUserMessages={getUsersMessages}
        getClickedUsersMessages={getClickedUsersMessages}
      />
    </>
  );
};

export default ChatDisplay;
