import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { MdOutlineSwipe, MdSwipe, MdChatBubbleOutline, MdChatBubble } from "react-icons/md";
const DashboardNav = () => {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="swipe"><MdOutlineSwipe class="icon-inactive"/><MdSwipe class="icon-active"/></CustomLink>
        <CustomLink to="chat"><MdChatBubbleOutline class="icon-inactive"/><MdChatBubble class="icon-active"/></CustomLink>
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
