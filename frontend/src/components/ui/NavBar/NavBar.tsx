import { useState } from "react";
import { Link } from "react-router-dom";
import { BlitzQuizIcon, NavMenuIcon } from "../Icons";

const NavBar = () => {
  const [isMenuClosed, setIsMenuClosed] = useState<boolean>(true);

  return (
    <nav className="nav-bar">
      <BlitzQuizIcon />
      <div className="nav-menu">
        {isMenuClosed ? (
          <NavMenuIcon clickAction={() => setIsMenuClosed(false)} />
        ) : (
          <span className="cancel-icon" onClick={() => setIsMenuClosed(true)}>
            &times;
          </span>
        )}
        {isMenuClosed ? null : (
          <div className="menu-options">
            <Link to="/">Home</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="Dashboard">Dashboard</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
