import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <h1>Order Confirmed 🎉</h1>
      <p>Thank you! Your order has been placed.</p>
      <Link to="/order">Order Again</Link>
    </div>
  );
}