import React from 'react'
import JobDetail from '../../components/jobs/job/JobDetail'

export const Job = () => {
    return (
        <>
            <section className="w3l-job-detail-banner">
                <div className="wrapper">
                    <div className="d-grid job-grid">
                        <div className="job-title">
                            <label>Job opening</label>
                            <h3>Web Designer and Developer, Company Name</h3>
                            <ul className="info">
                                <li><span className="fa fa-map-marker"></span> London</li>
                                <li><span className="fa fa-hand-o-right"></span> Fulltime</li>
                                <li><span className="fa fa-clock-o"></span> 1 year ago</li>
                                <li><span className="fa fa-dollar"></span> $2300 - $4500/ monthly</li>
                            </ul>
                        </div>
                        <div className="job-apply">
                            <a href="#apply" className="apply"> Apply now</a>
                            <a href="#apply" className="linkedin"> <span className="fa fa-linkedin"></span> Apply with linkedin</a>
                        </div>
                    </div>
                </div>
            </section>
            <JobDetail />

        </>
    )
}
