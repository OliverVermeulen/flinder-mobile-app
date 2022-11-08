import Nav from "../components/Nav";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Onboarding = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // Form Data
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    province: "",
    gender_identity: "man",
    gender_interest: "woman",
    url: "",
    about: "",
    matches: [],
  });

  // Navigate to Dashboard if successful
  const navigate = useNavigate();

  // Submit User Data
  const handleSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8000/user", {
        formData,
      });
      const success = response.status === 200;
      if (success) navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="onboarding-overlay">
        <Nav minimal={true} setShowModal={() => {}} showModal={false} />
        <div className="onboarding">
          {/* User Form */}
          <form onSubmit={handleSubmit}>
            <h2 className="neonText">CREATE ACCOUNT</h2>

            {/* Display Name */}
            <label htmlFor="first_name">Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Display Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />

            {/* Date Of Birth */}
            <label>Date of Birth</label>
            {/* Day */}
            <div className="multiple-input-container">
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
                min={1}
                max={31}
              />
              {/* Birth Month */}
              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
                min={1}
                max={12}
              />
              {/* Birth Year */}
              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            {/* Province */}
            <label htmlFor="province">Province</label>
            <select id="province" name="province" onChange={handleChange} value={formData.province} required={true}>
            <option value="">Choose Province</option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Free State">Free State</option>
              <option value="Gauteng">Gauteng</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Limpopo">Limpopo</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="Northern Cape">Northern Cape</option>
              <option value="North West">North West</option>
              <option value="Western Cape">Western Cape</option>
            </select>

            {/* Gender Identity */}
            <label>Gender</label>
            <div className="multiple-input-container">
              {/* Man */}
              <input
                type="radio"
                id="man-gender-identity"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity" className="choice-label">
                M
              </label>
              {/* Woman */}
              <input
                type="radio"
                id="woman-gender-identity"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity" className="choice-label">
                W
              </label>
              {/* Non Binary */}
              <input
                type="radio"
                id="more-gender-identity"
                name="gender_identity"
                value="more"
                onChange={handleChange}
                checked={formData.gender_identity === "more"}
              />
              <label htmlFor="more-gender-identity" className="choice-label">
                NB
              </label>
            </div>

            {/* Gender Interest */}
            <label>Looking For</label>
            {/* Men */}
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-interest"
                name="gender_interest"
                value="man"
                onChange={handleChange}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest" className="choice-label">
                M
              </label>
              {/* Women */}
              <input
                type="radio"
                id="woman-gender-interest"
                name="gender_interest"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest" className="choice-label">
                W
              </label>
              {/* All */}
              <input
                type="radio"
                id="everyone-gender-interest"
                name="gender_interest"
                value="everyone"
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label
                htmlFor="everyone-gender-interest"
                className="choice-label"
              >
                All
              </label>
            </div>

            {/* Profile Picture */}
            <label htmlFor="url">Profile Picture</label>
            <input
              type="url"
              id="url"
              name="url"
              required={true}
              placeholder="Photo URL"
              onChange={handleChange}
            />
            {/* Picture Display */}
            <div className="photo-container">
              {formData.url && (
                <img src={formData.url} alt="profile pic preview" />
              )}
            </div>

            {/* About */}
            <label htmlFor="about">About Me</label>
            <input
              type="text"
              id="about"
              name="about"
              required={true}
              placeholder="I like long walks..."
              value={formData.about}
              onChange={handleChange}
              minLength="10"
              maxLength="150"
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Onboarding;
