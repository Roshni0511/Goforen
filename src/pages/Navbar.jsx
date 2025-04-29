import React from 'react'

export default function Navbar() {
  return (
    <div>
    
    <header className="site-header header-style-one">
        <div className="header__top-wrap gray-bg">
            <div className="container">
                <div className="header__top ul_li_between">
                    <div className="header__top-cta">
                        <img src="assets/img/icon/n_pad.svg" alt="" /><span>Help Desk :</span> +91 590 088 55
                    </div>
                    <ul className="header__top-info ul_li">
                        <li><img src="assets/img/icon/time.svg" alt=" " />Monday - Friday 09:00 am - 05:00 Pm</li>
                        <li><img src="assets/img/icon/location.svg" alt="" />456 Elm Avenue Springfield, IL 62701</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="header__wrap stricky">
            <div className="container">
                <div className="header__inner ul_li_between">
                    <div className="header__logo">
                        <a href="index.html"><img src="assets/img/logo/logo.svg" alt="" /></a>
                    </div>
                    <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                        <nav className="main-menu collapse navbar-collapse">
                            <ul>
                                <li className="menu-item-has-children active"><a href="/Home"><span>Home</span></a>
                                    <ul className="submenu">
                                        <li className="active"><a href="index.html"><span>Immigration</span></a></li>
                                        <li><a href="home-studient-visa.html"><span>Studient Visa</span></a></li>
                                        <li><a href="home-travel-agency.html"><span>Travel Agency</span></a></li>
                                        <li><a href="home-rtl.html"><span>Demo RTL</span></a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#!"><span>Pages</span></a>
                                    <ul className="submenu">
                                        <li><a href="services.html"><span>Services</span></a></li>
                                        <li><a href="service-single.html"><span>Service Details</span></a></li>
                                        <li><a href="coaching.html"><span>Coaching</span></a></li>
                                        <li><a href="coaching-single.html"><span>Coaching Details</span></a></li>
                                        <li><a href="visa.html"><span>Visa</span></a></li>
                                        <li><a href="visa-single.html"><span>Visa Details</span></a></li>
                                        <li><a href="team.html"><span>Team</span></a></li>
                                        <li><a href="team-single.html"><span>Team Details</span></a></li>
                                        <li><a href="testimonial.html"><span>Testimonials</span></a></li>
                                        <li><a href="faq.html"><span>FAQ</span></a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html"><span>About us</span></a></li>
                                <li className="menu-item-has-children">
                                    <a href="#!"><span>Country</span></a>
                                    <ul className="submenu">
                                        <li><a href="country.html"><span>Country</span></a></li>
                                        <li><a href="country-single.html"><span>Country Details</span></a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#!"><span>Blog</span></a>
                                    <ul className="submenu">
                                        <li><a href="blog.html"><span>Blog</span></a></li>
                                        <li><a href="blog-single.html"><span>Blog Details</span></a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html"><span>Contact</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="xb-hamburger-menu">
                        <div className="xb-nav-mobile">
                            <div className="xb-nav-mobile-button"><i className="fal fa-bars"></i></div>
                        </div>
                    </div>
                    <ul className="header__action ul_li">
                        <li>
                            <a className="header__search header-search-btn" href="javascript:void(0);">
                                <img src="assets/img/icon/search.svg" alt="" />Search
                            </a>
                        </li>
                        <li>
                            <div className="header__language">
                                <ul>
                                    <li><a href="#!" className="lang-btn">
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="xb-header-wrap">
            <div className="xb-header-menu">
                <div className="xb-header-menu-scroll">
                    <div className="xb-menu-close xb-hide-xl xb-close"></div>
                    <div className="xb-logo-mobile xb-hide-xl">
                        <a href="index.html" rel="home"><img src="assets/img/logo/logo.svg" alt="" /></a></div>
                    <div className="xb-header-mobile-search xb-hide-xl">
                        <form role="search" action="#">
                            <input type="text" placeholder="Search..." name="s" className="search-field" />
                            <button type="submit" className="search-submit">
                            </button>
                        </form>
                    </div>
                    <nav className="xb-header-nav">
                        <ul className="xb-menu-primary clearfix">
                            <li className="menu-item menu-item-has-children">
                                <a href="#"><span>Home</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="index.html"><span>Immigration</span></a></li>
                                    <li className="menu-item"><a href="home-studient-visa.html"><span>Studient Visa</span></a></li>
                                    <li className="menu-item"><a href="home-travel-agency.html"><span>Travel Agency</span></a></li>
                                    <li className="menu-item"><a href="home-rtl.html"><span>Demo RTL</span></a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#"><span>Pages</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="services.html"><span>Services</span></a></li>
                                    <li className="menu-item"><a href="service-single.html"><span>Service Details</span></a></li>
                                    <li className="menu-item"><a href="coaching.html"><span>Coaching</span></a></li>
                                    <li className="menu-item"><a href="coaching-single.html"><span>Coaching Details</span></a></li>
                                    <li className="menu-item"><a href="visa.html"><span>Visa</span></a></li>
                                    <li className="menu-item"><a href="visa-single.html"><span>Visa Details</span></a></li>
                                    <li className="menu-item"><a href="team.html"><span>Team</span></a></li>
                                    <li className="menu-item"><a href="team-single.html"><span>Team Details</span></a></li>
                                    <li className="menu-item"><a href="testimonial.html"><span>Testimonials</span></a></li>
                                    <li className="menu-item"><a href="faq.html"><span>FAQ</span></a></li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="about.html"><span>About us</span></a></li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#"><span>Country</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="country.html"><span>Country</span></a></li>
                                    <li className="menu-item"><a href="country-single.html"><span>Country Details</span></a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#"><span>Blog</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="blog.html"><span>Blog</span></a></li>
                                    <li className="menu-item"><a href="blog-single.html"><span>Blog Details</span></a></li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="contact.html"><span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="xb-header-menu-backdrop"></div>
        </div>
    </header>
    </div>
  )
}
