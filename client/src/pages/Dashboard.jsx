// Packages
import { Route, Routes } from "react-router-dom";
// Components
import SwipeContainer from "../components/swipe/SwipeContainer";
import ChatContainer from "../components/chat/ChatContainer";
import ProfileContainer from "../components/profile/ProfileContainer";
import DashboardNav from "../components/dashboard/DashboardNav";

const Dashboard = () => {
  return (
    <div className="overlay">
      {/* Router */}
      <Routes>
        {/* Swipe Page */}
        <Route path="swipe" element={<SwipeContainer />} />

        {/* Chat Page */}
        <Route path="chat" element={<ChatContainer />} />

        {/* Profile Page */}
        <Route path="profile" element={<ProfileContainer />} />
      </Routes>

      {/* Dashboard Navigation */}
      <DashboardNav />
    </div>
  );
};
export default Dashboard;
