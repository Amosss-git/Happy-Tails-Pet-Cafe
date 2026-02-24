// src/components/MenuBelt.jsx
import "./MenuBelt.css";

// sample images (use your own in src/assets)
import coffee from "../assets/coffee.png";
import frappe from "../assets/frappe.png";
import hot from "../assets/hot.png";
import soda from "../assets/soda.png";
import sandwiches from "../assets/sandwiches.png";

const items = [
  { name: "Berry Cheesecake", tagLeft: "Frappes", tagRight: "Ice", img: frappe },
  { name: "Irish Cream", tagLeft: "Frappes", tagRight: "Ice", img: frappe },
  { name: "Triple Java Jelly", tagLeft: "Frappes", tagRight: "Ice", img: coffee },
  { name: "CEO Latte", tagLeft: "Coffee", tagRight: "Hot", img: hot },
  { name: "Spanish Latte", tagLeft: "Coffee", tagRight: "Ice/Hot", img: coffee },
  { name: "Lychee Soda", tagLeft: "Soda", tagRight: "Ice", img: soda },
  { name: "Club Sandwich", tagLeft: "Food", tagRight: "Toasted", img: sandwiches },
];

export default function MenuBelt() {
  // Duplicate items so the loop looks continuous
  const beltItems = [...items, ...items];

  return (
    <section className="belt-section">
      <h2 className="belt-title">Cafe Favorites</h2>
      <p className="belt-subtitle">
        Quick picks from our menu — scroll & discover your next order.
      </p>

      <div className="belt-viewport">
        <div className="belt-track">
          {beltItems.map((it, idx) => (
            <article className="belt-card" key={`${it.name}-${idx}`}>
              <div className="belt-imgWrap">
                <img src={it.img} alt={it.name} className="belt-img" />
              </div>

              <h3 className="belt-name">{it.name}</h3>

              <div className="belt-tags">
                <span>{it.tagLeft}</span>
                <span>{it.tagRight}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="belt-ctaRow">
        <a className="belt-ctaBtn" href="/menu">Discover More</a>
      </div>
    </section>
  );
}