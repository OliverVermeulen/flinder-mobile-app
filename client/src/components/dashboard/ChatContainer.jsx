import DashboardHeader from "./DashboardHeader";
import MatchesDisplay from "../MatchesDisplay.jsx";
import ChatDisplay from "./ChatDisplay";
import { useState } from "react";

import { createRipples } from "react-ripples";

const MyRipples = createRipples({
  color: "#3336386c",
  during: 1000,
});

const ChatContainer = ({ user, page }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <>
      <DashboardHeader user={user} page={!page} />

      <div className="chat-container">
        {/* Display Module */}
        <div className="chat-nav">
          {/* Matches Display */}
          <MyRipples>
            <button
              className="option-btn"
              onClick={() => setClickedUser(null)}
              title="Matches"
            >
              Matches
            </button>
          </MyRipples>

          {/* Chat Display */}
          <MyRipples>
            <button className="option-btn" disabled={!clickedUser} title="Chat">
              Chat
            </button>
          </MyRipples>
        </div>

        {!clickedUser && (
          <MatchesDisplay
            matches={user.matches}
            setClickedUser={setClickedUser}
          />
        )}
        {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
      </div>
    </>
  );
};

export default ChatContainer;
