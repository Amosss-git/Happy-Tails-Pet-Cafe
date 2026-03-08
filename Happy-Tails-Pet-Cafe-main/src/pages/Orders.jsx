import { useState, useEffect } from "react";
import "./Orders.css";
import menuItems from "../data/menuItems";

export default function Orders(){

const today = new Date().toISOString().split("T")[0];

const orderTypes=["Delivery","Pickup","Dine-in"];

const randomType=()=> orderTypes[Math.floor(Math.random()*orderTypes.length)];

const getPastDate = (days)=>{
const d = new Date();
d.setDate(d.getDate()-days);
return d.toISOString().split("T")[0];
};

const names=[
"Guest",
"Andrea Lopez",
"John Cruz",
"Maria Santos",
"Daniel Reyes",
"Angela Tan",
"Carlo Mendoza",
"Patricia Lim"
];

const randomQty = ()=> Math.floor(Math.random()*4)+1;

const randomItems = ()=>{

let count=Math.floor(Math.random()*3)+1;
let items=[];

for(let i=0;i<count;i++){

items.push({
name: menuItems[Math.floor(Math.random()*menuItems.length)],
qty: randomQty()
});

}

return items;

};

const calcQty=(items)=>{
return items.reduce((sum,i)=>sum+i.qty,0);
};

const randomTime=()=>{

let hour=8+Math.floor(Math.random()*10);
let minute=Math.floor(Math.random()*60);

let ampm=hour>=12?"PM":"AM";
hour=hour>12?hour-12:hour;

return `${hour}:${minute.toString().padStart(2,"0")} ${ampm}`;

};

const generatePastOrders=(date)=>{

let orders=[];

for(let i=0;i<5;i++){

let items=randomItems();

orders.push({
id:`ORD${Math.floor(Math.random()*9000)+1000}`,
customer:names[Math.floor(Math.random()*names.length)],
items,
qty:calcQty(items),
total:`₱${calcQty(items)*120}`,
mop:Math.random()>0.5?"Cash":"GCash",
time:randomTime(),
type:randomType(),
status:["Completed","Cancelled","Declined"][Math.floor(Math.random()*3)],
date
});

}

return orders;

};

const generateTodayOrders=()=>{

let orders=[];

for(let i=0;i<5;i++){

let items=randomItems();

orders.push({
id:`ORD${Math.floor(Math.random()*9000)+1000}`,
customer:names[Math.floor(Math.random()*names.length)],
items,
qty:calcQty(items),
total:`₱${calcQty(items)*120}`,
mop:Math.random()>0.5?"Cash":"GCash",
time:randomTime(),
type:randomType(),
status:"Accepted",
date:today
});

}

return orders;

};

const baseOrders=[
...generateTodayOrders(),
...generatePastOrders(getPastDate(1)),
...generatePastOrders(getPastDate(2)),
...generatePastOrders(getPastDate(3))
];

const [orders,setOrders]=useState(baseOrders);
const [selectedDate,setSelectedDate]=useState(today);

useEffect(()=>{

let dashboardOrders=JSON.parse(localStorage.getItem("orders")) || [];

if(dashboardOrders.length>0){

const formatted=dashboardOrders.map(o=>({

...o,
qty:calcQty(o.items),
total:`₱${calcQty(o.items)*120}`

}));

setOrders(prev=>[...formatted,...prev]);

}

},[]);

const updateStatus=(orderId,newStatus)=>{

setOrders(prevOrders =>
prevOrders.map(order =>{

if(order.id===orderId){

if(order.status==="Completed" || order.status==="Cancelled"){
return order;
}

return {...order,status:newStatus};
}

return order;

})
);

};

const filteredOrders=orders.filter(o=>o.date===selectedDate);

return(

<div className="ordersPage">

<h1 className="ordersTitle">Orders</h1>

<div className="dateFilter">
<label>Select Date:</label>
<input
type="date"
value={selectedDate}
onChange={(e)=>setSelectedDate(e.target.value)}
/>
</div>

<table className="ordersTable">

<thead>

<tr>
<th>Order ID</th>
<th>Customer</th>
<th>Items</th>
<th>Qty</th>
<th>Total</th>
<th>MOP</th>
<th>Type</th>
<th>Time</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{filteredOrders.map((order)=>{

const isPast=selectedDate!==today;

return(

<tr key={order.id}>

<td>{order.id}</td>

<td>{order.customer}</td>

<td>
{order.items.map((item,i)=>(
<div key={i}>
{item.name} x{item.qty}
</div>
))}
</td>

<td>{order.qty}</td>

<td>{order.total}</td>

<td>{order.mop}</td>

<td>{order.type}</td>

<td>{order.time}</td>

<td>

{isPast ? (

<span className={
order.status==="Declined"
? "declined"
: order.status==="Cancelled"
? "cancelled"
: "completed"
}>
{order.status}
</span>

) : order.status==="Declined" ? (

<span className="declined">Declined</span>

) : order.status==="Completed" ? (

<span className="completed">Completed</span>

) : order.status==="Cancelled" ? (

<span className="cancelled">Cancelled</span>

) : (

<select
value={order.status}
onChange={(e)=>updateStatus(order.id,e.target.value)}
disabled={order.status==="Cancelled" || order.status==="Completed"}
>

<option>Accepted</option>
<option>Preparing</option>
<option>Completed</option>
<option>Cancelled</option>

</select>

)}

</td>

</tr>

);

})}

</tbody>

</table>

</div>

);

}