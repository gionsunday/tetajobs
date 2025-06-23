// JobDetail.jsx
import React from 'react';
import JobInfoItem from './JobInfoItem';
import SectionList from './SectionList';

// jobData.js
const jobData = {
    info: [
        { title: 'Category', value: 'Web Designer' },
        { title: 'Work Shift', value: 'Day Shift' },
        { title: 'Posted on', value: 'Oct 7, 2019' },
        { title: 'No. of openings', value: '2 openings' },
        { title: 'Job level', value: 'Executive' },
        { title: 'Job experience', value: '3 years of experience' }
    ],
    description: [
        "We're seeking a skilled Web Designer to join our creative team. You'll work on designing engaging and user-friendly web interfaces for a variety of clients. You should have a solid understanding of design principles, typography, and responsive design.",
        "You will collaborate closely with developers and project managers to bring concepts to life. The ideal candidate is both creative and detail-oriented, with a passion for clean and modern UI/UX."
    ],
    responsibilities: [
        'Design intuitive and aesthetically pleasing website layouts.',
        'Work with the development team to ensure seamless integration.',
        'Create wireframes, mockups, and visual prototypes based on project requirements.'
    ],
    qualifications: [
        "Bachelor’s degree in Design, Computer Science, or related field",
        "2-3 years of proven web design experience",
        "Strong communication and collaboration skills",
        "Deep understanding of responsive and mobile-first design",
        "Time management and ability to meet deadlines",
        "Experience with design tools like Figma, Adobe XD, or Sketch"
    ],
    skills: ['Designing', 'Management', 'Coding'],
    tags: ['#Designing', '#Coding', '#.net', '#Management', '#Java'],
    deadline: 'December 31, 2019'
};




const JobDetail = () => {
    return (
        <section className="w3l-blog-single no-padding">
            <div className="single blog">
                <div className="wrapper">
                    <div className="d-grid grid-colunm-2">
                        <div className="single-left">
                            <div className="single-left-inner">
                                <h5 className="card-title">Job information </h5>
                                <div className="d-grid main-grid">
                                    {jobData.info.map((item, index) => (
                                        <JobInfoItem key={index} title={item.title} value={item.value} />
                                    ))}
                                </div>
                            </div>

                            <div className="box-grid">
                                <div className="single-left1">
                                    <h5 className="card-title">Job description </h5>
                                    {jobData.description.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                </div>

                                <SectionList title="Responsibilities:" items={jobData.responsibilities} />
                                <SectionList title="What we are looking for:" items={jobData.qualifications} />

                                <div className="social-share">
                                    <h5 className="card-title">Share this job </h5>
                                    <div className="social-icons-section">
                                        <a className="facebook" href="#team">
                                            <span className="fa fa-facebook"></span>
                                        </a>
                                        <a className="twitter" href="#team">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                        <a className="linkedin" href="#team">
                                            <span className="fa fa-linkedin"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="single-left">
                                <div className="single-left-inner">
                                    <h5 className="card-title">Job Skills </h5>
                                    {jobData.skills.map((skill, i) => (
                                        <a key={i} href="#design"> {skill} </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="right-side-bar">
                            <div className="app-deadline">
                                <div className="short-detail-icon">
                                    <span className="fa fa-clock-o"></span>
                                </div>
                                <div className="short-detail-meta">
                                    <small>Deadline</small>
                                    <strong>{jobData.deadline}</strong>
                                </div>
                                <span className="ab-iocn">
                                    <span className="fa fa-clock-o"></span>
                                </span>
                            </div>
                            <div className="save">
                                <a href="#save">Save this job</a>
                            </div>
                            <div className="email">
                                <a href="#email">Email this job</a>
                            </div>


                            <aside
                                onClick={() => {
                                    window.open("https://gion-nine.vercel.app", "_blank", "noopener,noreferrer");
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <h5 className="card-title">Advertisement</h5>
                                <video
                                    width="100%"
                                    height="200"
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    preload="metadata"
                                >
                                    <source src="/react.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </aside>
                            <aside 
                             onClick={() => {
                                    window.open("https://gion-nine.vercel.app", "_blank", "noopener,noreferrer");
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <h5 className="card-title">Advertisement</h5>
                                <video
                                    width="100%"
                                    height="200"
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    preload="metadata"
                                >
                                    <source src="/ad2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </aside>
                            {/* <aside>
                                <h5 className="card-title">Advertisement</h5>
                                <div className="video-container">
                                    <iframe
                                        width="100%"
                                        height="200"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        title="Advertisement Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </aside> */}
                            <aside className="posts single-left-inner">
                                <h5 className="card-title">Job tags</h5>
                                {jobData.tags.map((tag, i) => (
                                    <a key={i} href="#design"> {tag} </a>
                                ))}
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default JobDetail;
