import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Counter from "../component/Counter";

export default function About() {
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
              <li className="breadcrumb-item">About us</li>
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
            <img src="assets/img/about/about_img3.jpg" alt="" />
          </div>
        </div>
      </section>
      {/* <!-- about end --> */}
      {/* <!-- about text start --> */}
      <section className="team-signle pt-120 pb-120">
        <div className="container">
          <div className="team-single__inner">
            <div className="team-single__content" style={{paddingTop:'0px'}}>
              <h3>Inception of GO FOREN</h3>
              <p>
              The birth of GO FOREN, the immigration consultation and overseas education advising division, holds a captivating tale. Situated in South Gujarat, India, GO FOREN is widely regarded as one of the top establishments in its field. Its origins trace back to our parent company, RACHNA ACADEMY OF CAREER EDUCATION (RACE), which has been actively engaged in providing career guidance and facilitating government and private sector job placements in India since 2006. Mr. Rajesh Bhavsar, our esteemed founder, has been instrumental in assisting and guiding numerous individuals in their pursuit of settling abroad, whether as students or permanent residents.
              
              </p>
              <p>
              Over time, the beneficiaries of our services grew, and they expressed a persistent desire for us to establish our own venture. This demand arose due to the unparalleled quality of our services and the satisfaction we brought to our students and aspirants. Finally, the day arrived when GO FOREN was conceived and brought into existence to fulfil these aspirations.
              </p>
              <h3>About scope of GO FOREN</h3>
              <p>
              GO FOREN specializes in immigration/PR visa, student visa, visitor visa, entrepreneur/business visa and work permit visa services. Our core expertise lies in the immigration field, where we offer comprehensive assistance to clients who wish to work and settle in a new country. Our support extends beyond initial counselling, evaluation, application, and immigration processes. We also provide additional services such as air ticketing, foreign exchange, accommodation arrangements, travel insurance, and airport transfers upon successful relocation to the new country.
              </p>
              <p>For students seeking assistance in pursuing higher education abroad, GO FOREN offers coaching services. This segment has grown organically to address the need for in-house coaching, leveraging the strength of Rachna Academy of Career Education. We provide dedicated coaching for various mandatory entrance tests, including IELTS, TOEFL, PTE, GRE, GMAT, and SAT, ensuring our clients achieve the required results. These results are crucial for securing university admissions or meeting minimum point requirements for PR visa applications.</p>
              <p>Committed to delivering the best service to our clients, GO FOREN has established memberships, professional partnerships, and an in-house research team. Our satisfied clients can attest that we consistently go above and beyond to help them realize their dreams of living overseas.</p>
              <p>In summary, GO FOREN is a comprehensive solution provider for all overseas requirements, catering to students, working professionals, companies, visitors, foreign travellers, entrepreneurs, and businessmen.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about text end --> */}
      {/* <!-- fanfact start --> */}
      <Counter />
      {/* <!-- fanfact end --> */}

      {/* <!-- mission start --> */}
      <section className="mission pt-130 pb-130">
        <div className="container">
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
                  <h2 className="mb-20 wow skewIn">
                    Guiding Your Path with Our <br />{" "}
                    <span>Immigration Mission</span>
                  </h2>
                  <p>
                    We're here to simplify immigration complexities, guiding you
                    to success. Our mission is to unite families, open
                    opportunities, and make your journey enriching. Your dreams
                    are our focus on the path to a brighter future.
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
                    Our Immigration <br /> <span>Service history</span>
                  </h2>
                  <p>
                    Our history began with a vision to make the immigration
                    process smoother and more accessible for individuals and
                    families around the world. With a deep understanding of the
                    challenges that accompany moving to a new country,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mission end --> */}

      <Footer />
    </div>
  );
}
