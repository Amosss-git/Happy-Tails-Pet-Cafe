import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import StaffLogin from "./pages/staff/StaffLogin";
import StaffRegister from "./pages/staff/StaffRegister";
import StaffDashboard from "./pages/staff/StaffDashboard";
import Orders from "./pages/staff/Orders";
import Menu from "./pages/staff/Menu";
import Inventory from "./pages/staff/Inventory";
import Customers from "./pages/staff/Customers";
import Profile from "./pages/staff/StaffProfile";
import ActivityHistory from "./pages/staff/ActivityHistory";
import OwnerLogin from "./pages/admin/OwnerLogin";
import OwnerDashboard from "./pages/admin/OwnerDashboard";
import OwnerActivityHistory from "./pages/admin/OwnerActivityHistory";
import CustomerLogin from "./pages/customer/CustomerLogin";
import CustomerDashboard from "./pages/customer/CustomerDashboard";

const getRole = () => localStorage.getItem("userRole");

function StaffOrOwnerRoute({ children }) {
  const role = getRole();

  if (role === "staff" || role === "owner") return children;

  return <Navigate to="/staff-login" replace />;
}

function OwnerOnlyRoute({ children }) {
  const role = getRole();

  if (role === "owner") return children;

  return <Navigate to="/owner-login" replace />;
}

function CustomerOnlyRoute({ children }) {
  const role = getRole();

  if (role === "customer") return children;

  return <Navigate to="/customer-login" replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/staff-login" replace />} />

        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/staff-register" element={<StaffRegister />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />

        <Route
          path="/dashboard"
          element={
            <StaffOrOwnerRoute>
              <StaffDashboard />
            </StaffOrOwnerRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <StaffOrOwnerRoute>
              <Orders />
            </StaffOrOwnerRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <StaffOrOwnerRoute>
              <Menu />
            </StaffOrOwnerRoute>
          }
        />
        <Route
          path="/inventory"
          element={
            <StaffOrOwnerRoute>
              <Inventory />
            </StaffOrOwnerRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <StaffOrOwnerRoute>
              <Customers />
            </StaffOrOwnerRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <StaffOrOwnerRoute>
              <Profile />
            </StaffOrOwnerRoute>
          }
        />
        <Route
          path="/activity-history"
          element={
            <StaffOrOwnerRoute>
              <ActivityHistory />
            </StaffOrOwnerRoute>
          }
        />

        <Route
          path="/owner-dashboard"
          element={
            <OwnerOnlyRoute>
              <OwnerDashboard />
            </OwnerOnlyRoute>
          }
        />
        <Route
          path="/owner-activity-history"
          element={
            <OwnerOnlyRoute>
              <OwnerActivityHistory />
            </OwnerOnlyRoute>
          }
        />

        <Route
          path="/customer-dashboard"
          element={
            <CustomerOnlyRoute>
              <CustomerDashboard />
            </CustomerOnlyRoute>
          }
        />
      </Routes>
    </Router>
  );
}
