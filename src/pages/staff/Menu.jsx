import { useState } from "react";
import "./Menu.css";

function Menu(){

const [category,setCategory] = useState("All");
const [search,setSearch] = useState("");

const [newItem,setNewItem] = useState({
name:"",
price:"",
category:"Iced Coffee",
image:""
});

const [menu,setMenu] = useState([

{id:1,name:"Iced Americano",price:100,category:"Iced Coffee",image:"/assets/iced_americano.jpg",available:true},
{id:2,name:"Iced Cafe Latte",price:120,category:"Iced Coffee",image:"/assets/iced_latte.jpg",available:true},
{id:3,name:"Iced Caramel Macchiato",price:145,category:"Iced Coffee",image:"/assets/iced_caramel_macchiato.jpg",available:true},
{id:4,name:"Iced Cloud Americano",price:120,category:"Iced Coffee",image:"/assets/iced_cloud_americano.jpg",available:true},
{id:5,name:"Iced Caramel Latte",price:135,category:"Iced Coffee",image:"/assets/iced_caramel_latte.jpg",available:true},
{id:6,name:"Iced Cocoa Tiramisu",price:160,category:"Iced Coffee",image:"/assets/iced_cocoa_tiramisu.jpg",available:true},
{id:7,name:"Iced Coconut Latte",price:145,category:"Iced Coffee",image:"/assets/iced_coconut_latte.jpg",available:true},
{id:8,name:"Iced Hazelnut Latte",price:135,category:"Iced Coffee",image:"/assets/iced_hazelnut_latte.jpg",available:true},
{id:9,name:"Iced Matcha Latte",price:135,category:"Iced Coffee",image:"/assets/iced_matcha_latte.jpg",available:true},
{id:10,name:"Iced Mocha Latte",price:135,category:"Iced Coffee",image:"/assets/iced_mocha_latte.jpg",available:true},
{id:11,name:"Iced Vanilla Latte",price:135,category:"Iced Coffee",image:"/assets/iced_vanilla_latte.jpg",available:true},
{id:12,name:"Iced Spanish Latte",price:140,category:"Iced Coffee",image:"/assets/iced_spanish_latte.jpg",available:true},

{id:13,name:"Hot Americano",price:90,category:"Hot Coffee",image:"/assets/hot_americano.jpg",available:true},
{id:14,name:"Hot Cafe Latte",price:110,category:"Hot Coffee",image:"/assets/hot_cafe_latte.jpg",available:true},
{id:15,name:"Hot Caramel Macchiato",price:130,category:"Hot Coffee",image:"/assets/hot_caramel_macchiato.jpg",available:true},
{id:16,name:"Hot Matcha Latte",price:110,category:"Hot Coffee",image:"/assets/hot_matcha_latte.jpg",available:true},
{id:17,name:"Hot Spanish Latte",price:120,category:"Hot Coffee",image:"/assets/hot_spanish_latte.jpg",available:true},

{id:18,name:"Iced Four Seasons",price:90,category:"Non-Caffeine",image:"/assets/four_seasons.jpg",available:true},
{id:19,name:"Hot Chocolate",price:110,category:"Non-Caffeine",image:"/assets/hot_chocolate.jpg",available:true},
{id:20,name:"Iced Choco Milk",price:120,category:"Non-Caffeine",image:"/assets/iced_choco_milk.jpg",available:true},
{id:21,name:"Iced Strawberry Milk",price:120,category:"Non-Caffeine",image:"/assets/strawberry_milk.jpg",available:true},
{id:22,name:"Iced Blueberry Soda",price:90,category:"Non-Caffeine",image:"/assets/blueberry_soda.jpg",available:true},
{id:23,name:"Iced Green Apple Soda",price:90,category:"Non-Caffeine",image:"/assets/green_apple_soda.jpg",available:true},
{id:24,name:"Iced Strawberry Soda",price:90,category:"Non-Caffeine",image:"/assets/strawberry_soda.jpg",available:true},

{id:25,name:"Caramel Macchiato Frappe",price:170,category:"Frappuccino",image:"/assets/frappe_caramel.jpg",available:true},
{id:26,name:"Choco Java Chip Frappe",price:170,category:"Frappuccino",image:"/assets/frappe_java.jpg",available:true},
{id:27,name:"Matcha Frappe",price:170,category:"Frappuccino",image:"/assets/frappe_matcha.jpg",available:true},
{id:28,name:"Peanut Butter Choco Frappe",price:175,category:"Frappuccino",image:"/assets/frappe_peanut.jpg",available:true},
{id:29,name:"Strawberry Frappe",price:170,category:"Frappuccino",image:"/assets/frappe_strawberry.jpg",available:true},

{id:30,name:"Breaded Fish Fillet with Rice",price:140,category:"Rice Meals",image:"/assets/fish_rice.jpg",available:true},
{id:31,name:"Burger Steak with Rice",price:160,category:"Rice Meals",image:"/assets/burger_steak.jpg",available:true},
{id:32,name:"Chicken Cordon Bleu with Rice",price:180,category:"Rice Meals",image:"/assets/chicken_cordon.jpg",available:true},
{id:33,name:"Chicken Fillet with Rice",price:150,category:"Rice Meals",image:"/assets/chicken_fillet.jpg",available:true},
{id:34,name:"Chicken Poppers with Rice",price:140,category:"Rice Meals",image:"/assets/chicken_poppers.jpg",available:true},
{id:35,name:"Homemade Pork Embotido with Rice",price:150,category:"Rice Meals",image:"/assets/embotido.jpg",available:true},
{id:36,name:"Homemade Pork Siomai with Rice",price:80,category:"Rice Meals",image:"/assets/siomai_rice.jpg",available:true},
{id:37,name:"Hungarian Sausage with Rice",price:120,category:"Rice Meals",image:"/assets/hungarian_rice.jpg",available:true},

{id:38,name:"Baked Macaroni",price:190,category:"Pasta/Snacks/Sandwiches",image:"/assets/baked_mac.jpg",available:true},
{id:39,name:"Chicken Alfredo Pasta",price:190,category:"Pasta/Snacks/Sandwiches",image:"/assets/alfredo.jpg",available:true},
{id:40,name:"Chicken Macaroni Salad",price:120,category:"Pasta/Snacks/Sandwiches",image:"/assets/macaroni_salad.jpg",available:true},
{id:41,name:"Cheesy Beef Burger",price:150,category:"Pasta/Snacks/Sandwiches",image:"/assets/beef_burger.jpg",available:true},
{id:42,name:"Chicken Popcorn",price:120,category:"Pasta/Snacks/Sandwiches",image:"/assets/chicken_popcorn.jpg",available:true},
{id:43,name:"Fish & Fries",price:200,category:"Pasta/Snacks/Sandwiches",image:"/assets/fish_fries.jpg",available:true},
{id:44,name:"Grilled Cheese Sandwich",price:70,category:"Pasta/Snacks/Sandwiches",image:"/assets/grilled_cheese.jpg",available:true},
{id:45,name:"Homemade Pork Siomai",price:60,category:"Pasta/Snacks/Sandwiches",image:"/assets/siomai.jpg",available:true},
{id:46,name:"Toasted Cheesy Hungarian Sandwich",price:90,category:"Pasta/Snacks/Sandwiches",image:"/assets/hungarian_sandwich.jpg",available:true},
{id:47,name:"Toasted Tuna Sandwich",price:80,category:"Pasta/Snacks/Sandwiches",image:"/assets/tuna_sandwich.jpg",available:true},
{id:48,name:"Carbonara Pasta",price:190,category:"Pasta/Snacks/Sandwiches",image:"/assets/carbonara_pasta.jpg",available:true},
{id:49,name:"Cheesy Bread",price:80,category:"Pasta/Snacks/Sandwiches",image:"/assets/cheesy_bread.jpg",available:true},
{id:50,name:"Hashbrown",price:120,category:"Pasta/Snacks/Sandwiches",image:"/assets/hashbrown.jpg",available:true},
{id:51,name:"Pepperoni Pizza",price:180,category:"Pasta/Snacks/Sandwiches",image:"/assets/pepperoni_pizza.jpg",available:true},
{id:52,name:"Pesto Pasta",price:190,category:"Pasta/Snacks/Sandwiches",image:"/assets/pesto_pasta.jpg",available:true},
{id:53,name:"Savory Coated Fries",price:120,category:"Pasta/Snacks/Sandwiches",image:"/assets/savory_coated_fries.jpg",available:true},

{id:54,name:"Cheesy Ensaymada",price:80,category:"Desserts",image:"/assets/ensaymada.jpg",available:true},
{id:55,name:"Black Forest Cupcake",price:80,category:"Desserts",image:"/assets/black_forest_cupcake.jpg",available:true},
{id:56,name:"Crinkle",price:80,category:"Desserts",image:"/assets/crinkle.jpg",available:true},
{id:57,name:"Ube Crinkle",price:80,category:"Desserts",image:"/assets/ube_crinkle.jpg",available:true},

]);

const filteredMenu = menu.filter(item => {
const categoryMatch = category==="All" || item.category===category;
const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
return categoryMatch && searchMatch;
});

const toggleAvailability = (id)=>{
setMenu(prev =>
prev.map(item =>
item.id===id
? {...item,available:!item.available}
: item
)
);
};

const deleteItem = (id)=>{
if(!window.confirm("Delete this item?")) return;
setMenu(prev=>prev.filter(item=>item.id!==id));
};

const editPrice = (id)=>{
const newPrice = prompt("Enter new price:");
if(!newPrice) return;

setMenu(prev =>
prev.map(item =>
item.id===id
? {...item,price:newPrice}
: item
)
);
};

const addMenuItem = ()=>{

if(!newItem.name || !newItem.price || !newItem.image){
alert("Fill all fields");
return;
}

const newId = Math.max(...menu.map(i=>i.id))+1;

setMenu([
...menu,
{
id:newId,
name:newItem.name,
price:newItem.price,
category:newItem.category,
image:newItem.image,
available:true
}
]);

setNewItem({
name:"",
price:"",
category:"Iced Coffee",
image:""
});

alert("Menu item successfully added");

};

return(

<div className="menuPage">

<h1 className="menuTitle">Happy Tails Café Menu</h1>

<div className="menuControls">

<input
type="text"
placeholder="Search menu..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option value="All">All Categories</option>
<option value="Iced Coffee">Iced Coffee</option>
<option value="Hot Coffee">Hot Coffee</option>
<option value="Non-Caffeine">Non-Caffeine</option>
<option value="Frappuccino">Frappuccino</option>
<option value="Rice Meals">Rice Meals</option>
<option value="Pasta/Snacks/Sandwiches">Pasta/Snacks/Sandwiches</option>
<option value="Desserts">Desserts</option>

</select>

</div>

<div className="addPanel">

<h3>Add Menu Item</h3>

<input placeholder="Name"
value={newItem.name}
onChange={(e)=>setNewItem({...newItem,name:e.target.value})}
/>

<input placeholder="Price"
value={newItem.price}
onChange={(e)=>setNewItem({...newItem,price:e.target.value})}
/>

<input placeholder="/assets/image.jpg"
value={newItem.image}
onChange={(e)=>setNewItem({...newItem,image:e.target.value})}
/>

<select
value={newItem.category}
onChange={(e)=>setNewItem({...newItem,category:e.target.value})}
>
<option>Iced Coffee</option>
<option>Hot Coffee</option>
<option>Non-Caffeine</option>
<option>Frappuccino</option>
<option>Rice Meals</option>
<option>Pasta/Snacks/Sandwiches</option>
<option>Desserts</option>
</select>

<button onClick={addMenuItem}>Add Item</button>

</div>

<div className="menuGrid">

{filteredMenu.map(item=>(
<div className="menuCard" key={item.id}>

<div className="imgWrap">

<img src={new URL(`../../assets/${item.image.split("/").pop()}`, import.meta.url).href} alt={item.name}/>

{!item.available && (
<div className="overlay">
UNAVAILABLE
</div>
)}

</div>

<h3>{item.name}</h3>

<p className="price">₱{item.price}</p>

<div className="actions">

<button onClick={()=>editPrice(item.id)}>
Edit Price
</button>

<button onClick={()=>toggleAvailability(item.id)}>
{item.available ? "Mark Unavailable" : "Mark Available"}
</button>

<button className="delete" onClick={()=>deleteItem(item.id)}>
Delete
</button>

</div>

</div>
))}

</div>

</div>

);

}

export default Menu;