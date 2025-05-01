import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Investorvisa() {
  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "assets/img/bg/breadcrumb_bg.jpg";
    setBackground(backgroundUrl);
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
            <h2 className="breadcrumb__title">Investor Visa</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/Visa-services">Visa Services</a>
              </li>
              <li className="breadcrumb-item">Investor Visa</li>
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
      <section class="blog pt-120 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog-post-wrapper">
                <article class="post-details">
                  <blockquote>
                    <p>
                    Investor Visas allow you to invest in an overseas country where you can settle permanently. The minimum amount of investment varies from country to country. Visas are issued to businessmen and self employed people who have sufficient funds.
                    </p>

                    <div class="quote">
                      <img src="assets/img/icon/quote.png" alt="" />
                    </div>
                  </blockquote>
                  <div class="post-thumb">
                    <img src="/assets/pic/7-image.jpg" alt="" />
                  </div>

                  <div class="sec-title sec-title--big style-2 mb-20">
                  <span class="sec-title--sub">
                      <img src="assets/img/icon/h_star.png" alt="" />
                      The 50 Residency by Investment Programs
                      <img src="assets/img/icon/h_star.png" alt="" />
                    </span>
                    <p>
                    There are 50 countries with even more residency by investment programs to choose from. These really different residency by investment programs created a more comprehensive market than the citizenship by investment industry’s. These solutions are characterized by different requisites and goals. There are well managed and branded programs, on the other hand there are also some solutions which can be marketed as programs, but these are still only solutions or effective structures to obtain the residence permit of the chosen country, through some kind of investment. Some schemes are excellent ways for obtaining temporary residence permits, meanwhile under other legislations, applicants can acquire permanent residency permits or even the citizen status through a fast-track naturalization process.
                    </p>
                  
                    <div class="text-start mt-20">
                      <a
                        href="#"
                        class="btn"
                        style={{
                          background: " rgb(0, 204, 153)",
                          color: "rgb(255, 255, 255)",
                        }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-sidebar">
                <div class="widget">
                  <h3 class="widget-title">
                  Countries for Investor Visa
                  </h3>
                  <div class="widget__post">
                    <div class="widget__post-item ul_li">
                      <div class="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/canada.png" alt="" />
                        </a>
                      </div>
                      <div class="post-content">
                        <h4 class="post-title border-effect-2">
                          <a href="blog-single.html"> Canada </a>
                        </h4>
                        <span class="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="widget__post-item ul_li">
                      <div class="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/australia.png" alt="" />
                        </a>
                      </div>
                      <div class="post-content">
                        <h4 class="post-title border-effect-2">
                          <a href="blog-single.html"> Australia </a>
                        </h4>
                        <span class="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="widget__post-item ul_li">
                      <div class="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/new-zealand.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content">
                        <h4 class="post-title border-effect-2">
                          <a href="blog-single.html"> New Zealand </a>
                        </h4>
                        <span class="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="widget__post-item ul_li">
                      <div class="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/USA.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content">
                        <h4 class="post-title border-effect-2">
                          <a href="blog-single.html"> USA </a>
                        </h4>
                        <span class="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="widget__post-item ul_li">
                      <div class="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/uk.png" alt="" />
                        </a>
                      </div>
                      <div class="post-content">
                        <h4 class="post-title border-effect-2">
                          <a href="blog-single.html">UK</a>
                        </h4>
                        <span class="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="widget">
                  <h3 class="widget-title">Other Services</h3>
                  <ul class="widget__category list-unstyled">
                    <li>
                      <a href="#!">
                        <i class="far fa-arrow-up"></i> Immigration - PR Visa
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i class="far fa-arrow-up"></i>Student Visa
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i class="far fa-arrow-up"></i> Visitor Visa
                      </a>
                    </li>
                   
                    <li>
                      <a href="#!">
                        <i class="far fa-arrow-up"></i> Work Permit Visa
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog end --> */}
      <Footer />
    </div>
  );
}
