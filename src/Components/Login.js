import React from 'react';
import { useState, useEffect } from 'react';

const Login = () => {

  const initialVal = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialVal);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const{name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(()=>{
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.+[^\s@]{2,}$/i;
    if(!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a valid email";
    }
    if(!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters";
    }
    return errors;
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className="auth-wrapper">
        <div className="auth-inner">
        <h3>Sign In</h3>
        <div className="mb-3">
          <input
            name = "email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={formValues.email}
            onChange = {handleChange}
          />
        </div>
        <p className='error'>{formErrors.email}</p>
        <div className="mb-3">
          <input
            name = "password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={formValues.password}
            onChange = {handleChange}
          />
        </div>
        <p className='error'>{formErrors.password}</p>
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
      </div>
  )
}

export default Login;