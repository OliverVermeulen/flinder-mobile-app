import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileCard from "../components/profile/ProfileCard";

const Profile = () => {
  return (
    <div className="overlay">
      {/* Profile Header */}
      <ProfileHeader />

      {/* Profile Card */}
      <ProfileCard />
    </div>
  );
};
export default Profile;
