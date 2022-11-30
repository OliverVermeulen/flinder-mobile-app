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
    <div className="header">
      {/* Logo */}
      <div className="header-logo" title="Flinder">Flinder</div>

      {/* Log In */}
      {!authToken && !minimal && (
        <button
          className="header-button"
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
