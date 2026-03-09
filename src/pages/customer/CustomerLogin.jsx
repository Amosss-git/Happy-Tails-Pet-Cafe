import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CustomerLogin.css";

import cafe1 from "../../assets/cafe1.jpg";
import cafe2 from "../../assets/cafe2.jpg";
import cafe3 from "../../assets/cafe3.jpg";

const images = [cafe1, cafe2, cafe3];

function CustomerLogin() {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    if (!email.endsWith("@happytails.com")) {
      alert("Use a @happytails.com email.");
      return;
    }

    if (password !== "customer123") {
      alert("Incorrect customer password.");
      return;
    }

    localStorage.setItem("userRole", "customer");
    navigate("/customer-dashboard");
  };

  return (
    <div className="login-page">
      <div
        className="login-image"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="image-overlay">
          <h1 className="cafe-title">
            <span className="pink">Happy </span>
            <span className="blue">Tails </span>
            <span className="pink">Pet </span>
            <span className="pink">Café</span>
          </h1>

          <p className="portal-text">Customer Portal</p>
        </div>
      </div>

      <div className="login-panel">
        <div className="login-card">
          <h2>Customer Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <Link to="/staff-login" className="register-link">
            I am staff
          </Link>
          <Link to="/owner-login" className="register-link">
            I am owner
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
