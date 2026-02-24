import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div style={{ padding: 48, textAlign: "center", minHeight: "60vh" }}>
      <div style={{ fontSize: "5rem" }}>🎉</div>
      <h1 style={{ color: "#ff4d94" }}>Order Confirmed!</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: 24 }}>
        Thank you! Your order has been received and is being sent to the kitchen.
      </p>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <Link 
          to="/track-order" 
          style={{ 
            padding: "12px 24px", 
            backgroundColor: "#36d7e8", 
            color: "white", 
            textDecoration: "none", 
            borderRadius: "8px",
            fontWeight: "bold" 
          }}
        >
          Track My Order 📍
        </Link>
        
        <Link 
          to="/order" 
          style={{ 
            padding: "12px 24px", 
            border: "2px solid #ff4d94", 
            color: "#ff4d94", 
            textDecoration: "none", 
            borderRadius: "8px",
            fontWeight: "bold" 
          }}
        >
          Order More
        </Link>
      </div>
    </div>
  );
}