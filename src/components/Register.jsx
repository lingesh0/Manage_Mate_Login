import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../Styles/register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert(`Registered as ${username}`);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="username" className="label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password" className="label">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="input"
                value={password}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isPasswordFocused && (
                <div
                  className="password-toggle-icon"
                  onMouseDown={handleMouseDown}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </div>
              )}
            </div>
          </div>
          <div className="formGroup">
            <label htmlFor="confirmPassword" className="label">Confirm Password</label>
            <div className="password-input-container">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="input"
              value={confirmPassword}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {isPasswordFocused && (
                <div
                  className="password-toggle-icon"
                  onMouseDown={handleMouseDown}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </div>
              )}
              </div>
          </div>
          <center><button type="submit" className="button">Register</button></center>
        </form>
        <div className="loginLink">
          <span>Do you have an account? </span>
          <b><Link to="/">Login here</Link></b>
        </div>
      </div>
    </div>
  );
}

export default Register;
