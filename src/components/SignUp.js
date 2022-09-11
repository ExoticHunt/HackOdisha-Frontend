import React from 'react';
import { useState, useEffect } from 'react';

const SignUp = () => {
	const initialVal = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
	};

	const [formValues, setFormValues] = useState(initialVal);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.+[^\s@]{2,}$/i;
		if (!values.firstname) {
			errors.firstname = 'First name is required';
		}
		if (!values.lastname) {
			errors.lastname = 'Last name is required';
		}
		if (!values.email) {
			errors.email = 'Email is required';
		} else if (!regex.test(values.email)) {
			errors.email = 'Enter a valid email';
		}
		if (!values.password) {
			errors.password = 'Password is required';
		} else if (values.password.length < 8) {
			errors.password = 'Password must be 8 characters';
		}
		return errors;
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="auth-wrapper">
				<div className="auth-inner">
					<h3>Sign Up</h3>
					<div className="mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Enter first name"
							name="firstname"
							value={formValues.firstname}
							onChange={handleChange}
						/>
					</div>
					<p className="error">{formErrors.firstname}</p>
					<div className="mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Enter last name"
							name="lastname"
							value={formValues.lastname}
							onChange={handleChange}
						/>
					</div>
					<p className="error">{formErrors.lastname}</p>
					<div className="mb-3">
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							value={formValues.email}
							onChange={handleChange}
						/>
					</div>
					<p className="error">{formErrors.email}</p>
					<div className="mb-3">
						<input
							type="password"
							className="form-control"
							placeholder="Enter password"
							name="password"
							value={formValues.password}
							onChange={handleChange}
						/>
					</div>
					<p className="error">{formErrors.password}</p>
					<div className="d-grid">
						<button
							type="submit"
							className="btn btn-primary"
						>
							Sign Up
						</button>
					</div>
					<p className="route">
						Already registered? <a href="/">Sign in</a>
					</p>
				</div>
			</div>
		</form>
	);
};

export default SignUp;
