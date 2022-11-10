import ATest from "../components/ATest";
import CTest from "../components/CTest";
import DashboardNav from "../components/dashboard/DashboardNav";

import { Route, useNavigate, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <div className="dashboard">
        <Routes>
          <Route path="swipe" element={<CTest />} />
          <Route path="chat" element={<ATest />} />
        </Routes>
      </div>
    </>
  );
};
export default Dashboard;
