import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Workpermitvisa() {
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
            <h2 className="breadcrumb__title">Work Permit Visa</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/Visa-services">Visa Services</a>
              </li>
              <li className="breadcrumb-item">Work Permit Visa</li>
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
                    A work Permit visa is a type of visa that grants the holder authorization to accept employment in a foreign country.
                    </p>

                    <div class="quote">
                      <img src="assets/img/icon/quote.png" alt="" />
                    </div>
                  </blockquote>
                  <div class="post-thumb">
                    <img src="/assets/pic/8-image.jpg" alt="" />
                  </div>

                  <div class="sec-title sec-title--big style-2 mb-20">
                  <span class="sec-title--sub">
                      <img src="assets/img/icon/h_star.png" alt="" />
                      What is work permit?
                      <img src="assets/img/icon/h_star.png" alt="" />
                    </span>
                    <p>
                    A work permit is an official document issued by a country`s government, allowing foreign nationals to work legally within its borders. It sets out specific conditions under which the work is to be performed, such as duration, location, and type of employment.
                    </p>

                    <span class="sec-title--sub">
                      <img src="assets/img/icon/h_star.png" alt="" />
                      What is work permit visa?
                      <img src="assets/img/icon/h_star.png" alt="" />
                    </span>
                    <p>
                    A work permit visa is a legal authorization that allows individuals from foreign countries to enter, live, and work in their country for a specific job and duration. It is a gateway for skilled professionals looking to gain international work experience and earn competitive salaries.
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
              <div class="blog-sidebar mt-5">
                
                <div class="widget">
                  <h3 class="widget-title">Other Services</h3>
                  <ul class="widget__category list-unstyled">
                    <li>
                      <a href="">
                        <i class="far fa-arrow-up"></i> Immigration - PR Visa
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="far fa-arrow-up"></i>Student Visa
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="far fa-arrow-up"></i> Visitor Visa
                      </a>
                    </li>
                   
                    <li>
                      <a href="">
                        <i class="far fa-arrow-up"></i>Investor Visa
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
