import React, { useState, useEffect } from 'react';

function Admin() {
  const [teamForm, setTeamForm] = useState({
    name: '',
    description: ''
  });
  const [teamMessage, setTeamMessage] = useState('');
  const [pendingProblems, setPendingProblems] = useState([]);
  const [joinRequests, setJoinRequests] = useState([]);

  useEffect(() => {
    loadPendingProblems();
    loadJoinRequests();
  }, []);

  const loadPendingProblems = async () => {
    try {
      // Mock data
      const mockProblems = [
        {
          id: 1,
          title: 'Automated Medication Dispenser',
          category: 'Medical Device',
          description: 'Design an automated system that dispenses medication at scheduled times with patient verification.'
        },
        {
          id: 2,
          title: 'Remote Patient Monitoring Dashboard',
          category: 'Software',
          description: 'Create a dashboard that aggregates patient data from various monitoring devices in real-time.'
        }
      ];
      setPendingProblems(mockProblems);
    } catch (error) {
      console.error('Error loading pending problems:', error);
    }
  };

  const loadJoinRequests = async () => {
    try {
      // Mock data
      const mockRequests = [
        {
          id: 1,
          username: 'john_doe',
          team: { id: 1, name: 'Medical Innovators' }
        },
        {
          id: 2,
          username: 'jane_smith',
          team: { id: 2, name: 'Software Solutions' }
        }
      ];
      setJoinRequests(mockRequests);
    } catch (error) {
      console.error('Error loading join requests:', error);
    }
  };

  const handleTeamFormChange = (e) => {
    setTeamForm({
      ...teamForm,
      [e.target.id.replace('team', '').replace('Create', '').toLowerCase()]: e.target.value
    });
  };

  const handleCreateTeam = async (e) => {
    e.preventDefault();
    setTeamMessage('');

    try {
      // Mock team creation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setTeamMessage('Team created successfully!');
      setTeamForm({ name: '', description: '' });
    } catch (error) {
      console.error('Error creating team:', error);
      setTeamMessage('Failed to create team.');
    }
  };

  const approveProblem = async (id) => {
    try {
      // Mock approval
      await new Promise(resolve => setTimeout(resolve, 300));
      
      alert('Problem approved!');
      setPendingProblems(pendingProblems.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error approving problem:', error);
      alert('Failed to approve problem.');
    }
  };

  const approveJoin = async (id) => {
    try {
      // Mock approval
      await new Promise(resolve => setTimeout(resolve, 300));
      
      alert('Request approved!');
      setJoinRequests(joinRequests.filter(r => r.id !== id));
    } catch (error) {
      console.error('Error approving request:', error);
      alert('Failed to approve request.');
    }
  };

  const denyJoin = async (id) => {
    try {
      // Mock denial
      await new Promise(resolve => setTimeout(resolve, 300));
      
      alert('Request denied.');
      setJoinRequests(joinRequests.filter(r => r.id !== id));
    } catch (error) {
      console.error('Error denying request:', error);
      alert('Failed to deny request.');
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Admin Panel</h2>

      {/* Create Team */}
      <div className="card admin-section">
        <h3 style={{ color: '#4a90e2', marginTop: 0 }}>Create a New Team</h3>
        <form onSubmit={handleCreateTeam} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <input
            type="text"
            id="teamNameCreate"
            placeholder="Team Name"
            value={teamForm.name}
            onChange={handleTeamFormChange}
            required
          />
          <textarea
            id="teamDescCreate"
            placeholder="Describe your team..."
            rows="3"
            value={teamForm.description}
            onChange={handleTeamFormChange}
          />
          <button type="submit">Create Team</button>
        </form>
        {teamMessage && (
          <p className="muted" style={{ textAlign: 'center', marginTop: '1rem' }}>
            {teamMessage}
          </p>
        )}
      </div>

      {/* Pending Join Requests */}
      <div className="card admin-section">
        <h3 style={{ color: '#4a90e2', marginTop: 0 }}>Pending Join Requests</h3>
        <div className="list" style={{ marginTop: '1rem' }}>
          {joinRequests.length === 0 ? (
            <p className="muted">No pending requests.</p>
          ) : (
            joinRequests.map((request) => (
              <div key={request.id} className="item">
                <p style={{ margin: '.25rem 0' }}>
                  <strong>{request.username}</strong> → Team {request.team?.name || request.team?.id}
                </p>
                <div style={{ marginTop: '.5rem' }}>
                  <button onClick={() => approveJoin(request.id)}>Approve</button>
                  <button onClick={() => denyJoin(request.id)} style={{ marginLeft: '.5rem' }}>
                    Deny
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pending Problem Approvals */}
      <div className="card admin-section">
        <h3 style={{ color: '#4a90e2', marginTop: 0 }}>Pending Problem Approvals</h3>
        <div className="list" style={{ marginTop: '1rem' }}>
          {pendingProblems.length === 0 ? (
            <p>No pending problems.</p>
          ) : (
            pendingProblems.map((problem) => (
              <div key={problem.id} className="item">
                <h3 style={{ margin: '0 0 .25rem 0' }}>{problem.title}</h3>
                <p className="muted" style={{ margin: '.25rem 0' }}>
                  <strong>Category:</strong> {problem.category}
                </p>
                <p className="muted" style={{ margin: '.25rem 0' }}>
                  {problem.description}
                </p>
                <button onClick={() => approveProblem(problem.id)}>Approve</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;