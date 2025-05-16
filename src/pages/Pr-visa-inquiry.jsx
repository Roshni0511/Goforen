import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
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
import axios from 'axios';

import UploadYourResume from "../component/UploadYourResume";


import AttemptedInternationalExam3 from "../component/AttemptedInternationalExam3";
import UploadYourResume1 from "../component/UploadYourResume1";
import PRVisaInquiryForm from "./PRVisaInquiryForm";

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
const options1 = [
  { value: 1, label: "Canada" },
  { value: 2, label: "Australia" },
  { value: 3, label: "New Zealand" },
  { value: 4, label: "USA" },
  { value: 5, label: "UK" },
  { value: 6, label: "Europe" },
  { value: 7, label: "Any Other" },
];
export default function Prvisainquiry() {
  const [formData, setFormData] = useState({
    desired_country: '',
    desired_visa_route: '',
    relation: '',
    name: '',
    number: '',
    landline: '',
    alt_number: '',
    email: '',
    dob: '',
    marital_status: '',
    no_of_child: '',
    flat_no: '',
    building_name: '',
    road_street: '',
    pincode: '',
    area: '',
    city: '',
    resume: null,

    education_qualifications: [
      {
        qualification: '',
        stream_of_degree: '',
        major_degree: '',
        year_of_completion: '',
        percentage: '',
        total_backlog: '',
      },
    ],
    employeement_details: [
      {
        company: '',
        designation: '',
        from_date: '',
        to_date: '',
        no_of_years: '',
      },
    ],
    exam_details: [
      {
        exam: '',
        listening: '',
        reading: '',
        writing: '',
        speaking: '',
        final_score: '',
      },
    ],
    test_details: [
      {
        exam: '',
        verbal_reasoning: '',
        quantitative_reasoning: '',
        analytical_writing: '',
        final_score: '',
      },
    ],
  });

  // Generic input change handler for top-level fields
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  // Dynamic list field handler
  const handleNestedChange = (e, index, section, field) => {
    const updatedList = [...formData[section]];
    updatedList[index][field] = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [section]: updatedList,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    // Append regular fields
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const res = await axios.post('https://localhost:8000/submit-pr-visa-inquiry/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.status === 201) {
        alert("Form submitted successfully!");
        window.location.reload();
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };


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
    const [background12, setBackground12] = useState("");
        
          useEffect(() => {
            const backgroundUrl12 = "assets/img/bg/blog_bg.png";
            setBackground12(backgroundUrl12);
          }, []);
  // data-background img end

  
   
  
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
  
    // const handleChange = (index, field, value) => {
    //   const updatedRows = [...rows];
    //   updatedRows[index][field] = value;
    //   setRows(updatedRows);
    // };
  
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
  // 

  
  
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>PR Visa Inquiry</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li className="breadcrumb-item">PR Visa Inquiry</li>
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
                    Any foreign national who wishes to relocate to any other country, on a permanent basis need an immigration visa or in general terms called a PR (permanent residency) of a particular country.
                    </p>
                    <p>You are requested to fill this form , if you want to asses your eligibility in detail, you will be given report about it with no cost involved.</p>
      
                    <div className="quote">
                      <img src="assets/img/icon/quote.png" alt="" />
                    </div>
                  </blockquote>
                </div>
              </div>
              {/* Primary Details start  */}
              {/* Additional Details end */}
        <div className="container py-5">
          <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
            <div className="row">
              <div className="col-12">
                <div className="p-3">
                  <div className="xb-item--holder mb-4">
                    <h3 className="wow skewIn  fw-bold border-bottom pb-2">Primary Details</h3>
                  </div>
      
      <PRVisaInquiryForm />
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
