import { useNavigate } from "react-router-dom";
import "./Order.css";

import sandwiches from "../assets/sandwiches.png";
import rice from "../assets/ricemeal.png";
import iced from "../assets/coffee.png";
import hot from "../assets/hot.png";
import noncafe from "../assets/soda.png";
import frappe from "../assets/frappe.png";

function Order() {
  // 1. Set up the navigate function (our steering wheel)
  const navigate = useNavigate();

  // 2. This function receives the path and drives the user there
  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="order-page">
      <div className="order-header">
        <h1>Order by Category</h1>
      </div>

      <div className="categories">

        {/* 3. Tell each card exactly which URL to go to when clicked! */}
        <div
  className="category-card"
  onClick={() => handleCategoryClick("/order/pasta-snacks")}
  style={{ cursor: "pointer" }}
>
  <img src={sandwiches} alt="Pasta Snacks Sandwiches" />
  <h3>Pasta & Sandwiches</h3>
</div>

<div
  className="category-card"
  onClick={() => handleCategoryClick("/order/rice-meals")}
  style={{ cursor: "pointer" }}
>
  <img src={rice} alt="Rice Meals" />
  <h3>Rice Meals</h3>
</div>

<div
  className="category-card"
  onClick={() => handleCategoryClick("/order/iced-coffee")}
  style={{ cursor: "pointer" }}
>
  <img src={iced} alt="Iced Coffee 16oz" />
  <h3>Iced Coffee</h3>
</div>

<div
  className="category-card"
  onClick={() => handleCategoryClick("/order/hot-coffee")}
  style={{ cursor: "pointer" }}
>
  <img src={hot} alt="Hot Coffee 8oz" />
  <h3>Hot Coffee</h3>
</div>

<div
  className="category-card"
  onClick={() => handleCategoryClick("/order/non-caffeinated")}
  style={{ cursor: "pointer" }}
>
  <img src={noncafe} alt="Non Caffeine" />
  <h3>Non-Caffeinated</h3>
</div>

<div
  className="category-card"
  onClick={() => handleCategoryClick("/order/frappuccino")}
  style={{ cursor: "pointer" }}
>
  <img src={frappe} alt="Frappuccino 16oz" />
  <h3>Frappuccino</h3>
</div>

      </div>
    </div>
  );
}

export default Order;