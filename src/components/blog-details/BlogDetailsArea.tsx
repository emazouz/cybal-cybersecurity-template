
'use client'

import React from 'react';

const BlogDetailsArea = () => {
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_blog_details">
                <img src="assets/img/blog/blog_details.jpg" className="img-fluid sbd" alt="image" />
                  <span><img src="assets/img/blog/b_icon1.png" alt="" /> William Smith</span>
                  <span><img src="assets/img/blog/b_icon2.png" alt="" /> 30 April, 2024</span>
                  <span><img src="assets/img/blog/b_icon3.png" alt="" /> 05 min read</span>
                  <h2>Digital solution for your business problem so that you can improve in business</h2>
                  <p>The difference between short-form and long-form videos is simple: short-form videos are short, and long-form videos are long. To be more specific, short-form videos are typically under 10 minutes long, while long-form videos exceed that 10-minute mark. You’ll see a lot of short-form videos on social media. Target, for example, uses this video format on Instagram to advertise its products.</p>
                  <p>You'll typically see longer videos on a business's website or YouTube. Video and podcast hosting provider, Wistia, uses long-form video to educate its audience about the cost of video production.</p>
              </div>
              <div className="single_ssd_info">
                <h4>It includes brainstorming</h4>
                <p>Content is king in the digital world. Agencies produce high-quality content, including blog posts, videos, infographics, and more, to engage and educate the target audience. Content marketing builds trust and authority for the brand. Agencies manage and grow a brand's presence on social media platforms such as Facebook, Twitter, LinkedIn, and Instagram.</p>
              </div>
              <img src="assets/img/blog/blog_details2.jpg" className="img-fluid" alt="image" />
                <div className="comment_form">
                  <h3 className="blog_head_title">Add a Comment</h3>
                  <div className="contact comment-box">
                    <form id="contact-form" onClick={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <input type="text" name="name" className="form-control" id="first-name" placeholder="Name" required />
                        </div>
                        <div className="form-group col-md-6">
                          <input type="email" name="email" className="form-control" id="first-email" placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-12">
                          <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group col-md-12">
                          <textarea rows={6} name="message" className="form-control" id="description" placeholder="Your Message" required ></textarea>
                        </div>
                        <div className="col-md-12">
                          <div className="actions">
                            <button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn_one" title="Submit Your Message!">Submit Comment</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;