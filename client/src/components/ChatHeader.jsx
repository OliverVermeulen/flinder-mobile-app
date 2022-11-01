import { useCookies } from "react-cookie";

const ChatHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload();
  };

  return (
    <div className="chat-container-header">
      <p>Chat</p>
      <div className="img-container">
        <img src={user.url} alt={"Photo of " + user.first_name} />
      </div>
    </div>
  );
};
export default ChatHeader;
