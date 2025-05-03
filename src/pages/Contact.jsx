import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useLocation } from 'react-router-dom';

export default function Contact() {

  const location = useLocation();

  const isVisitorVisa = location.pathname === '/visitor';
  const isInvestorVisa = location.pathname === '/investor';
  const canvasRef = useRef(null);
  // data-background img start
  const [background, setBackground] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const visaServices = [
    { name: "Student Visa", info: false },
    { name: "PR Visa", info: false },
    { name: "Visitor Visa", info: true },
    { name: "Investor Visa", info: true },
    { name: "Work Permit Visa", info: false },
  ];
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";

    for (let i = 0; i < 6; i++) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length));
      captcha += char;
      ctx.font = `${20 + Math.random() * 10}px Arial`;
      ctx.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      const angle = (Math.random() - 0.5) * 0.5;
      ctx.save();
      ctx.translate(30 * i + 20, canvas.height / 2);
      ctx.rotate(angle);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    setCaptchaCode(captcha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captchaCode) {
      alert("Invalid captcha code. Please try again.");
      generateCaptcha();
      setCaptchaInput("");
      return;
    }
    alert("Form submitted successfully!");
    // Reset your form here
    generateCaptcha();
    setCaptchaInput("");
  };

  useEffect(() => {
    const backgroundUrl = "assets/img/bg/breadcrumb_bg.jpg";
    setBackground(backgroundUrl);
  }, []);
  // data-background img end

  const [showCourse, setShowCourse] = useState(false);

  const handleSwitchChange = (event) => {
    setShowCourse(event.target.checked);
  };

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
            <h2 className="breadcrumb__title">Contact Us</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li className="breadcrumb-item">Contact Us</li>
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
        className="contact contact-pt gray-bg"
        style={{ paddingBottom: "60px" }}
      >
        <div className="container">
          <div className="xb-contact pos-rel">
            <div className="row">
              <div className="col-lg-6">
                <div className="xb-item--inner" style={{ boxShadow: "none" }}>
                  <div className="xb-item--holder mb-25">
                    <span>
                      <img src="assets/img/icon/n_pad.svg" alt="" />
                      Contact Us
                    </span>
                    {/* <h3>Do you have questions or went more <br/> information?</h3> */}
                  </div>
                  <form className="xb-item--form contact-from" action="#!">
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="">Name :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_user.svg" alt="" />
                          </span>
                          <input type="text" placeholder="Enter your Name" />
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
                        <label htmlFor="">Number :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_call.svg" alt="" />
                          </span>
                          <input type="text" placeholder="Enter Your Number" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Desired Country :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_select.svg" alt="" />
                          </span>
                          <div className="nice-select" tabindex="0">
                            <span className="current">Desired Country</span>
                            <ul className="list">
                              <li
                                data-value="1"
                                className="option selected focus"
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

                      <div className="col-lg-6">
                        <label htmlFor="">Desired Visa Service :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_select.svg" alt="" />
                          </span>
                          <div className="nice-select" tabindex="0">
                            <span className="current">
                              Desired Visa Service
                            </span>
                            <ul className="list">
                              <li
                                data-value="1"
                                className="option selected focus"
                              >
                                Permanent Residency
                              </li>
                              <li data-value="2" className="option">
                                Work Permit
                              </li>
                              <li data-value="3" className="option">
                                State Nomination
                              </li>
                              <li data-value="4" className="option">
                                Investment
                              </li>
                              <li data-value="4" className="option">
                                Business
                              </li>
                              <li data-value="4" className="option">
                                Visitor Visa
                              </li>
                              <li data-value="4" className="option">
                                PR - RNIP
                              </li>
                              <li data-value="4" className="option">
                                PR - AIPP
                              </li>
                              <li data-value="4" className="option">
                                Blood Relation
                              </li>
                              <li data-value="4" className="option">
                                Student Visa
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Resume :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_upload.svg" alt="" />
                          </span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            id="resumeUpload"
                            className="form-control"
                            placeholder="Upload Your Resume"
                          />
                        </div>
                      </div>
                      <div className="row">
                        {/* Coaching Switch */}
                        <div className="col-lg-6">
                          <div className="xb-item--field">
                            <label>
                              <strong>Are You Interested In Coaching ?*</strong>
                            </label>
                            <FormGroup row>
                              <label style={{ marginRight: "10px" }}>No</label>
                              <FormControlLabel
                                control={
                                  <Switch
                                    checked={showCourse}
                                    onChange={handleSwitchChange}
                                    color="primary"
                                  />
                                }
                                label="Yes"
                              />
                            </FormGroup>
                          </div>
                        </div>

                        {/* Conditional Course Dropdown */}
                        {showCourse && (
                          <div className="col-lg-6">
                            <div className="xb-item--field">
                              <label>
                                <strong>Course*</strong>
                              </label>

                              <div className="xb-item--field">
                                <span>
                                  <img
                                    src="assets/img/icon/c_select.svg"
                                    alt=""
                                  />
                                </span>
                                <div className="nice-select" tabindex="0">
                                  <span className="current">Select Course</span>
                                  <ul className="list">
                                    <li
                                      data-value="1"
                                      className="option selected focus"
                                    >
                                      IELTS
                                    </li>
                                    <li data-value="2" className="option">
                                      TOEFL IBT
                                    </li>
                                    <li data-value="3" className="option">
                                      GRE
                                    </li>
                                    <li data-value="4" className="option">
                                      PTE
                                    </li>
                                    <li data-value="4" className="option">
                                      SAT
                                    </li>
                                    <li data-value="4" className="option">
                                      Other
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="col-12">
                        <label htmlFor="">Message :</label>
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
                        <label>Captcha :</label>

                        <div className="row align-items-center g-2 mb-2">
                          <div className="col-md-auto">
                            <canvas
                              ref={canvasRef}
                              width={200}
                              height={50}
                              style={{
                                border: "1px solid #ccc",
                                display: "block",
                              }}
                            />
                          </div>
                          <div className="col-md-auto">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={generateCaptcha}
                            >
                              Refresh
                            </button>
                          </div>
                        </div>

                        <div className="xb-item--field">
                          <input
                            type="text"
                            placeholder="Enter Captcha"
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            required
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="thm-btn" type="submit">
                          Submit
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

      <div className="container py-5">
        <span className="sec-title--sub">
          <img src="assets/img/icon/h_star.png" alt="" />
          IF YOU WANT YOUR PROFILE TO BE ASSESSED IN DETAIL PLEASE FILL UP THE
          REQUIRED FORM
          <img src="assets/img/icon/h_star.png" alt="" />
        </span>

        <ul className="list-unstyled">
          {visaServices.map((service, idx) => (
            <li key={idx} className="mb-2 d-flex align-items-center">
              <span className=" me-2">●</span>
              <a href="#" className="fw-bold text-dark text-decoration-none">
                {service.name}
                {service.info && (
                  <i
                    className="bi bi-info-circle-fill ms-1"
                    title="More Info"
                  ></i>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Cards Grid */}
        <center>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Address</h6>
                  <p className="card-text" style={{ textAlign: "center" }}>
                    701-702, 7<sup>th</sup> floor, Joyos Hubtown, Adajan Bus
                    port, Surat-395009
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Phone</h6>
                  <p className="card-text" style={{ textAlign: "center" }}>
                    +91 76 00 90 90 90
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title fw-bold">WhatsApp</h6>
                  <p className="card-text" style={{ textAlign: "center" }}>
                    +91 85 1111 0 221
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Mail</h6>
                  <p className="card-text" style={{ textAlign: "center" }}>
                    <a href="mailto:info@goforen.com" className="text-dark">
                      info@goforen.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>

      {/* new page start  */}
      <div className="contact-page">

{/* ✅ Common Contact Page Content */}
{/* <h2>Contact Us</h2> */}
{/* ... your form or contact info ... */}

{/* ✅ Show alert only for visitor or investor */}
{(isVisitorVisa || isInvestorVisa) && (
  <div className="container">
    <div className="alert alert-warning">
      <i className="fa fa-info-circle"></i>&nbsp;
      Visitor Visa / Investor Visa does not require detailed assessment.
      Please fill up the below form and we will guide on proceeding further.
    </div>
  </div>
)}

</div>
      {/* new page end */}

      <Footer />
    </div>
  );
}
