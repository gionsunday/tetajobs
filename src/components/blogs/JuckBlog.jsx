import React from 'react';
import { getImagePath } from '../../utils/getImagePath';
import { useParams } from 'react-router-dom';
import blogPosts from '../../data/data';

const JunkBlog = () => {
  const { id, } = useParams();
  console.log(id);
  // Find the blog post by ID
  const post = blogPosts.find(post => post.id === parseInt(id, 10));
  console.log(post);
  const { date, title, description, image, tag, quote, conclusion, contents } = post || {};
  console.log(date, description, title, image, tag, quote, conclusion, contents);

  return (
    <section className="w3l-text-11">
      <div className="text11">
        <h3 className="heading">Blog detail</h3>
        <div className="wrapper">
          <div className="text11-content">
            <a href="#interview" className="tag">{tag}</a>
            <h6>{date}</h6>
            <h4 className="heading-no-margin">{title}</h4>
            <img src={image} className="img-responsive margin-top" alt="Interview outfit" />
            <div>
           
              {
                contents.map((content, index) => (

                  <div key={index}>
                    <div>
                      <h4 className="heading">{content.title}</h4>
                      {
                        content.bodyText.map((text, idx) => {
                          return (
                            <div className="key" key={idx}>
                              <h4 key={idx} className="heading">{text.title}</h4>

                              {
                                text.paragraph.map((paragraph, pIdx) => {
                                  return (
                                    <p key={pIdx}>✔ {paragraph}</p>
                                  );

                                }
                                )
                              }
                            </div>
                          )



                        })
                      }

                    </div>
                    {/* {
                      conclusion.map((conclusionText, cIdx) => {
                        return (
                          <>
                            <h4>Final Thought</h4>
                            <p key={cIdx} className="conclusion">{conclusionText}</p>
                          </>
                        );
                      })
                    } */}
                  </div>
                ))
              }

              {/* <h4 className="heading">{contents[0].title}</h4>
              <p>
                Dressing appropriately for an interview sets the tone for a strong first impression. Always aim for clean, neat, and professional attire that matches the company culture. When unsure, it's better to be slightly overdressed than underdressed.
              </p>
              <p>
                Consider the industry standard—corporate roles may expect suits, while creative fields may allow for more relaxed styles. No matter the position, ensure your outfit is well-fitted, free of wrinkles, and makes you feel confident.
              </p>

              <h4 className="heading">Choosing your interview outfit: find out what is appropriate</h4>
              <ul className="blog-list">
                <li>Research the company's dress code before the interview day.</li>
                <li>Choose neutral colors and avoid flashy patterns or excessive accessories.</li>
                <li>Ensure your shoes are clean and match the tone of your outfit.</li>
                <li>Grooming and hygiene should be impeccable—clean nails, neat hair, and fresh breath.</li>
              </ul>

              <h5 className="quote">
                "Confidence starts with being comfortable in your own skin—and your outfit."
              </h5>

              <p>
                When you dress with intention, it shows in your posture and energy. The right attire not only meets expectations but boosts your confidence. Always plan ahead and try on your outfit a day before to make necessary adjustments.
              </p> */}

                 {
                      conclusion.map((conclusionText, cIdx) => {
                        return (
                          <>
                            <h4>Final Thought</h4>
                            <p key={cIdx} className="conclusion">{conclusionText}</p>
                          </>
                        );
                      })
                    }
            </div>
            <div className="social-share-blog">
              <h4 className="heading-no-margin">Share post :</h4>
              <ul className="social">
                <li><a href="#facebook"><span className="fa fa-facebook-square"></span></a></li>
                <li><a href="#twitter"><span className="fa fa-twitter-square"></span></a></li>
                <li><a href="#linkedin"><span className="fa fa-linkedin-square"></span></a></li>
              </ul>
            </div>

            <div className="leave-comment-form" id="comment">
              <h3 className="aside-title">Leave your comment</h3>
              <form action="#" method="post">
                <div className="input-grids">
                  <div className="form-group">
                    <input type="text" name="Name" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="Email" className="form-control" placeholder="Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="Message" className="form-control" placeholder="Your reply..." required></textarea>
                </div>
                <div className="submit text-right">
                  <a href="#" className="actionbg">Post comment</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JunkBlog;
