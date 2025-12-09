import React, { useState, useEffect } from 'react';

function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadChallenges();
  }, []);

  const loadChallenges = async () => {
    setLoading(true);
    try {
      // Mock data for demo purposes
      const mockChallenges = [
        {
          id: 1,
          title: 'test',
          description: 'test.',
          category: 'test'
        },

      ];
      
      // Simulate API delay
      setTimeout(() => {
        setChallenges(mockChallenges);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error loading challenges:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="logo" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
        Open Challenges
      </h2>
      <div className="list">
        {loading ? (
          <p>Loading challenges...</p>
        ) : challenges.length === 0 ? (
          <p className="muted">No approved challenges yet.</p>
        ) : (
          challenges.map((challenge) => (
            <div key={challenge.id} className="item">
              <h3 style={{ margin: '0 0 .25rem 0' }}>{challenge.title}</h3>
              <p className="muted" style={{ margin: '.25rem 0 .5rem 0' }}>
                {challenge.description}
              </p>
              <span className="chip">Category: {challenge.category}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Challenges;