import React from 'react'

const SignUp = () => {
  return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter first name"
          />
        </div>
        <div className="mb-3">
          <input type="text" 
          className="form-control" 
          placeholder="Enter last name" />
        </div>
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
            Sign Up
          </button>
        </div>
        <p className="route">
          Already registered? <a href="/sign-in">Sign in</a>
        </p>
      </form>
    )
  }

export default SignUp;