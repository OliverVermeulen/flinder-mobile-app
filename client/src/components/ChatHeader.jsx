import { useNavigate } from "react-router-dom";

const ChatHeader = ({ user, page }) => {
  const navigate = useNavigate();

  // Redirect to Profile page
  const redirect = () => {
    navigate("/profile");
  };

  return (
    // Chat Header
    <div className="chat-container-header">
      {/* Chat / Match */}
      <p>{page ? "Chat" : "Match"}</p>

      {/* User Profile Picture */}
      <div className="header-img">
        <img
          src={user.url}
          alt={"Photo of " + user.first_name}
          onClick={redirect}
        />
      </div>
    </div>
  );
};
export default ChatHeader;
