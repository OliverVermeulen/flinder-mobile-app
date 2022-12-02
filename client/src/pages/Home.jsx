// Packages
import { useState } from "react";
import { useCookies } from "react-cookie";
// Components
import Header from "../components/home/Header";
import AuthModal from "../components/home/AuthModel";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;

  const handleClick = () => {
    if (authToken) {
      removeCookie("UserId", cookies.UserId);
      removeCookie("AuthToken", cookies.AuthToken);
      window.location.reload();
      return;
    }
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      {/* Header */}
      <Header
        authToken={authToken}
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />

      <div className="home">
        {/* Slogan */}
        <h1 className="neonText" title="Start Swiping">Start Swiping</h1>

        {/* Create Account / Sign Out */}
        <button className="primary-button" onClick={handleClick} title={authToken ? "Sign Out" : "Create Account"}>
          {authToken ? "Sign Out" : "Create Account"}
        </button>

        {/* Auth Modal */}
        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
      </div>
    </div>
  );
};
export default Home;
