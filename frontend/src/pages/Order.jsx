import "./Order.css";

import sandwiches from "../assets/sandwiches.png";
import rice from "../assets/ricemeal.png";
import iced from "../assets/coffee.png";
import hot from "../assets/hot.png";
import noncafe from "../assets/soda.png";
import frappe from "../assets/frappe.png";

function Order() {
  return (
    <div className="order-page">
      <div className="order-header">
        <h1>Order by Category</h1>
      </div>

      <div className="categories">

        <div className="category-card">
          <img src={sandwiches} alt="Pasta Snacks Sandwiches" />
          <h3>Pasta / Snacks / Sandwiches</h3>
        </div>

        <div className="category-card">
          <img src={rice} alt="Rice Meals" />
          <h3>Rice Meals</h3>
        </div>

        <div className="category-card">
          <img src={iced} alt="Iced Coffee 16oz" />
          <h3>Iced Coffee (16oz)</h3>
        </div>

        <div className="category-card">
          <img src={hot} alt="Hot Coffee 8oz" />
          <h3>Hot Coffee (8oz)</h3>
        </div>

        <div className="category-card">
          <img src={noncafe} alt="Non Caffeine" />
          <h3>Non-Caffeinated</h3>
        </div>

        <div className="category-card">
          <img src={frappe} alt="Frappuccino 16oz" />
          <h3>Frappuccino (16oz)</h3>
        </div>

      </div>
    </div>
  );
}

export default Order;