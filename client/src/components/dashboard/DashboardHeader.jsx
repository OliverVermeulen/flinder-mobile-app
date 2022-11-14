import { useNavigate } from "react-router-dom";

const DashboardHeader = ({ user, page }) => {
  const navigate = useNavigate();

  // Redirect to Profile page
  const redirect = () => {
    navigate("/profile");
  };

  return (
    // Chat Header
    <div className="dashboard-header">
      {/* Chat / Match */}
      <p className="dashboard-header-name" title={page ? "Chat" : "Swipe"}>{page ? "Chat" : "Swipe"}</p>

      {/* User Profile Picture */}
      <div className="dashboard-header-img">
        <img
          src={user.url}
          alt={"Photo of " + user.first_name}
          onClick={redirect}
          title="Profile"
        />
      </div>
    </div>
  );
};
export default DashboardHeader;
