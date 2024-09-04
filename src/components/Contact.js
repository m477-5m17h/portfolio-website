import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitization
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');

    // Input validation function
    const validateInput = (name, value) => {
        switch (name) {
            case 'name':
                return value.length < 2 ? 'Name must be at least 2 characters long' : '';
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? 'Invalid email format' : '';
            case 'message':
                return value.length < 10 ? 'Message must be at least 10 characters long' : '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Sanitize the input value using DOMPurify
        const sanitizedValue = DOMPurify.sanitize(value);

        // Update the form data with sanitized value
        setFormData({
            ...formData,
            [name]: sanitizedValue,
        });

        // Validate input and update the errors state
        setErrors({
            ...errors,
            [name]: validateInput(name, sanitizedValue),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for validation errors before submitting
        if (!errors.name && !errors.email && !errors.message) {
            emailjs.send(
                'service_reis00u',
                'template_h5oorxw',
                formData,
                '7ZWH1lQ4zJEdbC0vS'
            ).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatusMessage('Message sent successfully!');
                },
                (error) => {
                    console.error('FAILED...', error);
                    setStatusMessage('Failed to send the message, please try again.');
                }
            );

            // Clear the form fields after successful submission
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } else {
            // Show an error message if there are validation errors
            setStatusMessage('Please fix the validation errors before submitting.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>} {/* Display name error */}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>} {/* Display email error */}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>} {/* Display message error */}
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
        </section>
    );
}

export default Contact;

