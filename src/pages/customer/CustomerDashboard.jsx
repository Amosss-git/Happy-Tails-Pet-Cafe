import { useNavigate } from "react-router-dom";
import "./CustomerDashboard.css";

function CustomerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      localStorage.removeItem("userRole");
      navigate("/customer-login");
    }
  };

  return (
    <div className="customer-page">
      <div className="customer-card">
        <h1>Welcome, Customer!</h1>
        <p>You are logged in to the customer side of Happy Tails Pet Café.</p>

        <div className="customer-actions">
          <button onClick={() => navigate("/menu")}>Browse Menu</button>
          <button onClick={() => navigate("/customer-dashboard")}>My Dashboard</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
