// Packages
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    // Check If Active
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
export default NavLink;
