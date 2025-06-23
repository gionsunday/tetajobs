import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../../utils/getImagePath';

const AppSection = () => {
    return (
        <section className="w3l-app-launch-4">
            <div id="app4-block">
                <div className="wrapper">
                    <div className="d-grid parent-flex">
                        <div className="app4-left-text">
                            <h6>Easy way to use mobile app</h6>
                            <h4 className="hny-title">Download our mobile apps today</h4>
                            <p>
                                Job hunting just got easier — anytime, anywhere. With our mobile app, you can search for jobs, apply on the go, and get instant updates on new opportunities. Whether you're commuting, taking a break, or relaxing at home, the next step in your career is always at your fingertips. Download the app today and take control of your job search.
                            </p>
                            <div className="d-flex app-4-connection">
                                <div className="newsletter">
                                    <label>Enter email address to get download link</label>
                                    <form action="#" method="GET" className="d-flex wrap-align">
                                        <input type="email" placeholder="Enter email" required />
                                        <button type="submit">Get link</button>
                                    </form>
                                </div>
                                <div className="app-4-icon">
                                    <ul>
                                        <li>
                                            <Link to="#" title="Apple" className="app-icon apple-vv">
                                                <span className="fa fa-apple" aria-hidden="true"></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" title="Google play" className="app-icon play-vv">
                                                <span className="fa fa-play" aria-hidden="true"></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" title="Microsoft" className="app-icon windows-vv">
                                                <span className="fa fa-windows" aria-hidden="true"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="app4-right-image">
                            <img src={getImagePath("mobile.jpg")} className="img-responsive" alt="App Device" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppSection;
