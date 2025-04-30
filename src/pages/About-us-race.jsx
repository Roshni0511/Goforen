import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import SuccessStories from "../component/SuccessStories";

export default function Aboutusrace() {
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
          const backgroundUrl1 = "assets/img/bg/blog_bg.png";
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
            <h2 className="breadcrumb__title">About Us</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">About Us - RACE</li>
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

      {/* <!-- about text start --> */}
      <section className="team-signle pt-120 pb-120">
        <div className="container">
          <div className="team-single__inner">
            <div className="team-single__content" style={{ paddingTop: "0px" }}>
              <h3>Introduction of RACE group</h3>
              <p>
              Step into the world of opportunities with the RACE Group (Rachna Academy of Career Education), an esteemed institution nestled in the vibrant heart of South Gujarat, India. Led by the visionary founder, Mr. Rajesh Bhavsar, affectionately known as RJ SIR, the group has become a beacon of hope for countless individuals aspiring to carve a successful career.
              </p>
              <p>
              At RACE, we don't just provide education; we craft destinies. With a diverse range of services, including competitive exam preparation for government jobs, English language exams preparation for foreign admissions, computer training, private sector job placements, assistance with foreign settlement for study or permanent residency, and even offering a co-working space for innovative start-ups, RACE caters to the holistic growth of its students and clients.
              </p>
              
              <p>
              The group's primary objective is to prepare and provide platform to the YOUTH of India to embark on the right career pathway, armed with knowledge, confidence, and determination. Our team of seasoned experts, teachers, and care takers create an environment that fosters growth and provides unwavering support, driving individuals towards their dreams. So, take the plunge and let RACE propel you towards an extraordinary future.
              </p>
             
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about text end --> */}

       {/* <!-- mission,vission,value start --> */}
            <section className="mission  pb-130">
              <div className="container">
                    <h2>Your success story begins here!!!</h2>
                <div className="row align-items-center flex-row-reverse mt-none-30">
                  <div className="col-lg-6 mt-30">
                    <div className="mission__img text-lg-end">
                      <div
                        className="inner-img d-inline-block wow skewIn"
                        data-wow-delay="200ms"
                      >
                        <img src="assets/img/bg/mission.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-30">
                    <div className="mission__content">
                      <div className="sec-title">
                        <h2 className="mb-20 wow skewIn">Our Mission</h2>
                        <p>
                        Empowering YOUTH by guiding and skilling them towards diverse career opportunities, ensuring successful and fulfilling pathways to a prosperous future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mt-100">
                  <div className="col-lg-6 mt-30">
                    <div className="mission__img">
                      <div className="inner-img d-inline-block wow skewIn">
                        <img src="assets/img/bg/vission.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-30">
                    <div className="mission__content">
                      <div className="sec-title">
                        <h2 className="mb-20 wow skewIn" data-wow-delay="200ms">
                        Our Vision
                        </h2>
                        <p>
                        To nurture YOUTH as career-mentors, RACE group strives to be the beacon of encouragement, inspiration, and knowledge. </p>
                        <p>To capacitate talent, providing top-tier infrastructure enabling them to reach their utmost potential and conquer new heights in their chosen paths.</p>
                        <p>A brand that provides unparalleled support for success and fosters growth of youth.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </section>
            {/* <!-- mission,vission,value end --> */}

         {/* <!-- about text start --> */}
      <section className="team-signle pb-120">
        <div className="container">
          <div className="team-single__inner">
            <div className="team-single__content" style={{ paddingTop: "0px" }}>
              <h3>INFRASTRUCTURE:</h3>
              <p>
              Race is redefining the future for Indian youth through cutting-edge latest infrastructure and soft facilities that cater to your every need. Step into our world, where spacious, climate-controlled training spaces inspire growth and excellence encircling more than 12000.00 square feet of area at 701-702, 7th floor, Joyos Hubtown, Adajan bus port, Adajan, Surat, Gujarat, India, PIN-395009. Our top priority is your comfort and satisfaction, which is why our dedicated and friendly staff members ensure your experience is always soothing and disciplined.
              </p>
              <p>
              Imagine indulging in a learning environment like no other – airy classrooms, a well-stocked library, state-of-the-art computer labs, and versatile meeting rooms, class rooms, and seminar halls await you. Do you need a copy of books & material? Xeroxing facility is given. Craving a quick bite or a place to relax? Our cafeteria and waiting area are designed with your well-being in mind. Unleash the power of our exquisite recording facility to broadcast your profound perspectives to the farthest corners of the globe.
              </p>
             
              <p>
              Embark on your journey of growth and excellence with us. Welcome to the future!
              </p>
              
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about text end --> */}

      {/* <!-- img start --> */}
        <section className="blog pb-130">
            <div className="container">
                <div className="blog-wrap">
                    
                    <div className="row justify-content-md-center mt-none-30">
                        <div className="col-lg-6 col-md-12 mt-30">
                            <div className="xb-blog">
                                <div className="xb-item--inner">
                                    <div className="xb-item--img" style={{border:'1px solid #000'}}> 
                                        <img src="/assets/pic/race-community.jpg" alt="" />
                                    </div>
                                    <div className="xb-item--holder">
                                        <span className="xb-item--category">RACE Community</span>
                                       
                                        <h3 className="xb-item--title border-effect"><a href="">CHART – RACE COMMUNITY</a></h3>
                                       
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-30">
                            <div className="xb-blog">
                                <div className="xb-item--inner">
                                    <div className="xb-item--img" style={{border:'1px solid #000'}}>
                                        <a href="blog-single.html"><img src="/assets/pic/corporate-structure.jpg" alt="" /></a>
                                    </div>
                                    <div className="xb-item--holder">
                                        <a className="xb-item--category color-2" href="#!">corporate structure</a>
                                       
                                        <h3 className="xb-item--title border-effect"><a href="blog-single.html">CHART – RACE COMMUNITY</a></h3>
                                   
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="xb-blog-bg" style={{backgroundImage: `url(${background1})`,background:'#EDF3F5'}} ></div>
                </div>
            </div>
        </section>
        {/* <!-- img end --> */}

         {/* <!-- about text start --> */}
      <section className="team-signle pt-120 pb-120">
        <div className="container">
          <div className="team-single__inner">
            <div className="team-single__content" style={{ paddingTop: "0px" }}>
              <h3>Brief Description on Business of Race Community:</h3>
              <p>
              <b>1. RACHNA ACADEMY – Coaching Division:</b> Established in 2006 provides online, off line training in the areas of (a) exams for government jobs of state and central governments like GPSC, GSSSB, UPSC, SSC, Banks exam, etc. (b) English language exams like IELTS, PTE, TOEFL, CAEL, CELPIP, etc. for foreign goers (c) Computer knowledge like CCC, Tally, Graphic designing, etc. (d) Skill development on Sales executive, tele caller, e commerce training.
              <br/>
              <b>Contact number:</b> +91 76 00 90 90 90
              <br />
              <b>URL:</b> <a href="https://www.racevarsity.com" target="_blank">www.racevarsity.com</a>
              </p>
             
             
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about text end --> */}

        {/* <!-- testimonial start --> */}
        <SuccessStories />
        {/* <!-- testimonial end --> */}



      <Footer />
    </div>
  )
}
