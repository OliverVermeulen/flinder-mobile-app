import ATest from "../components/ATest";
import CTest from "../components/CTest";
import TestNav from "../components/TestNav";

import { Route, useNavigate, Routes } from "react-router-dom";

const Test = () => {
  return (
    <>
      <TestNav />
      <div className="dashboard">
        <Routes>
          <Route path="swipe" element={<CTest />} />
          <Route path="chat" element={<ATest />} />
        </Routes>
      </div>
    </>
  );
};
export default Test;
