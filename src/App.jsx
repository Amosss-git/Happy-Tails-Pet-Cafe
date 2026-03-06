import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import StaffLogin from "./pages/StaffLogin";
import StaffRegister from "./pages/StaffRegister";
import StaffDashboard from "./pages/StaffDashboard";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import Inventory from "./pages/Inventory";
import Customers from "./pages/Customers";
import Profile from "./pages/StaffProfile";
import ActivityHistory from "./pages/ActivityHistory";
import OwnerLogin from "./pages/OwnerLogin";
import OwnerDashboard from "./pages/OwnerDashboard";
import OwnerActivityHistory from "./pages/OwnerActivityHistory";

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