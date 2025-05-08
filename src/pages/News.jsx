import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function News() {
  return (
    <div>
      <Navbar />
      <section className="blog pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post-wrapper">
                <article className="post-details">
                  <div className="post-thumb">
                    <img src="/assets/pic/1-image.jpg" alt="" />
                  </div>
                  <ul className="post-meta ul_li">
                    <li>
                      <span className="posted-on">
                        <i className="far fa-calendar-check"></i>{" "}
                        <a href="#!">August 4, 2023</a>
                      </span>
                    </li>
                  </ul>
                  <h2>
                    Netherlands Sees Rise in Undocumented Workers, Raising
                    Exploitation Concerns
                  </h2>
                  <p>
                    The Netherlands is witnessing a surge in unauthorised
                    employment of third-country nationals, with tens of
                    thousands, including 35,000 Brazilians in Amsterdam alone,
                    working without proper permits. These undocumented workers
                    are mostly found in construction, agriculture, hospitality,
                    and domestic services, raising concerns about exploitation
                    and lack of access to health care. The misuse of the
                    Registration of Non-Residents (RNI) system, which allows
                    short-term visitors to obtain a citizen service number
                    without scrutiny, is contributing to this growing issue.
                    Authorities remain inactive despite long-standing awareness.
                    For better understanding, contact GOFOREN at
                    7600909090.Click for the Gujarati translate
                  </p>

                  <button style={{ background: "none" }}>
                    <a
                      href="/Newsdetails"
                      style={{
                        color: "#fff",
                        padding: "20px ",
                        background: "#00cc99",
                        borderRadius: "10px",
                      }}
                    >
                      Read More
                    </a>
                  </button>
                </article>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget text-center">
                  <h3 className="widget-title">Detailed Information</h3>
                  <div className="widget__post">
                  <button style={{ background: "none" }}>
                    <a
                      href="/Contact"
                      style={{
                        color: "#fff",
                        padding: "15px ",
                        background: "#00cc99",
                        borderRadius: "10px",
                      }}
                    >
                     Contact Us
                    </a>
                  </button>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Other Services</h3>
                  <ul className="widget__category list-unstyled">
                    <li>
                      <a href="/Immigration-pr-visa">
                        <i className="far fa-arrow-up"></i> Immigration - PR Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Student-visa">
                        <i className="far fa-arrow-up"></i>Student Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Visitor-visa">
                        <i className="far fa-arrow-up"></i> Visitor Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Investor-visa">
                        <i className="far fa-arrow-up"></i> Investor Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Work-permit-visa">
                        <i className="far fa-arrow-up"></i>Work Permit Visa
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





       <section class="coaching-single pt-120 pb-130">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="sidebar-widget">
                            <div class="widget">
                                <ul class="widget-category list-unstyled">
                                   
                                    <li><a class="active" href="/Immigration-pr-visa"> Immigration - PR Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Student-visa">Student Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Visitor-visa"> Visitor Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Investor-visa">Investor Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Work-permit-visa"> Work Permit Visa <span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                </ul>
                            </div>
                            <div className="blog-sidebar" style={{paddingLeft:'0px'}}>

                            <div className="widget">
                  <h3 className="widget-title">
                  Countries for Student Visa
                  </h3>
                  <div className="widget__post">
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="">
                          <img src="/assets/pic/canada.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href=""> Canada </a>
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
                        <a href="">
                          <img src="/assets/pic/australia.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href=""> Australia </a>
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
                        <a href="">
                          <img src="/assets/pic/new-zealand.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href=""> New Zealand </a>
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
                        <a href="">
                          <img src="/assets/pic/USA.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href=""> USA </a>
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
                        <a href="">
                          <img src="/assets/pic/uk.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="">UK</a>
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
                            </div>
                          
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="single-content">
                            <h3> Netherlands Sees Rise in Undocumented Workers, Raising Exploitation Concerns</h3>
                        
                             <p>
                             The Netherlands is witnessing a surge in unauthorised employment of third-country nationals, with tens of thousands, including 35,000 Brazilians in Amsterdam alone, working without proper permits. These undocumented workers are mostly found in construction, agriculture, hospitality, and domestic services, raising concerns about exploitation and lack of access to health care. The misuse of the Registration of Non-Residents (RNI) system, which allows short-term visitors to obtain a citizen service number without scrutiny, is contributing to this growing issue. Authorities remain inactive despite long-standing awareness. For better understanding, contact GOFOREN at 7600909090.Click for the Gujarati translate
                    </p>
                 
                            <div class="single-img mt-35 mb-70">
                            <img src="/assets/pic/1-image.jpg" alt="" />
                            </div>
                            <h3>How Go Foren work</h3>
                            <ul class="about-list ul_li list-unstyled">
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number">1</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Choose your visa type</h3>
                                            <div class="xb-item--description">
                                                Determine the Visa type for your travel
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number color-2">2</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Contact our branches</h3>
                                            <div class="xb-item--description">
                                                Start your transaction by applying..
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number color-3">3</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Submit All Your Documents</h3>
                                            <div class="xb-item--description">
                                                Collect all the required documents  the..
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number color-4">4</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Passport delivery</h3>
                                            <div class="xb-item--description">
                                                Receive your visa, which is finalized..
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer />
    </div>
  );
}
