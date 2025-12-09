import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Challenges from './pages/Challenges';
import Submit from './pages/Submit';
import Teams from './pages/Teams';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';

function App() {
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    const role = localStorage.getItem('role');
    setIsAdmin(role === 'ADMIN');
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation isAdmin={isAdmin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Navigation({ isAdmin }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Uprising Medical</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/challenges">Challenges</Link></li>
          <li><Link to="/submit">Submit a Problem</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          {isAdmin && <li><Link to="/admin">Admin</Link></li>}
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Uprising Medical</p>
    </footer>
  );
}

export default App;