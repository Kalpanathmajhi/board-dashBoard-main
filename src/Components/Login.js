import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './utils/refreshToken';
import './Login.css';

const clientId =
  '49752167316-6h38q6il9k5f53mgneegnamlecfsfc6q.apps.googleusercontent.com';

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

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name} . \n See console for full profile object.`);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(`Failed to login.`);
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
              <label htmlFor="email">Email address</label>
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
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </div>
    </div>
  );
};

export default Login;
