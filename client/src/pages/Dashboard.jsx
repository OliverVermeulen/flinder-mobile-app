import ATest from "../components/ATest";
import CTest from "../components/CTest";
import ProfileContainer from "../components/profile/ProfileContainer";
import DashboardNav from "../components/dashboard/DashboardNav";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="overlay">
      <Routes>
        {/* Swipe Page */}
        <Route path="swipe" element={<CTest />} />

        {/* Chat Page */}
        <Route path="chat" element={<ATest />} />

        {/* Profile Page */}
        <Route path="profile" element={<ProfileContainer />} />
      </Routes>

      {/* Dashboard Navigation */}
      <DashboardNav />
    </div>
  );
};
export default Dashboard;
