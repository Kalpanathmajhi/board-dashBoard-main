import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    if (email && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="container">
      <div className="black-portion">
        <h1>Board.</h1>
      </div>
      <div className="form-container">
        <div className="signin-heading">
          <h1>Sign in</h1>
          <h6>Sign in to your account</h6>
        </div>
        <div className="form-box">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="email">Email adress</label>
              <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <input type="submit" value="Sign In" />
          </form>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
