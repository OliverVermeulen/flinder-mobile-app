import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { MdClose } from "react-icons/md";

const AuthModal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  let navigate = useNavigate();

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
      if (success && isSignUp) navigate("/onboarding");
      if (success && !isSignUp) navigate("/dashboard");
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
        <input type="submit" />

        {/* error */}
        <span>{error}</span>
      </form>
    </div>
  );
};
export default AuthModal;
