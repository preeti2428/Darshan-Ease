import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaSignOutAlt, FaUser, FaLock } from 'react-icons/fa';
import '../auth.css';

const Alogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    let payload = { email, password };
    axios
      .post("http://localhost:7000/admin/alogin", payload)
      .then((res) => {
        if (res.data.Status === "Success") {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          setLoading(false);
          navigate('/ahome');
        } else {
          setError('Invalid email or password. Please try again.');
          setLoading(false);
        }
      })
      .catch((err) => {
        setError('An error occurred. Please try again.');
        setLoading(false);
      });
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate("/asignup");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <Link to="/" style={{ position: 'absolute', top: '15px', right: '15px', color: 'white', fontSize: '1.5rem' }}>
            <FaSignOutAlt />
          </Link>
          <h2>Admin Login</h2>
          <p>Access the admin dashboard</p>
        </div>

        <div className="auth-body">
          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">
                <FaUser style={{ marginRight: '8px' }} />
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>

            {/* Remember Me */}
            <div className="form-group-checkbox">
              <input id="remember" type="checkbox" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <button
                onClick={handleSignupClick}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <a href="#signup">Create one</a>
              </button>
            </p>
            <p style={{ marginTop: '10px' }}>
              <a href="#forgot">Forgot password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alogin;
 