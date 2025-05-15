import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  
  const [visaServices, setVisaServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_visa_services/')
      .then((res) => res.json())
      .then((data) => {
        setVisaServices(data);
      })
      .catch((err) => console.error("Failed to fetch visa services:", err));
  }, []);
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_course_data/')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => console.error("Failed to fetch Courses:", err));
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchValue.toLowerCase().trim();

    const routeMap = {
      "home": "/",
      "about": "/About",
      "race": "/About-us-race",
      "founder": "/About-founder",
      "visa services": "/Visa-services",
      "immigration": "/Immigration-pr-visa",
      "student visa": "/Student-visa",
      "visitor visa": "/Visitor-visa",
      "investor visa": "/Investor-visa",
      "work permit": "/Work-permit-visa",
      "courses": "/Courses",
      "ielts": "/IELTS",
      "toefl": "/TOEFLIBT",
      "gre": "/GRE",
      "pte": "/PTE",
      "sat": "/SAT",
      "gallery": "/Gallery",
      "videos": "/Videos",
      "success": "/SuccessStory",
      "blog": "/Blog",
      "blog details": "/BlogDetails",
      "activities": "/Activities",
      "contact": "/Contact",
      "cv": "/Upload-cv",
      "association": "/Inquiry-association",
      "student inquiry": "/Student-visa-inquiry",
      "pr inquiry": "/Pr-visa-inquiry",
      "privacy": "/Privacy-policy",
      "terms": "/TermsAndConditions",
      "declaration": "/Declaration",
      "news": "/News",
      "news details": "/Newsdetails",
      "visaservice": "/Visaservice",
    };

    // Find matching route
    let matchedPath = null;
    for (const keyword in routeMap) {
      if (query.includes(keyword)) {
        matchedPath = routeMap[keyword];
        break;
      }
    }

    // Navigate
    if (matchedPath) {
      navigate(matchedPath);
    } else {
      navigate("/");
    }

    // Close search
    setSearchOpen(false);
    setSearchValue("");
  };
  useEffect(() => {
    // Mobile menu script – EXACTLY your code
    $(".xb-nav-hidden li.menu-item-has-children > a").append(
      '<span class="xb-menu-toggle"></span>'
    );
    $(
      ".xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children"
    ).append('<span class="xb-menu-toggle"></span>');

    $(".xb-menu-toggle").on("click", function () {
      if (!$(this).hasClass("active")) {
        $(this)
          .closest("ul")
          .find(".xb-menu-toggle.active")
          .toggleClass("active");
        $(this)
          .closest("ul")
          .find(".sub-menu.active")
          .toggleClass("active")
          .slideToggle();
      }
      $(this).toggleClass("active");
      $(this).closest(".menu-item").find("> .sub-menu").toggleClass("active");
      $(this).closest(".menu-item").find("> .sub-menu").slideToggle();
    });

    $(".xb-nav-hidden li.menu-item-has-children > a").click(function (e) {
      const target = $(e.target);
      if ($(this).attr("href") === "#" && !target.is(".xb-menu-toggle")) {
        e.stopPropagation();
        if (!$(this).find(".xb-menu-toggle").hasClass("active")) {
          $(this)
            .closest("ul")
            .find(".xb-menu-toggle.active")
            .toggleClass("active");
          $(this)
            .closest("ul")
            .find(".sub-menu.active")
            .toggleClass("active")
            .slideToggle();
        }
        $(this).find(".xb-menu-toggle").toggleClass("active");
        $(this).closest(".menu-item").find("> .sub-menu").toggleClass("active");
        $(this).closest(".menu-item").find("> .sub-menu").slideToggle();
      }
    });

    $(".xb-nav-mobile").on("click", function () {
      $(this).toggleClass("active");
      $(".xb-header-menu").toggleClass("active");
    });

    $(".xb-menu-close, .xb-header-menu-backdrop").on("click", function () {
      $(this).removeClass("active");
      $(".xb-header-menu").removeClass("active");
    });

    // Cleanup jQuery listeners on unmount
    return () => {
      $(".xb-menu-toggle").off();
      $(".xb-nav-hidden li.menu-item-has-children > a").off();
      $(".xb-nav-mobile").off();
      $(".xb-menu-close, .xb-header-menu-backdrop").off();
    };
  }, []);
  useEffect(() => {
    if ($(".stricky").length) {
      $(".stricky")
        .addClass("original")
        .clone(true)
        .insertAfter(".stricky")
        .addClass("stricked-menu")
        .removeClass("original");
    }

    const handleScroll = () => {
      if ($(".stricked-menu").length) {
        const headerScrollPos = 100;
        const stricky = $(".stricked-menu");
        if ($(window).scrollTop() > headerScrollPos) {
          stricky.addClass("stricky-fixed");
        } else {
          stricky.removeClass("stricky-fixed");
        }
      }
    };

    $(window).on("scroll", handleScroll);

    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="site-header header-style-one">
        <div className="header__top-wrap gray-bg">
          <div className="container">
            <div className="header__top ul_li_between" style={{justifyContent:'center'}}>
              <div className="header__top-cta">
              <a href="tel:+917600909090" style={{color:"#000"}}>
                <img src="assets/img/icon/n_pad.svg" alt="" />
                <span>Help Desk :</span>  +91 76 00 90 90 90
                </a>
              </div>
          
            </div>
          </div>
        </div>

        <div className="header__wrap stricky  ">
          <div className="container">
            <div className="header__inner ul_li_between">
              <div className="header__logo">
                <a href="/">
                  <img src="/assets/pic/newgof.png" alt="" />
                </a>
              </div>
              <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                <nav className="main-menu collapse navbar-collapse">
                  <ul>
                    <li>
                      <a href="/">
                        <span>Home</span>
                      </a>
                    </li>

                    <li className="menu-item-has-children">
                      <a>
                        <span>About us</span>
                      </a>
                      <ul className="submenu">
                      <li>
                          <a href="/About">
                            <span>About Goforen</span>
                          </a>
                        </li>
                        <li>
                          <a href="/About-us-race">
                            <span>About Race Group</span>
                          </a>
                        </li>
                       
                        <li>
                          <a href="/About-founder">
                            <span>About Founder</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/Visa-services">
                        <span>Visa Services</span>
                      </a>
                      <ul className="submenu">
            {visaServices.map((item) => (
              <li key={item.id}>
                          <a href= {`/visa-services-detail?id=${item.id}`}>
                            <span>{item.visa_type}</span>
                          </a>
                        </li>
                            ))}
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="/Courses">
                        <span>Courses</span>
                      </a>
                      <ul className="submenu">
                      {Courses.map((item) => (
                        <li key={item.id}>
                          <a href= {`/Course-details?id=${item.id}`}>
                            <span>{item.course_name}</span>
                          </a>
                        </li>
                            ))}
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a >
                        <span>Media</span>
                      </a>
                      <ul className="submenu">
                        <li className="menu-item">
                          <a href="/Gallery">
                            <span>Gallery</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/Videos">
                            <span>Videos</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/SuccessStory">
                            <span>Success Stories</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/Activities">
                            <span>Activities</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/Blog">
                        <span>Blog</span>
                      </a>
                    </li>
                    <li>
                      <a href="/Contact">
                        <span>Contact</span>
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a>
                        <span>Inquiry</span>
                      </a>
                      <ul className="submenu">
                            <li className="menu-item">
                              <a href="/Student-visa-inquiry">
                                <span>Student Visa</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/Pr-visa-inquiry">
                                <span>PR Visa</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/visitor">
                                <span>Visitor Visa </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/investor">
                                <span>Investor Visa </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/investor">
                                <span>WP Visa </span>
                              </a>
                            </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="xb-hamburger-menu">
                <div className="xb-nav-mobile">
                  <div className="xb-nav-mobile-button">
                    <i className="fal fa-bars"></i>
                  </div>
                </div>
              </div>

              <ul className="header__action ul_li">
   
              </ul>
            </div>
          </div>
        </div>

        <div className="xb-header-wrap">
          <div className="xb-header-menu">
            <div className="xb-header-menu-scroll">
              <div className="xb-menu-close xb-hide-xl xb-close"></div>
              <div className="xb-logo-mobile xb-hide-xl">
                <a href="/" rel="home">
                  <img src="/assets/pic/newgof.png" alt=""  style={{width:'100px',height:'100%'}}/>
                </a>
              </div>

          
             
                <nav className="main-menu collapse navbar-collapse">
                  <ul>
                    <li>
                      <a href="/">
                        <span>Home</span>
                      </a>
                    </li>

                    <li className="menu-item-has-children">
                      <a>
                        <span>About us</span>
                      </a>
                      <ul className="submenu">
                      <li>
                          <a href="/About">
                            <span>About Goforen</span>
                          </a>
                        </li>
                        <li>
                          <a href="/About-us-race">
                            <span>About Race Group</span>
                          </a>
                        </li>
                       
                        <li>
                          <a href="/About-founder">
                            <span>About Founder</span>
                          </a>
                        </li>
                      </ul>
                    </li>


                    <li className="menu-item-has-children">
                      <a href="/Visa-services">
                        <span>Visa Services</span>
                      </a>
                      <ul className="submenu">

            {visaServices.map((item) => (

              <li key={item.id}>
                          <a href= {`/visa-services-detail?id=${item.id}`}>
                            <span>{item.visa_type}</span>
                          </a>
                        </li>
                            ))}
                        <li>
                          <a href="/Immigration-pr-visa">
                            <span>Student Visa</span>
                          </a>
                        </li>
                        <li>
                          <a href="/Immigration-pr-visa">
                            <span> Visitor Visa</span>
                          </a>
                        </li>
                        <li>
                          <a href="/Immigration-pr-visa">
                            <span> Investor Visa</span>
                          </a>
                        </li>
                        <li>
                          <a href="/Immigration-pr-visa">
                            <span> Work Permit Visa</span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="/Courses">
                        <span>Courses</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="/IELTS">
                            <span>IELTS</span>
                          </a>
                        </li>
                        <li>
                          <a href="/IELTS">
                            <span>TOEFL IBT</span>
                          </a>
                        </li>
                        <li>
                          <a href="/IELTS">
                            <span>GRE</span>
                          </a>
                        </li>
                        <li>
                          <a href="/IELTS">
                            <span>PTE</span>
                          </a>
                        </li>
                        <li>
                          <a href="/IELTS">
                            <span>SAT</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a >
                        <span>Media</span>
                      </a>
                      <ul className="submenu">
                        <li className="menu-item">
                          <a href="/Gallery">
                            <span>Gallery</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/Videos">
                            <span>Videos</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/SuccessStory">
                            <span>Success Stories</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/Activities">
                            <span>Activities</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/Blog">
                        <span>Blog</span>
                      </a>
                    </li>
                    <li>
                      <a href="/Contact">
                        <span>Contact</span>
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a>
                        <span>Inquiry</span>
                      </a>
                      <ul className="submenu">
                            <li className="menu-item">
                              <a href="/Student-visa-inquiry">
                                <span>Student Visa</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/Pr-visa-inquiry">
                                <span>PR Visa</span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/visitor">
                                <span>Visitor Visa </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/investor">
                                <span>Investor Visa </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="/investor">
                                <span>WP Visa </span>
                              </a>
                            </li>
                          {/* </ul> */}
                        {/* </li> */}
                        {/* <li className="menu-item">
                          <a href="/Inquiry-association">
                            <span>Inquiry For Association</span>
                          </a>
                        </li> */}
                      </ul>
                    </li>
                  </ul>
                </nav>

            </div>
          </div>
          <div className="xb-header-menu-backdrop"></div>
        </div>
      </header>

      {/* Search Form Section */}
      <div className={`header-search-form-wrapper ${searchOpen ? "open" : ""}`}>
      <div
        className="xb-search-close xb-close"
        onClick={() => setSearchOpen(false)}
      ></div>
      <div className="header-search-container">
        <form role="search" className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            className="search-field"
            placeholder="Search …"
            name="s"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus={searchOpen}
          />
        </form>
      </div>
    </div>
      {/* Body Overlay */}
      <div
        className={`body-overlay ${searchOpen ? "active" : ""}`}
        onClick={() => setSearchOpen(false)}
      ></div>
    </div>
  );
}
