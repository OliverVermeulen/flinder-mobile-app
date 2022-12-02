// Packages
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import { MdSettings, MdOutlineLogout } from "react-icons/md";
import axios from "axios";

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

  // Executes getUser Function After Render
  useEffect(() => {
    getUser();
  }, []);

  return (
    // Header
    <div className="dashboard-header">
      <p className="dashboard-header-name" title="Profile">
        Profile
      </p>
      <div className="profile-dropdown">
        <button className="icon" title="Settings">
          <MdSettings />
        </button>

        {/* Header Dropdown */}
        <div className="profile-dropdown-content">
          <p onClick={logout}>
            <MdOutlineLogout /> Log Out
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
