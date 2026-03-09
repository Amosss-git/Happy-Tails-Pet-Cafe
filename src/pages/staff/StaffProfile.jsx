import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffProfile.css";

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    fullName: "LeBron Raymone James",
    workEmail: "lebronjames@happytails.com",
    personalEmail: "lebrongoatjames@gmail.com",
    mobile: "09123456780",
    nationality: "Filipino citizen",
    address: "Blk 14 Lot 3, Ball Street, Eastwood Village",

    role: "Staff",
    dateJoined: "12 November 2025",
    hireType: "Part-time",
    status: "Active",

    bank: "BPI",
    accountName: "LeBron Raymone James",
    accountNumber: "1234 5678 9012"
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">

          <img
            src="/src/assets/profile.jpg"
            className="profile-avatar"
          />

          <div className="profile-title">
            <h2>{profile.fullName}</h2>
            <p>{profile.role}</p>
          </div>

          <div style={{marginLeft:"auto", display:"flex", gap:"10px"}}>

            <button
              className="edit-btn"
              onClick={() => navigate("/activity-history")}
            >
              Activity History
            </button>

            <button
              className="edit-btn"
              onClick={() => navigate("/dashboard")}
            >
              Back to Dashboard
            </button>

            <button
              className="edit-btn"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "Save Profile" : "Edit Profile"}
            </button>

          </div>

        </div>

        {/* PERSONAL INFO */}

        <div className="profile-section">
          <h3>Personal Information</h3>

          <div className="profile-grid">

            <div className="field">
              <label>Full Name</label>
              <input
                name="fullName"
                value={profile.fullName}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Work Email</label>
              <input
                name="workEmail"
                value={profile.workEmail}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Personal Email</label>
              <input
                name="personalEmail"
                value={profile.personalEmail}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Mobile Number</label>
              <input
                name="mobile"
                value={profile.mobile}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Nationality</label>
              <input
                name="nationality"
                value={profile.nationality}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Street Address</label>
              <input
                name="address"
                value={profile.address}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

          </div>
        </div>


        {/* EMPLOYMENT */}

        <div className="profile-section">
          <h3>Employment Details</h3>

          <div className="profile-grid">

            <div className="field">
              <label>Role</label>
              <input value={profile.role} disabled />
            </div>

            <div className="field">
              <label>Date Joined</label>
              <input value={profile.dateJoined} disabled />
            </div>

            <div className="field">
              <label>Hire Type</label>
              <input
                name="hireType"
                value={profile.hireType}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Status</label>
              <input
                name="status"
                value={profile.status}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

          </div>
        </div>


        {/* BANK */}

        <div className="profile-section">
          <h3>BPI Bank Details</h3>

          <div className="profile-grid">

            <div className="field">
              <label>Bank</label>
              <input value={profile.bank} disabled />
            </div>

            <div className="field">
              <label>Account Name</label>
              <input
                name="accountName"
                value={profile.accountName}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Account Number</label>
              <input
                name="accountNumber"
                value={profile.accountNumber}
                disabled={!editMode}
                onChange={handleChange}
              />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}