import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
    {
        iconClass: 'fa-user-plus',
        title: 'Register account',
        description: 'Create a free account in just a few steps. Gain access to a wide range of job listings, personalized alerts, and essential tools to kick-start your job search.',
    },
    {
        iconClass: 'fa-user',
        title: 'Update profile',
        description: 'Complete your profile with your skills, experience, and interests. A well-updated profile increases your visibility and helps employers find you faster.',
    },
    {
        iconClass: 'fa-graduation-cap',
        title: 'Search dream Job',
        description: 'Browse thousands of verified job listings across various industries and locations. Use filters to narrow down your search and find opportunities that match your career goals.',
    },
    {
        iconClass: 'fa-paper-plane',
        title: 'Apply for Job',
        description: 'Found the right fit? Submit your application with a single click. Track your application status and communicate directly with potential employers—all in one place.',
    },
];

const HowItWorksStep = ({ iconClass, title, description, posi }) => (
    <div className="features4-grid">
        <div className={`${"icon" + (posi + 1)} icon${iconClass.split('-')[1]}`}>
            <span className={`fa text-center ${iconClass}`}></span>
        </div>
        <h5>
            <Link to="#">{title}</Link>
        </h5>
        <p>{description}</p>
    </div>
);

const HowItWorksSection = () => {
    return (
        <section className="w3l-features-4">
            <div id="features4-block">
                <h3 className="heading"> How It Works</h3>
                <div className="wrapper">
                    <div className="features4-grids d-grid">
                        {steps.map((step, index) => (
                            <HowItWorksStep key={index} {...step} posi={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
