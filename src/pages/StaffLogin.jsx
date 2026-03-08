import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StaffLogin.css";

import cafe1 from "../assets/cafe1.jpg";
import cafe2 from "../assets/cafe2.jpg";
import cafe3 from "../assets/cafe3.jpg";

const images = [cafe1, cafe2, cafe3];

function StaffLogin() {

  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {

    if(!email.endsWith("@happytails.com")){
      alert("Only Happy Tails staff emails are allowed.");
      return;
    }

    if(password !== "happytails123"){
      alert("Incorrect staff password.");
      return;
    }

    navigate("/dashboard");
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

          <p className="portal-text">Staff Management Portal</p>

        </div>
      </div>

      <div className="login-panel">

        <div className="login-card">

          <h2>Staff Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <Link to="/staff-register" className="register-link">
            Don't have an account? Register
          </Link>

          <Link to="/owner-login" className="register-link">
            I am the owner
          </Link>

        </div>

      </div>

    </div>
  );
}

export default StaffLogin;