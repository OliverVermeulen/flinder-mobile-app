// import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BsGearFill } from "react-icons/bs";

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
        <>
          <div className="dashboard-header">
            <p>Profile</p>
            <BsGearFill />
          </div>
          <div className="user-card">
            <div
              style={{
                backgroundImage: "url(" + user.url + ")",
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className="user-img"
            >
              <div className="user-info">
                <div className="user-name-age">
                  <p>{user.first_name},</p>
                  <p>{new Date().getFullYear() - user.dob_year}</p>
                </div>
                <p className="user-province">Western Cape</p>
                <p className="user-about">{user.about}</p>
              </div>
            </div>
          </div>
          <footer className="dashboard-nav">
            <BsGearFill />
            <BsGearFill />
            <BsGearFill />
          </footer>
        </>
      )}
    </>
  );
};
export default Profile;
