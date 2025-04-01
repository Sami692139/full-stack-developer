// 

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
//import { Link } from "react-router-dom"; // Import Link for navigation
import { Link } from "react-router-dom"; // Import Link for navigation

function AdminMenu() {
  const navigate = useNavigate(); // Create a navigate function

  const handleDashboardClick = () => {
    navigate("/admin/admin-dashboard"); // Redirect to the admin dashboard route
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <h2>Admin Menu</h2>
        </div>
        <nav className="menu">
          <ul>
            <li>
              {/* Use the onClick handler to navigate */}
              <span
                onClick={handleDashboardClick}
                style={{ cursor: "pointer" }}
              >
                Dashboard
              </span>
            </li>
            <li>
              <Link to="#">Orders</Link>
            </li>
            <li>
              <Link to="#">New order</Link>
            </li>
            <li>
              <Link to="/admin/add-employee">Add employee</Link>
            </li>
            <li>
              <Link to="/admin/employees">Employees</Link>
            </li>
            <li>
              <Link to="/admin/customer">Add customer</Link>
            </li>
            <li>
              <Link to="/admin/customers">Customers</Link>
            </li>
            <li>
              <Link to="#">Services</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default AdminMenu;
