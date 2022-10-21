import Navbar from "../components/Navbar";
import Home from "./Home";
import Match from "./Match";
import Chat from "./Chat";
import Profile from "./Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;
  return (
    <>
      <div className="app">
        <div className="container">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            {authToken && <Route path="/onboarding" element={<Onboarding />} />} */}
            <Route path="/match" element={<Match />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Dashboard;
