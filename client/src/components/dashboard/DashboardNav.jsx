import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {
  MdOutlineSwipe,
  MdSwipe,
  MdChatBubbleOutline,
  MdChatBubble,
} from "react-icons/md";
import { RiUser3Fill, RiUser3Line } from "react-icons/ri";
const DashboardNav = () => {
  return (
    <nav className="dashboard-nav">
      <ul>
        <CustomLink to="swipe">
          <MdOutlineSwipe className="icon-inactive" />
          <MdSwipe className="icon-active" />
        </CustomLink>

        <CustomLink to="chat">
          <MdChatBubbleOutline className="icon-inactive" />
          <MdChatBubble className="icon-active" />
        </CustomLink>

        <CustomLink to="profile">
          <RiUser3Line className="icon-inactive" />
          <RiUser3Fill className="icon-active" />
        </CustomLink>
      </ul>
    </nav>
  );
};
export default DashboardNav;

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};