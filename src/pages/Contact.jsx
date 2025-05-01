import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
export default function Contact() {
  // data-background img start
  const [background, setBackground] = useState("");

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
                <div className="xb-item--inner">
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
          <label><strong>Are You Interested In Coaching ?*</strong></label>
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
            <label><strong>Course*</strong></label>
           
            <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_select.svg" alt="" />
                          </span>
                          <div className="nice-select" tabindex="0">
                            <span className="current">
                            Select Course
                            </span>
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
                      <div class="col-lg-12 mt-3">
                  <label for="captcha-input" class="form-label">Enter Captcha</label>
                  <div class="d-flex align-items-center mb-2">
                    <canvas id="captcha" width="200" height="50" style={{border:"1px solid #ccc"}}></canvas>
                    <button type="button" id="refresh-captcha" style={{marginLeft:" 10px"}}>↻</button>
                  </div>
                  <input type="text" class="form-control" id="captcha-input" required />
                </div>
                      <div className="col-12">
                      
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
      <Footer />
    </div>
  );
}
