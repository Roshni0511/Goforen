import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import $ from "jquery";
import SuccessStories from "../component/SuccessStories";

export default function NewHome() {
  const scrollRef = useRef(null);
  const itemHeight = 70;
  const [index, setIndex] = useState(0);
  const items = [
    "Poland Introduced e-Konsulat for Work Visa Applications in India.",
    "Australian Universities Impose Restrictions on Students from Six Indian Regions.",
    "Stay and Work in Canada: Apply for a TFWP Work Permit After PGWP Expiry.",
    "Latvia to Enforce Stricter Entry Rules for Third-Country Nationals Without Local Visa or Permit.",
    "CRS Scores Drop Sharply After Removal of Arranged Employment Points.",
    "UAE Expands Visa on Arrival for Indian Nationals.",
    "EU Urges Fast-Track of ETIAS &amp; EES to Secure Schengen Borders.",
    "Latvia to Tighten Border Rules for Third-Country Nationals Without Latvian Visa or Residence Permit.",
  ];
  const visa = [
    "Temporary Residents Can Now Apply for the Canada Child Benefit (CCB).",
    "Canada&amp;rsquo;s CRS System: How It Works.",
    "Canada to End LMIA Job Offer Points in Express Entry.",
    "New Zealand Increases Visa Fees and Charges, Introduces New Immigration Requirements&amp;quot",
    "Canada Child Benefit: Eligibility and Payment Dates for Temporary Residents.",
  ];

  // Add a duplicate of the first item to the end for looping
  const extendedItems = [...items, items[0]];
  const [currentSlide, setCurrentSlide] = useState(0);
  const extendvisa = [...visa, visa[0]];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transition = "top 0.5s ease-in-out";
      scrollRef.current.style.top = `-${index * itemHeight}px`;

      // Reset to start if at the cloned last item
      if (index === items.length) {
        setTimeout(() => {
          scrollRef.current.style.transition = "none"; // disable animation
          scrollRef.current.style.top = "0px"; // reset to start
          setIndex(1); // move to second item
        }, 600); // wait until transition finishes
      }
    }
  }, [index]);

  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "/assets/pic/hero_bg.jpg";
    setBackground(backgroundUrl);
  }, []);
  // data-background img end
  // data-background img start
  const [background5, setBackground5] = useState("");

  useEffect(() => {
    const backgroundUrl5 = "assets/img/bg/package_bg.jpg";
    setBackground5(backgroundUrl5);
  }, []);
  // data-background img end
  //   category slider start
  const images = [
    "/assets/pic/media1.jpeg",
    "/assets/pic/media2.jpeg",
    "/assets/pic/media3.jpg",
    "/assets/pic/media4.jpg",
    "/assets/pic/media5.jpg",
    "/assets/pic/media6.jpg",
    "/assets/pic/media7.jpg",
    "/assets/pic/media8.png",
  ];
  //   category slider end
  // data-background img start
  const [background1, setBackground1] = useState("");

  useEffect(() => {
    const backgroundUrl1 = "assets/img/bg/service_bg.png";
    setBackground1(backgroundUrl1);
  }, []);
  // data-background img end
  // data-background img start
  const [background2, setBackground2] = useState("");

  useEffect(() => {
    const backgroundUrl2 = "/assets/pic/img_01coure.jpg";
    setBackground2(backgroundUrl2);
  }, []);
  // data-background img end
  // data-background img start
  const [background3, setBackground3] = useState("");

  useEffect(() => {
    const backgroundUrl3 =
      "/assets/pic/cards.jpg";
    setBackground3(backgroundUrl3);
  }, []);
  // data-background img end

  //counter start
  const useCounter = (end, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  const visaCategories = useCounter(20, 1000);
  const visaProcess = useCounter(30, 1200);
  const successfulProjects = useCounter(40, 1200);
  const proConsultants = useCounter(180, 1400);
  //counter end

  //   FAQ start
  useEffect(() => {
    // Accordion Box functionality (mimicking your jQuery code)
    if ($(".accordion_box").length) {
      $(".accordion_box").on("click", ".acc-btn", function () {
        const outerBox = $(this).parents(".accordion_box");
        const target = $(this).parents(".accordion");

        if ($(this).next(".acc_body").is(":visible")) {
          $(this).removeClass("active");
          $(this).next(".acc_body").slideUp(300);
          $(outerBox).children(".accordion").removeClass("active-block");
        } else {
          $(outerBox).find(".accordion .acc-btn").removeClass("active");
          $(this).addClass("active");
          $(outerBox).children(".accordion").removeClass("active-block");
          $(outerBox).find(".accordion").children(".acc_body").slideUp(300);
          target.addClass("active-block");
          $(this).next(".acc_body").slideDown(300);
        }
      });
    }

    // Cleanup the event listener on component unmount
    return () => {
      $(".accordion_box").off("click", ".acc-btn");
    };
  }, []);
  //FAQ end

  // data-background img start
  const [background4, setBackground4] = useState("");

  useEffect(() => {
    const backgroundUrl4 = "assets/img/bg/blog_bg.png";
    setBackground4(backgroundUrl4);
  }, []);
  // data-background img end
  return (
    <div>
      <Navbar />
      {/* <!-- hero start --> */}
      <section
        className="hero hero__style-one bg_img"
        style={{
          backgroundImage: `url(${background})`,
          // minHeight: '400px',
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="hero__content">
                <h1 className="wow skewIn">
                  Get a free assessment /<br />
                  advice
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration=".6s"
                >
                  Fill up a quick inquiry form / Upload your cv and we will help
                  you out with your queries!
                </p>

                <div
                  className="btns wow fadeInUp mt-5"
                  data-wow-delay="600ms"
                  data-wow-duration=".6s"
                >
                  <a className="thm-btn" href="/Contact">
                    Quick Inquiry
                  </a>
                  <a className="thm-btn thm-btn--white" href="/Upload-cv">
                    Upload CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- hero end --> */}

      {/* <!-- package start --> */}
      <section
        class="package package-bg pos-rel pt-120 pb-120"
        style={{
          backgroundImage: `url(${background4})`,
          // minHeight: '400px',
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="container">
          <div class="sec-title sec-title--travel text-center mb-55">
            <h2>Latest News</h2>
          </div>
          <div class="row mt-none-30 d-flex justify-content-center">
            <div class="col-lg-10 co-12">
              <div class="xb-package mt-30">
                <div class="xb-item--inner">
                  <div class="xb-item--img">
                    <a
                      href="#!"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        src="/assets/pic/visanews.png"
                        alt=""
                        width={"300px"}
                      />
                    </a>
                  </div>
                  <div className="scroll-container mt-3" id="scrollBox">
                    <div className="scroll-inner" ref={scrollRef}>
                      {extendedItems.map((text, i) => (
                        <div className="scroll-item" key={i}>
                          <div
                            className="xb-item--description"
                            style={{ fontSize: "14px", textAlign: "center" }}
                          >
                            {text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      style={{
                        padding: "10px 20px",
                        background: "#00cc99",
                        borderRadius: "10px",
                      }}
                    >
                      <a style={{ color: "#fff" }} href="/News">
                        View All
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-4 col-12">
              <div class="xb-package mt-30">
                <div class="xb-item--inner">
                  <div class="xb-item--img">
                    <a href="#!">
                      <img src="/assets/pic/Plane-on-takeoff.webp" alt="" />
                    </a>
                  </div>
                  <div class="xb-item--holder">
                    <h2 class="xb-item--title ul_li_center mb-2">
                      <a href="#!">ACTIVITIES</a>
                    </h2>
                    <p style={{ textAlign: "center" }}>Comming Soon!</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- package end --> */}

      {/* <!-- visa type start --> */}
      <section className="visa type pt-100 pb-135">
        <div className="container">
          <div className="service-wrap pos-rel">
            <div className="service-img-wrap">
              <div
                className="service-bg"
                style={{
                  backgroundImage: `url(${background1})`,
                  // minHeight: '475px',
                  position: "absolute",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="service-img wow skewIn"
                data-wow-delay="100ms"
                style={{
                  backgroundImage: `url(${background2})`,
                  // minHeight: '400px',
                  position: "absolute",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="sec-title wow skewIn pt-120">
              <h2 className="mb-20">Courses </h2>
              <p>
                Explore a wide range of career-focused courses tailored <br />{" "}
                to help you qualify for your desired visa destination.
              </p>
            </div>
            <div className="row justify-content-md-center mt-none-30">
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="xb-service">
                  <div className="xb-item--inner">
                    <div className="xb-item--icon mb-50">
                      <img src="assets/img/icon/sv_01.svg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title mb-20">
                        <a href="/IELTS"> IELTS</a>
                      </h3>
                      <div className="xb-item--description">
                        Prepare for the globally recognized IELTS exam to
                        enhance your chances of studying or migrating abroad.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="xb-service">
                  <div className="xb-item--inner">
                    <div className="xb-item--icon color2 mb-50">
                      <img src="assets/img/icon/sv_02.svg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title mb-20">
                        <a href="/TOEFLIBT">TOEFL IBT</a>
                      </h3>
                      <div className="xb-item--description">
                        Boost your English proficiency with TOEFL iBT, accepted
                        by universities and immigration bodies worldwide.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-30"></div>
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="xb-service">
                  <div className="xb-item--inner">
                    <div className="xb-item--icon color3 mb-50">
                      <img src="assets/img/icon/sv_03.svg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title mb-20">
                        <a href="/GRE">GRE</a>
                      </h3>
                      <div className="xb-item--description">
                        Achieve your academic and career goals with the GRE,
                        essential for graduate admissions globally.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="xb-service">
                  <div className="xb-item--inner">
                    <div className="xb-item--icon color4 mb-50">
                      <img src="assets/img/icon/sv_04.svg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title mb-20">
                        <a href="/PTE"> PTE</a>
                      </h3>
                      <div className="xb-item--description">
                        Get fast, reliable results with PTE Academic — ideal for
                        study, work, or migration.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="xb-service">
                  <div className="xb-item--inner">
                    <div className="xb-item--icon color5 mb-50">
                      <img src="assets/img/icon/sv_05.svg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title mb-20">
                        <a href="/SAT">SAT</a>
                      </h3>
                      <div className="xb-item--description">
                        Open doors to top international universities with strong
                        SAT scores designed for undergraduate programs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- visa type end --> */}

      {/* <!-- about start --> */}
      <section className="about pos-rel pb-130">
        <div className="container">
          <div className="sec-title mb-55">
            <h2 className="mb-30 wow skewIn">Why Us</h2>
            <p>
              GO FOREN offers services for immigration/PR visas, student visas,
              visitor visas, <br /> and business/entrepreneur visas. We provide
              complete support — from counseling <br /> and application to visa
              processing. Our assistance also includes air ticketing, foreign{" "}
              <br /> exchange, travel insurance, accommodation, and airport
              transfers, ensuring a smooth <br /> transition to your new country
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="about__content">
                <ul className="about-list ul_li list-unstyled">
                  <li>
                    <a href="/Immigration-pr-visa">
                      <div className="xb-item--inner">
                        <div className="xb-item--number">1</div>
                        <div className="xb-item--holder">
                          <h3 className="xb-item--title mb-10">
                            Immigration - PR Visa
                          </h3>
                          <div className="xb-item--description">
                            Settle Abroad with Permanent Residency Support
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/Student-visa">
                      <div className="xb-item--inner">
                        <div className="xb-item--number color-2">2</div>
                        <div className="xb-item--holder">
                          <h3 className="xb-item--title mb-10">Student Visa</h3>
                          <div className="xb-item--description">
                            Study Overseas with Full Visa Guidance
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/Visitor-visa">
                      <div className="xb-item--inner">
                        <div className="xb-item--number color-3">3</div>
                        <div className="xb-item--holder">
                          <h3 className="xb-item--title mb-10">Visitor Visa</h3>
                          <div className="xb-item--description">
                            Travel Abroad Hassle-Free with Our Help
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/Investor-visa">
                      <div className="xb-item--inner">
                        <div className="xb-item--number color-4">4</div>
                        <div className="xb-item--holder">
                          <h3 className="xb-item--title mb-10">
                            Investor Visa
                          </h3>
                          <div className="xb-item--description">
                            Invest and Relocate with Business Visa
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/Work-permit-visa">
                      <div className="xb-item--inner">
                        <div className="xb-item--number color-5">5</div>
                        <div className="xb-item--holder">
                          <h3 className="xb-item--title mb-10">
                            Work Permit Visa
                          </h3>
                          <div className="xb-item--description">
                            Build Your Career Abroad with Ease
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about__img">
          <img
            src="/assets/pic/why.png"
            alt=""
          />
        </div>
      </section>
      {/* <!-- about end --> */}

      {/* <!-- counter start --> */}
      <section
        className="counter pt-120 pb-120 bg_img"
        style={{
          backgroundImage: `url(${background3})`,
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="sec-title mb-45">
            <h2 className="mb-40 wow skewIn">
              Discovering Our Biggest Successes: The Stories <br />
              <span> Behind Our Great Achievements</span>
            </h2>
            <p>
              Embarking on a journey to reunite families, we recently had the
              privilege of assisting a <br />
              couple in securing their spouse's visa.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="xb-counter ul_li">
                <div className="xb-item--item ul_li">
                  <div className="xb-item--icon">
                    <img src="assets/img/icon/c_01.svg" alt="" />
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--number">
                      <span className="xbo">{visaCategories}</span>
                      <span className="suffix">+</span>
                    </h2>
                    <h5 className="xb-item--title">Visa Categories</h5>
                  </div>
                </div>
                <div className="xb-item--item style-2 ul_li">
                  <div className="xb-item--icon">
                    <img src="assets/img/icon/c_02.svg" alt="" />
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--number">
                      <span className="xbo">
                        {visaProcess.toLocaleString()}
                      </span>
                      <span className="suffix">K+</span>
                    </h2>
                    <h5 className="xb-item--title">Visa Process</h5>
                  </div>
                </div>
                <div className="xb-item--item style-3 ul_li">
                  <div className="xb-item--icon">
                    <img src="assets/img/icon/c_03.svg" alt="" />
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--number">
                      <span className="xbo">
                        {successfulProjects.toLocaleString()}
                      </span>
                      <span className="suffix">K+</span>
                    </h2>
                    <h5 className="xb-item--title">Successful Project</h5>
                  </div>
                </div>
                <div className="xb-item--item style-4 ul_li">
                  <div className="xb-item--icon">
                    <img src="assets/img/icon/c_04.svg" alt="" />
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--number">
                      <span className="xbo">
                        {proConsultants.toLocaleString()}
                      </span>
                      <span className="suffix">K+</span>
                    </h2>
                    <h5 className="xb-item--title">Pro Consultants</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- counter end --> */}

      {/* <!-- country start --> */}
      <section class="country pt-120 pb-130">
        <div class="container">
          <div class="row mb-30 align-items-center">
            <div class="col-lg-6">
              <div class="sec-title">
                <h2 class="mb-20 wow skewIn">
                  Make Your Choice for the <br /> <span>Preferred Nation</span>
                </h2>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
              <div class="sec-title mb-20">
                <p>
                  Choosing the ideal destination for immigration is a pivotal
                  decision that can shape the trajectory of your{" "}
                </p>
              </div>
            </div>
          </div>
          <ul
            class="xb-country-nav nav nav-tabs ul_li_between mb-65"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="xbc-tab1"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane1"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane1"
                aria-selected="true"
              >
                Europe
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="xbc-tab2"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane2"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane2"
                aria-selected="false"
              >
                North America
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="xbc-tab3"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane3"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane3"
                aria-selected="false"
              >
                Asia
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="xbc-tab4"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane4"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane4"
                aria-selected="false"
              >
                Latin America
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="xbc-tab5"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane5"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane5"
                aria-selected="false"
              >
                Oceania
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="xbc-tab6"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane6"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane6"
                aria-selected="false"
              >
                Africa
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="xbc-tab7"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane7"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane7"
                aria-selected="false"
              >
                Antarctica
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane animated fadeInUp show active"
              id="xbc-tab-pane1"
              role="tabpanel"
              aria-labelledby="xbc-tab1"
              tabindex="0"
            >
              <div class="xb-country ul_li">
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">France</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane animated fadeInUp"
              id="xbc-tab-pane2"
              role="tabpanel"
              aria-labelledby="xbc-tab2"
              tabindex="0"
            >
              <div class="xb-country ul_li">
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">France</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Italy</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane animated fadeInUp"
              id="xbc-tab-pane3"
              role="tabpanel"
              aria-labelledby="xbc-tab3"
              tabindex="0"
            >
              <div class="xb-country ul_li">
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">France</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Iceland</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane animated fadeInUp"
              id="xbc-tab-pane4"
              role="tabpanel"
              aria-labelledby="xbc-tab4"
              tabindex="0"
            >
              <div class="xb-country ul_li">
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">France</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Italy</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane animated fadeInUp"
              id="xbc-tab-pane5"
              role="tabpanel"
              aria-labelledby="xbc-tab5"
              tabindex="0"
            >
              <div class="xb-country ul_li">
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">France</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane animated fadeInUp"
              id="xbc-tab-pane6"
              role="tabpanel"
              aria-labelledby="xbc-tab6"
              tabindex="0"
            >
              <div class="xb-country ul_li">
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">France</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Germany</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane animated fadeInUp"
              id="xbc-tab-pane7"
              role="tabpanel"
              aria-labelledby="xbc-tab7"
              tabindex="0"
            >
              <div class="xb-country ul_li">
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">France</h3>
                  </a>
                </div>
                <div class="xb-item--item">
                  <a href="" class="xb-item--inner ul_li">
                    <div class="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 class="xb-item--title">Australia</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- country end --> */}

      {/* <!-- team start --> */}
      <section class="team pb-120">
        <div class="container">
          <div class="team-wrap pos-rel">
            <div class="row mt-none-30">
              <div class="col-xl-6 mt-30">
                <div class="sec-title mb-45">
                  <h2 class="mb-40 wow skewIn">
                    Our trusted immigration <br /> <span> support team</span>
                  </h2>
                  <p>
                    At the heart of our commitment to providing exceptional
                    immigration solutions stands
                  </p>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mt-30">
                <div class="xb-team text-center">
                  <div class="xb-item--inner" data-parallax='{"scale" : 1}'>
                    <div class="xb-item--img">
                      <img src="/assets/pic/profile1.jpg" alt="" />
                    </div>
                    <div class="xb-item--holder">
                      <h3 class="xb-item--name">
                        <a href="">Janvi Patel</a>
                      </h3>
                      <span class="xb-item--designation">Legal Advisor</span>
                    </div>
                    <ul class="xb-item--social list-unstyled">
                      <li>
                        <a href="#!">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
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
                      <h3 class="xb-item--name">
                        <a href="">Vivek Sharma</a>
                      </h3>
                      <span class="xb-item--designation">
                        Education Counsellor
                      </span>
                    </div>
                    <ul class="xb-item--social list-unstyled">
                      <li>
                        <a href="#!">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
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
                      <h3 class="xb-item--name">
                        <a href="">Kunal Mehta</a>
                      </h3>
                      <span class="xb-item--designation">Visa Specialist</span>
                    </div>
                    <ul class="xb-item--social list-unstyled">
                      <li>
                        <a href="#!">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
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
                      <h3 class="xb-item--name">
                        <a href="">Krishna Varma</a>
                      </h3>
                      <span class="xb-item--designation">Visa Coordinator</span>
                    </div>
                    <ul class="xb-item--social list-unstyled">
                      <li>
                        <a href="#!">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
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
                      <h3 class="xb-item--name">
                        <a href="">Jay Patel</a>
                      </h3>
                      <span class="xb-item--designation">General Manager</span>
                    </div>
                    <ul class="xb-item--social list-unstyled">
                      <li>
                        <a href="#!">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
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
                      <h3 class="xb-item--name">
                        <a href="">Drashti Vora</a>
                      </h3>
                      <span class="xb-item--designation">Case Manager</span>
                    </div>
                    <ul class="xb-item--social list-unstyled">
                      <li>
                        <a href="#!">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="xb-team-bg">
              <div class="xb-bg xb-bg--1"></div>
              <div class="xb-bg xb-bg--2"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- team end --> */}
      <SuccessStories />
      {/* <!-- faq start --> */}
      <section className="faq pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="xb-faq-content">
                <div className="sec-title mb-125">
                  <h2 className="mb-30 wow skewIn">
                    Common questions <br /> <span>answered</span>
                  </h2>
                  <p>
                    At the heart of our commitment to providing <br />{" "}
                    exceptional immigration solutions stands our trusted
                  </p>
                </div>
                <div className="faq-img">
                  <img src="/assets/pic/faq_img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="xb-faq">
                <ul className="accordion_box clearfix">
                  <li className="accordion block active-block">
                    <div className="acc-btn">
                      What services do you offer?
                      <span className="arrow"></span>
                    </div>
                    <div className="acc_body current">
                      <div className="content">
                        <p>
                          We offer comprehensive immigration and visa consulting
                          services, <br /> including visa application
                          assistance, document preparation,
                        </p>
                        <ul>
                          <li>
                            <i className="far fa-check"></i>Comprehensive Visa
                            Assistance
                          </li>
                          <li>
                            <i className="far fa-check"></i>Visa Category
                            Expertise
                          </li>
                          <li>
                            <i className="far fa-check"></i>Transparency and
                            Communication
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      What is the consultation process like?
                      <span className="arrow"></span>
                    </div>
                    <div className="acc_body">
                      <div className="content">
                        <p>
                          We offer comprehensive immigration and visa consulting
                          services, <br /> including visa application
                          assistance, document preparation,
                        </p>
                        <ul>
                          <li>
                            <i className="far fa-check"></i>Comprehensive Visa
                            Assistance
                          </li>
                          <li>
                            <i className="far fa-check"></i>Visa Category
                            Expertise
                          </li>
                          <li>
                            <i className="far fa-check"></i>Transparency and
                            Communication
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      How much do your services cost?
                      <span className="arrow"></span>
                    </div>
                    <div className="acc_body">
                      <div className="content">
                        <p>
                          We offer comprehensive immigration and visa consulting
                          services, <br /> including visa application
                          assistance, document preparation,
                        </p>
                        <ul>
                          <li>
                            <i className="far fa-check"></i>Comprehensive Visa
                            Assistance
                          </li>
                          <li>
                            <i className="far fa-check"></i>Visa Category
                            Expertise
                          </li>
                          <li>
                            <i className="far fa-check"></i>Transparency and
                            Communication
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      How do I get started with your services?
                      <span className="arrow"></span>
                    </div>
                    <div className="acc_body">
                      <div className="content">
                        <p>
                          We offer comprehensive immigration and visa consulting
                          services, <br /> including visa application
                          assistance, document preparation,
                        </p>
                        <ul>
                          <li>
                            <i className="far fa-check"></i>Comprehensive Visa
                            Assistance
                          </li>
                          <li>
                            <i className="far fa-check"></i>Visa Category
                            Expertise
                          </li>
                          <li>
                            <i className="far fa-check"></i>Transparency and
                            Communication
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      What is your success rate with visa applications?
                      <span className="arrow"></span>
                    </div>
                    <div className="acc_body">
                      <div className="content">
                        <p>
                          We offer comprehensive immigration and visa consulting
                          services, <br /> including visa application
                          assistance, document preparation,
                        </p>
                        <ul>
                          <li>
                            <i className="far fa-check"></i>Comprehensive Visa
                            Assistance
                          </li>
                          <li>
                            <i className="far fa-check"></i>Visa Category
                            Expertise
                          </li>
                          <li>
                            <i className="far fa-check"></i>Transparency and
                            Communication
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- faq end --> */}

      {/* <!-- category start --> */}
      <div style={{ margin: "60px 0px " }}>
        <div className="d-flex justify-content-center">
          <span className="wow skewIn sec-title--sub">
            <img src="assets/img/icon/h_star.png" alt="" />
            Media
            <img src="assets/img/icon/h_star.png" alt="" />
          </span>
        </div>
        <Swiper
          className="xb-category-slider"
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={7}
          loop={true}
          loopAdditionalSlides={30}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          speed={400}
          breakpoints={{
            1600: { slidesPerView: 7 },
            1200: { slidesPerView: 6 },
            992: { slidesPerView: 5 },
            768: { slidesPerView: 4 },
            576: { slidesPerView: 3 },
            0: { slidesPerView: 2 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <!-- category end --> */}

      {/* <!-- blog start --> */}
      <section className="blog pb-130">
        <div className="container">
          <div className="blog-wrap">
            <div className="sec-title mb-60 text-center">
              <h2 className="mb-30 wow skewIn">
                Cast Your Eyes Upon Our <br /> <span> Newest Article</span>
              </h2>
              <p style={{ textAlign: "center" }}>
                Explore the most recent addition to our informative articles
              </p>
            </div>
            <div className="row justify-content-md-center mt-none-30">
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="xb-blog">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img src="/assets/pic/img_01blog.jpg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <span className="xb-item--category">PR VISA</span>

                      <h3 className="xb-item--title border-effect">
                        <a href="/Blog">
                          A PR Visa allows you to live and work in ...
                        </a>
                      </h3>
                      <a className="xb-item--link" href="/Blog">
                        Read More
                        <span>
                          <img src="assets/img/icon/right_arrow.svg" alt="" />
                        </span>
                      </a>
                    </div>
                    <a className="xb-overlay xb-overlay-link" href="/Blog"></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="xb-blog">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <a href="/Blog">
                        <img src="/assets/pic/img_03blog.jpg" alt="" />
                      </a>
                    </div>
                    <div className="xb-item--holder">
                      <a className="xb-item--category color-2" href="#!">
                        STUDENT VISA
                      </a>

                      <h3 className="xb-item--title border-effect">
                        <a href="/Blog">
                          A Student Visa allows you to study full-time in ..
                        </a>
                      </h3>
                      <a className="xb-item--link" href="/Blog">
                        Read More
                        <span>
                          <img src="assets/img/icon/right_arrow.svg" alt="" />
                        </span>
                      </a>
                    </div>
                    <a className="xb-overlay xb-overlay-link" href="/Blog"></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-30">
                <div className="xb-blog">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <a href="/Blog">
                        <img src="/assets/pic/img_02blog.jpg" alt="" />
                      </a>
                    </div>
                    <div className="xb-item--holder">
                      <a className="xb-item--category color-3" href="#!">
                        INVESTOR VISA
                      </a>

                      <h3 className="xb-item--title border-effect">
                        <a href="/Blog">
                          An Investor Visa allows individuals to obtain ..
                        </a>
                      </h3>
                      <a className="xb-item--link" href="/Blog">
                        Read More
                        <span>
                          <img src="assets/img/icon/right_arrow.svg" alt="" />
                        </span>
                      </a>
                    </div>
                    <a className="xb-overlay xb-overlay-link" href="/Blog"></a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xb-blog-bg"
              style={{
                backgroundImage: `url(${background4})`,
                // minHeight: '400px',
                // position: 'absolute',
                background: "#EDF3F5",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </section>
      {/* <!-- blog end --> */}
    
  {/* <!-- newsletter start --> */}
  <section className="newsletter mt-5">
        <div className="container">
          <div className="xb-newsletter pos-rel">
            <div className="row">
              <div className="col-lg-7">
                <div className="">
                  <div className="xb-item--holder mb-30">
                    <span>newsletter</span>
                    <h3>
                      Subscribe to the free newsletter to receive the latest{" "}
                      <br /> news & case studies!
                    </h3>
                  </div>
                  <form className="xb-item--form" action="#!">
                    <input type="text" placeholder="Your e-mail address" />
                    <button className="thm-btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="xb-newsletter__img">
              <img src="/assets/pic/BannerMob.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- newsletter end --> */}

      {/* <!-- contact start --> */}
      <section className="contact contact-pt gray-bg">
        <div className="container">
          <div className="xb-contact pos-rel">
            <div className="row">
              <div className="col-lg-6">
                <div className="xb-item--inner">
                  <div className="xb-item--holder mb-25">
                    <span>
                      <img src="assets/img/icon/n_pad.svg" alt="" />
                      Contact Us
                    </span>
                    <h3>
                      Do you have questions or went more <br /> information?
                    </h3>
                  </div>
                  <form className="xb-item--form contact-from" action="#!">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_user.svg" alt="" />
                          </span>
                          <input type="text" placeholder="Goladria Gomez" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_mail.svg" alt="" />
                          </span>
                          <input
                            type="text"
                            placeholder="gofren@services.com"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_select.svg" alt="" />
                          </span>
                         
                          <div className="nice-select" tabindex="0"><span className="current">Student Visa</span><ul className="list"><li data-value="1" className="option selected focus">Student Visa</li><li data-value="2" className="option">Tourist Visa</li><li data-value="3" className="option">Commercial Visa</li><li data-value="4" className="option">Residence Visa</li><li data-value="4" className="option">Working Visa</li></ul></div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_call.svg" alt="" />
                          </span>
                          <input type="text" placeholder="+888 -8867 3333" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_message.svg" alt="" />
                          </span>
                          <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Write Your Message..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="thm-btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="google-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1592852423971!5m2!1sen!2sbd"></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact end --> */}
      
      <Footer />
    </div>
  );
}
