import React, { useState, useEffect  } from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    mobile: '',
    message: ''
  });

  useEffect(() => {
    const container = document.querySelector('.contactus-container');
    container.classList.add('animate');
  }, []);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_ys3albn',
      'template_8xbo94b',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        mobile: formData.mobile,
        message: formData.message
      },
      'veDWQe-ScQ8q-8Ajj'
    ).then((result) => {
      console.log('Email sent successfully:', result.text);
    }).catch((error) => {
      console.error('Failed to send email:', error.text);
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      mobile: '',
      message: ''
    });
  };

  const handleClick = (e) => {
    const button = e.currentTarget;
    button.classList.add('active');
    document.getElementById('button-text').innerHTML = 'Thanks';

    setTimeout(() => {
      button.classList.remove('active');
      document.getElementById('button-text').innerHTML = 'Submit';
    }, 3000);
  };

  
  return (
        <div className="contactus-container">
            <div className="card-section">
                <div className="info-card">
                    <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Our Office</h3>
                    <p>E-1027, Ganesh Glory-11, Nr. BSNL office, Jagatpur, Gota S. G. Highway, Ahmedabad-382481</p>
                </div>
                <div className="info-card">
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <h3>Mail Us</h3>
                    <p>sales@bhavantusoftware.com</p>
                </div>
                <div className="info-card">
                    <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <h3>Phone Number</h3>
                    <p>+91 90998 25657</p>
                </div>
            </div>
    
          <h2 className="contactus-heading">Let’s Get in Touch</h2>
          <p className="contactus-description">
            Do not hesitate to ask us questions; our customer service team is available to assist you at all times.
          </p>
          
            <div className="form-card">
                <form onSubmit={handleSubmit} className="contactus-form">
                    <div className="form-row">
                        <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-control" placeholder='Please Enter your Name...'/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" placeholder='Please Enter your Email ID...'/>
                        </div>
                    </div>
            
                    <div className="form-row">
                        <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text"id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="form-control" placeholder='Please Enter Subject...'/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required className="form-control" placeholder='Please Enter your Mobile No...'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="form-control" placeholder='Please Enter Message...'/>
                        </div>
                    </div>
            
                    <button type="submit" className="submit-button" onClick={handleClick}>
                        <span id="button-text">Submit</span>
                        <div className="checkmark">
                            <span>&#10003;</span>
                        </div>
                    </button>           
                </form>
            </div>
        </div>
      );
    };

export default ContactUs;
