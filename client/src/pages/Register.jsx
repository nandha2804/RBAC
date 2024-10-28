import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", password2: "", role: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await axios.post("http://127.0.0.1:8000/auth/register/", formData);
      navigate("/login");
    } catch (error) {
      setError("Failed to register");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="containe">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <label>Confirm Password:</label>
        <input type="password" name="password2" value={formData.password2} onChange={handleChange} />
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit" disabled={isLoading}>Register</button>
      </form>
      <div className="links">
		<Link to="/login">Already Registered? Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<Link to="/">Back</Link>
	</div>
    </div>
  );
}
