// import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsGearFill, BsArrowReturnLeft } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const userId = cookies.UserId;

  // Get User Data
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

  // Log Out, Remove Cookie and Navigate to Home page
  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload(navigate("/"));
  };

  // Navigate back to previous game
  const previousPage = () => {
    // navigate("/dashboard", { replace: true });
    navigate("/dashboard/swipe", { replace: true });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <div className="profile">
          {/* Profile Header */}
          <div className="profile-header">
            <p className="page-name" title="Profile">Profile</p>
            <div className="dropdown">
              <button className="settings" title="Settings">
                <BsGearFill />
              </button>

              {/* Header Dropdown */}
              <div className="dropdown-content">
                <p onClick={logout}>
                  <BiExit /> Log Out
                </p>
                <p onClick={previousPage}>
                  <BsArrowReturnLeft /> Back
                </p>
              </div>
            </div>
          </div>

          {/* User Card */}
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
              <div className="user-info data">
                {/* User Name and Age */}
                <div className="info">
                  <p className="name">{user.first_name}</p>
                  <p className="age" title="Age">
                    {new Date().getFullYear() - user.dob_year}
                  </p>
                </div>

                {/* User Province */}
                <div className="info">
                  <p className="province">
                    <CiLocationOn /> {user.province}
                  </p>
                </div>

                {/* User About */}
                <div className="info">
                  <p className="about">{user.about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
