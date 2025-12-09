import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
    adminCode: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const field = e.target.id.replace('signup', '').toLowerCase();
    const value = e.target.value;
    
    setFormData({
      ...formData,
      [field]: value
    });

    // Reset admin code if role changes from ADMIN
    if (field === 'role' && value !== 'ADMIN') {
      setFormData(prev => ({
        ...prev,
        role: value,
        adminCode: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (formData.role === 'ADMIN' && !formData.adminCode) {
      setMessage('Admin code is required for admin registration.');
      return;
    }

    try {
      // Mock signup
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setMessage('Account created successfully! You can now log in.');
      setFormData({
        username: '',
        password: '',
        role: '',
        adminCode: ''
      });
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Error creating account. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          id="signupUsername"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          id="signupPassword"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select
          id="signupRole"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="STUDENT">Student</option>
          <option value="ADMIN">Admin</option>
        </select>
        {formData.role === 'ADMIN' && (
          <input
            type="password"
            id="signupAdminCode"
            placeholder="Admin Code"
            value={formData.adminCode}
            onChange={handleChange}
          />
        )}
        <button type="submit">Sign Up</button>
      </form>
      {message && (
        <p className="message">{message}</p>
      )}
    </div>
  );
}

export default Signup;