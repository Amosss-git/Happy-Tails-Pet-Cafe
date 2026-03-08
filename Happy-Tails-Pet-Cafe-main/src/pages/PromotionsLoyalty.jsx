import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PromotionsLoyalty() {
  const navigate = useNavigate();

  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem("loyaltyMembers");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: "Andrea Lopez", points: 12, tier: "Silver", rewardStatus: "Eligible" },
          { id: 2, name: "John Cruz", points: 6, tier: "Bronze", rewardStatus: "Not yet eligible" },
          { id: 3, name: "Patricia Lee", points: 25, tier: "Gold", rewardStatus: "Eligible" },
          { id: 4, name: "Maria Santos", points: 9, tier: "Bronze", rewardStatus: "Not yet eligible" }
        ];
  });

  const [promotions, setPromotions] = useState(() => {
    const saved = localStorage.getItem("promotions");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Buy 1 Take 1 Latte", description: "Available every Friday for selected latte drinks.", status: "Active" },
          { id: 2, title: "10% Student Discount", description: "Students get 10% off on drinks upon presenting valid ID.", status: "Active" },
          { id: 3, title: "Free Cookie Promo", description: "Free cookie for orders above ₱300.", status: "Scheduled" }
        ];
  });

  useEffect(() => {
    localStorage.setItem("loyaltyMembers", JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem("promotions", JSON.stringify(promotions));
  }, [promotions]);

  const [searchMember, setSearchMember] = useState("");

  const [newPromoTitle, setNewPromoTitle] = useState("");
  const [newPromoDesc, setNewPromoDesc] = useState("");

  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberPoints, setNewMemberPoints] = useState("");
  const [newMemberTier, setNewMemberTier] = useState("Bronze");
  const [newMemberRewardStatus, setNewMemberRewardStatus] = useState("Not yet eligible");

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchMember.toLowerCase())
  );

  const redeemReward = (id) => {
    setMembers(prev =>
      prev.map(member =>
        member.id === id
          ? {
              ...member,
              points: member.points >= 10 ? member.points - 10 : member.points,
              rewardStatus: member.points >= 10 ? "Redeemed" : member.rewardStatus
            }
          : member
      )
    );
  };

  const addPromotion = () => {
    if (!newPromoTitle.trim() || !newPromoDesc.trim()) {
      alert("Please fill in both promotion title and description.");
      return;
    }

    const newPromo = {
      id: Date.now(),
      title: newPromoTitle,
      description: newPromoDesc,
      status: "Active"
    };

    setPromotions(prev => [newPromo, ...prev]);
    setNewPromoTitle("");
    setNewPromoDesc("");
  };

  const deletePromotion = (id) => {
    setPromotions(prev => prev.filter(promo => promo.id !== id));
  };

  const updatePromotionStatus = (id, status) => {
    setPromotions(prev =>
      prev.map(promo => promo.id === id ? { ...promo, status } : promo)
    );
  };

  const addMember = () => {
    if (!newMemberName.trim() || newMemberPoints === "") {
      alert("Please fill in member name and points.");
      return;
    }

    const newMember = {
      id: Date.now(),
      name: newMemberName,
      points: Number(newMemberPoints),
      tier: newMemberTier,
      rewardStatus: newMemberRewardStatus
    };

    setMembers(prev => [newMember, ...prev]);

    setNewMemberName("");
    setNewMemberPoints("");
    setNewMemberTier("Bronze");
    setNewMemberRewardStatus("Not yet eligible");
  };

  const deleteMember = (id) => {
    setMembers(prev => prev.filter(member => member.id !== id));
  };

  const updateMemberTier = (id, tier) => {
    setMembers(prev =>
      prev.map(member => member.id === id ? { ...member, tier } : member)
    );
  };

  const updateRewardStatus = (id, status) => {
    setMembers(prev =>
      prev.map(member => member.id === id ? { ...member, rewardStatus: status } : member)
    );
  };

  const updateMemberPoints = (id, points) => {
    setMembers(prev =>
      prev.map(member => member.id === id ? { ...member, points: Number(points) || 0 } : member)
    );
  };

  return (
    <div style={{ padding: "28px", background: "#f6f7fb", minHeight: "100vh" }}>

      <h1 style={{ marginBottom: "6px", color: "#222" }}>Promotions & Loyalty</h1>
      <p style={{ marginBottom: "24px", color: "#666" }}>
        Manage rewards, customer points, and active café promotions.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "18px", marginBottom: "24px" }}>
        <div style={{ background: "#fff", borderRadius: "18px", padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
          <h3 style={{ color: "#666" }}>Total Loyalty Members</h3>
          <p style={{ fontSize: "30px", fontWeight: "700" }}>{members.length}</p>
        </div>

        <div style={{ background: "#fff", borderRadius: "18px", padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
          <h3 style={{ color: "#666" }}>Active Promotions</h3>
          <p style={{ fontSize: "30px", fontWeight: "700" }}>
            {promotions.filter(p => p.status === "Active").length}
          </p>
        </div>

        <div style={{ background: "#fff", borderRadius: "18px", padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
          <h3 style={{ color: "#666" }}>Reward Rule</h3>
          <p style={{ fontWeight: "700" }}>10 points = Free Drink</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "24px" }}>

        <div style={{ background: "#fff", borderRadius: "18px", padding: "22px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
          <h2>Add Loyalty Member</h2>

          <input
            type="text"
            placeholder="Member Name"
            value={newMemberName}
            onChange={e => setNewMemberName(e.target.value)}
            style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "10px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />

          <input
            type="number"
            placeholder="Points"
            value={newMemberPoints}
            onChange={e => setNewMemberPoints(e.target.value)}
            style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "10px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />

          <select
            value={newMemberTier}
            onChange={e => setNewMemberTier(e.target.value)}
            style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "10px", border: "1px solid #ccc", boxSizing: "border-box" }}
          >
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>

          <select
            value={newMemberRewardStatus}
            onChange={e => setNewMemberRewardStatus(e.target.value)}
            style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "10px", border: "1px solid #ccc", boxSizing: "border-box" }}
          >
            <option>Not yet eligible</option>
            <option>Eligible</option>
            <option>Redeemed</option>
          </select>

          <button
            onClick={addMember}
            style={{ width: "100%", border: "none", borderRadius: "10px", padding: "12px", background: "#36d7e8", color: "#fff", fontWeight: "700", cursor: "pointer" }}
          >
            Add Member
          </button>
        </div>

        <div style={{ background: "#fff", borderRadius: "18px", padding: "22px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
          <h2>Create Promotion</h2>

          <input
            type="text"
            placeholder="Promotion Title"
            value={newPromoTitle}
            onChange={e => setNewPromoTitle(e.target.value)}
            style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "10px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />

          <textarea
            placeholder="Promotion Description"
            value={newPromoDesc}
            onChange={e => setNewPromoDesc(e.target.value)}
            style={{ width: "100%", minHeight: "90px", padding: "12px", marginBottom: "12px", borderRadius: "10px", border: "1px solid #ccc", resize: "vertical", boxSizing: "border-box" }}
          />

          <button
            onClick={addPromotion}
            style={{ width: "100%", border: "none", borderRadius: "10px", padding: "12px", background: "#ff4d94", color: "#fff", fontWeight: "700", cursor: "pointer" }}
          >
            Add Promotion
          </button>
        </div>

      </div>

      <div style={{ background: "#fff", borderRadius: "18px", padding: "22px", marginTop: "24px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h2>Loyalty Members</h2>

        <input
          type="text"
          placeholder="Search member..."
          value={searchMember}
          onChange={e => setSearchMember(e.target.value)}
          style={{ padding: "10px", borderRadius: "10px", border: "1px solid #ccc", marginBottom: "16px", width: "260px", boxSizing: "border-box" }}
        />

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Points</th>
              <th style={{ padding: "12px" }}>Tier</th>
              <th style={{ padding: "12px" }}>Reward Status</th>
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredMembers.map(member => (
              <tr key={member.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "12px" }}>{member.name}</td>

                <td style={{ padding: "12px" }}>
                  <input
                    type="number"
                    value={member.points}
                    onChange={e => updateMemberPoints(member.id, e.target.value)}
                    style={{ width: "80px", padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
                  />
                </td>

                <td style={{ padding: "12px" }}>
                  <select
                    value={member.tier}
                    onChange={e => updateMemberTier(member.id, e.target.value)}
                    style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
                  >
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
                  </select>
                </td>

                <td style={{ padding: "12px" }}>
                  <select
                    value={member.rewardStatus}
                    onChange={e => updateRewardStatus(member.id, e.target.value)}
                    style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
                  >
                    <option>Not yet eligible</option>
                    <option>Eligible</option>
                    <option>Redeemed</option>
                  </select>
                </td>

                <td style={{ padding: "12px", display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => redeemReward(member.id)}
                    disabled={member.points < 10}
                    style={{ padding: "8px 12px", borderRadius: "8px", border: "none", background: member.points >= 10 ? "#2ec4b6" : "#ccc", color: "#fff" }}
                  >
                    Redeem
                  </button>

                  <button
                    onClick={() => deleteMember(member.id)}
                    style={{ padding: "8px 12px", borderRadius: "8px", border: "none", background: "#ff6b6b", color: "#fff" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ background: "#fff", borderRadius: "18px", padding: "22px", marginTop: "24px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h2>Promotion List</h2>

        {promotions.map(promo => (
          <div key={promo.id} style={{ border: "1px solid #eee", borderRadius: "12px", padding: "14px", marginBottom: "12px", background: "#fafafa" }}>
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>

            <select
              value={promo.status}
              onChange={e => updatePromotionStatus(promo.id, e.target.value)}
              style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "10px" }}
            >
              <option>Active</option>
              <option>Scheduled</option>
              <option>Ended</option>
            </select>

            <br />

            <button
              onClick={() => deletePromotion(promo.id)}
              style={{ padding: "8px 12px", borderRadius: "8px", border: "none", background: "#ff6b6b", color: "#fff" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        style={{ marginTop: "24px", border: "none", borderRadius: "10px", padding: "12px 16px", background: "#444", color: "#fff", cursor: "pointer" }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}