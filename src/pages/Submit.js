import React, { useState } from 'react';

function Submit() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category) {
      setMessage('Please fill all fields.');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      // Mock submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('Submitted! Awaiting admin approval.');
      setFormData({ title: '', description: '', category: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h2 className="logo" style={{ fontSize: '1.75rem', marginBottom: '1rem', textAlign: 'center' }}>
        Submit a Problem
      </h2>
      <form onSubmit={handleSubmit} className="card submit-form">
        <input
          id="title"
          type="text"
          placeholder="Problem Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          id="description"
          rows="5"
          placeholder="Describe the problem..."
          value={formData.description}
          onChange={handleChange}
          required
        />
        <select
          id="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="Diagnostics">Diagnostics</option>
          <option value="Prosthetics">Prosthetics</option>
          <option value="Software">Software</option>
          <option value="Medical Device">Medical Device</option>
        </select>
        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Problem'}
        </button>
      </form>
      {message && (
        <p className="muted message">{message}</p>
      )}
    </div>
  );
}

export default Submit;