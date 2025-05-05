import React, { useState, useEffect } from "react";
import $ from "jquery";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
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
            <div className="header__top ul_li_between">
              <div className="header__top-cta">
                <img src="assets/img/icon/n_pad.svg" alt="" />
                <span>Help Desk :</span> +91 590 088 55
              </div>
              <ul className="header__top-info ul_li">
                <li>
                  <img src="assets/img/icon/time.svg" alt=" " />
                  Monday - Friday 09:00 am - 05:00 Pm
                </li>
                <li>
                  <img src="assets/img/icon/location.svg" alt="" />
                  456 Elm Avenue Springfield, IL 62701
                </li>
              </ul>
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
                      <a href="/About">
                        <span>About us</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="/About-us-race">
                            <span>About Race Group</span>
                          </a>
                        </li>
                        <li>
                          <a href="/About">
                            <span>About Goforen</span>
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
                        <li>
                          <a href="/Immigration-pr-visa">
                            <span> Immigration - PR Visa</span>
                          </a>
                        </li>
                        <li>
                          <a href="/Student-visa">
                            <span>Student Visa</span>
                          </a>
                        </li>
                        <li>
                          <a href="/Visitor-visa">
                            <span> Visitor Visa</span>
                          </a>
                        </li>
                        <li>
                          <a href="/Investor-visa">
                            <span> Investor Visa</span>
                          </a>
                        </li>
                        <li>
                          <a href="/Work-permit-visa">
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
                          <a href="/TOEFLIBT">
                            <span>TOEFL IBT</span>
                          </a>
                        </li>
                        <li>
                          <a href="/GRE">
                            <span>GRE</span>
                          </a>
                        </li>
                        <li>
                          <a href="/PTE">
                            <span>PTE</span>
                          </a>
                        </li>
                        <li>
                          <a href="/SAT">
                            <span>SAT</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="">
                        <span>Media</span>
                      </a>
                      <ul className="submenu">
                        <li className="menu-item">
                          <a href="/Gallary">
                            <span>Gallary</span>
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
                    <li className="menu-item-has-children">
                      <a href="/Contact">
                        <span>Contact</span>
                      </a>
                      <ul className="submenu">
                        <li className="menu-item">
                          <a href="/Contact">
                            <span>Quick Inquiry</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="/Upload-cv">
                            <span>Upload Your CV</span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="/Contact">
                            <span>Inquiry / Request For Assessment </span>
                          </a>
                          <ul className="submenu">
                            <li className="menu-item" style={{background:'rgb(0, 204, 153)',padding:'10px'}}>
                              {/* <a href=""> */}
                                <span style={{color:'#fff'}}>
                                  If you want your profile to be assessed in
                                  detail please fill up the required form
                                </span>
                              {/* </a> */}
                            </li>
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
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="/Inquiry-association">
                            <span>Inquiry For Association</span>
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
                <li>
                  <button
                    type="button"
                    style={{ background: "none" }}
                    className="header__search header-search-btn"
                    onClick={() => setSearchOpen(true)}
                  >
                    <img src="assets/img/icon/search.svg" alt="" />
                    Search
                  </button>
                </li>
                {/* <li>
                  <div className="header__language">
                    <ul>
                      <li>
                        <a href="#!" className="lang-btn">
                          <div className="flag"><img src="assets/img/icon/us_flag.png" alt="" /></div>
                          English
                          <div className="arrow_down"><img src="assets/img/icon/arrow_down.svg" alt="" /></div>
                        </a>
                        <ul className="lang_sub_list">
                          <li><a href="#">English</a></li>
                          <li><a href="#">Arabic</a></li>
                          <li><a href="#">Bangla</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li> */}
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
                  <img src="assets/img/logo/logo.svg" alt="" />
                </a>
              </div>
              <div className="xb-header-mobile-search xb-hide-xl">
                <form role="search" action="#">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="s"
                    className="search-field"
                  />
                  <button type="submit" className="search-submit"></button>
                </form>
              </div>
              <nav className="xb-header-nav">
                <ul className="xb-menu-primary clearfix">
                  <li className="menu-item">
                    <a href="/">
                      <span>Home</span>
                    </a>
                  </li>

                  <li className="menu-item menu-item-has-children">
                    <a href="/About">
                      <span>About us</span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="/About-us-race">
                          <span>About Race Group</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/About">
                          <span>About Goforen</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/About-founder">
                          <span>About Founder</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="/Visa-services">
                      <span>Visa Services</span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="/Immigration-pr-visa">
                          <span>Immigration - PR Visa</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/Student-visa">
                          <span>Student Visa</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/Visitor-visa">
                          <span>Visitor Visa</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/Investor-visa">
                          <span>Investor Visa</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/Work-permit-visa">
                          <span>Work Permit Visa</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item menu-item-has-children">
                    <a href="/Courses">
                      <span>Courses</span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="/IELTS">
                          <span>IELTS</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/TOEFLIBT">
                          <span>TOEFL IBT</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/GRE">
                          <span>GRE</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/PTE">
                          <span>PTE</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/SAT">
                          <span>SAT</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">
                      <span>Media</span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="/Gallary">
                          <span>Gallary</span>
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
                  <li className="menu-item">
                    <a href="/Blog">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="/Contact">
                      <span>Contact</span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="/Contact">
                          <span>Quick Inquiry</span>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/Upload-cv">
                          <span>Upload Your CV</span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a href="/Contact">
                          <span>Inquiry / Request For Assessment</span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="/Student-visa-inquiry">Student Visa</a>
                          </li>
                          <li className="menu-item">
                            <a href="/Pr-visa-inquiry">PR Visa</a>
                          </li>
                          <li className="menu-item">
                            <a href="/visitor">Visitor Visa </a>
                          </li>
                          <li className="menu-item">
                            <a href="/investor">Investor Visa </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="/Inquiry-association">
                          <span>Inquiry For Association</span>
                        </a>
                      </li>
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
          <form role="search" className="search-form" action="#">
            <input
              type="search"
              className="search-field"
              placeholder="Search …"
              name="s"
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
