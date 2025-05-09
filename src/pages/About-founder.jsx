import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import SuccessStories from '../component/SuccessStories'
import FooterTop from "../component/FooterTop";
import Counter from "../component/Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


export default function Aboutfounder() {
     // data-background img start
          const [background, setBackground] = useState("");
        
          useEffect(() => {
            const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
            setBackground(backgroundUrl);
          }, []);
            const [background1, setBackground1] = useState("");
          
            useEffect(() => {
              const backgroundUrl1 = "http://127.0.0.1:5500/assets/img/bg/team_bg.jpg";
              setBackground1(backgroundUrl1);
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
        <li className="breadcrumb-item" >About Founder</li>
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
                  Committed to Your Visa <br /> <span  style={{fontSize:'35px'}}>Success - About us</span>
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
                            <img src="/assets/pic/canada-passport-1 (1).webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-30">
                        <div class="mission__content">
                            <div class="sec-title">
                                <h2 class="mb-20 wow skewIn">CAREER OF FOUNDER SIR<br /> <span  style={{fontSize:'35px'}}>Inspiring Journey</span></h2>
                                <p>His remarkable journey began in the 1980s as a civil engineer, where he accumulated a reservoir of profound experiences. Beyond engineering and construction, he ventured into realms like immigration, academia, teaching, and even banking. RJ Sir's journey of accomplishments didn't stop there; he extended his expertise to career counselling, consulting, textiles, and water supply domains. His contributions and experiences over the years have truly shaped him into a remarkable figure with a myriad of talents and expertise.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center mt-100">
                    <div class="col-lg-6 mt-30">
                        <div class="mission__img">
                            <div class="inner-img d-inline-block wow skewIn">
                            <img src="/assets/pic/aboutpage2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-30">
                        <div class="mission__content">
                            <div class="sec-title">
                                <h2 class="mb-20 wow skewIn" data-wow-delay="200ms">BUSINESS / PROFESSIONAL JOURNEY<br /> <span  style={{fontSize:'35px'}}>Journey of Success</span></h2>
                                <p>In the summer of May 2006, he initiated his foray into the human resource sector aimed at empowering youth between 18 and 35 by founding RACHNA Academy of Career Education (RACE) in South Gujarat. RACE quickly gained recognition as a premier institute specializing in career enhancement training. It catered to competitive exams like UPSC, GPSC, SSC, BANKS, and LIC, contributing significantly to the education landscape.</p>
                                <p>As time progressed, Mr. Bhavsar's focus shifted towards not just training but also placement. This led to the establishment of iROJGAR, a premium placement agency, in which he held the role of Chief Mentor. Through iROJGAR, he honed recruiters' requirements and prepared deserving candidates with necessary job skills, bridging the gap between employers and job seekers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center flex-row-reverse mt-100">
                    <div class="col-lg-6 mt-30">
                        <div class="mission__img text-lg-end">
                            <div class="inner-img d-inline-block wow skewIn" data-wow-delay="200ms">
                            <img src="/assets/pic/mission (1).webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-30">
                        <div class="mission__content">
                            <div class="sec-title">
                                <h2 class="mb-20 wow skewIn">PATH ON SOCIAL RESPONSIBILITY<br /> <span  style={{fontSize:'35px'}}>Service Commitment</span></h2>
                                <p>His NGO offers career-focused coaching and educational resources to the youth, irrespective of their financial backgrounds.Additionally, he has established libraries and reading rooms, creating spaces that foster learning and growth. Rajesh's commitment to providing affordable skill development solutions and access to education demonstrates his dedication to uplifting communities and nurturing a brighter future for all.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     {/* <!-- team start --> */}
     <section class="team pt-120 pb-130 bg_img" style={{  backgroundImage: `url(${background1})`, }}>
            <div class="container">
                <div class="sec-title text-center mb-65">
                    <h2 class="mb-40 wow skewIn">Our trusted immigration <br /> <span  style={{fontSize:'35px'}}> support team</span></h2>
                    <p style={{textAlign:'center',justifyContent:'center',display:'flex'}}>At the heart of our commitment to providing exceptional <br /> immigration solutions stands</p>
                </div>
                <div class="row mt-none-30">
                    <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                        <div class="xb-team text-center">
                            <div class="xb-item--inner" data-parallax='{"scale" : 1}'>
                                <div class="xb-item--img">
                                    <img src="/assets/pic/team.jpg" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Janvi Patel</a></h3>
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
                                <img src="/assets/pic/profile4.jpg" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Vivek Sharma</a></h3>
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
                                <img src="/assets/pic/profile5 (3).jpg" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Kunal Mehta</a></h3>
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
                                <img src="/assets/pic/profile1 (2).jpg" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Krishna Varma</a></h3>
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
                                <img src="/assets/pic/profile6.jpg" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Jay Patel</a></h3>
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
                                <img src="/assets/pic/profile7 (1).jpg" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Drashti Vora</a></h3>
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
                                    <img src="/assets/pic/profile8.jpg" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html"></a>ketan kakdiya</h3>
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
                                    <img src="/assets/pic/profile9.jpeg" alt="" />
                                </div>
                                <div class="xb-item--holder">
                                    <h3 class="xb-item--name"><a href="team-single.html">Shivani Dabhi</a></h3>
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


        <FooterTop />
      <Footer />
    </div>
  )
}
