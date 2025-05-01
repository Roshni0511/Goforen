import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterTop from "../component/FooterTop";

export default function Visaservices() {
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
            <h2 className="breadcrumb__title">Visa Services</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Visa Services</li>
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
      {/* What is a visa start  */}
      <section class="about pos-rel  pt-120">
        <div class="container">
          <div class="row align-items-center mt-none-30">
            <div class="col-xl-8 col-lg-8 mt-30">
              <div class="sec-title sec-title--big style-2 mb-20">
                <span class="sec-title--sub">
                  <img src="assets/img/icon/h_star.png" alt="" />
                  What is a visa?
                  <img src="assets/img/icon/h_star.png" alt="" />
                </span>

                <p>
                  A visa is a paper document affixed to a page of the holder's
                  passport. It permits a person to travel to the State during
                  the dates stated on the visa. It does not guarantee entry to
                  the State. An Immigration Officer at the Port of Entry has the
                  authority to grant or deny admission, and to decide on the
                  duration a person may remain in the State.
                </p>
                <p>
                  Certificate issued or a stamp marked (on the applicant's
                  passport) by the immigration authorities of a country to
                  indicate that the applicant's credentials have been verified
                  and he or she has been granted permission to enter the country
                  for a temporary stay within a specified period.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 mt-30">
              <div class="xb-about-img">
                <img src="/assets/pic/visa-service.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="sec-title sec-title--big style-2 mb-20">
            <span class="sec-title--sub">
              <img src="assets/img/icon/h_star.png" alt="" />
              What are the different types of visa?
              <img src="assets/img/icon/h_star.png" alt="" />
            </span>

            <p>
              Visas can vary from country to country, but generally speaking
              these are some of the most popular types of visas:
            </p>

            <p style={{ paddingBottom: "10px" }}>
              A. <b>Permanent Residency Card (PR visa)</b> Permanent residency
              refers to a person’s resident status in a country of which they
              are not a citizen. This is usually for an indefinite period; a
              person with such status is known as a permanent resident.
              Permanent residency itself is distinct from right of abode. This
              status gives permission to work in most cases.
            </p>
            <ul style={{ paddingBottom: "10px", paddingLeft: "15px" }}>
              <li style={{ textAlign: "justify" }}>
                <b>Work visa</b> – a work visa allows you to take on employment
                while in the country. These visas are usually valid for the
                duration of the employment contract or a period not exceeding
                five years. There are several types of visas, including working
                holiday visas and professional specialty. Many times PR visa is
                considered as work visa as it gives permission to live and work
                in particular country.
              </li>
            </ul>
            <p style={{ paddingBottom: "10px" }}>
              B. <b>Student visa (STV)</b> – a student visa allows you to pursue
              academic studies in another country. These visas allow you to
              enrol at a college, university, or academic programme and stay in
              that country for the duration of your course. You are also usually
              allowed to stay for a short period (anything from 60 days to four
              months) after completing your studies.
            </p>
            <p>
              C. <b>Temporary Resident Visa (TRV)</b>
            </p>
            <ul style={{ paddingBottom: "10px", paddingLeft: "15px" }}>
              <li style={{ textAlign: "justify" }}>
                {" "}
                <b>Tourist visa</b> – a tourist visa (also known as a travel
                visa) allows you to travel to a foreign country for a set amount
                of time. These visas do not entitle you to work or participate
                in any business activities while you are in the country.
              </li>
              <li style={{ textAlign: "justify" }}>
                {" "}
                <b>Transit visa</b> – a transit visa allows you to pass through
                another country on route to your destination country. You will
                usually need one if you will be in the transit country for more
                than a few hours. In some countries, you may need one if you
                will be going through immigration control to collect your
                luggage or catch a connecting flight.
              </li>
              <li style={{ textAlign: "justify" }}>
                {" "}
                <b>Spousal visa</b> – a spousal visa allows you to visit your
                spouse if you are both from different countries. These visas
                entitle you to visit for two years and apply for residency after
                five years (although the rules and requirements vary from
                country to country).
              </li>
            </ul>
            <p>
              D. <b>Business visa (BV)</b> – a business visa allows you to
              conduct business and engage in business activities in another
              country. These visas are granted to individuals who are attending
              a business conference or travelling to another country to do
              business with another company. You will need to show that you are
              not receiving any income from the country.{" "}
              <b>Investor visa, Entrepreneur visa, Exceptional talent visa</b>{" "}
              generally falls in this category.
            </p>
          </div>
        </div>
        <div class="about-shape">
          <div class="shape shape--1">
            <div class="shape-inner" data-parallax='{"x":-50,"y":-80}'>
              <img src="assets/img/shape/a_shape1.png" alt="" />
            </div>
          </div>
          <div class="shape shape--2" style={{ top: "70%", right: "7%" }}>
            <div class="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/a_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* What is a visa end  */}

      {/* <!-- GO FOREN  start --> */}
      <section className="blog pb-130">
        <div className="container">
          <div className="blog-wrap">
            <div className="sec-title mb-60 text-center">
              <p>
                GO FOREN provides service in the area of immigration/ PR visa,
                Student visa, visitor visa and entrepreneur / business visa. The
                immigration segment (a core specialisation) provides end to end
                support to clients/aspirants who aspire to work and settle in a
                new prospective country. The support by us is provided not just
                at the initial stages of counselling, evaluation, application
                and subsequent immigration, but also extends to air ticketing
                services, foreign exchange services, and even go far as to
                provide accommodation in new destination, travel insurance,
                arrange for a transfer from the airport of the new country
                within a short period of successful launching of its overseas
                segment.
              </p>
            </div>
            <div className="row justify-content-md-center mt-none-30">
              <div className="col-lg-4 col-md-6 mt-30 d-flex">
                <div className="xb-blog w-100 d-flex flex-column">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img src="assets/img/blog/img_01.jpg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3
                        className="xb-item--title border-effect"
                        style={{ display: "flex", textAlign: "center" }}
                      >
                        <a href="blog-single.html">Immigration - PR Visa</a>
                      </h3>
                      <p style={{ marginBottom: "20px" }}>
                        Any foreign national who wishes to relocate to any other
                        country, on a permanent basis need an immigration visa
                        or in general terms called a PR (permanent residency) of
                        a particular country.
                      </p>
                      <a
                        className="xb-item--link "
                        href="blog-single.html"
                        style={{ color: "#000", fontSize: "20px" }}
                      >
                        Read the article
                        <span>
                          <img src="assets/img/icon/right_arrow.svg" alt="" />
                        </span>
                      </a>
                    </div>
                    <a
                      className="xb-overlay xb-overlay-link"
                      href="blog-single.html"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-30 d-flex">
                <div className="xb-blog w-100 d-flex flex-column">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <a href="blog-single.html">
                        <img src="assets/img/blog/img_02.jpg" alt="" />
                      </a>
                    </div>
                    <div className="xb-item--holder">
                      <h3
                        className="xb-item--title border-effect"
                        style={{ display: "flex", textAlign: "center" }}
                      >
                        <a href="blog-single.html">Student Visa.</a>
                      </h3>
                      <p style={{ marginBottom: "20px" }}>
                        Most countries will issue student visas in order to
                        allow foreign students to attend school within their
                        borders. However, in most cases the student must be
                        enrolled at a postsecondary institution of higher
                        learning. Foreign exchange students must..
                      </p>
                      <a
                        className="xb-item--link"
                        href="blog-single.html"
                        style={{ color: "#000", fontSize: "20px" }}
                      >
                        Read the article
                        <span>
                          <img src="assets/img/icon/right_arrow.svg" alt="" />
                        </span>
                      </a>
                    </div>
                    <a
                      className="xb-overlay xb-overlay-link"
                      href="blog-single.html"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-30 d-flex">
                <div className="xb-blog w-100 d-flex flex-column">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <a href="blog-single.html">
                        <img src="assets/img/blog/img_03.jpg" alt="" />
                      </a>
                    </div>
                    <div className="xb-item--holder">
                      <h3
                        className="xb-item--title border-effect"
                        style={{ display: "flex", textAlign: "center" }}
                      >
                        <a href="blog-single.html">Visitor Visa</a>
                      </h3>
                      <p style={{ marginBottom: "20px" }}>
                        Tourist/Visitors visas are conditional authorization
                        granted by a country to foreigners to enter and
                        temporarily remain within that country. Visas typically
                        include limits on the duration of the foreigner's stay,
                        territory within the country they...
                      </p>
                      <a
                        className="xb-item--link"
                        href="blog-single.html"
                        style={{ color: "#000", fontSize: "20px" }}
                      >
                        Read the article
                        <span>
                          <img src="assets/img/icon/right_arrow.svg" alt="" />
                        </span>
                      </a>
                    </div>
                    <a
                      className="xb-overlay xb-overlay-link"
                      href="blog-single.html"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-30 d-flex">
                <div className="xb-blog w-100 d-flex flex-column">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <a href="blog-single.html">
                        <img src="assets/img/blog/img_02.jpg" alt="" />
                      </a>
                    </div>
                    <div className="xb-item--holder">
                      <h3
                        className="xb-item--title border-effect"
                        style={{ display: "flex", textAlign: "center" }}
                      >
                        <a href="blog-single.html">Investor Visa</a>
                      </h3>
                      <p style={{ marginBottom: "20px" }}>
                      Investor Visas allow you to invest in an overseas country where you can settle permanently. The minimum amount of investment varies from country to country. Visas are issued to businessmen and self employed people who..
                      </p>
                      <a
                        className="xb-item--link"
                        href="blog-single.html"
                        style={{ color: "#000", fontSize: "20px" }}
                      >
                        Read the article
                        <span>
                          <img src="assets/img/icon/right_arrow.svg" alt="" />
                        </span>
                      </a>
                    </div>
                    <a
                      className="xb-overlay xb-overlay-link"
                      href="blog-single.html"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-30 d-flex">
                <div className="xb-blog w-100 d-flex flex-column">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <a href="blog-single.html">
                        <img src="assets/img/blog/img_03.jpg" alt="" />
                      </a>
                    </div>
                    <div className="xb-item--holder">
                      <h3
                        className="xb-item--title border-effect"
                        style={{ display: "flex", textAlign: "center" }}
                      >
                        <a href="blog-single.html">Work Permit Visa</a>
                      </h3>
                      <p style={{ marginBottom: "20px" }}>
                        A work Permit visa is a type of visa that grants the holder authorization to accept employment in a foreign country.
                      </p>
                      <a
                        className="xb-item--link"
                        href="blog-single.html"
                        style={{ color: "#000", fontSize: "20px" }}
                      >
                        Read the article
                        <span>
                          <img src="assets/img/icon/right_arrow.svg" alt="" />
                        </span>
                      </a>
                    </div>
                    <a
                      className="xb-overlay xb-overlay-link"
                      href="blog-single.html"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xb-blog-bg"
              data-bg-color="#EDF3F5"
              data-background="assets/img/bg/blog_bg.png"
            ></div>
          </div>
        </div>
      </section>
      {/* <!-- GO FOREN  end --> */}
      <FooterTop />
      <Footer />
    </div>
  );
}
