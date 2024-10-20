import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
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
        // Handle registration logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="register-container">
        <div className="register-box">
            <h2>Register Page</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </Form.Group>
                <br />
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
                <Button  className="submit-btn" variant="dark" type="submit">Register</Button>
            </Form>
            <div className="account-container">
                    <h5 className="inline-text">Have an account?</h5>
                    <a href="login" className="inline-text login-link">Login</a>
                </div>
        </div>
        
        </div>
        
    );
}

export default Register;