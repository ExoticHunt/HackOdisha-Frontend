import React from 'react';

const Login = () => {
  return (
    <form>
      <div className="auth-wrapper">
        <div className="auth-inner">
        <h3>Sign In</h3>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        <p className="route">
          New User? <a href="/sign-up">Sign up</a>
        </p>
        </div>
        </div>
      </form>
  )
}

export default Login;