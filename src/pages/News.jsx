import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function News() {
  return (
    <div>
      <Navbar />
      <section className="blog pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post-wrapper">
                <article className="post-details">
                  <div className="post-thumb">
                    <img src="/assets/pic/1-image.jpg" alt="" />
                  </div>
                  <ul className="post-meta ul_li">
                    <li>
                      <span className="posted-on">
                        <i className="far fa-calendar-check"></i>{" "}
                        <a href="#!">August 4, 2023</a>
                      </span>
                    </li>
                  </ul>
                  <h2>
                    Netherlands Sees Rise in Undocumented Workers, Raising
                    Exploitation Concerns
                  </h2>
                  <p>
                    The Netherlands is witnessing a surge in unauthorised
                    employment of third-country nationals, with tens of
                    thousands, including 35,000 Brazilians in Amsterdam alone,
                    working without proper permits. These undocumented workers
                    are mostly found in construction, agriculture, hospitality,
                    and domestic services, raising concerns about exploitation
                    and lack of access to health care. The misuse of the
                    Registration of Non-Residents (RNI) system, which allows
                    short-term visitors to obtain a citizen service number
                    without scrutiny, is contributing to this growing issue.
                    Authorities remain inactive despite long-standing awareness.
                    For better understanding, contact GOFOREN at
                    7600909090.Click for the Gujarati translate
                  </p>

                  <button style={{ background: "none" }}>
                    <a
                      href="/Newsdetails"
                      style={{
                        color: "#fff",
                        padding: "20px ",
                        background: "#00cc99",
                        borderRadius: "10px",
                      }}
                    >
                      Read More
                    </a>
                  </button>
                </article>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget text-center">
                  <h3 className="widget-title">Detailed Information</h3>
                  <div className="widget__post">
                  <button style={{ background: "none" }}>
                    <a
                      href="/Contact"
                      style={{
                        color: "#fff",
                        padding: "15px ",
                        background: "#00cc99",
                        borderRadius: "10px",
                      }}
                    >
                     Contact Us
                    </a>
                  </button>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Other Services</h3>
                  <ul className="widget__category list-unstyled">
                    <li>
                      <a href="/Immigration-pr-visa">
                        <i className="far fa-arrow-up"></i> Immigration - PR Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Student-visa">
                        <i className="far fa-arrow-up"></i>Student Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Visitor-visa">
                        <i className="far fa-arrow-up"></i> Visitor Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Investor-visa">
                        <i className="far fa-arrow-up"></i> Investor Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Work-permit-visa">
                        <i className="far fa-arrow-up"></i>Work Permit Visa
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
