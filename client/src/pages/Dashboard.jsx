import ATest from "../components/ATest";
import CTest from "../components/CTest";
import DashboardNav from "../components/dashboard/DashboardNav";

import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
      <div className="overlay">
          <Routes>
            <Route path="swipe" element={<CTest />} />
            <Route path="chat" element={<ATest />} />
          </Routes>
        <DashboardNav />
      </div>
  );
};
export default Dashboard;
