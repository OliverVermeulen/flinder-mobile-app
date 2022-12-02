// Package
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="overlay">
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-logo" title="Flinder">
          Flinder
        </div>

        {/* Back To Previous Page */}
        <button
          className="header-button"
          title="Back"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="help">
        {/* How To Use */}
        <div>
          <h1>How To Use Flinder</h1>
          <ol>
            <li>Sign Up with an email and password.</li>
            <li>
              On the Onboarding page fill in user details like your Username,
              Date Of Birth and your interests.
            </li>
            <li>
              On the Dashboard page by default you will be taken to the Swipe
              page. Here you will see a list of potential Matches based on your
              interests. Swipe Left if you are not interested and swipe right if
              you are.
            </li>
            <li>
              Once you and an other have both Swiped Right you will be Matched
              and be able to chat to each other. On the Chat page you will see a
              list of your matches, to chat to a particular match just press on
              their row.
            </li>
            <li>To Log Out head to the Profile Page.</li>
          </ol>
        </div>

        {/* How To Upload Profile Picture */}
        <div>
          <h1>How To Upload Profile Picture</h1>
          <ol>
            <li>
              Go to an image hosting website like{" "}
              <a href="https://imgur.com/" target={"_blank"}>
                Imgur
              </a>{" "}
              and make an Account if you don't already have one.
            </li>
            <li>
              Once signed up make a new collection and add the images you want
              to use to that collection.
            </li>
            <li>
              Finally copy the image URL and paste it into the profile picture
              input along with the image type it was originally like .jpg or
              .png.
            </li>
          </ol>
        </div>

        {/* Terms And Conditions */}
        <div>
          <h1>Terms and Conditions</h1>
          <ul>
            <li>
              This is not a real app only a project so enter personal data at
              own risk.
            </li>
            <li>
              This is merely a project imitating Tinder, I do not own Tinder nor
              do I claim to.
            </li>
            <li>
              Due to time constraints at this point the only way to add a
              profile picture is to add it in as a URL.
            </li>
            <li>
              As this is designed to be used on mobile for the best user
              experience switch to a mobile view.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Help;
