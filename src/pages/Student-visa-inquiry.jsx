import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
export default function Studentvisainquiry() {
  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "assets/img/bg/breadcrumb_bg.jpg";
    setBackground(backgroundUrl);
  }, []);
  // data-background img end

  const canvasRef = useRef(null);

  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const visaServices = [
    { name: "Student Visa", info: false },
    { name: "PR Visa", info: false },
    { name: "Visitor Visa", info: true },
    { name: "Investor Visa", info: true },
    { name: "Work Permit Visa", info: false },
  ];

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
            <h2 className="breadcrumb__title">Student Visa</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
             
              <li className="breadcrumb-item">Student Visa</li>
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

      {/* <!-- contact start --> */}
      <section
        className="contact  gray-bg"
        style={{ paddingBottom: "60px", paddingTop: "100px" }}
      >
        <div>
          <div className="container">
            <blockquote>
              <p>
                Most countries will issue student visas in order to allow
                foreign students to attend school within their borders. However,
                in most cases the student must be enrolled at a postsecondary
                institution of higher learning. Foreign exchange students must
                therefore usually obtain a different type of visa, such as for
                temporary residence.
              </p>

              <div className="quote">
                <img src="assets/img/icon/quote.png" alt="" />
              </div>
            </blockquote>
          </div>
        </div>
        <div className="container">
          <div className="xb-contact pos-rel" style={{ overflow: "visible" }}>
            <div className="row">
              <div className="col-12">
                <div className="p-5">
                  <div className="xb-item--holder mb-25">
                    <h3 className="wow skewIn ">Primary Details</h3>
                  </div>
                  <form className="xb-item--form contact-from" action="#!">
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="">Your Full Name :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_user.svg" alt="" />
                          </span>
                          <input type="text" placeholder="Enter your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Your Father Name :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_user.svg" alt="" />
                          </span>
                          <input
                            type="text"
                            placeholder="Enter your Father Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Contact No. (Mobile) :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_call.svg" alt="" />
                          </span>
                          <input
                            type="text"
                            placeholder="Enter Your Contact Number"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label htmlFor="">Landline Number (If Any) :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_call.svg" alt="" />
                          </span>
                          <input
                            type="text"
                            placeholder="Enter Your Landline Number"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label htmlFor="">
                          Alternate Contact No. (Mobile) :
                        </label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_call.svg" alt="" />
                          </span>
                          <input
                            type="text"
                            placeholder="Enter Your Contact Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Email :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_mail.svg" alt="" />
                          </span>
                          <input type="text" placeholder="Enter Your Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Date Of Birth :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_mail.svg" alt="" />
                          </span>
                          <input
                            type="Date"
                            placeholder="Enter Your DOB"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Desired Country :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_select.svg" alt="" />
                          </span>
                          <div className="nice-select" tabindex="0">
                            <span className="current">Select Country</span>
                            <ul className="list">
                              <li
                                data-value="1"
                                className="option multiple focus"
                              >
                                Canada
                              </li>
                              <li data-value="2" className="option">
                                Australia
                              </li>
                              <li data-value="3" className="option">
                                New Zealand
                              </li>
                              <li data-value="4" className="option">
                                USA
                              </li>
                              <li data-value="4" className="option">
                                UK
                              </li>
                              <li data-value="4" className="option">
                                Europe
                              </li>
                              <li data-value="4" className="option">
                                Any Other
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="xb-item--field">
                          <label>
                            <strong>
                              If you are married, Do you want dependent visa for
                              your spouse ?
                            </strong>
                          </label>
                          <FormGroup row>
                            <label style={{ marginRight: "10px" }}>No</label>
                            <FormControlLabel
                              control={<Switch color="primary" />}
                              label="Yes"
                            />
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact end --> */}
      <Footer />
    </div>
  );
}
