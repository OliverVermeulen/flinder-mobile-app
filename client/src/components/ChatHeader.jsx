import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({ user }) => {
  const navigate = useNavigate();


  const redirect = () => {
    navigate("/profile");
  };

  return (
    <div className="chat-container-header">
      <p>Chat</p>
      <div className="header-img">
        <img src={user.url} alt={"Photo of " + user.first_name} onClick={redirect}/>
      </div>
    </div>
  );
};
export default ChatHeader;
