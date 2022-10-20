import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Match from "./pages/Match";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/match" element={<Match />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {/* <Navbar /> */}
      </div>
    </>
  );
}

export default App;
