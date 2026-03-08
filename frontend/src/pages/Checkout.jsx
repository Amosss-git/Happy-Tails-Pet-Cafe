import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    orderType: "Dine-in",
    payment: "Cash",
    receipt: null,
    notes: "",
  });

  // Load data on mount
  useEffect(() => {
    const savedName = localStorage.getItem("customerName");
    const savedPhone = localStorage.getItem("customerPhone");
    if (savedName || savedPhone) {
      setForm(prev => ({
        ...prev,
        name: savedName || "",
        phone: savedPhone || ""
      }));
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    // Save user info
    localStorage.setItem("customerName", form.name);
    localStorage.setItem("customerPhone", form.phone);

    // Tracking logic
    const generatedId = "HT-" + Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem("latestOrderType", form.orderType);
    localStorage.setItem("latestOrderId", generatedId);
    localStorage.setItem(`status_${generatedId}`, "Pending");

    clearCart();
    navigate("/order-success");
  };

  const handleCancel = () => {
    if (window.confirm("Cancel order and empty cart?")) {
      clearCart();
      navigate("/order");
    }
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
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ width: "100%", padding: 10, marginTop: 6, marginBottom: 10 }}
          />

          <label>Phone</label>
          <input
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={{ width: "100%", padding: 10, marginTop: 6, marginBottom: 10 }}
          />

          <label>Order Type</label>
          <select
            value={form.orderType}
            onChange={(e) => setForm({ ...form, orderType: e.target.value })}
            style={{ width: "100%", padding: 10, marginTop: 6, marginBottom: 10 }}
          >
            <option value="Dine-in">Dine-in</option>
            <option value="Pickup">Pickup</option>
            <option value="Takeout">Takeout</option>
            <option value="Delivery">Delivery</option>
          </select>

          <label>Payment</label>
          <select
            value={form.payment}
            onChange={(e) => setForm({ ...form, payment: e.target.value })}
            style={{ width: "100%", padding: 10, marginTop: 6, marginBottom: 10 }}
          >
            <option>Cash</option>
            <option>Maya</option>
            <option>GCash</option>
          </select>

          {(form.payment === "GCash" || form.payment === "Maya") && (
            <div style={{ marginBottom: 10 }}>
              <label>Upload Payment Receipt <span style={{color: "red"}}>*</span></label>
              <input
                type="file"
                accept="image/*"
                required 
                onChange={(e) => setForm({ ...form, receipt: e.target.files[0] })}
                style={{ width: "100%", padding: 10, marginTop: 6 }}
              />
            </div>
          )}

          <label>Notes (optional)</label>
          <textarea
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            style={{ width: "100%", padding: 10, marginTop: 6, minHeight: 90 }}
          />

          <div style={{ display: "flex", gap: "10px", marginTop: 12 }}>
            <button type="submit" style={{ flex: 1, fontWeight: 900, padding: "10px 14px", backgroundColor: "#36d7e8", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Place Order
            </button>
            <button type="button" onClick={handleCancel} style={{ flex: 1, fontWeight: 900, padding: "10px 14px", backgroundColor: "#ff4d94", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Cancel
            </button>
          </div>
        </form>

        <div style={{ background: "white", padding: 16, borderRadius: 14 }}>
          <h3>Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <span>{item.name} × {item.qty}</span>
              <span>₱{item.price * item.qty}</span>
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