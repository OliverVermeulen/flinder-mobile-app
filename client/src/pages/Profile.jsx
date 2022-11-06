import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsGearFill, BsArrowReturnLeft } from "react-icons/bs";
import { BiUser, BiExit, BiHelpCircle } from "react-icons/bi";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [cookies, removeCookie] = useCookies(["user"]);
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
    navigate('/dashboard', {replace: true});
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <div className="profile">
          <div className="dashboard-header">
            <p>Profile</p>
            <div class="dropdown">
              <button class="dropbtn">
                <BsGearFill />
              </button>
              <div class="dropdown-content">
                <a onClick={logout}>
                  <BiExit /> Sign Out
                </a>
                {/* <a>
                  <BiUser /> Profile
                </a>
                <a>
                  <BiHelpCircle /> Help
                </a> */}
                <a onClick={previousPage}>
                  <BsArrowReturnLeft/> Back
                </a>
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
                <div className="user-name-age">
                  <p>{user.first_name},</p>
                  <p>{new Date().getFullYear() - user.dob_year}</p>
                </div>
                <p className="user-province">Western Cape</p>
                <p className="user-about">{user.about}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
