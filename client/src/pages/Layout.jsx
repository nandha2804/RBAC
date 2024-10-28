import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="containerr">
      <h1>Role-Based Authentication (RBAC) system</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      </div>
      <div className="home-container">
      <style>
        {`
          .home-container {
            padding: 20px;
            max-width: 800px;
            margin: auto;
          }
          h1 {
            text-align: center;
          }
          section {
            margin-bottom: 20px;
          }
          h2 {
            color: #333;
          }
          p {
            line-height: 1.6;
          }
          ul {
            margin: 10px 0;
            padding-left: 20px;
          }
        `}
      </style>
      <section className="overview">
        <h2>Overview</h2>
        <p>
          This RBAC system allows users to securely access resources based on their roles within an organization.
          Users can have different permissions and access levels, enhancing security and user management.
        </p>
      </section>
      
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Role-based access control for users.</li>
          <li>Secure user authentication and token management.</li>
          <li>Dynamic role assignment and management.</li>
          <li>Detailed audit logs for security monitoring.</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          Users are authenticated via secure login and assigned a specific role (e.g., admin, user).
          Based on this role, they can access specific features and data within the application.
          The system ensures that only authorized users can perform sensitive operations.
        </p>
      </section>
      
      <section className="getting-started">
        <h2>Getting Started</h2>
        <p>
          To get started, create an account and log in. Depending on your role, you will have access to various features and functionalities.
        </p>
      </section>
    </div>
    </div>
    


    
  );
}
