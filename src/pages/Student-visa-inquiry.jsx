import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CallIcon from "@mui/icons-material/Call";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import HouseIcon from "@mui/icons-material/House";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import PinDropIcon from "@mui/icons-material/PinDrop";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import IntendedStudyDetails from "../component/IntendedStudyDetails";
import AttemptedInternationalExams from "../component/AttemptedInternationalExams";
import UploadYourResume from "../component/UploadYourResume";
import AdditionalDetails from "../component/AdditionalDetails";
import DetailsAboutSpouse from "../component/DetailsAboutSpouse";

const initialRows = [
  {
    qualification: "10th SSC",
    stream: "10th (SSC)",
    major: "",
    year: "",
    percentage: "",
    backlog: "",
  },
  {
    qualification: "12th HSC",
    stream: "B.Sc",
    major: "",
    year: "",
    percentage: "",
    backlog: "",
  },
  {
    qualification: "Degree (Bachelor)/ Diploma",
    stream: "",
    major: "",
    year: "",
    percentage: "",
    backlog: "",
  },
  {
    qualification: "Master Degree/PG Diploma",
    stream: "MCM",
    major: "",
    year: "",
    percentage: "",
    backlog: "",
  },
  {
    qualification: "Others",
    stream: "",
    major: "",
    year: "",
    percentage: "",
    backlog: "",
  },
];
const streamOptions = [
  "Select",
  "10th (SSC)",
  "12th Commerce (HSC)",
  "12th Science (HSC)",
  "B.E.",
  "B.Tech",
  "B.Sc",
  "B.Com",
  "B.A",
  "B.Ed",
  "B.Arch",
  "B.Des.",
  "BCA",
  "BBA/ BMS",
  "BFA",
  "BHM",
  "BHMS",
  "BDS",
  "B.P.Ed",
  "B.El.Ed",
  "BAMS",
  "B.U.M.S",
  "B.Pharma",
  "MBBS",
  "LLB",
  "BVSC",
  "Diploma",
  "M.Sc",
  "MS/M.Sc(Science)",
  "M.Tech",
  "MCA",
  "M.Com",
  "M.A",
  "MBA/PGDM",
  "M.Ed",
  "M.Des.",
  "M.Pharma",
  "M.Ch",
  "M.Arch",
  "MDS",
  "MFA",
  "MPHIL",
  "Ph.D/Doctorate",
  "PG Diploma",
  "Medical-MS/MD",
  "Integrated PG",
  "DM",
  "ICWA (CMA)",
  "CS",
  "CA",
  "LLM",
  "MCM",
  "MVSC",
  "Other",
];

export default function Studentvisainquiry() {
  const [step, setStep] = useState(1); // Step 1, 2, 3...

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };
  // data-background img start
     const [background, setBackground] = useState("");
                      
                        useEffect(() => {
                          const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
                          setBackground(backgroundUrl);
                        }, []);
  // data-background img end
  const [showSpouseDetails, setShowSpouseDetails] = useState(false); // default: No

  const handleToggle = (e) => {
    setShowSpouseDetails(e.target.checked); // true = Yes, false = No
  };
 

  const [hasExperience, setHasExperience] = useState(false);
  const [experienceData, setExperienceData] = useState([
    { company: "", designation: "", from: "", to: "", years: "" },
  ]);

  const toggleExperience = () => {
    setHasExperience(!hasExperience);
  };

  const updateField = (index, field, value) => {
    const updated = [...experienceData];
    updated[index][field] = value;
    setExperienceData(updated);
  };

  const addExperienceRow = () => {
    setExperienceData([
      ...experienceData,
      { company: "", designation: "", from: "", to: "", years: "" },
    ]);
  };

  const removeExperienceRow = (index) => {
    const updated = experienceData.filter((_, i) => i !== index);
    setExperienceData(updated);
  };

  const [rows, setRows] = useState(initialRows);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        qualification: "",
        stream: "",
        major: "",
        year: "",
        percentage: "",
        backlog: "",
      },
    ]);
  };

  const removeRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Student Visa</h2>
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

            {/* <!-- coaching single start --> */}
            <section class="coaching-single pt-120 pb-130">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="sidebar-widget">
                            <div class="widget">
                                <ul class="widget-category list-unstyled">
                                   
                                    <li><a class="active" href="/Immigration-pr-visa"> Immigration - PR Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Student-visa">Student Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Visitor-visa"> Visitor Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Investor-visa">Investor Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Work-permit-visa"> Work Permit Visa <span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                </ul>
                            </div>
                            <div className="blog-sidebar" style={{paddingLeft:'0px'}}>

                            <div className="widget">
                  <h3 className="widget-title">
                  Countries for Student Visa
                  </h3>
                  <div className="widget__post">
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/canada.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html"> Canada </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/australia.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html"> Australia </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/new-zealand.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html"> New Zealand </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/USA.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html"> USA </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src="/assets/pic/uk.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="blog-single.html">UK</a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
                            </div>
                          
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="single-content">
                            <h3>  Immigration - PR Visa</h3>
                        
                             <p>
                      As per the report of BBC-UK people migrate for many
                      different reasons. These reasons can be classified as
                      economic, social, political or environmental :
                    </p>
                    <ul style={{ paddingLeft: "10px" }}>
                      <li>
                        <b>economic migration</b> - moving to find work or
                        follow a particular career path
                      </li>
                      <li>
                        <b>social migration</b> - moving somewhere for a better
                        quality of life or to be closer to family or friends
                      </li>
                      <li>
                        <b>political migration</b> - moving to escape political
                        persecution or war
                      </li>
                      <li>
                        <b>environmental</b> causes of migration include natural
                        disasters such as flooding Some people choose to
                        migrate, eg someone who moves to another country to
                        enhance their career opportunities. Some people are
                        forced to migrate, eg someone who moves due to war or
                        famine.
                      </li>
                    </ul>
                            <div class="single-img mt-35 mb-70">
                                <img src="/assets/pic/visaaa.jpg" />
                            </div>
                            <h3>How e.visa work</h3>
                            <ul class="about-list ul_li list-unstyled">
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number">1</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Choose your visa type</h3>
                                            <div class="xb-item--description">
                                                Determine the Visa type for your travel
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number color-2">2</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Contact our branches</h3>
                                            <div class="xb-item--description">
                                                Start your transaction by applying..
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number color-3">3</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Submit All Your Documents</h3>
                                            <div class="xb-item--description">
                                                Collect all the required documents  the..
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number color-4">4</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Passport delivery</h3>
                                            <div class="xb-item--description">
                                                Receive your visa, which is finalized..
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            
                          
                            <p style={{marginTop:'20px'}}>Migration usually happens as a result of a combination of these push and pull factors.

We, at GO FOREN, help people migrate from India to an overseas location where we are experts. We support you right from inspiring guidance to documentation and take care of all the associated legal procedures required for positive outcome of your application. Here is the sequence of steps through which you will pass on to make immigration incredibly simple.</p>
<h3>Conclusion</h3>
<p>
Immigrating to Canada can be a complex and time-consuming process, but with Go Foren by your side, you can rest assured that your application will be handled with the utmost care and expertise. Our team of best immigration consultants and registered immigration consultants is dedicated to helping you achieve your Canadian immigration goals. Whether you’re applying for a visa, permanent residency, or citizenship, we offer comprehensive support tailored to your specific needs. Contact Go Foren today to take the first step toward your new life in Canada.</p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- coaching single end --> */}
      <Footer />
    </div>
  );
}
