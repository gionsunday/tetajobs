// NotFound.jsx
import React from 'react';

const NotFound = () => {
    return (

        <section className="w3l-error-page">
            <div className="covers-main">
                <div className="wrapper">
                    <div className="d-gird">
                        <div className="left-grid-widget text-center">
                            <h1>
                                <a href="index.html" className="logo">TetaJobs <span style={{color:"var(--theme-color)"}}> HR</span></a>
                            </h1>
                            <p className="page-detail">Page not found</p>
                        </div>
                        <div className="main-cover">
                            <h4 className="cover-para">404</h4>
                            <p className="form-text">Oops... Looks like you've hit the wrong path.  </p>
                        </div>
                        <a href="/" className="back-button">Back to Home</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
