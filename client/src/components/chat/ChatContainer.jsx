// Packages
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
// Components
import ChatPage from "./ChatPage";

const ChatContainer = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const userId = cookies.UserId;

  // Get User
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

  // Get Gendered Users
  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/gendered-users", {
        params: { gender: user?.gender_interest },
      });
      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Executes getUser Function After Render
  useEffect(() => {
    getUser();
  }, []);

  // Executes getGenderedUsers Function After Render
  useEffect(() => {
    if (user) {
      getGenderedUsers();
    }
  }, [user]);

  return (
    <>
      {user && (
        <>
          {/* Chat Container */}
          <ChatPage user={user} />
        </>
      )}
    </>
  );
};
export default ChatContainer;
