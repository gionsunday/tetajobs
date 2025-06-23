import React, { useState } from "react";

const RegistrationForm = () => {
  const [isFresher, setIsFresher] = useState(true);

  const handleToggle = () => {
    setIsFresher(!isFresher);
  };

  return (
    <section className="w3l-price-2 register-block">
      <div className="price-main register-block-main">
        <div className="wrapper">
          <div className="pricing-style-w3ls">
            <div className="full text-center">
              <label
                className={`toggler ${isFresher ? "toggler--is-active" : ""}`}
                id="filt-monthly"
                onClick={() => setIsFresher(true)}
              >
                Fresher?
              </label>
              <div className="toggle" id="switcher" onClick={handleToggle}></div>
              <label
                className={`toggler ${!isFresher ? "toggler--is-active" : ""}`}
                id="filt-hourly"
                onClick={() => setIsFresher(false)}
              >
                Experienced?
              </label>
            </div>

            {isFresher ? (
              <div id="monthly">
                <div className="w3l-forms-31-right">
                  <h3>If you are a Fresher, Apply here</h3>
                  <form action="#" method="post" className="register-form">
                    <div className="form-input">
                      <label>Your Full Name</label>
                      <input type="text" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-input">
                      <label>Email Address</label>
                      <input type="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-input">
                      <label>Mobile Number</label>
                      <div className="p-relative">
                        <span className="p-absolute">91</span>
                        <input type="number" placeholder="Mobile number" required />
                      </div>
                    </div>
                    <div className="form-input">
                      <label>Your Location</label>
                      <input type="text" placeholder="Location" required />
                    </div>
                    <div className="form-input">
                      <label>Create Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Minimum 6 characters"
                        required
                      />
                    </div>
                    <div className="block">
                      <label>Upload Resume</label>
                      <button className="upload-button" type="button">
                        Upload resume
                      </button>
                      <span className="file-type">doc, docx, rtf, pdf - 2MB max</span>
                      <input type="file" />
                    </div>
                    <div>
                      <label className="check-remember container">
                        <input type="checkbox" className="form-check" />
                        <span className="checkmark"></span>
                        <p className="privacy-policy">
                          I agree to the Terms and Conditions of job.com. I have reviewed the default
                          Mailer & Communications settings.
                        </p>
                      </label>
                      <div className="clear"></div>
                    </div>
                    <button className="btn" type="submit">
                      Register now
                    </button>
                    <div className="clear"></div>
                  </form>
                </div>
              </div>
            ) : (
              <div id="hourly">
                <div className="w3l-forms-31-right">
                  <h3>If you are Experienced, Apply here</h3>
                  <form action="#" method="post" className="register-form">
                    <div className="form-input">
                      <label>Your Full Name</label>
                      <input type="text" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-input">
                      <label>Email Address</label>
                      <input type="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-input">
                      <label>Create Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Minimum 6 characters"
                        required
                      />
                    </div>
                    <div className="form-input">
                      <label>Mobile Number</label>
                      <div className="p-relative">
                        <span className="p-absolute">91</span>
                        <input type="number" placeholder="Mobile number" required />
                      </div>
                    </div>
                    <div className="form-input">
                      <label>Work Experience</label>
                      <div className="d-grid select-exp">
                        <select>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5+</option>
                        </select>
                        <p>Year(s)</p>
                        <select>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                        </select>
                        <p>Month(s)</p>
                      </div>
                    </div>
                    <div className="block">
                      <label>Upload Resume</label>
                      <button className="upload-button" type="button">
                        Upload resume
                      </button>
                      <span className="file-type">doc, docx, rtf, pdf - 2MB max</span>
                      <input type="file" />
                    </div>
                    <div>
                      <label className="check-remember container">
                        <input type="checkbox" className="form-check" />
                        <span className="checkmark"></span>
                        <p className="privacy-policy">
                          I agree to the Terms and Conditions of job.com. I have reviewed the default
                          Mailer & Communications settings.
                        </p>
                      </label>
                      <div className="clear"></div>
                    </div>
                    <button className="btn" type="submit">
                      Register now
                    </button>
                    <div className="clear"></div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
