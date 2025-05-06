import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import { Button, Modal } from "@mui/material";

// import { Modal, Button, Form } from 'react-bootstrap';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
export default function Inquiryassociation() {
   // data-background img start
    const [background, setBackground] = useState("");
  
    useEffect(() => {
      const backgroundUrl = "assets/img/bg/breadcrumb_bg.jpg";
      setBackground(backgroundUrl);
    }, []);
    // data-background img end
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    
    const associationData = [
      {
        title: "Prospects Feeder / Navigator",
        description:
          "Parsing contact details for IELTS Coaching / Visa Clients earning is based on supply of more & more contacts.",
      },
      {
        title: "Freelancer",
        description:
          "Lead generation / Primary explanation to clients. You have to work to bring business regularly. Earning is based on performance.",
      },
      {
        title: "Direct Sales Associate (DSA)",
        description:
          "Responsible for promotion, marketing and registration of client with initial payment collection. Fixed Pay + Variable Incentives.",
      },
      {
        title: "Business Associate (BA)",
        description:
          "Marketing, registration and correspondence will be done by BA. Client will not come in direct contact with Goforen. BA has to pay charges to Goforen for file preparation and information provided by Goforen.",
      },
      {
        title: "Licensee",
        description:
          "Access to webportal of Goforen will be provided. It is like ERP but more than ERP. It will provide all latest update on visa rules of various countries on hand.",
      },
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
            <h2 className="breadcrumb__title">Inquiry For Assocation with us</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/Visa-services">Visa Services</a>
              </li>
              <li className="breadcrumb-item">Inquiry For Assocation with us</li>
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

      <section className="association-section pt-120 pb-120">
      <div className="container">
        <div className="header  text-white text-center fw-bold py-3 rounded-top" style={{background:'#00cc99'}}>
          Inquiry For Association with us
        </div>
        <div className="d-flex flex-wrap justify-content-center border rounded-bottom overflow-auto">
          {associationData.map((item, index) => (
            <div className="card m-2 flex-fill" style={{ minWidth: "260px", maxWidth: "345px" }} key={index}>
              <div className="card-header  fw-bold text-center text-dark" style={{background:'#fff'}}>
                {item.title}
              </div>
              <div className="card-body small" style={{ minHeight: "200px",background:'#f9f9f9',color:'#000' }}>
                {item.description}
              </div>
              <div className="card-footer text-center" style={{background:'#fff'}}>
              <button
                    className="btn text-white px-4"
                    style={{ background: '#00cc99' }}
                    onClick={handleShow}
                  >
                    Inquiry
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     {/* MODAL */}
     <Dialog open={showModal} onClose={handleClose} fullWidth maxWidth="sm">
  <DialogTitle>Inquiry For Association</DialogTitle>
  <DialogContent dividers>
    <div className="my-2">
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        placeholder="Enter your Name"
        className="mb-3"
        margin="dense"
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        placeholder="Enter your Email"
        className="mb-3"
        margin="dense"
      />
      <TextField
        fullWidth
        label="Contact No."
        variant="outlined"
        placeholder="Enter your Number"
        className="mb-3"
        margin="dense"
      />
      <TextField
        select
        fullWidth
        label="Present Occupation"
        variant="outlined"
        defaultValue=""
        className="mb-3"
        margin="dense"
      >
        <MenuItem value="">--Please Select--</MenuItem>
        <MenuItem value="1">Travel Agent</MenuItem>
        <MenuItem value="2">IELTS Trainer</MenuItem>
        <MenuItem value="3">Visa Service Agent</MenuItem>
        <MenuItem value="4">Other</MenuItem>
      </TextField>
      <TextField
        fullWidth
        multiline
        rows={3}
        label="Additional Query"
        variant="outlined"
        placeholder="Enter your query"
        className="mb-3"
        margin="dense"
      />
    </div>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Close</Button>
    <Button variant="contained" style={{ background: "#00cc99" }}>
      Send
    </Button>
  </DialogActions>
</Dialog>


      <Footer />
    </div>
  )
}
