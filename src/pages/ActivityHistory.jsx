import { useState } from "react";
import "./ActivityHistory.css";
import { useNavigate } from "react-router-dom";

export default function ActivityHistory(){

const navigate = useNavigate();

const [search,setSearch] = useState("");
const [filter,setFilter] = useState("all");

const activities = [

{type:"login", action:"Staff logged in", time:"March 6, 2026 • 08:00 AM"},
{type:"inventory", action:"Updated Milk stock to 8 bottles", time:"March 6, 2026 • 08:10 AM"},
{type:"inventory", action:"Updated Coffee Beans stock to 2 packs", time:"March 6, 2026 • 08:15 AM"},
{type:"inventory", action:"Updated Matcha Powder stock to 2 packs", time:"March 6, 2026 • 08:21 AM"},
{type:"inventory", action:"Updated Chocolate Syrup stock to 3 bottles", time:"March 6, 2026 • 08:30 AM"},

{type:"menu", action:"Edited price of Americano", time:"March 5, 2026 • 08:45 AM"},
{type:"menu", action:"Edited price of Cafe Latte", time:"March 5, 2026 • 09:00 AM"},
{type:"menu", action:"Edited price of Caramel Macchiato", time:"March 5, 2026 • 09:10 AM"},
{type:"menu", action:"Edited price of Spanish Latte", time:"March 5, 2026 • 09:20 AM"},

{type:"inventory", action:"Updated Strawberry Syrup stock to 3 bottles", time:"March 4, 2026 • 09:35 AM"},
{type:"inventory", action:"Updated Coconut Syrup stock to 2 bottles", time:"March 4, 2026 • 09:40 AM"},
{type:"inventory", action:"Updated Cocoa Powder stock to 4 packets", time:"March 4, 2026 • 09:50 AM"},

{type:"menu", action:"Marked Matcha Latte unavailable", time:"March 3, 2026 • 10:00 AM"},
{type:"menu", action:"Marked Iced Matcha Latte unavailable", time:"March 3, 2026 • 10:05 AM"},
{type:"menu", action:"Edited price of Choco Java Chip Frappe", time:"March 3, 2026 • 10:12 AM"},
{type:"menu", action:"Edited price of Peanut Butter Choco Frappe", time:"March 3, 2026 • 10:20 AM"},

{type:"inventory", action:"Updated Rice stock to 3 packs", time:"March 2, 2026 • 10:40 AM"},
{type:"menu", action:"Marked Breaded Fish Fillet with Rice unavailable", time:"March 2, 2026 • 10:50 AM"},
{type:"menu", action:"Marked Burger Steak with Rice unavailable", time:"March 2, 2026 • 11:00 AM"},
{type:"menu", action:"Marked Chicken Cordon Bleu unavailable", time:"March 2, 2026 • 11:08 AM"},

{type:"inventory", action:"Updated Chicken stock to 6 packs", time:"March 2, 2026 • 11:20 AM"},
{type:"menu", action:"Marked Chicken Alfredo Pasta available", time:"March 2, 2026 • 11:35 AM"},
{type:"menu", action:"Marked Baked Macaroni available", time:"March 2, 2026 • 11:40 AM"},

{type:"inventory", action:"Updated Burger Patties stock to 10 packs", time:"March 1, 2026 • 11:50 AM"},
{type:"menu", action:"Edited price of Cheesy Beef Burger", time:"March 1, 2026 • 12:00 PM"},
{type:"menu", action:"Marked Tuna Sandwich available", time:"March 1, 2026 • 12:10 PM"},

{type:"login", action:"Staff logged out", time:"March 6, 2026 • 12:30 PM"},


/* ----------- NEW 30+ RECORDS ----------- */

{type:"menu", action:"Added new menu item: Mango Graham Frappe", time:"March 1, 2026 • 12:40 PM"},
{type:"menu", action:"Added new menu item: Caramel Cold Brew", time:"March 1, 2026 • 12:42 PM"},
{type:"menu", action:"Deleted menu item: Vanilla Dream Latte", time:"March 1, 2026 • 12:44 PM"},
{type:"menu", action:"Marked Fish & Fries unavailable", time:"Feb 28, 2026 • 12:46 PM"},
{type:"menu", action:"Marked Fish & Fries available", time:"Feb 28, 2026 • 12:48 PM"},

{type:"inventory", action:"Added ingredient: Vanilla Syrup", time:"Feb 27, 2026 • 12:50 PM"},
{type:"inventory", action:"Added ingredient: Almond Milk", time:"Feb 27, 2026 • 12:52 PM"},
{type:"inventory", action:"Deleted ingredient: Hazelnut Syrup", time:"Feb 26, 2026 • 12:54 PM"},
{type:"inventory", action:"Edited quantity of Matcha Powder to 5 packs", time:"Feb 26, 2026 • 12:56 PM"},
{type:"inventory", action:"Edited quantity of Cocoa Powder to 6 packets", time:"Feb 23, 2026 • 12:58 PM"},

{type:"inventory", action:"Marked Coffee Beans out of stock", time:"Feb 22, 2026 • 01:00 PM"},
{type:"inventory", action:"Put Coffee Beans back in stock", time:"Feb 22, 2026 • 01:02 PM"},
{type:"inventory", action:"Marked Milk out of stock", time:"Feb 21, 2026 • 01:04 PM"},
{type:"inventory", action:"Put Milk back in stock", time:"Feb 21, 2026 • 01:06 PM"},
{type:"inventory", action:"Edited quantity of Chocolate Syrup to 5 bottles", time:"Feb 20, 2026 • 01:08 PM"},

{type:"menu", action:"Edited price of Choco Java Chip Frappe", time:"Feb 19, 2026 • 01:10 PM"},
{type:"menu", action:"Edited price of Iced Vanilla Latte", time:"Feb 19, 2026 • 01:12 PM"},
{type:"menu", action:"Deleted menu item: Classic Iced Coffee", time:"Feb 17, 2026 • 01:14 PM"},
{type:"menu", action:"Added new menu item: Strawberry Cream Latte", time:"Feb 15, 2026 • 01:16 PM"},
{type:"menu", action:"Marked Strawberry Cream Latte available", time:"Feb 12, 2026 • 01:18 PM"},

{type:"inventory", action:"Added ingredient: Whipped Cream", time:"Feb 12, 2026 • 01:20 PM"},
{type:"inventory", action:"Added ingredient: Brown Sugar Syrup", time:"Feb 11, 2026 • 01:22 PM"},
{type:"inventory", action:"Deleted ingredient: Caramel Sauce", time:"Feb 11, 2026 • 01:24 PM"},
{type:"inventory", action:"Edited quantity of Burger Patties to 15 packs", time:"Feb 11, 2026 • 01:26 PM"},
{type:"inventory", action:"Edited quantity of Chicken Breast to 10 packs", time:"Feb 10, 2026 • 01:28 PM"},

{type:"login", action:"Staff logged in", time:"Feb 10, 2026 • 01:30 PM"},
{type:"menu", action:"Marked Chicken Alfredo Pasta unavailable", time:"Feb 9, 2026 • 01:32 PM"},
{type:"menu", action:"Marked Chicken Alfredo Pasta available", time:"Feb 9, 2026 • 01:34 PM"},
{type:"inventory", action:"Added ingredient: Parmesan Cheese", time:"Feb 8, 2026 • 01:36 PM"},
{type:"login", action:"Staff logged out", time:"Feb 4, 2026 • 01:40 PM"}

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
onClick={()=>navigate("/profile")}
>
Back to Profile
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
{item.time}
</div>

</div>

);

})}

</div>

</div>

</div>

);

}