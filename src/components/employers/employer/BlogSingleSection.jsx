import React from 'react';
import JobCard from './JobCard';
import EmployerDetailItem from './EmployerDetailItem';

const BlogSingleSection = ({ aboutEmployer, jobs, employersDetails }) => {
    return (
        <section className="w3l-blog-single">
            <div className="single blog">
                <div className="wrapper">
                    <div className="d-grid grid-colunm-2">
                        {/* Left content */}
                        <div className="single-left">
                            <div className="box-grid">
                                <div className="single-left1 mb-0-imp">
                                    <h5 className="card-title">About Company </h5>
                                    <p className="">{aboutEmployer}</p></div>
                            </div>

                            <h5 className="card-title position-margin">Open positions </h5>
                            <div className="w3l-price-2">

                                {
                                    jobs.map((job, index) => {
                                        const {imgSrc, title, location, role, type,time} = job
                                        return (
                                            <>
                                                <JobCard key={index}
                                                    imgSrc={imgSrc}
                                                    title={title}
                                                    location={location}
                                                    role={role}
                                                    type={type}
                                                    time={time}
                                                />
                                            </>
                                        )
                                    })
                                }
                              
                            </div>
                        </div>

                        {/* Right content */}
                        <div className="right-side-bar">
                            <aside className="posts single-left-inner">
                                <h5 className="card-title">Employer details</h5>
                                <EmployerDetailItem icon="fa-briefcase" title="Member since" content="October 2002" />
                                <EmployerDetailItem icon="fa-map-marker" title="Location" content="October 2002" />
                                <EmployerDetailItem icon="fa-users" title="Employees" content="30+" />
                                <EmployerDetailItem icon="fa-envelope-open" title="Email address" content="[email protected]" isLink />
                                <EmployerDetailItem icon="fa-phone" title="Contact number" content="+(21) 333 444 5566" isLink />
                                <a href="#follow" className="follow">follow</a>
                            </aside>

                            {/* <aside className="posts single-left-inner">
                <h5 className="card-title">Contact Employer</h5>
                <form action="#" method="post" className="employer-contact">
                  <input type="text" name="name" placeholder="Your name" />
                  <input type="email" name="email" placeholder="Your email" />
                  <input type="subject" name="subject" placeholder="Enter subject" />
                  <textarea placeholder="Your message"></textarea>
                  <button className="btn">Send</button>
                </form>
              </aside> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSingleSection;
