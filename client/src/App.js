import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Match from "./pages/Match";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;
  return (
    <>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {authToken && <Route path="/onboarding" element={<Onboarding />} />}
            {authToken && <Route path="/dashboard" element={<Dashboard />} />}
            <Route path="/match" element={<Match />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {/* <Navbar /> */}
      </div>
    </>
  );
};

export default App;
