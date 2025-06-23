// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/general/Navbar';
import HomePage from './pages/Homepage';
import Footer from './components/general/Footer';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Pricing } from './pages/Pricing';
import { Blogs } from './pages/blogs/Blogs';
import { BlogSingle } from './pages/blogs/BlogSingle';
import { Jobs } from './pages/Jobs';
import { Freelancers } from './pages/freelancers/Freelancers';
// import { Freelancer } from './pages/FreelancerPage';
import { FreelancerPage } from './pages/freelancers/FreelancerPage';
import { Employers } from './pages/employers/Employers';
import { Employer } from './pages/employers/employer/Employer';
import NotFound from './pages/errors/NotFound';
import { Faqs } from './pages/Faqs';
import { Job } from './pages/jobs/Job';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-3xl">{title} Page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About  />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/job/:id/:title" element={<Job />} />
        <Route path="/top-employers" element={<Employers />} />
        <Route path="/top-employers/:id/:name" element={<Employer />} />
        <Route path="/top-freelancers" element={<Freelancers />} />
        <Route path="/top-freelancers/:id/:name" element={<FreelancerPage />} />
        <Route path="/timeline" element={<PlaceholderPage title="Timeline" />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/coming-soon" element={<PlaceholderPage title="Coming Soon" />} />
        <Route path="/error" element={<PlaceholderPage title="404 Error" />} />
        <Route path="/search-results" element={<PlaceholderPage title="Search Results" />} />
        <Route path="/email-template" element={<PlaceholderPage title="Email Template" />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog-single/:id/:title" element={<BlogSingle />} />
        <Route path="/auth/login" element={<Login  />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact  />} />
        <Route path="/pricing" element={<Pricing />} />

         {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
