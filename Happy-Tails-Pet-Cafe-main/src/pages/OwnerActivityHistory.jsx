import { useState } from "react";
import "./ActivityHistory.css";
import { useNavigate } from "react-router-dom";

export default function OwnerActivityHistory(){

const navigate = useNavigate();

const [search,setSearch] = useState("");
const [filter,setFilter] = useState("all");

const activities = [

{user:"Patric",action:"Patric logged into the system",type:"login",date:"March 6, 2026",time:"08:00 AM"},
{user:"Carlos",action:"Carlos updated milk stock to 8 bottles",type:"inventory",date:"March 6, 2026",time:"08:10 AM"},
{user:"EJ",action:"EJ updated coffee beans stock to 2 packs",type:"inventory",date:"March 6, 2026",time:"08:15 AM"},
{user:"Gianna",action:"Gianna updated matcha powder stock to 2 packs",type:"inventory",date:"March 6, 2026",time:"08:21 AM"},
{user:"Owner",action:"Owner added new menu item Strawberry Matcha",type:"menu",date:"March 6, 2026",time:"08:30 AM"},

{user:"Patric",action:"Patric edited price of Americano",type:"menu",date:"March 5, 2026",time:"08:45 AM"},
{user:"Carlos",action:"Carlos edited price of Cafe Latte",type:"menu",date:"March 5, 2026",time:"09:00 AM"},
{user:"EJ",action:"EJ edited price of Caramel Macchiato",type:"menu",date:"March 5, 2026",time:"09:10 AM"},
{user:"Gianna",action:"Gianna edited price of Spanish Latte",type:"menu",date:"March 5, 2026",time:"09:20 AM"},
{user:"Owner",action:"Owner updated strawberry syrup stock to 3 bottles",type:"inventory",date:"March 4, 2026",time:"09:35 AM"},

{user:"Patric",action:"Patric marked Cappuccino out of stock",type:"inventory",date:"March 4, 2026",time:"09:45 AM"},
{user:"Carlos",action:"Carlos deleted ingredient Vanilla Syrup",type:"inventory",date:"March 4, 2026",time:"10:00 AM"},
{user:"EJ",action:"EJ updated sugar stock to 5 packs",type:"inventory",date:"March 4, 2026",time:"10:10 AM"},
{user:"Gianna",action:"Gianna added new menu item Caramel Latte",type:"menu",date:"March 4, 2026",time:"10:20 AM"},
{user:"Owner",action:"Owner edited price of Croissant to ₱95",type:"menu",date:"March 4, 2026",time:"10:35 AM"}

];

const filteredActivities = activities.filter((a)=>{

const matchSearch = a.action.toLowerCase().includes(search.toLowerCase());
const matchFilter = filter === "all" || a.type === filter;

return matchSearch && matchFilter;

});

return(

<div className="activity-page">

<div className="activity-container">

<div className="activity-header">

<div>
<h1>Activity History</h1>
<p>Track all system actions including menu updates, inventory edits, and login records.</p>
</div>

<button
className="back-btn"
onClick={()=>navigate("/owner-dashboard")}
>
Back to Dashboard
</button>

</div>

<div className="activity-controls">

<input
type="text"
placeholder="Search activities..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="search-bar"
/>

<div className="filter-buttons">
<button onClick={()=>setFilter("all")}>All</button>
<button onClick={()=>setFilter("inventory")}>Inventory</button>
<button onClick={()=>setFilter("menu")}>Menu</button>
<button onClick={()=>setFilter("login")}>Login</button>
</div>

</div>

<div className="activity-list">

{filteredActivities.map((item,index)=>{

let icon="";

if(item.type==="inventory") icon="📦";
if(item.type==="menu") icon="🍽";
if(item.type==="login") icon="🔐";

return(

<div key={index} className="activity-card">

<div className="activity-left">

<div className="activity-icon">{icon}</div>

<div>
<h4>{item.action}</h4>
<span className="activity-type">{item.type.toUpperCase()}</span>
</div>

</div>

<div className="activity-time">
{item.date} • {item.time}
</div>

</div>

);

})}

</div>

</div>

</div>

);

}