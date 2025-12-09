import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAdmin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id.replace('login', '').toLowerCase()]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      // Mock login - in real app, this would call the backend
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mock response - assuming admin if username contains 'admin'
      const isAdminUser = formData.username.toLowerCase().includes('admin');
      
      localStorage.setItem('username', formData.username);
      localStorage.setItem('role', isAdminUser ? 'ADMIN' : 'STUDENT');
      
      setIsAdmin(isAdminUser);
      setMessage(`Login successful! Welcome ${formData.username}`);

      // Redirect after successful login
      setTimeout(() => {
        navigate(isAdminUser ? '/admin' : '/challenges');
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          id="loginUsername"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          id="loginPassword"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && (
        <p className="message">{message}</p>
      )}
    </div>
  );
}

export default Login;