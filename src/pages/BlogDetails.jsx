import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'

export default function BlogDetails() {
       // data-background img start
          const [background, setBackground] = useState("");
        
          useEffect(() => {
            const backgroundUrl = "assets/img/bg/breadcrumb_bg.jpg";
            setBackground(backgroundUrl);
          }, []);
          // data-background img end
           // data-background img start
           const [background1, setBackground1] = useState("");
        
           useEffect(() => {
             const backgroundUrl1 = "assets/img/bg/b_bg.jpg";
             setBackground1(backgroundUrl1);
           }, []);
           // data-background img end
  return (
    <div>
      <Navbar />
           {/* <!-- breadcrumb start --> */}
           <section
        className="breadcrumb pos-rel bg_img"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title">Blog Details</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              
              <li className="breadcrumb-item">Blog Details</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb__circle">
          <span
            className="big"
            data-parallax='{"y" : 100, "scale" : 0.1}'
          ></span>
          <span
            className="small"
            data-parallax='{"y" : 100, "scale" : 0.1}'
          ></span>
        </div>
        <div className="breadcrumb__shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
              <img src="assets/img/shape/br_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2">
            <div className="shape-inner" data-parallax='{"x":50,"y":-90}'>
              <img src="assets/img/shape/br_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- blog start --> */}
        <section className="blog pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-post-wrapper">
                            <article className="post-details">
                                <div className="post-thumb">
                                    <img src="/assets/pic/bd1.webp" alt="" />
                                </div>
                                <ul className="post-meta ul_li">
                                    <li><span><i className="far fa-user"></i><span className="author vcard">Admin</span></span></li>
                                    <li><a href="#!"><i className="far fa-comments"></i> Comments (3)</a></li>
                                    <li><span className="posted-on"><i className="far fa-calendar-check"></i> <a href="#!">August 4, 2023</a></span></li>
                                </ul>
                                <h2>Elevating your visa application navigating complexity with confidence</h2>
                                <p>This phrase suggests that the act of seeking professional help, such as from a visa consultant or agency, can take your visa application to a higher level. It implies that the assistance provided will enhance the overall quality of your application. The term  acknowledges that the visa application process can be intricate</p>
                                <p>This phrase underscores the idea that seeking professional help instills a sense of assurance in the applicant. It implies that having experts guide you through the process can boost your confidence in the success of your application.</p>
                                <blockquote>
                                    <p>"Creativity is allowing yourself to make mistakes. You only have to do a few things right in your life so long as you don’t do too many things."</p>
                                    <span>Cameron Williamson</span>
                                    <div className="quote"><img src="assets/img/icon/quote.png" alt="" /></div>
                                </blockquote>
                                <p>The phrase "with confidence" signifies that seeking expert guidance can provide you with a sense of assurance and self-assuredness throughout the application journey. It highlights that you're not alone in facing the challenges of the application process.It positions expert guidance as a powerful tool that can significantly impact.</p>
                                <p>Visa consultants provide continuous support, helping you navigate any additional requests from immigration authorities and addressing any concerns that may arise during the processing period.</p>
                                <div className="row align-items-center mt-none-20 mb-30">
                                    <div className="col-lg-6 col-md-6 mt-30">
                                        <img src="/assets/pic/bd2.png" alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-30">
                                        <ul className="post-info-list list-unstyled">
                                            <li><img src="assets/img/icon/arrow_right2.svg" alt="" />Elevating Your Visa Application</li>
                                            <li><img src="assets/img/icon/arrow_right2.svg" alt="" />Navigating Complexity</li>
                                            <li><img src="assets/img/icon/arrow_right2.svg" alt="" />With Confidence</li>
                                            <li><img src="assets/img/icon/arrow_right2.svg" alt="" />The Power of  Assistance</li>
                                            <li><img src="assets/img/icon/arrow_right2.svg" alt="" />A Multifaceted Approach</li>
                                            <li><img src="assets/img/icon/arrow_right2.svg" alt="" />Achieving Success</li>
                                        </ul>
                                    </div>
                                </div>
                                <h3>The Visa Consulting Process Unveiled Initial Consultation</h3>
                                <p>Visa consulting is an invaluable resource for anyone navigating the complexities of international travel, work, or family reunification. By enlisting the expertise of a visa consultant, you can save time, reduce stress, and increase your chances of a successful visa application. Make sure to do your due diligence when choosing a consultant, and you'll be well on your way to realizing your global aspirations.</p>
                            </article>
                            <div className="post-footer mt-10 mb-40 ul_li_between">
                                <div className="post-tags ul_li mt-20">
                                    <h5 className="tag-title">Tags:</h5>
                                    <span className="tags-links">
                                        <a href="#!" rel="tag">Family</a>
                                        <a href="#!" rel="tag">Citizenship</a>
                                        <a href="#!" rel="tag">Immigration</a>
                                    </span>
                                </div>
                                <div className="social-share ul_li mt-20">
                                    <h5 className="title">Share:</h5>
                                        <ul className="post-share ul_li">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
        
                                            <li>
                                                <a href="#!">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
        
                                            <li>
                                                <a href="#!">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
        
                                            <li>
                                                <a href="#!">
                                                    <i className="fab fa-pinterest"></i>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="post-comments">
                                        <h2 className="title mb-25">03 Comments</h2>
                                        <div className="latest__comments">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="/assets/pic/bd3.png" alt="" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h5>Matt Gartner</h5>
                                                                <span>19th May 2023</span>
                                                                <a className="reply" href="#0">Reply</a>
                                                            </div>
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the leap into electronic typesetting, remaining
                                                                essentiallyuncha opularisedthe with the release of Letrasetsheets containingthe leap electrtypesetting remaining
                                                                majority have.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="children">
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="/assets/pic/bd3.png" alt="" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h5>Dan Whiting</h5>
                                                                <span>19th May 2023</span>
                                                                <a className="reply" href="#0">Reply</a>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                                tempor incididunt
                                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                                exercitation.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="/assets/pic/bd3.png" alt="" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h5>Carlin Wong</h5>
                                                                <span>19th May 2023</span>
                                                                <a className="reply" href="#0">Reply</a>
                                                            </div>
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the leap into electronic typesetting, remaining
                                                                essentiallyuncha opularisedthe with the release of Letrasetsheets containingthe leap electrtypesetting remaining
                                                                majority have.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="comments-form">
                                        <div className="comment-heading">
                                            <h2 className="title">Post Comments</h2>
                                            <p>Your email address will not be published. Required fields are marked * </p>
                                        </div>
                                        <form className="xb-item--form contact-from" action="#!">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="xb-item--field">
                                                        <span><img src="assets/img/icon/c_user.svg" alt="" /></span>
                                                        <input type="text" placeholder="Goladria Gomez" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="xb-item--field">
                                                        <span><img src="assets/img/icon/c_mail.svg" alt="" /></span>
                                                        <input type="text" placeholder="e.visa@services.com" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="xb-item--field">
                                                        <span><img src="assets/img/icon/c_message.svg" alt="" /></span>
                                                        <textarea name="message" id="message" cols="30" rows="10"
                                                                    placeholder="Write Your Message..."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="thm-btn" type="submit">Post comment</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-sidebar">
                            <div className="widget">
                                <h3 className="widget-title">Search</h3>
                                <form className="widget__search" action="#">
                                    <input type="text" placeholder="Search your keyword" />
                                    <button><img src="assets/img/icon/search.svg" alt="" /></button>
                                </form>
                            </div>
                            <div className="widget">
                                <h3 className="widget-title">Related Posts</h3>
                                <div className="widget__post">
                                    <div className="widget__post-item ul_li">
                                        <div className="post-thumb">
                                            <a href="blog-single.html"><img src="/assets/pic/blog4.webp" alt="" /></a>
                                        </div>
                                        <div className="post-content">
                                            <span className="post-date">nov 28,2023 </span>
                                            <h4 className="post-title border-effect-2"><a href="blog-single.html">Your Comprehensive Guide to Student Visa...</a></h4>
                                        </div>
                                    </div>
                                    <div className="widget__post-item ul_li">
                                        <div className="post-thumb">
                                            <a href="blog-single.html"><img src="/assets/pic/blog5.webp" alt="" /></a>
                                        </div>
                                        <div className="post-content">
                                            <span className="post-date">July 16,2023</span>
                                            <h4 className="post-title border-effect-2"><a href="blog-single.html">How Visa Consultants Make It Happen...</a></h4>
                                        </div>
                                    </div>
                                    <div className="widget__post-item ul_li">
                                        <div className="post-thumb">
                                            <a href="blog-single.html"><img src="/assets/pic/blog6.jpg" alt="" /></a>
                                        </div>
                                        <div className="post-content">
                                            <span className="post-date">July 25,2023</span>
                                            <h4 className="post-title border-effect-2"><a href="blog-single.html">Visa Consultants Make Global Moves Easier...</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget">
                                <h3 className="widget-title">Categories</h3>
                                <ul className="widget__category list-unstyled">
                                    <li><a href="#!"><i className="far fa-arrow-up"></i> Business visa</a></li>
                                    <li><a href="#!"><i className="far fa-arrow-up"></i> Tourist visa</a></li>
                                    <li><a href="#!"><i className="far fa-arrow-up"></i> Permanent Residency</a></li>
                                    <li><a href="#!"><i className="far fa-arrow-up"></i> Visa documents</a></li>
                                    <li><a href="#!"><i className="far fa-arrow-up"></i> Visa quotas</a></li>
                                    <li><a href="#!"><i className="far fa-arrow-up"></i> Work visas</a></li>
                               </ul>
                            </div>
                            <div className="widget">
                                <h3 className="widget-title">Tags</h3>
                                <div className="tagcloud">
                                    <a href="#!">Citizenship</a>
                                    <a href="#!">Family</a>
                                    <a href="#!">Immigration</a>
                                    <a href="#!">Traveling</a>
                                    <a href="#!">Government</a>
                                    <a href="#!">Visa</a>
                                    <a href="#!">Visa Process</a>
                                    <a href="#!">Abroad</a>
                                    <a href="#!">Visa</a>
                                </div>
                            </div>
                            <div className="widget widget-banner text-center bg_img" style={{ backgroundImage: `url(${background1})` }}>
                                <img className="mb-40" src="assets/img/icon/b_icon.png" alt="" />
                                <h4>Assured Approval – <br/> Guaranteed</h4>
                                <a className="thm-btn" href="#!">Get in Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- blog end --> */}
      <Footer />
    </div>
  )
}
