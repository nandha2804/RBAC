import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h1>Role-Based Authentication (RBAC) System</h1>
      <h2>Welcome to, {user.username}!</h2>
      <div className="dashboard-info">
        <p><span>Name:</span> {user.username}</p>
        <p><span>Email:</span> {user.email}</p>
        <p><span>Role:</span> {user.role}</p>
        <p style={{wordBreak: "break-word"}}>
          <span>Token:</span> {localStorage.getItem("accessToken")}
        </p>
      </div>
      <br />
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}
