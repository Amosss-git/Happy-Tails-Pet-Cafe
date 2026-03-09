# Page structure by system side

- `admin/` - owner/admin-side pages (`OwnerLogin`, `OwnerDashboard`, `OwnerActivityHistory`).
- `staff/` - staff-side pages and workflows (login, dashboard, orders, menu, inventory, customers, profile, activity history).
- `customer/` - customer-side pages (`CustomerLogin`, `CustomerDashboard`).

All three systems run from the same React app and are routed by role-based guards in `src/App.jsx`.
