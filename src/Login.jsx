import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      console.log('Form submitted:', formData);
    };
  
    return (
      <div className="login-container">
        <div className="login-box">
          <h1>Login Page</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <br />
            <Button className="submit-btn" variant="dark" type="submit">Login</Button>
          </Form>
          <div className="account-container">
                    <h5 className="inline-text">New to E-Commerce?</h5>
                    <a href="register" className="inline-text login-link">Register</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;