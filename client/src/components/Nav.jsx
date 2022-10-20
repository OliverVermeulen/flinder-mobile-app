import whiteLogo from "../images/tinder-white-logo.png";
import colorLogo from "../images/tinder-color-logo.png";

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };
  
  return (
    <nav  className="header-nav">
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="Tinder logo"/>
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log In
        </button>
      )}
    </nav>
  );
};
export default Nav;
