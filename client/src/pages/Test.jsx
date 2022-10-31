import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ChatContainer from "../components/ChatContainer";
import Match from "../components/Match";
import axios from "axios";

const Test = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [clickedUser, setClickedUser] = useState(null);

  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <div className="dashboard">
          <div className="dashboard-options">
            <button className="page-option" onClick={() => setClickedUser(null)}>
              Match
            </button>
            <button
              className="page-option"
              onClick={() => setClickedUser(!clickedUser)}
            >
              Chat
            </button>
          </div>

          {!clickedUser && (
            <Match
              setClickedUser={setClickedUser}
            />
          )}
          {clickedUser && (
            <ChatContainer user={user} clickedUser={clickedUser} />
          )}
        </div>
      )}
    </>
  );
};
export default Test;
