// Packages
import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
// Components
import DashboardHeader from "../dashboard/DashboardHeader";

const SwipeContainer = (page) => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const userId = cookies.UserId;

  // Get User
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

  // Get all Gendered Users
  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/gendered-users", {
        params: { gender: user?.gender_interest },
      });
      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Executes getUser Function After Render
  useEffect(() => {
    getUser();
  }, []);

  // Executes getGenderedUsers Function After Render
  useEffect(() => {
    if (user) {
      getGenderedUsers();
    }
  }, [user]);

  // Update User Matches
  const updateMatches = async (matchedUserId) => {
    try {
      await axios.put("http://localhost:8000/addmatch", {
        userId,
        matchedUserId,
      });
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  // When Swiped Right Adds User To Matches
  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  // Logs When User Has Left The Screen
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const matchedUserIds = user?.matches
    .map(({ user_id }) => user_id)
    .concat(userId);

  // Filters Gendered Users by user_id
  const filteredGenderedUsers = genderedUsers?.filter(
    (genderedUser) => !matchedUserIds.includes(genderedUser.user_id)
  );

  return (
    <>
      {user && (
        <>
          {/* Header */}
          <DashboardHeader user={user} page={!page} />

          {/* Match */}
          <div className="match">
            <div className="card-container">
              {filteredGenderedUsers?.map((genderedUser) => (
                // Tinder Card
                <TinderCard
                  className="swipe"
                  key={genderedUser.user_id}
                  onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                  onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}
                >
                  {/* Match Picture */}
                  <div
                    style={{ backgroundImage: "url(" + genderedUser.url + ")" }}
                    className="card"
                  >
                    {/* Match Info */}
                    <div className="match-info">
                      <div className="info">
                        <p className="match-name">{genderedUser.first_name}</p>
                        <p>
                          {new Date().getFullYear() - genderedUser.dob_year}
                        </p>
                      </div>
                      <div className="province-info">
                        <CiLocationOn />
                        <p>{genderedUser.province}</p>
                      </div>
                    </div>
                  </div>
                </TinderCard>
              ))}
            </div>

            {lastDirection ? (
              <h2 className="info-text">You swiped {lastDirection}</h2>
            ) : (
              <h2 className="info-text" />
            )}
          </div>
        </>
      )}
    </>
  );
};
export default SwipeContainer;
