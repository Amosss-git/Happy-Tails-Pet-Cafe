import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OwnerDashboard.css";
import logo from "../../assets/logo.jpg";

function OwnerDashboard(){

const navigate = useNavigate();

const handleLogout = () => {

const confirmLogout = window.confirm("Are you sure you want to logout?");

if(confirmLogout){
navigate("/");
}

};

const [orders] = useState([
{
id:"ORD2001",
customer:"Guest",
mop:"GCash",
time:"9:15 AM"
},
{
id:"ORD2002",
customer:"Andrea Lopez",
mop:"Cash",
time:"9:20 AM"
},
{
id:"ORD2003",
customer:"Guest",
mop:"Card",
time:"9:28 AM"
}
]);

return(

<div className="owner-dashboard-container">

{/* SIDEBAR */}

<div className="owner-sidebar">

<div className="owner-logo-section">
<img src={logo} alt="logo"/>
<h2>Happy Tails</h2>
</div>

<ul className="owner-menu">

<li onClick={()=>navigate("/owner-dashboard")}>Dashboard</li>

<li onClick={()=>navigate("/orders")}>Orders</li>

<li onClick={()=>navigate("/menu")}>Menu</li>

<li onClick={()=>navigate("/inventory")}>Inventory</li>

<li onClick={()=>navigate("/customers")}>Customers</li>

<li onClick={()=>navigate("/owner-activity-history")}>Activity History</li>

<li onClick={()=>navigate("/sales-reports")}>Sales & Reports</li>

<li onClick={()=>navigate("/staff-management")}>Staff Management</li>

<li onClick={()=>navigate("/owner-profile")}>Owner Profile</li>

</ul>

<button className="owner-logout" onClick={handleLogout}>Logout</button>

</div>


{/* MAIN */}

<div className="owner-main">

<h1>Owner Dashboard</h1>
<p className="owner-subtitle">Business Insights & Management Overview</p>

{/* STATS */}

<div className="owner-stats">

<div className="owner-card">
<h3>Today's Revenue</h3>
<p>₱12,860</p>
</div>

<div className="owner-card">
<h3>Total Orders</h3>
<p>64</p>
</div>

<div className="owner-card">
<h3>Monthly Sales</h3>
<p>₱215,400</p>
</div>

<div className="owner-card">
<h3>Active Staff</h3>
<p>5</p>
</div>

<div className="owner-card warning">
<h3>Low Stock Items</h3>
<p>4</p>
</div>

<div className="owner-card loyalty">
<h3>Loyalty Members</h3>
<p>28 Today</p>
</div>

</div>

{/* CONTENT */}

<div className="owner-content">

{/* RECENT ORDERS */}

<div className="owner-orders-card">

<h2>Recent Orders</h2>

<table>

<thead>
<tr>
<th>ID</th>
<th>Customer</th>
<th>MOP</th>
<th>Time</th>
</tr>
</thead>

<tbody>

{orders.map(order=>(
<tr key={order.id}>

<td>{order.id}</td>
<td>{order.customer}</td>
<td>{order.mop}</td>
<td>{order.time}</td>

</tr>
))}

</tbody>

</table>

</div>


{/* BUSINESS INSIGHTS */}

<div className="owner-insight-card">

<h2>Sales Insights</h2>

<ul>

<li>🔥 Top Selling Item: Caramel Macchiato</li>

<li>📈 Peak Sales Hour: 6PM - 8PM</li>

<li>💰 Average Order Value: ₱295</li>

<li>📊 Orders Today: 64</li>

</ul>

</div>

</div>

</div>

</div>

);

}

export default OwnerDashboard;