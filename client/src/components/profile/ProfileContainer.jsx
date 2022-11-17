import ProfileHeader from "./ProfileHeader";
import ProfileCard from "./ProfileCard";
import DashboardNav from "../dashboard/DashboardNav";

const ProfileContainer = () => {
  return (
    <>
      <div className="overlay">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Profile Card */}
        <ProfileCard />
      </div>
      {/* <DashboardNav /> */}
    </>
  );
};
export default ProfileContainer;
