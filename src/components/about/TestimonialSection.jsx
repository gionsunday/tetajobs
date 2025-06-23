import React from 'react';
import {getImagePath} from '../../utils/getImagePath';

const testimonials = [
  {
    message:
      'TetaJobs made my job search incredibly smooth. Within days, I had multiple interviews lined up with reputable companies. The platform is easy to use and the listings👌',
    image: getImagePath("e1.jpg"),
    name: 'William',
    role: 'Co-founder of Company',
  },
  {
    message:
      'I’ve used several job platforms, but none compares to the support and quality of TetaJobs. I was able to find a full-time role that matched my exact skills and expectations',
    image: getImagePath("e2.jpg"),
    name: 'Robert',
    role: 'Co-founder of Company',
  },
  {
    message:
      'Thanks to TetaJobs, I transitioned into a new industry with confidence. The guidance, resources, and employer connections were outstanding throughout the process.',
    image: getImagePath("e3.jpg"),
    name: 'Michael',
    role: 'Co-founder of Company',
  },
];

const TestimonialSection = () => {
  return (
    <section className="w3l-customers-4">
      <div id="customers4-block">
        <h3 className="heading">Testimonials</h3>
        <div className="wrapper">
          <div id="mixedSlider">
            <div className="MS-content">
              {testimonials.map((item, index) => (
                <div className="item" key={index}>
                  <p>{item.message}</p>
                  <div className="testi-grid">
                    <div className="imgTitle">
                      <img
                        src={item.image}
                        className="img-responsive"
                        alt={item.name}
                      />
                    </div>
                    <div className="testi-info">
                      <h6>{item.name}</h6>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
