const Header = ({
  authToken,
  minimal,
  setShowModal,
  showModal,
  setIsSignUp,
}) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <div className="nav">
      {/* Logo */}
      <div className="nav-logo">Flinder</div>

      {/* Log In */}
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log In
        </button>
      )}
    </div>
  );
};
export default Header;
