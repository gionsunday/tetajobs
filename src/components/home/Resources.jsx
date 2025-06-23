import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../../utils/getImagePath';

const Resources = () => {
    return (
        <div className="w3l-content-photo-5">
            <div className="content">
                <div className="wrapper">
                    <div className="d-grid">
                        <div className="content-left">
                            <h3>Looking for resources? Want to apply for a Job?</h3>
                            <p>
                                Whether you're taking the first step in your career or searching for your next big opportunity, we’re here to support you. Our platform offers a wide range of tools and resources—from resume tips and interview guides to real-time job listings across multiple industries. Find jobs that match your skills and apply with confidence. With thousands of employers looking for talents like you, your next opportunity is just a click away.
                            </p>
                            <Link to="/jobs">Apply Now</Link>
                        </div>
                        <div className="content-photo">
                            <Link to="#">
                                <img
                                    src={getImagePath("b5.jpg")}
                                    className="img-responsive"
                                    alt="content-photo"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
