// import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [lastDirection, setLastDirection] = useState();

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
        <div className="card-container">
          <div className="swipe">
            <div
              style={{ backgroundImage: "url(" + user.url + ")" }}
              className="card"
            >
              <div className="user-info">
                <div className="name-age">
                <p>{user.first_name}</p>
                <p>{new Date().getFullYear() - user.dob_year}</p>
                </div>
                <p className="about">{user.about}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
