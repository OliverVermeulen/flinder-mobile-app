import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Update from "./pages/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies] = useCookies(["user"]);
  const authToken = cookies.AuthToken;

  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Onboarding */}
        {authToken && <Route path="/onboarding" element={<Onboarding />} />}

        {/* Dashboard */}
        {authToken && <Route path="/dashboard/*" element={<Dashboard />} />}

        {/* Update */}
        {authToken && <Route path="/update" element={<Update />} />}

        {/* Profile */}
        {authToken && <Route path="/profile" element={<Profile />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
