// Components
import ProfileHeader from "./ProfileHeader";
import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
  return (
    <>
      <div className="overlay">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Profile Card */}
        <ProfileCard />
      </div>
    </>
  );
};
export default ProfileContainer;
