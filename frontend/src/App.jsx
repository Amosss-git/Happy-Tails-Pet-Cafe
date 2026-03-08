// src/App.jsx
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Order from "./pages/Order";
import OrderCategory from "./pages/OrderCategory";
import Profile from "./pages/Profile";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
// ✅ CRITICAL: Make sure this file exists in src/pages/TrackOrder.jsx
import TrackOrder from "./pages/TrackOrder"; 

import pattern from "./assets/pattern.png";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Restore login state if saved
  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    if (savedAuth === "true") setIsAuthenticated(true);
  }, []);

  // ✅ Background on all pages EXCEPT landing page "/"
  useEffect(() => {
    const isLanding = location.pathname === "/";

    if (!isLanding) {
      document.body.style.backgroundColor = "#f2f2f2";
      document.body.style.backgroundImage = `url(${pattern})`;
      document.body.style.backgroundRepeat = "repeat";
      document.body.style.backgroundSize = "520px";
      document.body.style.backgroundAttachment = "fixed";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.backgroundImage = "none";
    }

    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, [location.pathname]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsGuest(false);
    localStorage.setItem("isAuthenticated", "true");
    setShowModal(false);
  };

  const handleGuest = () => {
    setIsGuest(true);
    setIsAuthenticated(false);
    setShowModal(false);
    navigate("/order");
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setIsGuest(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const handleOrderClick = () => {
    if (!isAuthenticated && !isGuest) setShowModal(true);
    else navigate("/order");
  };

  return (
    <div className="app-shell">
      <Navbar
        isAuthenticated={isAuthenticated}
        onSignOut={handleSignOut}
        onOpenModal={() => setShowModal(true)}
      />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home onOrderClick={handleOrderClick} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />

          <Route path="/order" element={<Order />} />
          <Route path="/order/:category" element={<OrderCategory />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          {/* ✅ TRACK ORDER ROUTE ADDED HERE */}
          <Route path="/track-order" element={<TrackOrder />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />

      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLogin={handleLogin}
        onGuest={handleGuest}
      />
    </div>
  );
}

export default App;