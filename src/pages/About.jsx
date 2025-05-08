import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Counter from "../component/Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import SuccessStories from "../component/SuccessStories";
import FooterTop from "../component/FooterTop";
export default function About() {
  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
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
      <h2 className="breadcrumb__title" style={{color:'#fff'}}>About Us</h2>
      <ul className="breadcrumb__list clearfix">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item" >About us</li>
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

      {/* <!-- about start --> */}
      <section className="about pt-130">
        <div className="container">
          <div className="row mb-40 align-items-center">
            <div className="col-lg-6">
              <div className="sec-title mb-20">
                <h2 className="wow skewIn">
                  Committed to Your Visa <br /> <span>Success - About us</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="sec-title mb-20">
                <p>
                  We deliver budget-friendly visa solutions, removing financial
                  barriers from your journey. Our goal is to provide quality
                  services at reasonable rates.
                </p>
              </div>
            </div>
          </div>
          <div className="xb-about__img">
            <img src="/assets/pic/about (1).jpg" alt="" />
          </div>
        </div>
      </section>
      <Counter />
      {/* <!-- about end --> */}

      <section class="mission pt-130 pb-130">
            <div class="container">
                <div class="row align-items-center flex-row-reverse mt-none-30">
                    <div class="col-lg-6 mt-30">
                        <div class="mission__img text-lg-end">
                            <div class="inner-img d-inline-block wow skewIn" data-wow-delay="200ms">
                                <img src="assets/img/bg/mission.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-30">
                        <div class="mission__content">
                            <div class="sec-title">
                                <h2 class="mb-20 wow skewIn">Inception of GO FOREN<br /> <span>Immigration Mission</span></h2>
                                <p>The birth of GO FOREN, the immigration consultation and overseas education advising division, holds a captivating tale. Situated in South Gujarat, India, GO FOREN is widely regarded as one of the top establishments in its field. Its origins trace back to our parent company, RACHNA ACADEMY OF CAREER EDUCATION (RACE), which has been actively engaged in providing career guidance and facilitating government and private sector job placements in India since 2006. Mr. Rajesh Bhavsar, our esteemed founder, has been instrumental in assisting and guiding numerous individuals in their pursuit of settling abroad, whether as students or permanent residents.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center mt-100">
                    <div class="col-lg-6 mt-30">
                        <div class="mission__img">
                            <div class="inner-img d-inline-block wow skewIn">
                                <img src="assets/img/bg/vission.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-30">
                        <div class="mission__content">
                            <div class="sec-title">
                                <h2 class="mb-20 wow skewIn" data-wow-delay="200ms">About scope of GO FOREN <br /> <span>Visa Guidance</span></h2>
                                <p>GO FOREN specializes in immigration/PR visa, student visa, visitor visa, entrepreneur/business visa and work permit visa services. Our core expertise lies in the immigration field, where we offer comprehensive assistance to clients who wish to work and settle in a new country. Our support extends beyond initial counselling, evaluation, application, and immigration processes. We also provide additional services such as air ticketing, foreign exchange, accommodation arrangements, travel insurance, and airport transfers upon successful relocation to the new country.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- team start --> */}
        <section class="team pt-120 pb-130 bg_img" data-background="assets/img/bg/team_bg.jpg">
            <div class="container">
                <div class="sec-title text-center mb-65">
                    <h2 class="mb-40 wow skewIn">Our trusted immigration <br /> <span> support team</span></h2>
                    <p>At the heart of our commitment to providing exceptional <br /> immigration solutions stands</p>
                </div>
                <div class="row mt-none-30">
                    <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                        <div class="xb-team text-center">
                            <div class="xb-item--inner" data-parallax='{"scale" : 1}'>
                                <div class="xb-item--img">
                                    <img src="assets/img/team/img_01.png" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Esther Howard</a></h3>
                                    <span class="xb-item--designation">Legal Advisor</span>
                                </div>
                                <ul class="xb-item--social list-unstyled">
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                        <div class="xb-team text-center">
                            <div class="xb-item--inner">
                                <div class="xb-item--img">
                                    <img src="assets/img/team/img_02.png" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Annette Black</a></h3>
                                    <span class="xb-item--designation">Education Counsellor</span>
                                </div>
                                <ul class="xb-item--social list-unstyled">
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                        <div class="xb-team text-center">
                            <div class="xb-item--inner">
                                <div class="xb-item--img">
                                    <img src="assets/img/team/img_03.png" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Andrew Riis</a></h3>
                                    <span class="xb-item--designation">Visa Specialist</span>
                                </div>
                                <ul class="xb-item--social list-unstyled">
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                        <div class="xb-team text-center">
                            <div class="xb-item--inner">
                                <div class="xb-item--img">
                                    <img src="assets/img/team/img_04.png" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Kristin Watson</a></h3>
                                    <span class="xb-item--designation">Visa Coordinator</span>
                                </div>
                                <ul class="xb-item--social list-unstyled">
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                        <div class="xb-team text-center">
                            <div class="xb-item--inner">
                                <div class="xb-item--img">
                                    <img src="assets/img/team/img_05.png" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Jerome Bell</a></h3>
                                    <span class="xb-item--designation">General Manager</span>
                                </div>
                                <ul class="xb-item--social list-unstyled">
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                        <div class="xb-team text-center">
                            <div class="xb-item--inner">
                                <div class="xb-item--img">
                                    <img src="assets/img/team/img_06.png" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Eleanor Pena</a></h3>
                                    <span class="xb-item--designation">Case Manager</span>
                                </div>
                                <ul class="xb-item--social list-unstyled">
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                        <div class="xb-team text-center">
                            <div class="xb-item--inner">
                                <div class="xb-item--img">
                                    <img src="assets/img/team/img_07.png" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Steve Trister</a></h3>
                                    <span class="xb-item--designation">Visa Coordinator</span>
                                </div>
                                <ul class="xb-item--social list-unstyled">
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                        <div class="xb-team text-center">
                            <div class="xb-item--inner">
                                <div class="xb-item--img">
                                    <img src="assets/img/team/img_08.png" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Daniel Lewis</a></h3>
                                    <span class="xb-item--designation">Case Manager</span>
                                </div>
                                <ul class="xb-item--social list-unstyled">
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- team end --> */}

      {/* <!-- mission,vission,value start --> */}
      <section className="mission pt-130 pb-130">
        <div className="container">
          <div className="row align-items-center flex-row-reverse mt-none-30">
            <div className="col-lg-6 mt-30">
              <div className="mission__img text-lg-end">
                <div
                  className="inner-img d-inline-block wow skewIn"
                  data-wow-delay="200ms"
                >
                  <img src="/assets/pic/visionn (1).jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="mission__content">
                <div className="sec-title">
                  <h2 className="mb-20 wow skewIn">Our Vision</h2>
                  <p>
                    Empowering Indian aspirants abroad, we strive as a
                    trustworthy, cost-effective, and ethical immigration/visa
                    consultancy, committed to aiding them in realizing their
                    ambitions and dreams in foreign lands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-100">
            <div className="col-lg-6 mt-30">
              <div className="mission__img">
                <div className="inner-img d-inline-block wow skewIn">
                  <img src="/assets/pic/mission (1).webp" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="mission__content">
                <div className="sec-title">
                  <h2 className="mb-20 wow skewIn" data-wow-delay="200ms">
                    Our Mission
                  </h2>
                  <p>
                    <ul style={{listStyle:'none'}}>
                      <li style={{ alignItems: "baseline" }}>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        To become regionally recognised immigration consultant
                        to distinguished countries.
                      </li>
                      <li style={{ alignItems: "baseline" }}>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        To provide innovative settlement options to global
                        destination.
                      </li>
                      <li style={{ alignItems: "baseline" }}>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        To widen the horizon of immigrants academic, work
                        perspectives and quality of life.
                      </li>
                      <li style={{ alignItems: "baseline" }}>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        To promote global presence of Indians by spreading
                        awareness of world scenario.
                      </li>
                      <li style={{ alignItems: "baseline" }}>
                        To promote economic growth of Indians and encouraging
                        them to help their motherland.
                      </li>
                      <li>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        By 31 st March 2025, 25 positive outcome of visas per
                        month with revenue worth 1 million INR.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center flex-row-reverse mt-none-30">
            <div className="col-lg-6 mt-30">
              <div className="mission__img text-lg-end">
                <div
                  className="inner-img d-inline-block wow skewIn"
                  data-wow-delay="200ms"
                >
                  <img src="/assets/pic/values (1).png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-100">
              <div className="mission__content">
                <div className="sec-title">
                  <h2 className="mb-20 wow skewIn">Our Values</h2>
                  <p>
                    KNOWLEDGE GENERATION for ourselves and for clients. Only
                    information on knowledge can help you become winner.
                  </p>
                  <p>
                    GOING BEYOND THE ROUTINE PROMISES to get repetition and
                    recommendation from client.
                  </p>
                  <p>
                    HONESTY, INTEGRITY and TRANSPARENCY in operations to its
                    best possible level.
                  </p>
                  <p>
                    COMMITMENT AND ACCOUNTABILITY towards our clients. We try to
                    remain consistent in delivery of service in cooperation and
                    coordination with client. We listen and respond with
                    solution-oriented ideas and actions.
                  </p>
                  <p>
                    ENTREPRENEURSHIP: Each of team members takes ownership of
                    his part and role in organization. We explore new horizons
                    by asking why, wha, which, etc. questions. We overcome
                    difficulties and challenges by making new things happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mission,vission,value end --> */}

      {/* <!-- Why With Us text start --> */}
      <section className="team-signle pb-120">
        <div className="container">
          <div className="team-single__inner">
            <div className="team-single__content" style={{ paddingTop: "0px" }}>
              <h3>Why Should You Register With Us</h3>
              <p>
                {" "}
                At GO FOREN we firmly believe that further education requires
                proper planning to ensure that, students choose the appropriate
                academic pathway. With this in mind, we assist students by
                giving comprehensive information about study opportunities in
                various countries worldwide. We continuously believe in
                providing professional services to students, parents and our
                institutional clients at all times.
              </p>

              <p>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  <li style={{ alignItems: "baseline" }}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                    We are not totally different from others but we have few
                    things that make us one of the best in market
                  </li>
                  <li style={{ alignItems: "baseline" }}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                    We have more than 15 years experience in dealing with youth
                    between 21 and 35 ages.
                  </li>
                  <li style={{ alignItems: "baseline" }}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                    We have best professional partnership to offer you admission
                    in Colleges & Universities worldwide.
                  </li>
                  <li style={{ alignItems: "baseline" }}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                    We provide best possible assistance in immigration filing
                    process for PR in Canada, Australia, and New Zealand.
                  </li>
                  <li style={{ alignItems: "baseline" }}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                    Our staff is best trained for helping Students go to study
                    abroad or for a person applying for PR.
                  </li>
                  <li style={{ alignItems: "baseline" }}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                    We are capable to provide comprehensive backup services for
                    Indian Students throughout their studies and help them apply
                    for PR after.
                  </li>
                  <li style={{ alignItems: "baseline" }}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                    We conduct guidance pre-departure seminars to prepare
                    students before they leave for studies.
                  </li>
                  <li style={{ alignItems: "baseline" }}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                    Proper infrastructure and facility for coaching of vital
                    exams whether computer-based or not.
                  </li>
                  <li style={{ alignItems: "baseline" }}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                    In-house R&D to ensure up-to-date info on courses and
                    changes in immigration rules.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why With Us text end --> */}

      {/* <!-- testimonial start --> */}
      <SuccessStories />
      {/* <!-- testimonial end --> */}
      <FooterTop />
      <Footer />
    </div>
  );
}
