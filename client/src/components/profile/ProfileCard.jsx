// Packages
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const userId = cookies.UserId;

  // Get User Data
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Executes getUser Function After Render
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <>
          {/* Profile Card */}
          <div className="profile-card">
            <div
              style={{ backgroundImage: "url(" + user.url + ")" }}
              className="user-img"
            >
              <div className="user-info">
                <div className="user-detail-name">
                  <p className="user-name">{user.first_name}</p>
                  <p title="Age">
                    {new Date().getFullYear() - user.dob_year}
                  </p>
                </div>

                {/* User Province */}
                <div
                  className="user-detail"
                  title="Province"
                >
                  <CiLocationOn />
                  <p>{user.province}</p>
                </div>

                {/* User Description */}
                <div className="user-detail" title="Description">
                  <p>{user.about}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ProfileCard;
