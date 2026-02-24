import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    payment: "Cash",
    notes: "",
  });

  const submit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    // later: send order to backend
    // console.log({ form, cart, total });

    clearCart();
    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: 24, textAlign: "center" }}>
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
        <Link to="/order">Go to Order</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>Checkout</h1>
        <Link to="/cart">← Back to Cart</Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
        <form onSubmit={submit} style={{ background: "white", padding: 16, borderRadius: 14 }}>
          <h3>Customer Details</h3>

          <label>Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            style={{ width: "100%", padding: 10, marginTop: 6, marginBottom: 10 }}
          />

          <label>Phone</label>
          <input
            required
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            style={{ width: "100%", padding: 10, marginTop: 6, marginBottom: 10 }}
          />

          <label>Payment</label>
          <select
            value={form.payment}
            onChange={(e) => setForm((p) => ({ ...p, payment: e.target.value }))}
            style={{ width: "100%", padding: 10, marginTop: 6, marginBottom: 10 }}
          >
            <option>Cash</option>
            <option>GCash</option>
            <option>Card</option>
          </select>

          <label>Notes (optional)</label>
          <textarea
            value={form.notes}
            onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
            style={{ width: "100%", padding: 10, marginTop: 6, minHeight: 90 }}
          />

          <button type="submit" style={{ marginTop: 12, fontWeight: 900, padding: "10px 14px" }}>
            Place Order
          </button>
        </form>

        <div style={{ background: "white", padding: 16, borderRadius: 14 }}>
          <h3>Order Summary</h3>
          {cart.map((x) => (
            <div key={x.id} style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <span>{x.name} × {x.qty}</span>
              <span>₱{x.price * x.qty}</span>
            </div>
          ))}
          <hr style={{ margin: "14px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900 }}>
            <span>Total</span>
            <span>₱{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}