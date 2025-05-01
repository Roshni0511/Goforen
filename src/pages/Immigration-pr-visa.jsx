import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Immigrationprvisa() {
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
            <h2 className="breadcrumb__title">Immigration - PR Visa</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/Visa-services">Visa Services</a>
              </li>
              <li className="breadcrumb-item">Immigration - PR Visa</li>
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
                      Any foreign national who wishes to relocate to any other
                      country, on a permanent basis need an immigration visa or
                      in general terms called a PR (permanent residency) of a
                      particular country.
                    </p>

                    <div class="quote">
                      <img src="assets/img/icon/quote.png" alt="" />
                    </div>
                  </blockquote>
                  <div class="post-thumb">
                    <img src="/assets/pic/1-image.jpg" alt="" />
                  </div>

                  <div class="sec-title sec-title--big style-2 mb-20">
                    <span class="sec-title--sub">
                      <img src="assets/img/icon/h_star.png" alt="" />
                      Why do people migrate?
                      <img src="assets/img/icon/h_star.png" alt="" />
                    </span>

                    <p>
                      As per the report of BBC-UK people migrate for many
                      different reasons. These reasons can be classified as
                      economic, social, political or environmental :
                    </p>
                    <ul style={{ paddingLeft: "10px" }}>
                      <li>
                        <b>economic migration</b> - moving to find work or
                        follow a particular career path
                      </li>
                      <li>
                        <b>social migration</b> - moving somewhere for a better
                        quality of life or to be closer to family or friends
                      </li>
                      <li>
                        <b>political migration</b> - moving to escape political
                        persecution or war
                      </li>
                      <li>
                        <b>environmental</b> causes of migration include natural
                        disasters such as flooding Some people choose to
                        migrate, eg someone who moves to another country to
                        enhance their career opportunities. Some people are
                        forced to migrate, eg someone who moves due to war or
                        famine.
                      </li>
                    </ul>
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
                    Countries for Immigration - PR Visa
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
                          <img src="/assets/pic/new-zealand.jpg" alt=""  />
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
                  </div>
                </div>
                <div class="widget">
                  <h3 class="widget-title">Other Services</h3>
                  <ul class="widget__category list-unstyled">
                    <li>
                      <a href="#!">
                        <i class="far fa-arrow-up"></i> Student Visa
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i class="far fa-arrow-up"></i> Visitor Visa
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i class="far fa-arrow-up"></i>Investor Visa
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
