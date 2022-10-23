import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
// Material design Icons
import { MdSwipe, MdChatBubble, MdPerson } from "react-icons/md";

function Navbar() {
  return (
    <nav className="nav">
      {/* <Link to="/" className="site-title">
        Flinder
      </Link> */}
      <ul>
        <CustomLink to="/match">
          <MdSwipe />
        </CustomLink>
        <CustomLink to="/chat">
          <MdChatBubble/>
        </CustomLink>
        <CustomLink to="/profile">
          <MdPerson />
        </CustomLink>
      </ul>
    </nav>
  );
}
export default Navbar;
