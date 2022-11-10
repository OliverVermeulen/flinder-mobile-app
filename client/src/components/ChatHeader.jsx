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
      <p title={page ? "Chat" : "Match"}>{page ? "Chat" : "Match"}</p>

      {/* User Profile Picture */}
      <div className="header-img">
        <img
          src={user.url}
          alt={"Photo of " + user.first_name}
          onClick={redirect}
          title="Profile"
        />
      </div>
    </div>
  );
};
export default ChatHeader;
