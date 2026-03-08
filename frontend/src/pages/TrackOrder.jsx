import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TrackOrder() {
  const [orderInfo, setOrderInfo] = useState({
    id: "",
    type: "",
    status: "Pending",
  });

  useEffect(() => {
    const checkStatusUpdate = () => {
      // ✅ Pulling the data we just saved in Checkout.jsx
      const savedType = localStorage.getItem("latestOrderType");
      const savedId = localStorage.getItem("latestOrderId");
      
      // If no order exists in storage, we don't want to run the logic
      if (!savedId) return;

      // Look for the live status (set by staff or defaulted to Pending)
      const liveStatus = localStorage.getItem(`status_${savedId}`) || "Pending";
      
      setOrderInfo({
        id: savedId,
        type: savedType,
        status: liveStatus
      });
    };

    checkStatusUpdate(); // Run immediately
    const interval = setInterval(checkStatusUpdate, 3000); // Poll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // ✅ DYNAMIC STEPS LOGIC (Matches your Checkout options)
  const getSteps = () => {
    const base = ["Pending", "Preparing"];
    
    switch (orderInfo.type) {
      case "Delivery":
        return [...base, "Out for Delivery", "Delivered"];
      case "Dine-in":
        return [...base, "Food is Ready", "Enjoy!"];
      case "Pickup":
        return [...base, "Ready for Pickup", "Picked Up"];
      case "Takeout":
        return [...base, "Ready for Takeout", "Picked Up"];
      default:
        // Fallback in case of type mismatch
        return [...base, "Processing", "Completed"];
    }
  };

  const steps = getSteps();
  
  // Find the current progress index
  const currentStepIndex = steps.findIndex(
    s => s.toLowerCase() === orderInfo.status.toLowerCase()
  );

  // ✅ Empty State: If user visits the page with no active order
  if (!orderInfo.id) {
    return (
      <div style={{ padding: 50, textAlign: "center" }}>
        <h2>No Active Order Found</h2>
        <p>It looks like you haven't placed an order yet.</p>
        <Link to="/order" style={{ color: "#36d7e8", fontWeight: "bold" }}>Go to Menu</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: "20px", minHeight: "80vh" }}>
      {/* Header Card */}
      <div style={{ background: "white", padding: "30px", borderRadius: "20px", textAlign: "center", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
        <div style={{ fontSize: "50px", marginBottom: "10px" }}>
          {orderInfo.status === "Pending" && "⏳"}
          {orderInfo.status === "Preparing" && "👨‍🍳"}
          {(orderInfo.status.includes("Ready") || orderInfo.status === "Out for Delivery") && "🛵"}
          {(orderInfo.status === "Delivered" || orderInfo.status === "Enjoy!" || orderInfo.status === "Picked Up") && "🎉"}
        </div>
        <h2 style={{ margin: 0, color: "#333", textTransform: "capitalize" }}>{orderInfo.status}</h2>
        <p style={{ color: "#888", fontSize: "0.9rem" }}>{orderInfo.type} Order #{orderInfo.id}</p>
      </div>

      {/* Vertical Timeline */}
      <div style={{ marginTop: "40px", paddingLeft: "40px" }}>
        {steps.map((step, index) => (
          <div key={index} style={{ display: "flex", gap: "20px", marginBottom: "40px", position: "relative" }}>
            {/* The Connecting Line */}
            {index !== steps.length - 1 && (
              <div style={{
                position: "absolute", left: "14px", top: "35px", bottom: "-45px", width: "2px",
                backgroundColor: index < currentStepIndex ? "#36d7e8" : "#eee"
              }}></div>
            )}
            
            {/* The Circle */}
            <div style={{
              width: "30px", height: "30px", borderRadius: "50%",
              backgroundColor: index <= currentStepIndex ? "#36d7e8" : "white",
              border: `2px solid ${index <= currentStepIndex ? "#36d7e8" : "#eee"}`,
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, color: "white"
            }}>
              {index < currentStepIndex ? "✓" : ""}
            </div>

            {/* Label */}
            <div>
              <p style={{ 
                margin: 0, 
                fontWeight: index === currentStepIndex ? "bold" : "normal", 
                color: index <= currentStepIndex ? "#333" : "#ccc" 
              }}>
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/" style={{ color: "#ff4d94", textDecoration: "none", fontSize: "0.9rem" }}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}