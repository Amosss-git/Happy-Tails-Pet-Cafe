import sandwiches from "../assets/sandwiches.png";
import rice from "../assets/ricemeal.png";
import iced from "../assets/coffee.png";
import hot from "../assets/hot.png";
import noncafe from "../assets/soda.png";
import frappe from "../assets/frappe.png";

export const MENU = {
  "pasta-snacks": {
    title: "Pasta & Sandwiches", // ✅ renamed header
    image: sandwiches,
    items: [
      { id: "ps-1", name: "Creamy Carbonara Pasta", price: 179, image: sandwiches },
      { id: "ps-2", name: "Spicy Aglio Olio Pasta", price: 169, image: sandwiches },
      { id: "ps-3", name: "Chicken Pesto Sandwich", price: 149, image: sandwiches },
      { id: "ps-4", name: "Tuna Melt Sandwich", price: 139, image: sandwiches },
      { id: "ps-5", name: "Bacon Club Sandwich", price: 159, image: sandwiches },
      { id: "ps-6", name: "Fries (Classic Salted)", price: 99, image: sandwiches },
    ],
  },

  "rice-meals": {
    title: "Rice Meals",
    image: rice,
    items: [
      { id: "rm-1", name: "Chicken Fillet Rice", price: 149, image: rice },
      { id: "rm-2", name: "Pork Tonkatsu Rice", price: 169, image: rice },
      { id: "rm-3", name: "Beef Tapa Rice", price: 179, image: rice },
      { id: "rm-4", name: "Sisig Rice Bowl", price: 159, image: rice },
      { id: "rm-5", name: "BBQ Pork Rice", price: 169, image: rice },
      { id: "rm-6", name: "Longganisa Rice Meal", price: 149, image: rice },
    ],
  },

  "iced-coffee": {
    title: "Iced Coffee (16oz)",
    image: iced,
    items: [
      { id: "ic-1", name: "Iced Latte", price: 120, image: iced },
      { id: "ic-2", name: "Iced Mocha", price: 135, image: iced },
      { id: "ic-3", name: "Iced Caramel Macchiato", price: 145, image: iced },
      { id: "ic-4", name: "Iced Vanilla Latte", price: 140, image: iced },
      { id: "ic-5", name: "Iced Americano", price: 110, image: iced },
    ],
  },

  "hot-coffee": {
    title: "Hot Coffee (8oz)",
    image: hot,
    items: [
      { id: "hc-1", name: "Hot Americano", price: 95, image: hot },
      { id: "hc-2", name: "Hot Latte", price: 110, image: hot },
      { id: "hc-3", name: "Hot Cappuccino", price: 110, image: hot },
      { id: "hc-4", name: "Hot Mocha", price: 120, image: hot },
      { id: "hc-5", name: "Hot Caramel Latte", price: 125, image: hot },
    ],
  },

  "non-caffeinated": {
    title: "Non-Caffeinated",
    image: noncafe,
    items: [
      { id: "nc-1", name: "Lemon Soda", price: 95, image: noncafe },
      { id: "nc-2", name: "Lychee Soda", price: 105, image: noncafe },
      { id: "nc-3", name: "Green Apple Soda", price: 105, image: noncafe },
      { id: "nc-4", name: "Strawberry Lemonade", price: 115, image: noncafe },
      { id: "nc-5", name: "Iced Chocolate", price: 120, image: noncafe },
    ],
  },

  frappuccino: {
    title: "Frappuccino (16oz)",
    image: frappe,
    items: [
      { id: "fr-1", name: "Chocolate Frappe", price: 150, image: frappe },
      { id: "fr-2", name: "Matcha Frappe", price: 160, image: frappe },
      { id: "fr-3", name: "Caramel Frappe", price: 155, image: frappe },
      { id: "fr-4", name: "Mocha Frappe", price: 155, image: frappe },
      { id: "fr-5", name: "Cookies & Cream Frappe", price: 165, image: frappe },
    ],
  },

  
};