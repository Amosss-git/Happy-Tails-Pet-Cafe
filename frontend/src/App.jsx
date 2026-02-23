import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import Footer from "./components/Footer"; // <-- This looks in the components folder!

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Order from "./pages/Order";
import Profile from "./pages/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

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
    if (!isAuthenticated && !isGuest) {
      setShowModal(true);
    } else {
      navigate("/order");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        isAuthenticated={isAuthenticated}
        onSignOut={handleSignOut}
        onOpenModal={() => setShowModal(true)}
      />

      <main className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={<Home onOrderClick={handleOrderClick} />}
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLogin={handleLogin}
        onGuest={handleGuest}
      />

      <Footer />
    </div>
  );
}

export default App;