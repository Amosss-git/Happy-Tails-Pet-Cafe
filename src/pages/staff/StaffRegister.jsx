import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StaffRegister.css";

import cafe1 from "../../assets/cafe1.jpg";
import cafe2 from "../../assets/cafe2.jpg";
import cafe3 from "../../assets/cafe3.jpg";

const images = [cafe1, cafe2, cafe3];

function StaffRegister() {

  const navigate = useNavigate(); // added for redirect

  const [currentImage, setCurrentImage] = useState(0);

  // ADDED STATES (no UI change)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // REGISTER FUNCTION (added)
  const handleRegister = () => {

    // EMAIL DOMAIN RULE
    if(!email.endsWith("@happytails.com")){
      alert("⚠ Only Happy Tails staff emails (@happytails.com) are allowed.");
      return;
    }

    // PASSWORD RULE
    if(password !== "happytails123"){
      alert("⚠ Incorrect Staff Password. Ask owner for correct password.");
      return;
    }

    alert("Account successfully registered. Please login again.");
    navigate("/staff-login");
  };

  return (
    <div className="register-page">

      <div
        className="register-image"
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

      <div className="register-panel">

        <div className="register-card">

          <h2>Register Staff</h2>

          <input type="text" placeholder="Full Name" />

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

          <button className="register-btn" onClick={handleRegister}>
            Register
          </button>

          <Link to="/staff-login" className="back-login">
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default StaffRegister;