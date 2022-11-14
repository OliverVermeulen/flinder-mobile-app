import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsGearFill, BsArrowReturnLeft } from "react-icons/bs";
import { BiExit } from "react-icons/bi";

const ProfileHeader = () => {
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
    navigate("/dashboard/swipe", { replace: true });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile-header">
      <p className="profile-header-name" title="Profile">
        Profile
      </p>
      <div className="profile-header-dropdown">
        <button className="settings" title="Settings">
          <BsGearFill />
        </button>

        {/* Header Dropdown */}
        <div className="profile-header-content">
          <p onClick={logout}>
            <BiExit /> Log Out
          </p>
          <p onClick={previousPage}>
            <BsArrowReturnLeft /> Back
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
