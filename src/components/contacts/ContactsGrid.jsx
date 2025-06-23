import React, { useState } from 'react';

const locations = [
  {
    id: 'tab1',
    _id: '1',
    label: 'New York',
    address: '#302, 5th Floor, ALHK-2247 ek, Settlers Lane, New York.',
    emails: ['support@tetajobs.com', 'admin@tetajobs.com'],
    phones: ['1(21) 224-016-8765', '1(21) 224-016-8764']
  },
  {
    id: 'tab2',
    _id: '2',
    label: 'Dubai',
    address: '#302, 5th Floor, ALHK-2247 ek, Al Sharafi building, Dubai.',
    emails: ['support@tetajobs.com', 'admin@tetajobs.com'],
    phones: ['1(12) 422-610-4678', '1(21) 224-016-8765']
  },
  {
    id: 'tab3',
    _id: '3',
    label: 'Saudi Arabia',
    address: '#411, 3rd Floor, SALK-2247 ek, Al Sharafi building, Saudi Arabia.',
    emails: ['support@tetajobs.com', 'admin@tetajobs.com'],
    phones: ['1(21) 224-016-8765', '1(21) 224-016-8764']
  },
  {
    id: 'tab4',
    _id: '4',
    label: 'Russia',
    address: '#248, 2nd Floor, RSSLK-2247 ek, Al Sharafi building, Russia.',
    emails: ['support@tetajobs.com', 'admin@tetajobs.com'],
    phones: ['1(12) 422-610-4678', '1(21) 224-016-8765']
  }
];

const ContactTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const activeContent = locations.find((loc) => loc.id === activeTab);
  console.log(activeContent)

  return (
    <div className="w3l-contacts-5">
      <div className="w3l-contacts-5-grid-main">
        <div className="w3l-contacts-5-grid">
          <div className="contacts-sub-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          <div className="map-content-5">
            {locations.map((loc) => (
              <React.Fragment key={loc.id}>
                <input
                  id={loc.id}
                  type="radio"
                  name="tabs"
                  checked={activeTab === loc.id}
                  onChange={() => setActiveTab(loc.id)}
                />
                <label className="tabtle" htmlFor={loc.id}>
                  {loc.label}
                </label>
              </React.Fragment>
            ))}

            <section id={"content"+activeContent._id} className="tab-content">
              <div className="d-grid grid-col-4">
                <div className="service-col-4 contact">
                  <h6>Address</h6>
                  <p>{activeContent.address}</p>
                </div>
                <div className="service-col-4 contact">
                  <h6>Email</h6>
                  {activeContent.emails.map((email, index) => (
                    <a key={index} href="#" className="link1">
                      {email}
                    </a>
                  ))}
                </div>
                <div className="service-col-4 contact">
                  <h6>Phone</h6>
                  {activeContent.phones.map((phone, index) => (
                    <a key={index} href={`tel:${phone}`} className="link1">
                      {phone}
                    </a>
                  ))}
                </div>
                <div className="service-col-4">
                  <a href="#" className="btn button-style">
                    Contact us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTabs;
