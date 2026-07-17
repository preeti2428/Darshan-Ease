import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSignOutAlt, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import '../auth.css';

const Usignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    let payload = { name, email, password };

    axios
      .post("http://localhost:7000/user/usignup", payload)
      .then((result) => {
        setLoading(false);
        navigate('/ulogin');
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response?.data?.message || 'Failed to create an account');
      });
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/ulogin");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <Link to="/" style={{ position: 'absolute', top: '15px', right: '15px', color: 'white', fontSize: '1.5rem' }}>
            <FaSignOutAlt />
          </Link>
          <h2>Create Account</h2>
          <p>Join us and start your spiritual journey</p>
        </div>

        <div className="auth-body">
          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name">
                <FaUser style={{ marginRight: '8px' }} />
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope style={{ marginRight: '8px' }} />
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="form-group form-group-password">
              <label htmlFor="password">
                <FaLock style={{ marginRight: '8px' }} />
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>

            {/* Confirm Password Input */}
            <div className="form-group form-group-password">
              <label htmlFor="confirmPassword">
                <FaLock style={{ marginRight: '8px' }} />
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>

            {/* Terms */}
            <div className="form-group-checkbox">
              <input id="terms" type="checkbox" name="terms" required />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{' '}
              <button
                onClick={handleLoginClick}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <a href="#login">Sign in here</a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usignup;
