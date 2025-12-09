import React, { useState } from 'react';

const teamProfiles = {
  'founder1': {
    name: 'Dhruvrajsinh Chauhan',
    role: 'Founder',
    img: '/media/team/dc.jpg',
    initials: 'DC',
    bio: 'Dhruvrajsinh Chauhan is the founder and guiding force behind Uprising Medical, leading all aspects of the initiative. With strengths in innovation, cross-functional collaboration, platform development, and stakeholder engagement, he drives the team and ensures the platform effectively addresses real-world healthcare challenges through engineering solutions.'
  },
  'cofounder1': {
    name: 'Leul Mesfin',
    role: 'Co-Founder',
    img: '/media/team/lm.jpg',
    initials: 'LM',
    bio: 'Leul Mesfin is the co-founder of Uprising Medical and is majoring in Biomedical Engineering at ASU specializing in biomedical devices. With experience in managing budgets, refining designs with CAD software, and collaborating across disciplines, his goal is the same: to turn ideas into tangible devices that improve lives.'
  },
  'tech-director': {
    name: 'Ishita Deshpande',
    role: 'Technical Director',
    img: '/media/team/id.jpg',
    initials: 'ID',
    bio: 'Ishita Deshpande is a Computer Science major at ASU, specializing in JavaScript, React, and web design. At Uprising Medical, she leads the development of the website\'s UI and functionality, connecting users and teams. Passionate about technology, she builds solutions that make engineering collaboration more accessible and impactful.'
  },
  'social-director': {
    name: 'Tristan Puskarov',
    role: 'Social Media Director',
    img: '/media/team/tp.jpg',
    initials: 'TP',
    bio: 'Tristan is a sophomore Aerospace Engineering student at ASU and serves as the Social Media Director for Uprising Medical. He manages the organization\'s social media presence, creating engaging and informative posts that share its mission and goals, helping people from all over connect with and contribute to the platform\'s initiatives.'
  },
  'pr-director': {
    name: 'Gwendylin Nguyen',
    role: 'PR Director',
    img: '/media/team/gn.jpg',
    initials: 'GN',
    bio: 'Gwendylin Nguyen is a sophomore double majoring in Biomedical Engineering and Management and serves as the PR Director of Uprising Medical. Passionate about connecting people, she is helping strengthen ties between doctors and the team and contributing to forming Uprising Medical\'s club at ASU.'
  },
  'ops-director': {
    name: 'Suprathik Gangone',
    role: 'Operations Director',
    img: '/media/team/sg.jpg',
    initials: 'SG',
    bio: 'Suprathik Gangone studies Business Administration at ASU. Driven and ambitious, he is passionate about leadership, public speaking, and entrepreneurship. Actively participating in MUN, theatre, and business plan competitions, he continually pushes himself to grow, create impact, and leave a meaningful mark on society.'
  },
  'tech-exec-rk': {
    name: 'Rohan Kshatriya',
    role: 'Technical Executive',
    img: '/media/team/rk.jpg',
    initials: 'RK',
    bio: 'Rohan is a Computer Science student at ASU with experience in medical AI and research at Harvard Medical School. As Technical Executive at Uprising Medical, he designs the platform\'s infrastructure, builds backend features, integrates databases, and develops tools that connect students with real-world healthcare challenges.'
  },
  'tech-exec-sa': {
    name: 'Sarthak Avaiya',
    role: 'Technical Executive',
    img: '/media/team/sa.jpg',
    initials: 'SA',
    bio: 'Sarthak Avaiya is a Master\'s student in Computer Science at Stevens Institute of Technology. As a volunteer Software Developer at Uprising Medical, he applies his technical skills to build user-friendly digital solutions, making healthcare more accessible and impactful.'
  }
};

function About() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const openProfile = (key) => {
    setSelectedProfile(teamProfiles[key]);
  };

  const closeProfile = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="container">
      <section className="team-section">
        <h2>Meet Our Team</h2>

        <div className="team-intro card">
          <h3>Our Story</h3>
          <p>
            Uprising Medical was founded on <strong>November 19, 2024</strong>, by{' '}
            <strong>Dhruvrajsinh Chauhan</strong> and later joined by{' '}
            <strong>Leul Mesfin</strong>, with the vision of bridging the gap between
            real-world healthcare challenges and innovative problem solvers. The platform
            enables doctors, professionals, and the public to submit medical challenges,
            which engineering students then collaborate on to develop creative and practical
            solutions. Our mission is to foster innovation, connect communities, and enhance
            healthcare accessibility through collaborative problem-solving. Guided by our
            vision of accelerating medical innovation, our dedicated volunteer team works
            entirely without compensation, driven by a shared commitment to improving lives
            through the intersection of engineering and healthcare.
          </p>
        </div>

        <div className="team-grid">
          {Object.entries(teamProfiles).map(([key, member]) => (
            <div key={key} className="team-card" onClick={() => openProfile(key)}>
              <div className="profile-photo">
                <img
                  src={member.img}
                  alt={`Photo of ${member.name}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.textContent = member.initials;
                  }}
                />
              </div>
              <div className="team-content">
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <p>{member.bio.substring(0, 80)}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProfile && (
        <div className={`modal ${selectedProfile ? 'open' : ''}`} onClick={closeProfile}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeProfile}>
              &times;
            </span>
            <div className="profile-header" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '.75rem' }}>
              <img
                src={selectedProfile.img}
                alt={`Photo of ${selectedProfile.name}`}
                style={{ width: '84px', height: '84px', borderRadius: '50%', objectFit: 'cover' }}
                onError={(e) => (e.target.style.display = 'none')}
              />
              <div>
                <h3 style={{ margin: '.1rem 0' }}>{selectedProfile.name}</h3>
                <div className="role" style={{ color: '#4b5563' }}>
                  {selectedProfile.role}
                </div>
              </div>
            </div>
            <p style={{ margin: '.5rem 0 1rem', lineHeight: '1.6' }}>
              {selectedProfile.bio}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;