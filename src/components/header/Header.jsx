import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">loopstudios</div>
      <nav className={menuToggle ? "active" : ""}>
        <div className="nav-menu">
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/events">Events</Link>
          <Link to="/products">Products</Link>
          <Link to="/support">Support</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
