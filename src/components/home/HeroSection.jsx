// src/components/HeroSection.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeroSection = () => {
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [errorcheck, setErrocheck] = useState(false)

  const navigate = useNavigate()
  const handleSubmit = () => {
    if (jobTitle.trim() === "") {
      setErrocheck(true);
      return;
    }

    const params = new URLSearchParams();

    if (jobTitle.trim()) params.append("jobtitle", jobTitle.trim());
    if (category) params.append("category", category);
    if (location) params.append("location", location);

    navigate(`/jobs?${params.toString()}`);
  };
  return (
    <section className="w3l-cover-3">
      <div className="cover top-bottom">
        <div className="wrapper">
          <div className="middle-section text-center">
            <div className="section-width">
              <h2>Starting from your Dream Jobs</h2>
              <p>Seamlessly connect with top employers and discover the latest career opportunities</p>

              <div className="most-searches">
                <h4>Most Searches:</h4>
                <ul>
                  <li>
                    <Link to={`/jobs?category=${"Designing".toLowerCase()}`} >
                      Designing
                    </Link>
                  </li>

                  <li>
                    <Link to={`/jobs?category=${"Software developer".toLowerCase()}`} >
                      Software developer
                    </Link>
                  </li>

                  <li>
                    <Link to={`/jobs?category=${"Customer Service".toLowerCase()}`} >
                      Customer Service
                    </Link>
                  </li>
                </ul>
              </div>

              <form action="#" className="w3l-cover-3-gd">
                <input type="search" name="jobtitle" onChange={(e) => setJobTitle(e.target.value)} placeholder="Search keyword.." required />

                <span className="input-group-btn">
                  <select value={category} onChange={(e) => setCategory(e.target.value)} name="category" required>
                    <option value="">Select Category</option> {/* <- empty value */}
                    <option value="Designing">Designing</option>
                    <option value="Development">Development</option>
                    <option value="Software developer">Software developer</option>
                    <option value=".net developer">.net developer</option>
                    <option value="Customer service">Customer service</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="IT (CSE)">IT (CSE)</option>
                  </select>
                </span>

                <span className="input-group-btn">

                  <select value={location} onChange={(e) => setLocation(e.target.value)} name="location" required>
                    <option value="">Select Location</option> {/* <- empty value */}
                    <option value="Nigeria">Nigeria</option>
                    <option value="USA">USA</option>
                    <option value="Australia">Australia</option>
                    <option value="London">London</option>
                    <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>

                    <option value="America">America</option>

                  </select>
                  {/* <select className="btn btn-default" name="location" required
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option defaultValue="">Select Location</option>
                    {/* <option></option> *
                    <option>Australia</option>
                    <option>London</option>
                    <option>India</option>
                    <option>Bangladesh</option>
                    <option>Saudi Arabia</option>
                    <option>America</option>
                    <option>Srilanka</option>
                  </select> */}
                </span>

                <button onClick={handleSubmit} >Search</button>


              </form>
              {errorcheck ? (
                <small
                  style={{
                    fontSize: "1.025rem",
                    textAlign: "left",
                    color: "crimson",
                  }}
                >
                  Please enter at least a job title
                </small>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
