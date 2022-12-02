// Packages
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [cookies] = useCookies(null);
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const matchedUserIds = matches.map(({ user_id }) => user_id);
  const userId = cookies.UserId;

  // Get Matches
  const getMatches = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userIds: JSON.stringify(matchedUserIds) },
      });
      setMatchedProfiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Executes getMatches Function After Render
  useEffect(() => {
    getMatches();
  }, [matches]);

  // Filter Matches
  const filteredMatchedProfiles = matchedProfiles?.filter(
    (matchedProfile) =>
      matchedProfile.matches.filter((profile) => profile.user_id === userId)
        .length > 0
  );

  return (
    // Matches Display
    <div className="matches-display">
      {filteredMatchedProfiles?.map((match, _index) => (
        <div
          key={_index}
          className="match-card"
          onClick={() => setClickedUser(match)}
        >
          {/* Match Profile Picture */}
          <div className="img-container" title={match?.first_name}>
            <img src={match?.url} alt={match?.first_name} />
          </div>

          {/* Match Name */}
          <p className="match-name">{match?.first_name}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchesDisplay;
