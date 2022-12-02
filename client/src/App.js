// Packages
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
// Pages
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
