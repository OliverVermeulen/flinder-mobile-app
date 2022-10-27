import { GiButterfly } from "react-icons/gi";


const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };
  
  return (
    <nav  className="header-nav">
      <div className="logo-container">
        Flinder
        {/* <GiButterfly/> */}
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
