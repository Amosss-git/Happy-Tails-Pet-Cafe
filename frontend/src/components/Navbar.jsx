import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profileIcon from "../assets/profile.png";
import "./Navbar.css";

function Navbar({ isAuthenticated, onSignOut, onOpenModal }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
      </div>

      <ul className="nav-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Café Menu</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      <div className="nav-right">
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="profile-link">
              <img
                src={profileIcon}
                alt="Profile"
                className="profile-icon"
              />
            </Link>

            <button className="auth-btn" onClick={onSignOut}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="auth-btn" onClick={onOpenModal}>
            Sign Up / Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;