import { useState } from "react";
import "./Customers.css";

export default function Customers(){

const [search,setSearch] = useState("");

const customers = [

{
id:1,
name:"Andrea Lopez",
email:"andrea@gmail.com",
phone:"09171234567",
address:"123 Maple Street",
city:"Quezon City",
notes:"Leave at gate",
signup:"03-01-2026",

orders:[
{
id:"ORD1023",
items:["Caramel Latte x1","Chicken Popcorn x1"],
total:"₱240",
mop:"GCash",
type:"Delivery",
date:"06-05-2026",
time:"10:30 AM",
status:"Completed"
},
{
id:"ORD1150",
items:["Matcha Latte x2"],
total:"₱240",
mop:"Cash",
type:"Dine in",
date:"06-06-2026",
time:"2:15 PM",
status:"Completed"
},
{
id:"ORD1823",
items:["Iced Hazelnut Latte x2", "Chicken Alfredo Pasta x1", "Burger Steak with Rice x1"],
total:"₱240",
mop:"GCash",
type:"Pickup",
date:"06-06-2026",
time:"2:15 PM",
status:"Completed"
}
]


},

{
id:2,
name:"John Cruz",
email:"johncruz@gmail.com",
phone:"09184567821",
address:"",
city:"",
notes:"",
signup:"02-25-2026",

orders:[
{
id:"ORD1200",
items:["Spanish Latte x1","Cheesy Bread x1"],
total:"₱210",
mop:"GCash",
type:"Dine in",
date:"06-06-2026",
time:"11:40 AM",
status:"Completed"
}
]

},

{
id:3,
name:"Maria Santos",
email:"maria@gmail.com",
phone:"09173456789",
address:"15 Sampaguita Street",
city:"Makati",
notes:"Call when outside",
signup:"02-28-2026",

orders:[
{
id:"ORD1302",
items:["Mocha Latte x1","Baked Macaroni x1"],
total:"₱260",
mop:"Cash",
type:"Dine in",
date:"06-04-2026",
time:"1:20 PM",
status:"Completed"
}
]

},
{
    id:4,
    name:"Sophia Martinez",
    email:"sophiamartinez@gmail.com",
    phone:"09171234561",
    street:"12 Sampaguita St",
    city:"Quezon City",
    notes:"Call when outside",
    signup:"05-20-2026",
    
    orders:[
    {
    id:"ORD2210",
    items:["Caramel Latte x1","Cheesy Bread x1"],
    total:"₱220",
    mop:"GCash",
    type:"Delivery",
    date:"06-04-2026",
    time:"10:20 AM",
    status:"Completed"
    },
    {
    id:"ORD2314",
    items:["Matcha Latte x1"],
    total:"₱120",
    mop:"Cash",
    type:"Pickup",
    date:"06-05-2026",
    time:"3:10 PM",
    status:"Completed"
    }
    ]
    },
    
    {
    id:5,
    name:"Michael Tan",
    email:"michaeltan@gmail.com",
    phone:"09171234562",
    street:"",
    city:"",
    notes:"",
    signup:"05-22-2026",
    
    orders:[
    {
    id:"ORD2412",
    items:["Hot Chocolate x1","Crinkle x1"],
    total:"₱180",
    mop:"Cash",
    type:"Dine-In",
    date:"06-03-2026",
    time:"11:40 AM",
    status:"Completed"
    }
    ]
    },
    
    {
    id:6,
    name:"Isabella Cruz",
    email:"isabellacruz@gmail.com",
    phone:"09171234563",
    street:"88 Narra Ave",
    city:"Pasig",
    notes:"Leave at guard",
    signup:"05-24-2026",
    
    orders:[
    {
    id:"ORD2502",
    items:["Strawberry Milk x1"],
    total:"₱110",
    mop:"GCash",
    type:"Delivery",
    date:"06-02-2026",
    time:"9:20 AM",
    status:"Completed"
    },
    {
    id:"ORD2511",
    items:["Carbonara Pasta x1","Iced Latte x1"],
    total:"₱290",
    mop:"GCash",
    type:"Delivery",
    date:"06-04-2026",
    time:"12:50 PM",
    status:"Completed"
    },
    {
    id:"ORD2610",
    items:["Fish & Fries x1"],
    total:"₱210",
    mop:"Cash",
    type:"Pickup",
    date:"06-05-2026",
    time:"6:10 PM",
    status:"Completed"
    }
    ]
    },
    
    {
    id:7,
    name:"Daniel Gomez",
    email:"danielgomez@gmail.com",
    phone:"09171234564",
    street:"",
    city:"",
    notes:"",
    signup:"05-25-2026",
    
    orders:[
    {
    id:"ORD2700",
    items:["Burger Steak x1","Four Seasons Juice x1"],
    total:"₱230",
    mop:"Cash",
    type:"Dine-In",
    date:"06-05-2026",
    time:"1:00 PM",
    status:"Completed"
    },
    {
    id:"ORD2802",
    items:["Cheesy Beef Burger x1"],
    total:"₱180",
    mop:"Cash",
    type:"Dine-In",
    date:"06-06-2026",
    time:"2:30 PM",
    status:"Completed"
    }
    ]
    },
    
    {
    id:8,
    name:"Angela Rivera",
    email:"angelarivera@gmail.com",
    phone:"09171234565",
    street:"45 Acacia Rd",
    city:"Makati",
    notes:"",
    signup:"05-26-2026",
    
    orders:[
    {
    id:"ORD2904",
    items:["Matcha Frappe x1","Ube Crinkle x1"],
    total:"₱200",
    mop:"GCash",
    type:"Delivery",
    date:"06-03-2026",
    time:"4:15 PM",
    status:"Completed"
    }
    ]
    },
    
    {
    id:9,
    name:"Kevin Lim",
    email:"kevinlim@gmail.com",
    phone:"09171234566",
    street:"",
    city:"",
    notes:"",
    signup:"05-27-2026",
    
    orders:[
    {
    id:"ORD3001",
    items:["Chicken Popcorn x1","Fries x1"],
    total:"₱200",
    mop:"Cash",
    type:"Pickup",
    date:"06-04-2026",
    time:"5:10 PM",
    status:"Completed"
    },
    {
    id:"ORD3015",
    items:["Spanish Latte x1"],
    total:"₱130",
    mop:"GCash",
    type:"Pickup",
    date:"06-06-2026",
    time:"6:00 PM",
    status:"Completed"
    }
    ]
    },
    
    {
    id:10,
    name:"Patricia Lee",
    email:"patricialee@gmail.com",
    phone:"09171234567",
    street:"77 Bamboo St",
    city:"Taguig",
    notes:"Ring doorbell",
    signup:"05-28-2026",
    
    orders:[
    {
    id:"ORD3110",
    items:["Pesto Pasta x1","Vanilla Latte x1"],
    total:"₱310",
    mop:"GCash",
    type:"Delivery",
    date:"06-02-2026",
    time:"7:15 PM",
    status:"Completed"
    },
    {
    id:"ORD3204",
    items:["Tuna Sandwich x1"],
    total:"₱160",
    mop:"Cash",
    type:"Pickup",
    date:"06-03-2026",
    time:"1:30 PM",
    status:"Completed"
    },
    {
    id:"ORD3311",
    items:["Hot Chocolate x1"],
    total:"₱120",
    mop:"Cash",
    type:"Dine-In",
    date:"06-05-2026",
    time:"8:40 PM",
    status:"Completed"
    },
    {
    id:"ORD3410",
    items:["Matcha Latte x1"],
    total:"₱130",
    mop:"GCash",
    type:"Pickup",
    date:"06-06-2026",
    time:"3:15 PM",
    status:"Completed"
    }
    ]
    },
    
    {
    id:11,
    name:"Carlo Mendoza",
    email:"carlomendoza@gmail.com",
    phone:"09171234568",
    street:"",
    city:"",
    notes:"",
    signup:"05-29-2026",
    
    orders:[
    {
    id:"ORD3500",
    items:["Chicken Cordon Bleu x1","Rice x1"],
    total:"₱250",
    mop:"Cash",
    type:"Dine-In",
    date:"06-05-2026",
    time:"12:10 PM",
    status:"Completed"
    }
    ]
    },
    
    {
    id:12,
    name:"Jessica Ong",
    email:"jessicaong@gmail.com",
    phone:"09171234569",
    street:"19 Orchid Lane",
    city:"Pasay",
    notes:"Text before arrival",
    signup:"05-30-2026",
    
    orders:[
    {
    id:"ORD3602",
    items:["Caramel Latte x1"],
    total:"₱130",
    mop:"GCash",
    type:"Delivery",
    date:"06-03-2026",
    time:"9:50 AM",
    status:"Completed"
    },
    {
    id:"ORD3615",
    items:["Fish Fillet w/ Rice x1"],
    total:"₱210",
    mop:"Cash",
    type:"Delivery",
    date:"06-04-2026",
    time:"11:20 AM",
    status:"Completed"
    }
    ]
    },
    
    {
    id:13,
    name:"Ryan Santos",
    email:"ryansantos@gmail.com",
    phone:"09171234570",
    street:"",
    city:"",
    notes:"",
    signup:"05-31-2026",
    
    orders:[
    {
    id:"ORD3700",
    items:["Hazelnut Latte x1","Cheesy Bread x1"],
    total:"₱220",
    mop:"Cash",
    type:"Dine-In",
    date:"06-06-2026",
    time:"5:45 PM",
    status:"Completed"
    },
    {
    id:"ORD3711",
    items:["Strawberry Soda x1"],
    total:"₱110",
    mop:"GCash",
    type:"Pickup",
    date:"06-06-2026",
    time:"6:30 PM",
    status:"Completed"
    }
    ]
    }

];

const [openCustomer,setOpenCustomer] = useState(null);

const filteredCustomers = customers.filter(c =>
c.name.toLowerCase().includes(search.toLowerCase()) ||
c.email.toLowerCase().includes(search.toLowerCase())
);

const totalOrders = customers.reduce((sum,c)=>sum+c.orders.length,0);

const topCustomer = customers.reduce((a,b)=>
a.orders.length > b.orders.length ? a : b
);

return(

<div className="customersPage">

<h1 className="customersTitle">Happy Tails Customers</h1>

<div className="statsPanel">

<div className="statCard">
<h3>Total Customers</h3>
<p>{customers.length}</p>
</div>

<div className="statCard">
<h3>Total Orders</h3>
<p>{totalOrders}</p>
</div>

<div className="statCard">
<h3>Top Customer</h3>
<p>{topCustomer.name}</p>
</div>

</div>

<div className="searchBar">

<input
type="text"
placeholder="Search customer by name or email..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

<div className="customersGrid">

{filteredCustomers.map(customer =>(

<div className="customerCard" key={customer.id}>

<h3>{customer.name}</h3>

<p><b>Email:</b> {customer.email}</p>
<p><b>Phone:</b> {customer.phone}</p>

{customer.address && (
<p><b>Address:</b> {customer.address}</p>
)}

{customer.city && (
<p><b>City:</b> {customer.city}</p>
)}

{customer.notes && (
<p><b>Delivery Notes:</b> {customer.notes}</p>
)}

<p><b>Signed Up:</b> {customer.signup}</p>

<p><b>Total Orders:</b> {customer.orders.length}</p>

<button
className="historyBtn"
onClick={()=>setOpenCustomer(
openCustomer === customer.id ? null : customer.id
)}
>
View Order History
</button>

{openCustomer === customer.id && (

<div className="orderHistory">

{customer.orders.map(order =>(

<div className="orderCard" key={order.id}>

<p><b>Order ID:</b> {order.id}</p>

<p><b>Items:</b></p>

<ul>
{order.items.map((item,i)=>(
<li key={i}>{item}</li>
))}
</ul>

<p><b>Total:</b> {order.total}</p>
<p><b>Mode of Payment:</b> {order.mop}</p>
<p><b>Order Type:</b> {order.type}</p>
<p><b>Date:</b> {order.date}</p>
<p><b>Time:</b> {order.time}</p>
<p><b>Status:</b> {order.status}</p>

</div>

))}

</div>

)}

</div>

))}

</div>

</div>

);

}