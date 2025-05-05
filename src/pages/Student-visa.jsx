import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Studentvisa() {
  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl ="/assets/pic/breadcrumb-bg.jpg";
    setBackground(backgroundUrl);
  }, []);
  // data-background img end
  return (
    <div>
      <Navbar />

      {/* <!-- breadcrumb start --> */}
      <section
  className="breadcrumb pos-rel bg_img"
  style={{ 
    backgroundImage: `url(${background})`, 
    minHeight: '400px',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // black overlay with 50% opacity
    zIndex: 1
  }}></div>

  <div className="container" style={{ position: 'relative', zIndex: 2 }}>
    <div className="breadcrumb__content">
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Student Visa</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/Visa-services">Visa Services</a>
              </li>
              <li className="breadcrumb-item">Student Visa</li>
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
                  <blockquote>
                    <p>
                      Most countries will issue student visas in order to allow
                      foreign students to attend school within their borders.
                      However, in most cases the student must be enrolled at a
                      postsecondary institution of higher learning. Foreign
                      exchange students must therefore usually obtain a
                      different type of visa, such as for temporary residence.
                    </p>

                    <div className="quote">
                      <img src="assets/img/icon/quote.png" alt="" />
                    </div>
                  </blockquote>
                  <div className="post-thumb">
                    <img src="/assets/pic/3-image.jpg" alt="" />
                  </div>

                  <div className="sec-title sec-title--big style-2 mb-20">
                    <p>
                      The best way to enter a country is through its campus.
                      Staying there allows one to assimilate into the local
                      culture much easier than if one enters on a work visa or a
                      PR visa.
                    </p>
                    <p>
                      Studying abroad is once-in-a-lifetime experience that, if
                      done right, leads on to fortune and if neglected does just
                      the opposite.
                    </p>
                    <p>
                      Indians who aspire to have an overseas experience in their
                      lifetime allocate a lot of their precious budget to
                      studying abroad. If invested smartly, then entire
                      generations, see a new bright future. To others it turns
                      out to be a nightmare when they are burdened by the yoke
                      of a student loan they can barely service.
                    </p>
                    <p>
                      That is why applicants have to be very cautious when they
                      set out on this journey filled with several pitfalls. They
                      fall prey to many agents who sell them a path for which
                      they are incentivized by commissions paid by
                    </p>
                    <div className="text-start mt-20">
                      <a
                        href="#"
                        className="btn"
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
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget">
                  <h3 className="widget-title">
                  Countries for Student Visa
                  </h3>
                  <div className="widget__post">
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/canada.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html"> Canada </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/australia.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html"> Australia </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/new-zealand.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html"> New Zealand </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/USA.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html"> USA </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/uk.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html">UK</a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Other Services</h3>
                  <ul className="widget__category list-unstyled">
                    <li>
                      <a href="#!">
                        <i className="far fa-arrow-up"></i> Immigration - PR Visa
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="far fa-arrow-up"></i> Visitor Visa
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="far fa-arrow-up"></i>Investor Visa
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="far fa-arrow-up"></i> Work Permit Visa
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
