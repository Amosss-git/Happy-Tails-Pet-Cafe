import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


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

export default function App(){

return(

<Router>

<Routes>

<Route path="/" element={<StaffLogin/>} />

<Route path="/staff-login" element={<StaffLogin/>} />

<Route path="/staff-register" element={<StaffRegister/>} />

<Route path="/dashboard" element={<StaffDashboard />} />

<Route path="/orders" element={<Orders />} />

<Route path="/menu" element={<Menu/>} />

<Route path="/inventory" element={<Inventory/>} />

<Route path="/customers" element={<Customers/>} />

<Route path="/profile" element={<Profile/>} />

<Route path="/activity-history" element={<ActivityHistory />} />

<Route path="/owner-login" element={<OwnerLogin />} /> 

<Route path="/owner-dashboard" element={<OwnerDashboard />} /> 

<Route path="/owner-activity-history" element={<OwnerActivityHistory />} /> 

</Routes>

</Router>

);

}