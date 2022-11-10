import ChatHeader from "./DashboardHeader";
import MatchesDisplay from "../MatchesDisplay.jsx";
import ChatDisplay from "./ChatDisplay";
import { useState } from "react";

const ChatContainer = ({ user, page }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <div className="chat-container">
      <ChatHeader user={user} page={!page} />

      {/* Display Module */}
      <div className="options">
        {/* Matches */}
        <button className="option" onClick={() => setClickedUser(null)} title="Matches">
          Matches
        </button>

        {/* Chat */}
        <button className="option" disabled={!clickedUser} title="Chat">
          Chat
        </button>
      </div>

      {!clickedUser && (
        <MatchesDisplay
          matches={user.matches}
          setClickedUser={setClickedUser}
        />
      )}
      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
    </div>
  );
};

export default ChatContainer;
