// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <section className="w3l-form-41">
      <div className="w3l-form-41-mian">
        <div className="wrapper">
          <div className="form-inner-cont">
            <form
            //   action="https://sendmail.w3layouts.com/submitForm"
              method="post"
              className="signin-form"
            >
              <h3>Submit your query</h3>

              <div className="form-input">
                <label htmlFor="w3lName">Name</label>
                <input
                  type="text"
                  name="w3lName"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-input">
                <label htmlFor="w3lSubject">Subject</label>
                <input
                  type="text"
                  name="w3lSubject"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-input">
                <label htmlFor="w3lSender">Email</label>
                <input
                  type="email"
                  name="w3lSender"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-input">
                <label htmlFor="w3lMessage">Message</label>
                <textarea
                  name="w3lMessage"
                  placeholder="Type your query here"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
