import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SchoolIcon from "@mui/icons-material/School";
import $ from "jquery";
import SuccessStories from "../component/SuccessStories";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FooterHome from "./FooterHome";
import axios from 'axios';

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

export default function NewHome() {

    const [galleryData, setGalleryData] = useState([])
  
    useEffect(() => {
      axios.get('http://localhost:8000/get_gallery_data/')
        .then((res) => {
          setGalleryData(res.data)
        })
        .catch((err) => {
          console.error('Failed to fetch gallery data:', err)
        })
    }, [])

  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_course_data/')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => console.error("Failed to fetch Courses:", err));
  }, []);

  const [TeamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_team_data/')
      .then((res) => res.json())
      .then((data) => {
        setTeamData(data);
      })
      .catch((err) => console.error("Failed to fetch Team Data:", err));
  }, []);

  const [visaServices, setVisaServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_visa_services/')
      .then((res) => res.json())
      .then((data) => {
        setVisaServices(data);
      })
      .catch((err) => console.error("Failed to fetch visa services:", err));
  }, []);

  const brandImages = [
    "/assets/pic/svisa.jpeg",
    "/assets/pic/Investor-Visa-1200x675.jpg",
    "/assets/pic/VisitorVisaFI (1).jpg",
    "/assets/pic/visatypelogobg5 (1).png",
    "/assets/pic/svisa.jpeg",
    "/assets/pic/Investor-Visa-1200x675.jpg",
    "/assets/pic/VisitorVisaFI (1).jpg",
    "/assets/pic/visatypelogobg5 (1).png",
  ];
  // data-background img start
  const [background12, setBackground12] = useState("");

  useEffect(() => {
    const backgroundUrl12 = "assets/img/bg/blog_bg.png";
    setBackground12(backgroundUrl12);
  }, []);
  // data-background img end
  // data-background img start
  const [background8, setBackground8] = useState("");

  useEffect(() => {
    const backgroundUrl8 = "assets/img/shape/country_shape.png";
    setBackground8(backgroundUrl8);
  }, []);
  // data-background img end
  const scrollRef = useRef(null);
  const itemHeight = 70;
  const [index, setIndex] = useState(0);

  // const items = [
  //   "Poland Introduced e-Konsulat for Work Visa Applications in India.",
  //   "Australian Universities Impose Restrictions on Students from Six Indian Regions.",
  //   "Stay and Work in Canada: Apply for a TFWP Work Permit After PGWP Expiry.",
  //   "Latvia to Enforce Stricter Entry Rules for Third-Country Nationals Without Local Visa or Permit.",
  //   "CRS Scores Drop Sharply After Removal of Arranged Employment Points.",
  //   "UAE Expands Visa on Arrival for Indian Nationals.",
  //   "EU Urges Fast-Track of ETIAS &amp; EES to Secure Schengen Borders.",
  //   "Latvia to Tighten Border Rules for Third-Country Nationals Without Latvian Visa or Residence Permit.",
  // ];

  
  const [items, setItems] = useState([]);
    
  useEffect(() => {
    fetch("http://localhost:8000/get_news_data/")
      .then((res) => res.json())
      .then((data) => {
        const headings = data.map(item => item.heading);
        setItems(headings);
      })
      .catch((err) => console.error("Failed to fetch news data:", err));
  }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:8000/get_news_data/')
  //     .then(response => {
  //       const headings = response.data.map(item => item.heading);
  //       setItems(headings); // Replaces your hardcoded array
  //     })
  //     .catch(error => {
  //       console.error('Error fetching news data:', error);
  //     });
  // }, []);
    

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
    const backgroundUrl = "/assets/pic/mainpage.png";
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
  // data-background img start
  const [background10, setBackground10] = useState("");

  useEffect(() => {
    const backgroundUrl10 = "assets/img/bg/cta_bg.jpg";
    setBackground10(backgroundUrl10);
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
    const backgroundUrl3 = "/assets/pic/cards.jpg";
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
                  <a className="colorcode" href="/Contact">
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
        className="package package-bg pos-rel pt-120 pb-120"
        style={{
          backgroundImage: `url(${background4})`,
          // minHeight: '400px',
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="sec-title sec-title--travel text-center mb-55">
            <h2>Latest News</h2>
          </div>
          <div className="row mt-none-30 d-flex justify-content-center">
            <div className="col-lg-10 co-12">
              <div className="xb-package mt-30">
                <div className="xb-item--inner">
                  <div className="xb-item--img">
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
                            style={{ fontSize: "18px", textAlign: "center" }}
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
            {/* <div className="col-lg-4 col-12">
              <div className="xb-package mt-30">
                <div className="xb-item--inner">
                  <div className="xb-item--img">
                    <a href="#!">
                      <img src="/assets/pic/Plane-on-takeoff.webp" alt="" />
                    </a>
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--title ul_li_center mb-2">
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
      <section className="visa type pb-135">
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
              <div className="sec-title mb-45">
                <h2 className="mb-40 wow skewIn">
                  Courses <br />
                  <span> Build Skills for Global Success</span>
                </h2>
                <p>
                  Explore a wide range of career-focused courses tailored <br />{" "}
                  to help you qualify for your desired visa destination.
                </p>
              </div>
            </div>
<div className="row justify-content-md-center mt-none-30">
  {Courses.map((course, index) => (
    <React.Fragment key={course.id}>
      <div className="col-lg-4 col-md-6 mt-30">
        <div className="xb-service">
          <div className="xb-item--inner">
            <div className={`xb-item--icon color${(index % 5) + 1} mb-50`}>
              <img src={`assets/img/icon/sv_0${(index % 5) + 1}.svg`} alt={course.course_name} />
            </div>
            <div className="xb-item--holder">
              <h3 className="xb-item--title mb-20">
                <a href={`/Course-details?id=${course.id}`}>{course.course_name}</a>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: course.description.replace(/<[^>]+>/g, '').slice(0, 140) + '...',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Insert a blank column after the second item (index 1) */}
      {index === 1 && (
        <div className="col-lg-4 mt-30"></div>
      )}
    </React.Fragment>
  ))}
</div>

          
          </div>
        </div>
      </section>
      {/* <!-- visa type end --> */}

      {/* <!-- country start --> */}
      <div
        style={{
          background: "#edf3f578",
          paddingTop: "120px",
          paddingBottom: "40px",
        }}
      >
        <section className="country pt-md-100 pos-rel  pb-120">
          <div className="xb-country3__wrap ul_li_between">
            <div className="xb-country3">
              <div className="xb-item--inner">
                <div className="xb-item--flag">
                  <img src="assets/img/country/trv_flag_01.png" alt="" />
                </div>
                <h3 className="xb-item--title">Germany</h3>
              </div>
            </div>
            <div className="xb-country3">
              <div className="xb-item--inner">
                <div className="xb-item--flag">
                  <img src="assets/img/country/trv_flag_02.png" alt="" />
                </div>
                <h3 className="xb-item--title">Belgium</h3>
              </div>
            </div>
            <div className="xb-country3">
              <div className="xb-item--inner">
                <div className="xb-item--flag">
                  <img src="assets/img/country/trv_flag_03.png" alt="" />
                </div>
                <h3 className="xb-item--title">Switzerland</h3>
              </div>
            </div>
            <div className="xb-country3">
              <div className="xb-item--inner">
                <div className="xb-item--flag">
                  <img src="assets/img/country/trv_flag_04.png" alt="" />
                </div>
                <h3 className="xb-item--title">Vietnam</h3>
              </div>
            </div>
          </div>
          <div
            className="country-shape"
            style={{
              backgroundImage: `url(${background8})`,
              // minHeight: '400px',
              position: "absolute",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {/* <h2 className="xb-strock-text-cat xb-strock-text">Popular Destination</h2> */}
          <div className="country-icon-shape">
            <div className="shape shape--1">
              <img src="assets/img/icon/cs_01.png" alt="" />
            </div>
            <div className="shape shape--2">
              <img src="assets/img/icon/cs_02.png" alt="" />
            </div>
            <div className="shape shape--3">
              <img src="assets/img/icon/cs_03.png" alt="" />
            </div>
            <div className="shape shape--4">
              <img src="assets/img/icon/cs_04.png" alt="" />
            </div>
          </div>
        </section>
      </div>
      {/* <!-- country end --> */}

      {/* <!-- about start --> */}
      <section className="about pos-rel pt-120 pb-130">
        <div className="container">
          <div className="sec-title mb-55">
            <div className="sec-title mb-45">
              <h2 className="mb-40 wow skewIn">
                Why Us <br />
                <span> Trusted Guidance for Your Future</span>
              </h2>
              <p>
                GO FOREN offers services for immigration/PR visas, student
                visas, visitor visas, <br /> and business/entrepreneur visas. We
                provide complete support — from counseling <br /> and
                application to visa processing. Our assistance also includes air
                ticketing, foreign <br /> exchange, travel insurance,
                accommodation, and airport transfers, ensuring a smooth <br />{" "}
                transition to your new country
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="about__content">
       <ul className="about-list ul_li list-unstyled">
  {visaServices.map((service, index) => (
    <li key={service.id}>
      <a href={`/visa-services-detail?id=${service.id}`}>
        <div className="xb-item--inner">
          <div className={`xb-item--number color-${(index % 5) + 1}`}>
            {index + 1}
          </div>
          <div className="xb-item--holder">
            <h3 className="xb-item--title mb-10">{service.visa_type}</h3>
            <p style={{ color: '#787B84' }}>
              {/* Optional: Show a trimmed version of the description */}
              {stripHtml(service.description).slice(0, 80)}...
            </p>
          </div>
        </div>
      </a>
    </li>
  ))}
</ul>

              </div>
            </div>
          </div>
        </div>
        <div className="about__img">
          <img src="/assets/pic/why.png" alt="" />
        </div>
      </section>
      {/* <!-- about end --> */}

      {/* <!-- feature start --> */}
      <section className="feature pos-rel gray-bg-2 pt-120 pb-120">
        <div className="container">
          <div className="sec-title style-2 text-center mb-60 z-index-2">
            <span className="sec-title--sub">How we Help Client</span>
            <h3 className="sec-title--heading mb-30">
              Expertise from Seasoned <br /> Professionals
            </h3>
          </div>
        </div>
        <div className="xb-feature2__wrap">
          <div className="container">
            <div className="row justify-content-md-center g-0">
              <div className="col-lg-4 col-md-6">
                <div className="xb-feature xb-feature2 text-center">
                  <div className="xb-item--line"></div>
                  <div className="xb-item--inner">
                    <div className="xb-item--icon">
                      <span className="default">
                        <SchoolIcon
                          style={{ color: "#00cc99", fontSize: "70px" }}
                        />
                      </span>
                      <span className="hover">
                        <SchoolIcon
                          style={{ color: "#fff", fontSize: "70px" }}
                        />
                      </span>
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">University Information</h3>
                      <div className="xb-item--content">
                        University information is a crucial <br /> component of
                        your..
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="xb-feature xb-feature2 text-center">
                  <div className="xb-item--line"></div>
                  <div className="xb-item--inner">
                    <div className="xb-item--icon">
                      <span className="default">
                        {/* <img src="assets/img/icon/fr_02.svg" alt="" /> */}
                        <CreditCardIcon
                          style={{ color: "#00cc99", fontSize: "70px" }}
                        />
                      </span>
                      <span className="hover">
                        <CreditCardIcon
                          style={{ color: "#fff", fontSize: "70px" }}
                        />
                      </span>
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">Student Visa</h3>
                      <div className="xb-item--content">
                        A student visa is a legal authorization <br /> that
                        allows international..
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="xb-feature xb-feature2 text-center">
                  <div className="xb-item--line"></div>
                  <div className="xb-item--inner">
                    <div className="xb-item--icon">
                      <span className="default">
                        <MenuBookIcon
                          style={{ color: "#00cc99", fontSize: "70px" }}
                        />
                      </span>
                      <span className="hover">
                        <MenuBookIcon
                          style={{ color: "#fff", fontSize: "70px" }}
                        />
                      </span>
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">Our Coaching</h3>
                      <div className="xb-item--content">
                        Our Coaching offers life coaching that <br /> helps
                        clients navigate..
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xb-feature-right-line"></div>
          </div>

        </div>
        <div style={{justifyContent:'center',display:'flex',marginTop:'50px'}}>

        <button
                      style={{
                        padding: "10px 20px",
                        background: "#00cc99",
                        borderRadius: "10px",
                      }}
                    >
                      <a style={{ color: "#fff" }} href="/Inquiry-association">
                      Inquiry For Association
                      </a>
                    </button>
        </div>
        <div className="feature-shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
              <img src="assets/img/shape/f_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2">
            <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/f_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature end --> */}
      {/* <!-- services start --> */}
      <section className="service  pos-rel  pt-120 pb-100"  style={{background:'#edf3f57a'}}>
        <div className="container">
          <div className="xb-service__top ul_li_between mb-20">
            <div className="sec-title sec-title--white style-2 mb-20">
              <span className="sec-title--sub" style={{color:'#110F10'}}>
                 services
              </span>
              <h3 className="sec-title--heading"  style={{color:'#110F10'}}>Easy Study Abroad</h3>
            </div>
            <div className="xb-service__btn mb-20">
              <a className="xb-tran-btn" href=""  style={{color:'#110F10'}}>
                more services
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </a>
            </div>
          </div>
          <div className="xb-service2__wrap ul_li">
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                  <BusinessCenterIcon style={{color:'#00cc99' ,fontSize:'60px'}}/>
                  
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Career <br /> Counseling
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Assessment of eligibility for  different student
                    visa..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                  <FlightTakeoffIcon  style={{color:'#00cc99' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Visa <br /> Guidance
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Offering information about visa requirements,
                  ..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <AccountBalanceWalletIcon   style={{color:'#00cc99' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Financial <br /> Planning
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Advising on demonstrating sufficient financial..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <DescriptionIcon style={{color:'#00cc99' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Application <br /> Assistance
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Assisting with compiling required documents..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <ArticleIcon  style={{color:'#00cc99' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Document <br /> Preparation
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Assisting in gathering such as organizing necessary..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <LocalHospitalIcon  style={{color:'#00cc99' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Health Insurance <br /> Guidance
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Offering information about housing orientation, and..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <GTranslateIcon  style={{color:'#00cc99' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Language <br /> Proficiency Tests
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Providing guidance on language proficiency..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <TravelExploreIcon   style={{color:'#00cc99' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Visa Submission <br /> and Tracking
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Assisting in submitting the visa application to the..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="service-shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":-70}'>
              <img src="assets/img/shape/s_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2">
            <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/s_shape2.png" alt="" />
            </div>
          </div>
          <div className="shape shape--3">
            <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
              <img src="assets/img/shape/s_shape3.png" alt="" />
            </div>
          </div>
          <div className="shape shape--4">
            <div className="shape-inner" data-parallax='{"x":50,"y":80}'>
              <img src="assets/img/shape/s_shape4.png" alt="" />
            </div>
          </div>
        </div> */}
      </section>
  
      {/* <!-- services end --> */}

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
      <section className="country pt-120 pb-130">
        <div className="container">
          <div className="row mb-30 align-items-center">
            <div className="col-lg-6">
              <div className="sec-title">
                <h2 className="mb-20 wow skewIn">
                  Make Your Choice for the <br /> <span>Preferred Nation</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="sec-title mb-20">
                <p>
                  Choosing the ideal destination for immigration is a pivotal
                  decision that can shape the trajectory of your{" "}
                </p>
              </div>
            </div>
          </div>
          <ul
            className="xb-country-nav nav nav-tabs ul_li_between mb-65"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
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
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
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
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
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
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
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
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
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
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
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
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
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
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane animated fadeInUp show active"
              id="xbc-tab-pane1"
              role="tabpanel"
              aria-labelledby="xbc-tab1"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane2"
              role="tabpanel"
              aria-labelledby="xbc-tab2"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane3"
              role="tabpanel"
              aria-labelledby="xbc-tab3"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane4"
              role="tabpanel"
              aria-labelledby="xbc-tab4"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane5"
              role="tabpanel"
              aria-labelledby="xbc-tab5"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane6"
              role="tabpanel"
              aria-labelledby="xbc-tab6"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane7"
              role="tabpanel"
              aria-labelledby="xbc-tab7"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- country end --> */}

      {/* <!-- team start --> */}
      <section className="team pb-120">
        <div className="container">
          <div className="team-wrap pos-rel">
<div className="row mt-none-30">
  <div className="col-xl-6 mt-30">
    <div className="sec-title mb-45">
      <h2 className="mb-40 wow skewIn">
        Our trusted immigration <br /> <span> support team</span>
      </h2>
      <p>
        At the heart of our commitment to providing exceptional
        immigration solutions stands
      </p>
    </div>
  </div>

  {TeamData.map((member) => (
    <div key={member.id} className="col-xl-3 col-lg-4 col-md-6 mt-30">
      <div className="xb-team text-center">
        <div className="xb-item--inner">
          <div className="xb-item--img">
            {/* Show a fallback image if needed */}
            <img
              src={`https://drive.google.com/thumbnail?id=${member.image_id}`}
              alt={member.name}
            />
          </div>
          <div className="xb-item--holder">
            <h3 className="xb-item--name">
              <a href="#!">{member.name}</a>
            </h3>
            <span className="xb-item--designation">
              {member.designation}
            </span>
          </div>
          <ul className="xb-item--social list-unstyled">
            <li>
              <a href={member.tweeter || "#!"} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={member.linkedin || "#!"} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href={member.facebook || "#!"} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>
            <div className="xb-team-bg">
              <div className="xb-bg xb-bg--1"></div>
              <div className="xb-bg xb-bg--2"></div>
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
        <div className="sec-title mb-60 text-center">
          <h2 className="mb-30 wow skewIn">
            Every photo tells our story
            <br /> <span> Media</span>
          </h2>
        </div>
      </div>

      <Swiper
        className="xb-category-slider"
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={7}
        loop={true}
        loopAdditionalSlides={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        allowTouchMove={true}
        grabCursor={true}
        speed={150}
        breakpoints={{
          1600: { slidesPerView: 7 },
          1200: { slidesPerView: 6 },
          992: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          576: { slidesPerView: 3 },
          0: { slidesPerView: 2 },
        }}
      >
        {galleryData.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://drive.google.com/thumbnail?id=${item.image_id}`}
              alt={item.image_name || `Slide ${index + 1}`}
              style={{
                width: "300px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
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
      {/* <!-- brand start --> */}
      <section
        className="brand brand-pb z-1 pos-rel"
        style={{ background: "#F0F2F6" }}
      >
        <div className="sec-title sec-title--travel text-center mb-20">
          <span className="subtitle mt-5">Our Brand Alliances</span>
          <h2>Elevating Travel Experiences</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="xb-category-slider"
        >
          {brandImages.map((img, index) => (
            <SwiperSlide key={index} className="xb-brand xb-brand2">
              <a className="xb-item--inner" href="#!">
                <img
                  src={img}
                  alt={`brand-${index}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2
          className="xb-strock-text-brand xb-strock-text text-center mt-5"
          style={{ opacity: 0.1 }}
        >
          Our Brand
        </h2>
      </section>
      {/* <!-- brand end --> */}
      {/* <!-- cta start --> */}
      <section className="cta bg-white">
        <div className="container">
          <div className="xb-brand2__mt">
            <div
              className="xb-cta2 ul_li_between"
              style={{
                backgroundImage: `url(${background10})`,
                // minHeight: '400px',
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="sec-title sec-title--white sec-title--travel mt-20">
                <span className="subtitle">Wanna travel with Goforen?</span>
                <h2>
                  Create Unforgettable <br /> Moments with Us
                </h2>
              </div>
              <a
                className="thm-btn thm-btn--white thm-btn--trv mt-20"
                href="/Contact"
              >
            
                Book Your Appointment
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <path
                      d="M6.68164 13.28L11.5716 8.9333C12.1491 8.41997 12.1491 7.57997 11.5716 7.06664L6.68164 2.71997"
                      stroke="#0F172A"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- cta end --> */}
      {/* working time  */}
      
      <div className="container">
        <div
          className="xb-newsletter1 pos-rel "
          style={{
            backgroundImage: `url(${background12})`,
            // minHeight: '400px',
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: "30px 0px",
            background:'#edf3f5'
          }}
        >
          <div className="row">
            <div className="col-12">
              <div>
                <div className="sec-title mb-40 text-center">
                  <h2 className="mb-20 wow skewIn">Our Working Time</h2>
                  <p style={{ textAlign: "center" }}>
                    We are available throughout the week to help you with your
                    visa and training needs.
                  </p>
                </div>

                <div className="row justify-content-center text-center">
                  <div
                    className="col-lg-3 mt-30 col-md-6"
                    style={{
                      boxShadow: " 0px 14px 19px rgb(221 229 236)",
                      padding: "20px",
                      margin: "5px",
                    }}
                  >
                    <div>
                      <h5 className="mb-2">Monday - Saturday :</h5>
                      <p style={{ textAlign: "center" }}>
                        10.00 a.m. to 6.30 p.m.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 mt-30 col-md-6"
                    style={{
                      boxShadow: "0px 14px 19px rgb(221 229 236)",
                      padding: "20px",
                      margin: "5px",
                    }}
                  >
                    <h5 className="mb-2">Sunday :</h5>
                    <p style={{ textAlign: "center" }}>
                      10.00 a.m. to 12.30 p.m.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* workingtime end  */}
      {/* <!-- newsletter start --> */}
      <section className="newsletter mt-5">
        <div className="container">
          <div className="xb-newsletter pos-rel ">
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
                    <button className="colorcode">Subscribe</button>
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

      <FooterHome />
    </div>
  );
}

