// Packages
import { useState } from "react";
import { createRipples } from "react-ripples";
// Components
import DashboardHeader from "../dashboard/DashboardHeader";
import MatchesDisplay from "./MatchesDisplay.jsx";
import ChatDisplay from "./ChatDisplay";

const ChatContainer = ({ user, page }) => {
  const [clickedUser, setClickedUser] = useState(null);
  // Ripples
  const MyRipples = createRipples({
    color: "#3336386c",
    during: 1000,
  });

  return (
    <>
      {/* Dashboard Header */}
      <DashboardHeader user={user} page={!page} />

      <div className="chat-container">
        {/* Chat Navigation */}
        <div className="chat-nav">
          <MyRipples>
            <button
              className="option-btn"
              onClick={() => setClickedUser(null)}
              title="Matches"
            >
              Matches
            </button>
          </MyRipples>

          <MyRipples>
            <button className="option-btn" disabled={!clickedUser} title="Chat">
              Chat
            </button>
          </MyRipples>
        </div>

        {/* Display Page */}
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
