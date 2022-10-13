import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

import { FaUserAlt, FaStream, FaExchangeAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Flinder
      </Link>
      <ul>
        <CustomLink to="/match">
          <FaExchangeAlt />
        </CustomLink>
        <CustomLink to="/chat">
          <FaStream />
        </CustomLink>
        <CustomLink to="/profile">
          <FaUserAlt />
        </CustomLink>
      </ul>
    </nav>
  );
}
export default Navbar;
