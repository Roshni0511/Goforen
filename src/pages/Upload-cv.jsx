import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Uploadcv() {
  const canvasRef = useRef(null);
 
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
 // data-background img start
  useEffect(() => {
    const backgroundUrl = "https://www.goforen.com/images/bg/breadcrumb-bg.jpg";
    setBackground(backgroundUrl);
  }, []);
  // data-background img end





  return (
    <div>
      <Navbar />
      {/* <!-- breadcrumb start --> */}
      <section
  className="breadcrumb pos-rel bg_img"
  style={{ 
    backgroundImage: `url(${background})`, 
    minHeight: '400px',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // black overlay with 50% opacity
    zIndex: 1
  }}></div>

  <div className="container" style={{ position: 'relative', zIndex: 2 }}>
    <div className="breadcrumb__content">
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Upload Your CV</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li className="breadcrumb-item">Upload Your CV</li>
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
        style={{ paddingBottom: "60px", paddingTop: "160px" }}
      >
        <div className="container">
          <div className="xb-contact pos-rel">
            <div className="row">
              <div className="col-12">
                <div className="p-5">
                  <div className="xb-item--holder mb-25">
                    <span>
                      <img src="assets/img/icon/n_pad.svg" alt="" />
                      Upload Your CV
                    </span>
                   
                    <h5>If you do not wish to fill up the full inquiry form, upload your latest CV below. We will assess your profile and contact you.</h5>
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
                                Immigration - PR Visa
                              </li>
                              <li data-value="2" className="option">
                              Student Visa
                              </li>
                              <li data-value="3" className="option">
                              Visitor Visa
                              </li>
                              <li data-value="4" className="option">
                              Investor Visa
                              </li>
                              <li data-value="4" className="option">
                              Work Permit Visa
                              </li>
                              
                            </ul>
                          </div>
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
                        <label htmlFor="">CV :</label>
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
                      <div className="col-lg-6">
                        <label htmlFor="">Gender :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_select.svg" alt="" />
                          </span>
                          <div className="nice-select" tabindex="0">
                            <span className="current">
                            Select Gender
                            </span>
                            <ul className="list">
                              <li
                                data-value="1"
                                className="option selected focus"
                              >
                               Male
                              </li>
                              <li data-value="2" className="option">
                              Female
                              </li>
                              <li data-value="3" className="option">
                              Other
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                      </div>
                     
                      <div className="col-lg-6">
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
          </div>
        </div>
      </section>
      {/* <!-- contact end --> */}

      <Footer />
    </div>
  );
}
