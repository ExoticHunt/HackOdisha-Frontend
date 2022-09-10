import React, {useState } from 'react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('Send');
   
    const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

  return (
    <div className="container mt-5 contact-wrapper">
      <h2 className="mb-3">Contact Us Here</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input 
            className="form-control" 
            type="text" 
            id="name" 
            placeholder="Name"
            required 
        />
        </div>
        <div className="mb-3">
          <input 
            className="form-control" 
            type="email" 
            id="email"
            placeholder="Email" 
            required 
        />
        </div>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            id="message" 
            placeholder="Write you message here..."
            required />
        </div>
        <div className='text-center'>
            <button className="btn btn-primary" type="submit">
            {formStatus}
            </button>
        </div>
        
      </form>
    </div>
  );
}

export default Contact;