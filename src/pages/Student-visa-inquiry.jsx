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
import StudentVisaInquiryForm from "./StudentVisaInquiryForm";

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
            <h2 className="breadcrumb__title" style={{ color: '#fff' }}>Student Visa</h2>
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
        {/* Primary Details start  */}

        <div className="container py-5">
          <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
            <div className="row">
              <div className="col-12">
                <div className="p-3">
                  <div className="xb-item--holder mb-4">
                    <h3 className="wow skewIn  fw-bold border-bottom pb-2">Primary Details</h3>
                  </div>
                  <StudentVisaInquiryForm />
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
