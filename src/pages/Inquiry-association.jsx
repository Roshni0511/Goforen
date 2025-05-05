import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import { Modal, Button, Form } from 'react-bootstrap';

export default function Inquiryassociation() {
   // data-background img start
    const [background, setBackground] = useState("");
  
    useEffect(() => {
      const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Inquiry For Assocation with us</h2>
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
     <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Inquiry For Association</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="xb-item--form contact-from" >
            <Form.Group className="mb-2">
              <Form.Label>Name :</Form.Label>
              <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_user.svg" alt="" />
                          </span>
                          <input type="text" placeholder="Enter your Name" />
                        </div>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email :</Form.Label>
              <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_mail.svg" alt="" />
                          </span>
                          <input type="text" placeholder="Enter Your Email" />
                        </div>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Contact No. :</Form.Label>
              <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_call.svg" alt="" />
                          </span>
                          <input type="text" placeholder="Enter Your Number" />
                        </div>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Present Occupation :</Form.Label>
              {/* <Form.Select> */}
              <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_select.svg" alt="" />
                          </span>
                          <div className="nice-select" tabindex="0">
                            <span className="current">--Please Select--</span>
                            <ul className="list">
                              <li
                                data-value="1"
                                className="option selected focus"
                              >
                               Travel Agent
                              </li>
                              <li data-value="2" className="option">
                              IELTS Traine
                              </li>
                              <li data-value="3" className="option">
                              Visa Service Agent
                              </li>
                             
                              <li data-value="4" className="option">
                                Other
                              </li>
                            </ul>
                          </div>
                        </div>
              {/* </Form.Select> */}
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Additional Query</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ background: '#00cc99', border: 'none' }}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>


      <Footer />
    </div>
  )
}
