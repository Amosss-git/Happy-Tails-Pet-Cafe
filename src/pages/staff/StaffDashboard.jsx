import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffDashboard.css";
import logo from "../../assets/logo.jpg";

function StaffDashboard(){

const navigate = useNavigate();

/* LOGOUT FUNCTION */

const handleLogout = () => {

const confirmLogout = window.confirm("Are you sure you want to logout?");

if(confirmLogout){
localStorage.removeItem("userRole");
navigate("/staff-login");
}

};

const [orders,setOrders] = useState([
{
id:"ORD2001",
customer:"Guest",
items:[
{name:"Caramel Macchiato",qty:2},
{name:"Hot Matcha Latte",qty:1}
],
type:"Dine-In",
mop:"GCash",
time:"9:15 AM"
},
{
id:"ORD2002",
customer:"Andrea Lopez",
items:[
{name:"Chicken Cordon Bleu with Rice",qty:1},
{name:"Iced Latte",qty:1}
],
type:"Delivery",
mop:"Cash",
time:"9:20 AM"
},
{
id:"ORD2003",
customer:"Guest",
items:[
{name:"Hot Americano",qty:1}
],
type:"Pickup",
mop:"Card",
time:"9:28 AM"
}
]);

const getQty=(items)=>{
return items.reduce((sum,i)=>sum+i.qty,0);
};

const acceptOrder=(order)=>{

let existing = JSON.parse(localStorage.getItem("orders")) || [];

existing.push({
...order,
status:"Accepted"
});

localStorage.setItem("orders",JSON.stringify(existing));

setOrders(prev=>prev.filter(o=>o.id!==order.id));
};

const declineOrder=(order)=>{

let existing = JSON.parse(localStorage.getItem("orders")) || [];

existing.push({
...order,
status:"Declined"
});

localStorage.setItem("orders",JSON.stringify(existing));

setOrders(prev=>prev.filter(o=>o.id!==order.id));
};

return(

<div className="dashboard-container">

{/* SIDEBAR */}

<div className="sidebar">

<div className="logo-section">
<img src={logo} alt="logo"/>
<h2>Happy Tails</h2>
</div>

<ul className="menu">
<li onClick={()=>navigate("/dashboard")}>Dashboard</li>
<li onClick={()=>navigate("/orders")}>Orders</li>
<li onClick={()=>navigate("/menu")}>Menu</li>
<li onClick={()=>navigate("/inventory")}>Inventory</li>
<li onClick={()=>navigate("/customers")}>Customers</li>
<li>Promotions & Loyalty</li>
<li onClick={()=>navigate("/profile")}>My Profile</li>
</ul>

<button className="logout" onClick={handleLogout}>Logout</button>

</div>

{/* MAIN */}

<div className="main">

<h1>Staff Dashboard</h1>
<p className="subtitle">Happy Tails Pet Café Management System</p>

{/* STATS */}

<div className="stats">

<div className="card">
<h3>Today's Orders</h3>
<p>42</p>
</div>

<div className="card">
<h3>Revenue</h3>
<p>₱7,540</p>
</div>

<div className="card">
<h3>Active Tables</h3>
<p>6</p>
</div>

<div className="card">
<h3>Menu Items</h3>
<p>57</p>
</div>

<div className="card warning">
<h3>Low Stock</h3>
<p>3 Items</p>
</div>

<div className="card loyalty">
<h3>Loyalty Members</h3>
<p>18 Today</p>
</div>

</div>

{/* CONTENT */}

<div className="content">

{/* ORDERS */}

<div className="card">

<h2>New Orders</h2>

<table>

<thead>
<tr>
<th>ID</th>
<th>Customer</th>
<th>Items</th>
<th>Qty</th>
<th>Order Type</th>
<th>MOP</th>
<th>Time</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{orders.map(order=>(
<tr key={order.id}>

<td>{order.id}</td>

<td>{order.customer}</td>

<td>
{order.items.map((i,index)=>(
<div key={index}>
{i.name} x{i.qty}
</div>
))}
</td>

<td>{getQty(order.items)}</td>

<td>{order.type}</td>

<td>{order.mop}</td>

<td>{order.time}</td>

<td className="action-buttons">
<button
className="accept-btn"
onClick={()=>acceptOrder(order)}
>
Accept
</button>

<button
className="decline-btn"
onClick={()=>declineOrder(order)}
>
Decline
</button>
</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

</div>

</div>

);

}

export default StaffDashboard;