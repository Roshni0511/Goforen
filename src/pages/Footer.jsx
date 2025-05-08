import React, { useEffect, useRef, useState } from 'react'
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";


const Footer = () => {
   // data-background img start
    const [background, setBackground] = useState("");
  
    useEffect(() => {
      const backgroundUrl = "assets/img/bg/blog_bg.png";
      setBackground(backgroundUrl);
    }, []);
    // data-background img end
  return (
    <>
      {/* <footer className="site-footer gray-bg pt-65">
        <div className="container">
          <div className="row mt-none-30 pb-60">
            <div className="col-lg-2 mt-30 col-md-6 footer__custom-col">
              <div className="footer__widget">
                <h3 className="widget-title">Working Time</h3>
                <ul className="footer__links list-unstyled">
                  <li>
                    Monday - Saturday : <br />
                    10.00 a.m. to 6.30 p.m.
                  </li>
                  <li>
                    Sunday : <br /> 10.00 a.m. to 12.30 p.m.
                  </li>
                  <li>
                    (Telephonic appointment is preferable to avoid waiting at
                    office.)
                  </li>
                  <li>
                    Give a missed call or drop a message on: <br /> +91 96 24
                    819 819
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 mt-30 col-md-6 footer__custom-col">
              <div className="footer__widget">
                <h3 className="widget-title">Get In Touch</h3>
                <ul className="footer__links list-unstyled">
                  <li>
                    <a href="mailto:goforen@gmail.com">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>{" "}
                      goforen@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+917600909090">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>{" "}
                      +91 76 00 90 90 90
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918511110221">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>{" "}
                      +91 85 1111 0 221
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://www.google.com/maps?q=701-702,+7th+floor,+Joyos+Hubtown,+Adajan+Bus+port,+Surat-395009"
                      target="_blank"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>{" "}
                      701-702, 7th floor, Joyos Hubtown, Adajan Bus port,
                      Surat-395009
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 mt-30 col-md-6 footer__custom-col">
              <div className="footer__widget">
                <h3 className="widget-title">Visa Services</h3>
                <ul className="footer__links list-unstyled">
                  <li>
                    <a href="/Immigration-pr-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Immigration - PR Visa
                    </a>
                  </li>
                  <li>
                    <a href="/Student-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Student Visa
                    </a>
                  </li>
                  <li>
                    <a href="/Visitor-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Visitor Visa
                    </a>
                  </li>
                  <li>
                    <a href="/Investor-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Investor Visa
                    </a>
                  </li>
                  <li>
                    <a href="/Work-permit-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Work Permit Visa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 mt-30 col-md-6 footer__custom-col">
              <div className="footer__widget">
                <h3 className="widget-title">Training & Courses</h3>
                <ul className="footer__links list-unstyled">
                  <li>
                    <a href="/IELTS">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      IELTS
                    </a>
                  </li>
                  <li>
                    <a href="/TOEFLIBT">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>{" "}
                      TOEFL IBT
                    </a>
                  </li>
                  <li>
                    <a href="/GRE">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>{" "}
                      GRE
                    </a>
                  </li>
                  <li>
                    <a href="/PTE">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>{" "}
                      PTE
                    </a>
                  </li>
                  <li>
                    <a href="/SAT">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>{" "}
                      SAT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 mt-30 col-md-6 footer__custom-col">
              <div className="footer__widget">
                <h3 className="widget-title">Terms & Conditions</h3>
                <ul className="footer__links list-unstyled">
                  <li>
                    <a href="/Privacy-policy">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/TermsAndConditions">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/Declaration">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Declaration
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__copyright ul_li_between">
            <div className="footer__copyright-text mt-15">
            All rights reserved @ Go Foren <br /> Proudly Powered by <a target="_blank" href="https://successinnovativetechnologiespvtltd.com">Success Innovative Technologies Pvt. Ltd.</a>


            </div>
            <div className="footer__copyright-img mt-20">
              <img src="assets/img/icon/card_img.png" alt="" />
            </div>
          </div>
        </div>
      </footer> */}

      <footer className="site-footer gray-bg pt-65">
        <div className="container">
          <div class="xb-newsletter1 pos-rel "  style={{
          backgroundImage: `url(${background})`,
          // minHeight: '400px',
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
            <div class="row">
              <div class="col-12">
                <div>
                  <div className="sec-title mb-40 text-center">
                    <h2 className="mb-20 wow skewIn">Our Working Time</h2>
                    <p style={{ textAlign: "center" }}>
                      We are available throughout the week to help you with your
                      visa and training needs.
                    </p>
                  </div>

                  <div className="row justify-content-center text-center">
                  <div className="col-lg-3 mt-30 col-md-6" style={{boxShadow:' 0px 14px 19px rgb(221 229 236)',padding:'20px',margin:'5px'}}>
                     <div><h5 className="mb-2">Monday - Saturday :</h5>
                     <p style={{textAlign:'center'}}>10.00 a.m. to 6.30 p.m.</p></div>
                  </div>
                  <div className="col-lg-3 mt-30 col-md-6" style={{boxShadow:'0px 14px 19px rgb(221 229 236)',padding:'20px',margin:'5px'}}>
                    <h5 className="mb-2">Sunday :</h5> 
                    <p style={{textAlign:'center'}}>10.00 a.m. to 12.30 p.m.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-30 pb-60 justify-content-around">
            <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
              <div className="footer__widget">
                <h3 className="widget-title">
                  Do you have questions or wont more information? Contact us now
                </h3>
                <ul className="footer__cta list-unstyled mt-50">
                  <li className="ul_li">
                    <span>
                      <CallIcon style={{ color: "#787b84" }} />
                    </span>{" "}
                    <a href="tel:+919624819819" style={{ color: "#0f172a" }}>
                      +91 76 00 90 90 90
                    </a>
                  </li>
                  <li className="ul_li">
                    <span>
                      <WhatsAppIcon style={{ color: "#787b84" }} />
                    </span>
                    <a
                      href="https://wa.me/918511110221"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0f172a" }}
                    >
                      +91 85 1111 0 221
                    </a>
                  </li>
                  <li className="ul_li">
                    <span>
                      <MailIcon style={{ color: "#787b84" }} />
                    </span>
                    <a
                      href="mailto:gforen@gmail.com"
                      style={{ color: "#0f172a" }}
                    >
                      goforen@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
              <div className="footer__widget">
                <h3 className="widget-title">Training & Courses</h3>
                <ul className="footer__links list-unstyled">
                  <li>
                    <a href="/IELTS">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      IELTS
                    </a>
                  </li>
                  <li>
                    <a href="/TOEFLIBT">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      TOEFL IBT
                    </a>
                  </li>
                  <li>
                    <a href="/GRE">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      GRE
                    </a>
                  </li>
                  <li>
                    <a href="/PTE">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      PTE
                    </a>
                  </li>
                  <li>
                    <a href="/SAT">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      SAT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
              <div className="footer__widget">
                <h3 className="widget-title">Services</h3>
                <ul className="footer__links list-unstyled">
                  <li>
                    <a href="/Immigration-pr-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Immigration - PR Visa
                    </a>
                  </li>
                  <li>
                    <a href="/Student-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Student Visa
                    </a>
                  </li>
                  <li>
                    <a href="/Visitor-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Visitor Visa
                    </a>
                  </li>
                  <li>
                    <a href="/Investor-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Investor Visa
                    </a>
                  </li>
                  <li>
                    <a href="/Work-permit-visa">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Work Permit Visa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
              <div className="footer__widget">
                <h3 className="widget-title">Terms & Conditions</h3>
                <ul className="footer__links list-unstyled">
                  <li>
                    <a href="/Privacy-policy">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/TermsAndConditions">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/Declaration">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                            fill="#B1B4BA"
                          />
                        </svg>
                      </span>
                      Declaration
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__copyright ul_li_between">
            <div className="footer__copyright-text mt-15">
              All rights reserved @ Go Foren <br /> Proudly Powered by{" "}
              <a
                target="_blank"
                href="https://successinnovativetechnologiespvtltd.com"
              >
                Success Innovative Technologies Pvt. Ltd.
              </a>
            </div>
            <div className="footer__copyright-img mt-20">
              <img src="assets/img/icon/card_img.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
