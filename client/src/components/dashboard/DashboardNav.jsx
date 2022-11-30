// Packages
import {
  MdOutlineSwipe,
  MdSwipe,
  MdChatBubbleOutline,
  MdChatBubble,
} from "react-icons/md";
import { RiUser3Fill, RiUser3Line } from "react-icons/ri";
// Components
import NavLink from "./NavLink";

const DashboardNav = () => {
  return (
    <nav className="dashboard-nav">
      <ul>
        {/* Swipe Page */}
        <NavLink to="swipe">
          <MdOutlineSwipe className="icon-inactive" />
          <MdSwipe className="icon-active" />
        </NavLink>

        {/* Chat Page */}
        <NavLink to="chat">
          <MdChatBubbleOutline className="icon-inactive" />
          <MdChatBubble className="icon-active" />
        </NavLink>

        {/* Profile Page */}
        <NavLink to="profile">
          <RiUser3Line className="icon-inactive" />
          <RiUser3Fill className="icon-active" />
        </NavLink>
      </ul>
    </nav>
  );
};
export default DashboardNav;
