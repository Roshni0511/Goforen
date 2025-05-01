import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import FooterTop from "../component/FooterTop";

export default function Blog() {
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
            <h2 className="breadcrumb__title">Blog</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              
              <li className="breadcrumb-item">Blog</li>
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
        <section className="blog pt-120 ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-post-wrapper">
                            <article className="single-post-item">
                                <div className="post-thumbnail-wrapper">
                                    <a href="/BlogDetails"><img src="assets/img/blog/post_02.jpg" alt="" /></a>
                                </div>
                                <div className="post-content-wrapper">
                                    <ul className="post-meta ul_li">
                                        <li><span><i className="far fa-user"></i><span className="author vcard">Admin</span></span></li>
                                        <li><a href="#!"><i className="far fa-comments"></i> Comments (3)</a></li>
                                        <li><span className="posted-on"><i className="far fa-calendar-check"></i> <a href="#!">August 4, 2023</a></span></li>
                                    </ul>
                                    <h3 className="post-title border_effect"><a href="/BlogDetails">Elevating your visa application navigating complexity with confidence</a></h3>
                                    <div className="post-excerpt">
                                        <p>Navigating Complexity with Confidence" is a concise and impactful title that captures the essence of how visa consultants can assist in making the intricate visa process more manageable ...</p>
                                    </div>
                                    <div className="post-read-more">
                                        <a className="thm-btn" href="/BlogDetails">Read More</a>
                                    </div>
                                </div>
                            </article>
                            <article className="single-post-item">
                                <div className="post-thumbnail-wrapper">
                                    <a href="/BlogDetails"><img src="assets/img/blog/post_01.jpg" alt="" /></a>
                                </div>
                                <div className="post-content-wrapper">
                                    <ul className="post-meta ul_li">
                                        <li><span><i className="far fa-user"></i><span className="author vcard">Admin</span></span></li>
                                        <li><a href="#!"><i className="far fa-comments"></i> Comments (3)</a></li>
                                        <li><span className="posted-on"><i className="far fa-calendar-check"></i> <a href="#!">August 4, 2023</a></span></li>
                                    </ul>
                                    <h3 className="post-title border_effect"><a href="/BlogDetails">Expert Consulting for Smooth Approval and Confident Navigation</a></h3>
                                    <div className="post-excerpt">
                                        <p>Embarking on the journey of securing a visa can be a labyrinthine process, rife with complexities and uncertainties. That's where expert consulting steps in as your guiding light, illuminating...</p>
                                    </div>
                                    <div className="post-read-more">
                                        <a className="thm-btn" href="/BlogDetails">Read More</a>
                                    </div>
                                </div>
                            </article>
                            <article className="single-post-item">
                                <div className="post-thumbnail-wrapper">
                                    <a href="/BlogDetails"><img src="assets/img/blog/post_03.jpg" alt="" /></a>
                                </div>
                                <div className="post-content-wrapper">
                                    <ul className="post-meta ul_li">
                                        <li><span><i className="far fa-user"></i><span className="author vcard">Admin</span></span></li>
                                        <li><a href="#!"><i className="far fa-comments"></i> Comments (3)</a></li>
                                        <li><span className="posted-on"><i className="far fa-calendar-check"></i> <a href="#!">August 4, 2023</a></span></li>
                                    </ul>
                                    <h3 className="post-title border_effect"><a href="/BlogDetails">Your Comprehensive Guide to Successfully Pursuing Education Abroad</a></h3>
                                    <div className="post-excerpt">
                                        <p>Our guide doesn't just navigate the technicalities; it's a roadmap that instills confidence. We believe that informed decisions lead to successful outcomes, and our aim is to empower...</p>
                                    </div>
                                    <div className="post-read-more">
                                        <a className="thm-btn" href="/BlogDetails">Read More</a>
                                    </div>
                                </div>
                            </article>
                            {/* <div className="pagination_wrap pt-20">
                                <ul>
                                    <li><a href="#"><i className="far fa-long-arrow-left"></i></a></li>
                                    <li><a href="#" className="current_page">01</a></li>
                                    <li><a href="#">02</a></li>
                                    <li><a href="#"><i className="fal fa-ellipsis-h"></i></a></li>
                                    <li><a href="#">08</a></li>
                                    <li><a href="#"><i className="far fa-long-arrow-right"></i></a></li>
                                </ul>
                            </div> */}
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
                                            <a href="/BlogDetails"><img src="assets/img/blog/w_01.jpg" alt="" /></a>
                                        </div>
                                        <div className="post-content">
                                            <span className="post-date">nov 28,2023 </span>
                                            <h4 className="post-title border-effect-2"><a href="/BlogDetails">Your Comprehensive Guide to Student Visa...</a></h4>
                                        </div>
                                    </div>
                                    <div className="widget__post-item ul_li">
                                        <div className="post-thumb">
                                            <a href="/BlogDetails"><img src="assets/img/blog/w_02.jpg" alt="" /></a>
                                        </div>
                                        <div className="post-content">
                                            <span className="post-date">July 16,2023</span>
                                            <h4 className="post-title border-effect-2"><a href="/BlogDetails">How Visa Consultants Make It Happen...</a></h4>
                                        </div>
                                    </div>
                                    <div className="widget__post-item ul_li">
                                        <div className="post-thumb">
                                            <a href="/BlogDetails"><img src="assets/img/blog/w_03.jpg" alt="" /></a>
                                        </div>
                                        <div className="post-content">
                                            <span className="post-date">July 25,2023</span>
                                            <h4 className="post-title border-effect-2"><a href="/BlogDetails">Visa Consultants Make Global Moves Easier...</a></h4>
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

        <FooterTop />
      <Footer />
    </div>
  )
}
