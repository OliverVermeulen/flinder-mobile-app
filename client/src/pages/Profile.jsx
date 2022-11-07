// import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsGearFill, BsArrowReturnLeft } from "react-icons/bs";
import { BiUser, BiExit, BiHelpCircle } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const Profile = () => {
  const [user, setUser] = useState(null);
  // const [genderedUsers, setGenderedUsers] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

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

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload(navigate("/"));
  };

  const previousPage = () => {
    navigate("/dashboard", { replace: true });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <div className="profile">
          <div className="profile-header">
            <p>Profile</p>
            <div className="dropdown">
              <button className="settings">
                <BsGearFill />
              </button>
              <div className="dropdown-content">
                <p onClick={logout}>
                  <BiExit /> Log Out
                </p>
                {/* <p>
                  <BiUser /> Profile
                </p>
                <p>
                  <BiHelpCircle /> Help
                </p> */}
                <p onClick={previousPage}>
                  <BsArrowReturnLeft /> Back
                </p>
              </div>
            </div>
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
                <div className="info">
                  <p className="name">{user.first_name}</p>
                  <p className="age">{new Date().getFullYear() - user.dob_year}</p>
                </div>
                <div className="info">
                  <CiLocationOn/>
                  <p className="province">{user.province}</p>
                </div>
                <div className="info">
                {/* <CiLocationOn/> */}
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
