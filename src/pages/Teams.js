import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    setLoading(true);
    try {
      // Mock data for demo
      const mockTeams = [
        {
          id: 1,
          name: 'Medical Innovators',
          description: 'Focused on developing innovative medical devices and diagnostic tools.',
          members: ['People']
        },
        {
          id: 2,
          name: 'Software Solutions',
          description: 'Building software applications to improve healthcare delivery and patient outcomes.',
          members: ['People']
        },
        {
          id: 3,
          name: 'Prosthetics Lab',
          description: 'Designing and prototyping advanced prosthetic solutions.',
          members: ['People']
        }
      ];

      // Simulate API delay
      setTimeout(() => {
        setTeams(mockTeams);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error loading teams:', error);
      setLoading(false);
    }
  };

  const handleJoinRequest = (teamId) => {
    const username = localStorage.getItem('username');
    if (!username) {
      alert('Please log in before sending a join request.');
      return;
    }

    // Mock join request
    alert(`Join request sent for team ${teamId}!`);
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Available Teams</h2>
      <div className="list" style={{ maxWidth: '600px', margin: 'auto' }}>
        {loading ? (
          <p>Loading teams...</p>
        ) : teams.length === 0 ? (
          <p>No teams yet.</p>
        ) : (
          teams.map((team) => (
            <div key={team.id} className="item">
              <h3 style={{ margin: '0 0 .25rem 0' }}>{team.name}</h3>
              <p className="muted" style={{ margin: '.25rem 0' }}>
                {team.description || 'No description provided.'}
              </p>
              <button
                onClick={() => handleJoinRequest(team.id)}
                style={{ marginTop: '.5rem' }}
              >
                Request to Join
              </button>
              <div className="muted" style={{ marginTop: '.5rem' }}>
                {team.members && team.members.length > 0 ? (
                  <>
                    <strong>Members:</strong> {team.members.join(', ')}
                  </>
                ) : (
                  <em>No approved members yet.</em>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Teams;