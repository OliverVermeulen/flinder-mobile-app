import { BsGearFill } from "react-icons/bs";
import pfp from "../images/pfp.jpg";
const Profile = () => {
  return (
    <>
      <header className="page-header">
        <div className="name-age">
          <p>Oliver,</p>
          <p>20</p>
        </div>
        <div className="options">
          <BsGearFill />
        </div>
      </header>
      <div className="profile-img">
        <img src={pfp} alt="" />
      </div>
      <div className="profile-info">
        <div className="name-age">
          <p>Oliver,</p>
          <p>20</p>
        </div>
        <p className="profile-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          laudantium temporibus aut in cupiditate dicta animi neque recusandae
          totam.
        </p>
      </div>
    </>
  );
};

export default Profile;
