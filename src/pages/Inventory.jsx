import { useState } from "react";
import "./Inventory.css";

export default function Inventory(){

const [newIngredient,setNewIngredient] = useState({
name:"",
qty:"",
unit:"",
usedBy:""
});

const today = "Today";

const [ingredients,setIngredients] = useState([

{
id:1,
name:"Coffee Beans",
qty:2,
unit:"Packs",
usedBy:["Americano"," Caramel Latte","Macchiato", "Cocoa Tiramisu", "Coconut Latte", "Hazelnut Latte", "Mocha Latte", "Spanish Latte" ],
updated:"Today",
out:false
},

{
id:2,
name:"Milk",
qty:8,
unit:"Bottles",
usedBy:["Latte","Cappuccino","Macchiato","Spanish Latte", "Hazelnut Latte", "Cloud Americano", "Caramel Latte", "Coconut Latte", "Matcha Latte", "Mocha Latte", "Vanilla Latte", "Hot chocolate", "Iced Choco Milk", "Strawberry Milk"],
updated:"Today",
out:false
},

{
id:3,
name:"Caramel Syrup",
qty:0,
unit:"Bottles",
usedBy:["Caramel Macchiato","Caramel Latte"],
updated:"06-03-2026",
out:true
},

{
id:4,
name:"Hazelnut Syrup",
qty:4,
unit:"Bottles",
usedBy:["Hazelnut Latte"],
updated:"06-02-2026",
out:false
},

{
id:5,
name:"Matcha Powder",
qty:2,
unit:"packs",
usedBy:["Matcha Latte","Matcha Frappe"],
updated:"Today",
out:false
},

{
id:6,
name:"Chocolate Syrup",
qty:3,
unit:"Bottles",
usedBy:["Choco Java Chip Frappe", "Peanut Butter Choco Frappe", "Iced Choco Milk"],
updated:"Today",
out:false
},

{
id:7,
name:"Strawberry Syrup",
qty:3,
unit:"Bottles",
usedBy:["Strawberry Milk","Strawberry Soda","Strawberry Frappe"],
updated:"06-03-2026",
out:false
},

{
id:8,
name:"Rice",
qty:3,
unit:"packs",
usedBy:["All Rice meals"],
updated:"06-03-2026",
out:false
},

{
id:9,
name:"Burger Patties",
qty:0,
unit:"packs",
usedBy:["Cheesy Beef Burger", "Burger Steak w/rice"],
updated:"Today",
out:true
},

{
id:10,
name:"Chicken Popcorn Pack",
qty:10,
unit:"packs",
usedBy:["Chicken Popcorn","Chicken Poppers w/ rice"],
updated:"Today",
out:false
},

{
id:11,
name:"Hungarian Sausage",
qty:8,
unit:"packs",
usedBy:["Hungarian Sausage w/ rice","Hungarian Sandwich"],
updated:"Today",
out:false
},

{
id:12,
name:"Tiramisu Syrup",
qty:3,
unit:"bottles",
usedBy:["Iced Cocoa Tiramisu"],
updated:"Today",
out:false
},

{
id:13,
name:"Coconut Syrup",
qty:2,
unit:"bottles",
usedBy:["Iced Coconut Latte"],
updated:"06-02-2026",
out:false
},

{
id:14,
name:"Cocoa Powder",
qty:4,
unit:"packets",
usedBy:["Hot Chocolate","Cocoa Tiramisu", "Mocha Latte", "Choco Milk", "Choco Java Chip Frappe", "Peanut Butter Choco Frappe"],
updated:"Today",
out:false
},

{
id:15,
name:"Vanilla Syrup",
qty:3,
unit:"bottles",
usedBy:["Vanilla Latte"],
updated:"Today",
out:false
},

{
id:16,
name:"Condensed Milk",
qty:6,
unit:"cans",
usedBy:["Spanish Latte"],
updated:"06-03-2026",
out:false
},

{
id:17,
name:"Four Seasons Juice",
qty:5,
unit:"bottles",
usedBy:["Iced Four Seasons"],
updated:"Today",
out:false
},

{
id:18,
name:"Green Apple Syrup",
qty:3,
unit:"bottles",
usedBy:["Green Apple Soda"],
updated:"Today",
out:false
},

{
id:19,
name:"Chocolate Chips",
qty:4,
unit:"packs",
usedBy:["Java Chip Frappe"],
updated:"Today",
out:false
},

{
id:20,
name:"Peanut Butter Powder",
qty:3,
unit:"packs",
usedBy:["Peanut Butter Choco Frappe"],
updated:"Today",
out:false
},

{
id:21,
name:"Whipped Cream",
qty:5,
unit:"cans",
usedBy:["Frappes"],
updated:"06-02-2026",
out:false
},

{
id:22,
name:"Fish Fillet",
qty:6,
unit:"packs",
usedBy:["Breaded Fish Fillet with Rice", "Fish & Fries"],
updated:"Today",
out:false
},

{
id:23,
name:"Crispy Batter Mix",
qty:4,
unit:"packs",
usedBy:["Fish Fillet","Chicken Fillet", "Fish & Fries","Chicken Cordon Bleu"],
updated:"Today",
out:false
},

{
id:24,
name:"Chicken",
qty:6,
unit:"packs",
usedBy:["Chicken Fillet","Chicken Cordon Bleu"],
updated:"06-03-2026",
out:false
},

{
id:25,
name:"Pork Embotido",
qty:5,
unit:"rolls",
usedBy:["Homemade Pork Embotido with Rice"],
updated:"Today",
out:false
},

{
id:26,
name:"Siomai",
qty:8,
unit:"packs",
usedBy:["Homemade Pork Siomai"],
updated:"Today",
out:false
},

{
id:27,
name:"Macaroni Pasta",
qty:4,
unit:"packs",
usedBy:["Baked Macaroni"],
updated:"Today",
out:false
},

{
id:28,
name:"Linguine Pasta",
qty:4,
unit:"packs",
usedBy:["Alfredo Pasta","Carbonara Pasta", "Pesto Pasta"],
updated:"Today",
out:false
},

{
id:29,
name:"Alfredo Sauce",
qty:3,
unit:"bottles",
usedBy:["Chicken Alfredo Pasta"],
updated:"06-02-2026",
out:false
},

{
id:30,
name:"Carbonara Sauce",
qty:3,
unit:"bottles",
usedBy:["Carbonara Pasta"],
updated:"Today",
out:false
},

{
id:31,
name:"Burger Buns",
qty:5,
unit:"packs",
usedBy:["Cheesy Beef Burger"],
updated:"Today",
out:false
},

{
id:32,
name:"French Fries",
qty:6,
unit:"packs",
usedBy:["Fish & Fries","Savory Coated Fries"],
updated:"Today",
out:false
},

{
id:33,
name:"Bread Loaf",
qty:4,
unit:"packs",
usedBy:["Grilled Cheese Sandwich","Tuna Sandwich", "Hungarian Sandwich"],
updated:"Today",
out:false
},

{
id:34,
name:"Cheese",
qty:6,
unit:"packs",
usedBy:["Grilled Cheese","Cheesy Bread","Cheesy Beef Burger", "Baked Macaroni", "Cheesy Hungarian Sandwich", "Tuna Sandwich", "All Pasta"],
updated:"Today",
out:false
},

{
id:35,
name:"Tuna",
qty:4,
unit:"cans",
usedBy:["Tuna Sandwich", "Pesto Pasta"],
updated:"Today",
out:false
},

{
id:36,
name:"Button Mushroom",
qty:3,
unit:"packs",
usedBy:["All Pasta", "Burger Steak w/ rice"],
updated:"Today",
out:false
},

{
id:37,
name:"Tartare Sauce",
qty:3,
unit:"bottles",
usedBy:["Fish & Fries"],
updated:"Today",
out:false
},

{
id:38,
name:"Gravy Powder",
qty:5,
unit:"packs",
usedBy:["Burger Steak"],
updated:"Today",
out:false
},

{
id:39,
name:"Minced Garlic",
qty:3,
unit:"cans",
usedBy:["Pasta","Rice Meals"],
updated:"Today",
out:false
},

{
id:40,
name:"Ketchup",
qty:5,
unit:"bottles",
usedBy:["Fries","Burger"],
updated:"Today",
out:false
},

{
id:41,
name:"Chips",
qty:4,
unit:"packs",
usedBy:["Snacks"],
updated:"Today",
out:false
},

{
id:42,
name:"Garlic Aioli Sauce",
qty:3,
unit:"bottles",
usedBy:["Fries","Chicken Popcorn","Chicken Cordon Bleu"],
updated:"Today",
out:false
},

{
id:43,
name:"Ham",
qty:4,
unit:"packs",
usedBy:["Sandwiches"],
updated:"Today",
out:false
},

{
id:44,
name:"Cheesy Bread",
qty:10,
unit:"pcs",
usedBy:["Cheesy Bread"],
updated:"Today",
out:false
},

{
id:45,
name:"Hashbrown",
qty:6,
unit:"packs",
usedBy:["Hashbrown"],
updated:"Today",
out:false
},

{
id:46,
name:"Cheese Dipping Sauce",
qty:4,
unit:"bottles",
usedBy:["Fries"],
updated:"Today",
out:false
},

{
id:47,
name:"Pesto Sauce",
qty:3,
unit:"bottles",
usedBy:["Pesto Pasta"],
updated:"Today",
out:false
},

{
id:48,
name:"Black Forest Cupcake",
qty:8,
unit:"pcs",
usedBy:["Black Forest Cupcake"],
updated:"06-02-2026",
out:false
},

{
id:49,
name:"Crinkle",
qty:10,
unit:"pcs",
usedBy:["Crinkle"],
updated:"Today",
out:false
},

{
id:50,
name:"Ube Crinkle",
qty:10,
unit:"pcs",
usedBy:["Ube Crinkle"],
updated:"Today",
out:false
},

{
id:51,
name:"Plastic Cups",
qty:20,
unit:"packs",
usedBy:["All Drinks"],
updated:"Today",
out:false
},

{
id:52,
name:"Plastic Lids",
qty:20,
unit:"packs",
usedBy:["All Non-Frappe Drinks"],
updated:"Today",
out:false
},

{
id:53,
name:"Frappe Lids",
qty:20,
unit:"packs",
usedBy:["All Frappe Drinks"],
updated:"Today",
out:false
}

]);


const editQty = (id)=>{

const newQty = prompt("Enter new quantity");

if(newQty===null || newQty==="") return;

setIngredients(prev =>
prev.map(item =>
item.id===id
? {
...item,
qty:Number(newQty),
updated:today,
out:Number(newQty)===0
}
: item
)
);

};

const deleteItem=(id)=>{

if(!window.confirm("Delete ingredient?")) return;

setIngredients(prev=>prev.filter(i=>i.id!==id));

};

const markOut=(id)=>{

setIngredients(prev =>
prev.map(item =>
item.id===id
? {...item,out:true,qty:0,updated:today}
: item
)
);

};

const addIngredient=()=>{

if(!newIngredient.name || !newIngredient.qty || !newIngredient.unit){
alert("Fill all fields");
return;
}

const newId = Math.max(...ingredients.map(i=>i.id))+1;

setIngredients([
...ingredients,
{
id:newId,
name:newIngredient.name,
qty:Number(newIngredient.qty),
unit:newIngredient.unit,
usedBy:newIngredient.usedBy ? [newIngredient.usedBy] : [],
updated:"Today",
out:false
}
]);

alert("Ingredient added");

setNewIngredient({
name:"",
qty:"",
unit:"",
usedBy:""
});

};

const addUsedBy=(id)=>{

const item = prompt("Enter menu item that uses this ingredient");

if(!item) return;

setIngredients(prev =>
prev.map(i =>
i.id===id
? {...i,usedBy:[...i.usedBy,item]}
: i
)
);

};

return(

<div className="inventoryPage">

<h1 className="inventoryTitle">Happy Tails Café Inventory</h1>

<div className="addPanel">

<h3>Add Ingredient</h3>

<input
placeholder="Ingredient Name"
value={newIngredient.name}
onChange={(e)=>setNewIngredient({...newIngredient,name:e.target.value})}
/>

<input
placeholder="Quantity"
value={newIngredient.qty}
onChange={(e)=>setNewIngredient({...newIngredient,qty:e.target.value})}
/>

<input
placeholder="Unit (kg, bottles, packs)"
value={newIngredient.unit}
onChange={(e)=>setNewIngredient({...newIngredient,unit:e.target.value})}
/>

<input
placeholder="Used By (menu item)"
value={newIngredient.usedBy}
onChange={(e)=>setNewIngredient({...newIngredient,usedBy:e.target.value})}
/>

<button onClick={addIngredient}>Add Ingredient</button>

</div>

<div className="inventoryGrid">

{ingredients.map(item=>(

<div className={`ingredientCard ${item.out ? "outStock":""}`} key={item.id}>

<h3>{item.name}</h3>

<p>Quantity: {item.qty} {item.unit}</p>

{item.qty > 0 && item.qty <= 2 && (
<p className="lowStock">⚠ Low Stock ({item.qty} left)</p>
)}

<p>Last Updated: {item.updated}</p>

{item.out && (
<div className="affectedMenu">
⚠ Items affected:
<ul>
{item.usedBy.map((menu,i)=>(
<li key={i}>{menu}</li>
))}
</ul>
</div>
)}

<div className="usedBy">

<label>Used By:</label>

<select>

{item.usedBy.map((u,i)=>(
<option key={i}>{u}</option>
))}

</select>

</div>

<div className="actions">

<button className="editBtn" onClick={()=>editQty(item.id)}>
Edit Quantity
</button>

<button className="outBtn" onClick={()=>markOut(item.id)}>
Mark Out Of Stock
</button>

<button className="addUseBtn" onClick={()=>addUsedBy(item.id)}>
Add Used By Item
</button>

<button className="deleteBtn" onClick={()=>deleteItem(item.id)}>
Delete
</button>

</div>

</div>

))}

</div>

</div>

);

}