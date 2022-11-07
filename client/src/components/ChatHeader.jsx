import { useNavigate } from "react-router-dom";

const ChatHeader = ({ user, page }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/profile");
  };

  return (
    <div className="chat-container-header">
      <p>{page ? "Chat" : "Match"}</p>
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
