import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { UserContext } from './UserContext'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((users) => {
        if (login(email, password, users)) {
          navigate('/services'); 
        } else {
          setError('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setError('Error logging in. Please try again.');
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>} {/* Display error message if any */}
      <input
        type="email"
        placeholder="E-mail"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="button">Sign In</button>
    </form>
  );
};

export default Login;
