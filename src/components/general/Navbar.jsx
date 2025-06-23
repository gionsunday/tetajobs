import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
   { label: 'Jobs', path: '/jobs' },
  {
    label: 'Resources',
    dropdownId: 'drop-2',
    links: [
     
      // { label: 'Job detail', path: '/job-single' },
      { label: 'Top Employers', path: '/top-employers' },
      // { label: 'Employers detail', path: '/team-single' },
      { label: 'Top Freelancers', path: '/top-freelancers' },
      // { label: 'Freelancer', path: '/top-freelancer/:id/:name' },
      // { label: 'Timeline', path: '/timeline' },
      { label: 'FAQs', path: '/faq' },
      // { label: 'Coming soon', path: '/coming-soon' },
      // { label: '404 - error', path: '/error' },
      // { label: 'Search results', path: '/search-results' },
      // { label: 'Email template', path: '/email-template' },
    ],
  },
  {
    label: 'Blog',
    dropdownId: 'drop-3',
    links: [
      { label: 'Blogs & Resources', path: '/blog' },
      // { label: 'Blog detail', path: '/blog-single/:id/:title' },
    ],
  },
  {
    label: 'Accounts',
    dropdownId: 'drop-4',
    links: [
      { label: 'Login profile', path: '/auth/login' },
      { label: 'Signup / New user', path: '/auth/signup' },
    ],
  },
  { label: 'Contact', path: '/contact' },
  { label: 'Job Post', path: '/pricing', className: 'jobs' },
];

const Navbar = () => {
  return (
    <div className="w3l-headers-9">
      <header>
        <div className="wrapper">
          <div className="header">
            <div>
              <h1>
                <Link to="/" className="logo">TetaJobs <span  style={{color:"#127C71"}}> HR</span> </Link>
              </h1>
            </div>
            <div className="bottom-menu-content">
              <input type="checkbox" id="nav" />
              <label htmlFor="nav" className="menu-bar"></label>
              <nav>
                <ul className="menu">
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      {item.links ? (
                        <>
                          <label htmlFor={item.dropdownId} className="toggle toogle-2">
                            {item.label} <span className="fa fa-caret-down" aria-hidden="true"></span>
                          </label>
                          <Link to="#" className="link-nav dropdown-toggle">
                            {item.label} <span className="fa fa-caret-down" aria-hidden="true"></span>
                          </Link>
                          <input type="checkbox" id={item.dropdownId} />
                          <ul className={item.dropdownId === 'drop-2' ? 'first-dropdwon' : ''}>
                            {item.links.map((subLink, subIndex) => (
                              <li key={subIndex}>
                                <Link to={subLink.path}>{subLink.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link to={item.path} className={item.className || 'link-nav'}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
