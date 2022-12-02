// Packages
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import axios from "axios";

const AuthModal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowModal(false);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Shows Error If Passwords Don't Match
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords need to match!");
        return;
      }
      console.log("posting", email, password);
      const response = await axios.post(
        `http://localhost:8000/${isSignUp ? "signup" : "login"}`,
        { email, password }
      );

      setCookie("AuthToken", response.data.token);
      setCookie("UserId", response.data.userId);

      const success = response.status === 201;

      // If Not Signed Up Navigate to Onboarding
      if (success && isSignUp) navigate("/onboarding");

      // If Signed Up Navigate To Dashboard
      if (success && !isSignUp) navigate("/dashboard/swipe");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-modal">
      {/* Auth Modal Header */}
      <div className="close-icon" onClick={handleClick}>
        <MdClose />
      </div>

      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>

      <p>
        {isSignUp
          ? "By clicking Submit, you agree to our Terms and Conditions."
          : ""}
      </p>

      {/* Auth Modal Form */}
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          minLength={6}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password */}
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {/* Submit */}
        <input type="submit" title="Submit" />

        {/* error */}
        <span>{error}</span>
      </form>
    </div>
  );
};
export default AuthModal;
