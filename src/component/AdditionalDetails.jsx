import React, { useEffect, useRef, useState } from "react";

import PublicIcon from "@mui/icons-material/Public";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const options1 = [
  { value: 1, label: "Canada" },
  { value: 2, label: "Australia" },
  { value: 3, label: "New Zealand" },
  { value: 4, label: "USA" },
  { value: 5, label: "UK" },
  { value: 6, label: "Europe" },
  { value: 7, label: "Any Other" },
];
export default function AdditionalDetails() {

      const canvasRef = useRef(null);
        const [captchaCode, setCaptchaCode] = useState("");
        const [captchaInput, setCaptchaInput] = useState("");
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
  const [hasPassport, setHasPassport] = useState(true); // default: Yes

  const handlePassportToggle = (e) => {
    setHasPassport(e.target.checked); // true = Yes, false = No
  };

  //
  const [hasPassport1, setHasPassport1] = useState(true); // default: Yes

  const handlePassportToggle1 = (e) => {
    setHasPassport1(e.target.checked); // true = Yes, false = No
  };

  //
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggleOption1 = (value) => {
    setSelectedOptions1((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const getLabel1 = () => {
    if (selectedOptions1.length === 0) return "None Selected";
    return options1
      .filter((opt) => selectedOptions1.includes(opt.value))
      .map((opt) => opt.label)
      .join(", ");
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="xb-contact pos-rel" style={{ overflow: "visible" }}>
          <div className="row">
            <div className="col-12">
              <div className="p-5">
                <div className="xb-item--holder mb-25">
                  <h3 className="wow skewIn ">Additional Details</h3>
                </div>
                <form className="xb-item--form contact-from" action="#!">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="">Do You Have A Valid Passport?</label>
                      <br />
                      <div style={{ marginTop: "10px" }}>
                        <span
                          style={{ marginRight: "8px", marginBottom: "0px" }}
                        >
                          No
                        </span>
                        <label className="experience-toggle-switch">
                          <input
                            type="checkbox"
                            checked={hasPassport}
                            onChange={handlePassportToggle}
                          />
                          <span
                            className="experience-slider"
                            style={{ marginBottom: "0px" }}
                          ></span>
                        </label>
                        <span
                          style={{ marginLeft: "8px", marginBottom: "0px" }}
                        >
                          Yes
                        </span>
                      </div>
                    </div>

                    {hasPassport && (
                      <>
                        <div className="col-lg-4 ">
                          <label htmlFor="">Date Of Birth :</label>
                          <div className="xb-item--field">
                            <span>
                              <CalendarMonthIcon />
                            </span>
                            <input
                              type="date"
                              placeholder="Enter Your DOB"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <label htmlFor="">Citizenship :</label>
                          <div className="xb-item--field">
                            <span>
                              <PermIdentityIcon />
                            </span>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <label htmlFor="">Passport No. :</label>
                          <div className="xb-item--field">
                            <span>
                              <PermIdentityIcon />
                            </span>
                            <input type="text" />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="col-lg-6 ">
                      <label htmlFor="">Father's Occupation :</label>
                      <div className="xb-item--field">
                        <span>
                          <PermIdentityIcon />
                        </span>
                        <input type="text" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                      <label htmlFor="">
                        Approximate Annual Income Of Family :
                      </label>
                      <div className="xb-item--field">
                        <span>
                          <CurrencyRupeeIcon />
                        </span>
                        <input type="text" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                      <label htmlFor="">
                        Do You Have Any Relatives (In Blood Relation) / Siblings
                        Living Permanently In A Country Where You Intend To Get
                        Student Visa ?
                      </label>
                      <div style={{ marginTop: "10px" }}>
                        <span
                          style={{ marginRight: "8px", marginBottom: "0px" }}
                        >
                          No
                        </span>
                        <label className="experience-toggle-switch">
                          <input
                            type="checkbox"
                            checked={hasPassport1}
                            onChange={handlePassportToggle1}
                          />
                          <span
                            className="experience-slider"
                            style={{ marginBottom: "0px" }}
                          ></span>
                        </label>
                        <span
                          style={{ marginLeft: "8px", marginBottom: "0px" }}
                        >
                          Yes
                        </span>
                      </div>
                    </div>
                    {hasPassport1 && (
                      <>
                        <div className="col-lg-6">
                          <label htmlFor="">Name Of The Countries :</label>
                          <div className="xb-item--field">
                            <span>
                              <PublicIcon />
                            </span>
                            <div
                              className="nice-select"
                              tabIndex="0"
                              onClick={() => setDropdownOpen1(!dropdownOpen1)}
                              onBlur={() => setDropdownOpen1(false)}
                            >
                              <span
                                className="current"
                                style={{
                                  display: "inline-block",
                                  maxWidth: "100%", // control how much text to show
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {getLabel1()}
                              </span>
                              {dropdownOpen1 && (
                                <ul className="list">
                                  {options1.map((option) => (
                                    <li
                                      key={option.value}
                                      data-value={option.value}
                                      className={`option ${
                                        selectedOptions1.includes(option.value)
                                          ? "selected"
                                          : ""
                                      }`}
                                      onClick={(e) => {
                                        e.stopPropagation(); // prevent closing dropdown
                                        toggleOption1(option.value);
                                      }}
                                    >
                                      {option.label}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                   <div className="row mt-3">
                   <div className="col-lg-6">  
                        <label htmlFor="">How did you come to know about us? :</label>
                        <div className="xb-item--field">
                          <span>
                            <PublicIcon />
                          </span>
                          <div className="nice-select" tabindex="0">
                            <span className="current">Please Select </span>
                            <ul className="list">
                              <li
                                data-value="1"
                                className="option multiple focus"
                              >
                               Relatives
                              </li>
                              <li data-value="2" className="option">
                              Friends
                              </li>
                              <li data-value="3" className="option">
                              Website
                              </li>
                              <li data-value="4" className="option">
                              Social Media
                              </li>
                              <li data-value="5" className="option">
                              News Paper
                              </li>
                              <li data-value="6" className="option">
                              TV Advertisement
                              </li>
                              <li data-value="7" className="option">
                              Pamphlet
                              </li>
                              <li data-value="8" className="option">
                              Fair
                              </li>
                              <li data-value="9" className="option">
                              Cold Calling
                              </li>
                              <li data-value="10" className="option">
                              Seminar
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Any Additional Information, you would like to write here :</label>
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_message.svg" alt="" />
                          </span>
                          <textarea
                            name="message"
                            id="message"
                            cols="20"
                            rows="5"
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
                          style={{width:'50%'}}
                            type="text"
                            placeholder="Enter Captcha"
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                   </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
