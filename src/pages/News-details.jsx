import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaCalendarAlt, FaTags, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

export default function Newsdetails() {
     const [background, setBackground] = useState("");
                      
                        useEffect(() => {
                          const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
                          setBackground(backgroundUrl);
                        }, []);
                        const [background1, setBackground1] = useState("");
                      
                        const blogContent = "The Netherlands is witnessing a surge in unauthorised employment...";

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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Netherlands Sees Rise in Undocumented Workers, Raising Exp...</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">News Details</li>
              <li className="breadcrumb-item">Netherlands Sees Rise in Undocumented Workers, Raising Exp...</li>
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
      <div style={{padding:'100px 0px'}}>
        <div className="container" style={{background: "#f8f8f8"}}>
          <div className="col-12" >
            <div className="row" style={{justifyContent:'center'}}>
            <div className="col-6" style={{padding:'50px 0px'}}>
  <div style={{
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  
  }}>
    <h4 style={{ color: '#00cc99', marginBottom: '10px' }}>
      Netherlands Sees Rise in Undocumented Workers, Raising Exploitation Concerns
    </h4>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
      <span style={{ color: '#f90', display: 'flex', alignItems: 'center', gap: '5px' }}>
        <FaCalendarAlt /> 05 May, 2025
      </span>
      <span style={{ color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
        <FaTags /> Immigration - PR Visa, Europe
      </span>
    </div>
    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px',marginTop:'15px' }}>
      <button className="btn btn-sm btn-primary"><FaFacebookF /> Share</button>
      <button className="btn btn-sm btn-info"><FaLinkedinIn /> Share</button>
      <button className="btn btn-sm btn-dark">X Post</button>
      <button className="btn btn-sm btn-success"><FaWhatsapp /> Whatsapp</button>
    </div>
    <p style={{ lineHeight: '1.7' }}>
      The Netherlands is witnessing a surge in unauthorised employment of third-country nationals, with tens of thousands,
      including 35,000 Brazilians in Amsterdam alone, working without proper permits. These undocumented workers are mostly
      found in construction, agriculture, hospitality, and domestic services, raising concerns about exploitation and lack
      of access to health care...
    </p>
    <p style={{ fontWeight: 'bold' }}>For better understanding, contact <span style={{ color: '#0056b3' }}>GOFOREN</span> at 7600909090.</p>
    <p style={{ marginTop: '20px' }}>
  Click for the{" "}
  <a
    href={`https://translate.google.com/?sl=en&tl=gu&text=${encodeURIComponent(blogContent)}&op=translate`}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'blue' }}
  >
    Gujarati translate
  </a>
</p>

  </div>
</div>

<div className="col-4"  style={{padding:'50px 30px'}}>
  <div style={{
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  }}>
    <h5 style={{ fontWeight: 'bold', borderBottom: '2px solid #00cc99', display: 'inline-block', marginBottom: '15px' }}>
      Latest News
    </h5>
    <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
      <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
        USCIS Delivers on National Security in Fi…
      </li>
      <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
        Schengen visa fees hiked
      </li>
      <li style={{ padding: '8px 0' }}>
        Express Entry: IRCC aims to resume FS…
      </li>
    </ul>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
        <Footer />
      
    </div>
  )
}
