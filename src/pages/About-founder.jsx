import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import SuccessStories from '../component/SuccessStories'
import FooterTop from "../component/FooterTop";

export default function Aboutfounder() {
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
            <h2 className="breadcrumb__title">About Us</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">About Founder</li>
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
            <div class="rj-img"><img src="/assets/pic/rj.png" class="img-responsive" width={"80px"} style={{marginBottom:'10px'}}/></div>
              <h3 className="wow skewIn">CAREER OF FOUNDER SIR</h3>
              <p>
              Mr. Rajesh Bhavsar, also popularly addressed as RJ Sir by students, is a distinguished individual with a rich tapestry of experiences. He holds a degree in Civil Engineering from SVNIT, Surat, earned in the 1980s and other qualifications too in life journey. Throughout his journey, he has delved into diverse fields such as engineering, construction, immigration, academics, teaching, banking, and ultimately, consulting.
              </p>
              <p>
              His remarkable journey began in the 1980s as a civil engineer, where he accumulated a reservoir of profound experiences. Beyond engineering and construction, he ventured into realms like immigration, academia, teaching, and even banking. RJ Sir's journey of accomplishments didn't stop there; he extended his expertise to career counselling, consulting, textiles, and water supply domains. His contributions and experiences over the years have truly shaped him into a remarkable figure with a myriad of talents and expertise.
              </p>
              <h3 className="wow skewIn">BUSINESS / PROFESSIONAL JOURNEY</h3>
              <p>
              Mr. Rajesh Bhavsar embarked on an extraordinary business journey after his graduation in engineering in 1984. In an era dominated by artificial intelligence and evolving job landscapes, the challenge to identify and nurture talented individuals for leadership roles in various sectors became crucial. After two decades in the fields of Civil Engineering and Textiles, he sought new horizons.
              </p>
              <p>In the summer of May 2006, he initiated his foray into the human resource sector aimed at empowering youth between 18 and 35 by founding RACHNA Academy of Career Education (RACE) in South Gujarat. RACE quickly gained recognition as a premier institute specializing in career enhancement training. It catered to competitive exams like UPSC, GPSC, SSC, BANKS, and LIC, contributing significantly to the education landscape.</p>
              <p>As time progressed, Mr. Bhavsar's focus shifted towards not just training but also placement. This led to the establishment of iROJGAR, a premium placement agency, in which he held the role of Chief Mentor. Through iROJGAR, he honed recruiters' requirements and prepared deserving candidates with necessary job skills, bridging the gap between employers and job seekers.</p>
              <p>His involvement extended beyond placements. At RACE Academy, where he served as Chief Coach, Mr. Bhavsar cultivated an environment of inter-enterprise coordination. Talented youngsters were not only equipped with refined skills but also empowered with enhanced employment probabilities.</p>
              <p>Continuing to broaden his horizons, Mr. Bhavsar founded GoForen, excelling in immigration consultancy and VISA services. This venture catered to those aspiring to work, study, or settle in new countries. GoForen emerged as a reliable entity offering comprehensive support in immigration and PR visas, student visas, visitor visas, and entrepreneur/business visas.</p>
              <p>In 2020, CAREERIAA was conceived as a solution for burgeoning entrepreneurs and consultants. Understanding the financial constraints of start-ups, it provided flexible working environments at affordable rates – be it hourly, daily, weekly, or monthly. This venture encapsulated the idea that success can breed more success, fostering a dynamic entrepreneurial spirit.</p>
             <p>Mr. Rajesh Bhavsar's professional journey is a testament to his adaptability and visionary approach as a careerguru. Through ventures like RACE, iROJGAR, GoForen, and CAREERIAA, he has left an indelible mark on career training, placement, immigration consultancy, and workspace solutions, contributing significantly to the development and empowerment of the youth and professionals.</p>

             <h3 className="wow skewIn">PATH ON SOCIAL RESPONSIBILITY</h3>
             <p>Rajesh Bhavsar, after founding the RESET NGO (Rachna Education and Social Enhancement Trust), has shown exceptional social responsibility. Recognizing the skill development gap in both rural and urban areas, he has tirelessly worked towards bridging this divide. His NGO offers career-focused coaching and educational resources to the youth, irrespective of their financial backgrounds.</p>
             <p>Additionally, he has established libraries and reading rooms, creating spaces that foster learning and growth. Rajesh's commitment to providing affordable skill development solutions and access to education demonstrates his dedication to uplifting communities and nurturing a brighter future for all.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about text end --> */}

       {/* <!-- testimonial start --> */}
        <SuccessStories />
        {/* <!-- testimonial end --> */}
        <FooterTop />
      <Footer />
    </div>
  )
}
