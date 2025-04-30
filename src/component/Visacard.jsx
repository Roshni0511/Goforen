import React, { useEffect, useState } from 'react';
import Newscroller from './Newscroller';

const Visacard = () => {
  const [background1, setBackground1] = useState('');
  const [background2, setBackground2] = useState('');

  useEffect(() => {
    setBackground1('assets/img/bg/service_bg.png');
    setBackground2('assets/img/service/img_01.jpg');
  }, []);

  // Different news for each card
  const newsTourist = [
    "Tourist Visa Update: Travel easier in 2025!",
    "Best countries for Tourist Visas this summer.",
    "Tourist Visa application tips and tricks.",
       "Business Visa delays resolved by new rules.",
          "Business Visa delays resolved by new rules.",
  ];
  const newsCommercial = [
    "Commercial Visa for Dubai made simpler.",
    "Export businesses get visa boost in Canada.",
    "Business Visa delays resolved by new rules.",
       "Business Visa delays resolved by new rules.",
          "Business Visa delays resolved by new rules.",
  ];
  const newsStudent = [
    "Student Visa deadline for Fall 2025 approaching.",
    "Post-study work rights extended in Australia.",
    "UK introduces new scholarships for foreign students.",
       "Business Visa delays resolved by new rules.",
          "Business Visa delays resolved by new rules.",
  ];
  const newsResidence = [
    "New Residence Visa rules for skilled workers.",
    "Apply for UAE Golden Residence now!",
    "Residency pathways simplified for Europe.",
       "Business Visa delays resolved by new rules.",
          "Business Visa delays resolved by new rules."
  ];
  const newsWorking = [
    "Germany opens Working Visa for IT sector.",
    "Canada fast-tracks Working Visas.",
    "New Zealand offers remote work visas.",
       "Business Visa delays resolved by new rules.",   "Business Visa delays resolved by new rules.",
          "Business Visa delays resolved by new rules."
  ];

  return (
    <section className="visa type pb-135">
      <div className="container">
        <div className="service-wrap pos-rel">
          <div className="service-img-wrap">
            <div className="service-bg" style={{ backgroundImage: `url(${background1})` }}></div>
            <div className="service-img wow skewIn" data-wow-delay="100ms" style={{ backgroundImage: `url(${background2})` }}></div>
          </div>

          <div className="sec-title wow skewIn pt-120">
            <h2 className="mb-60">Visa types and eligibility <br /> <span>assessment</span></h2>
          </div>

          <div className="row justify-content-md-center mt-none-30">
  {/* First row: 2 cards */}
  <div className="row w-100 justify-content-start">
    <VisaCard title="Tourist Visa" icon="sv_01.svg" news={newsTourist} />
    <VisaCard title="Commercial Visa" icon="sv_02.svg" news={newsCommercial} />
  </div>

  {/* Second row: 3 cards */}
  <div className="row w-100 justify-content-start">
    <VisaCard title="Student Visa" icon="sv_03.svg" news={newsStudent} />
    <VisaCard title="Residence Visa" icon="sv_04.svg" news={newsResidence} />
    <VisaCard title="Working Visa" icon="sv_05.svg" news={newsWorking} />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

const VisaCard = ({ title, icon, news }) => (
  <div className="col-lg-4 col-md-6 mt-30">
    <div className="xb-service">
      <div className="xb-item--inner" style={{ padding: '35px 10px' }}>
        <div className="xb-item--icon mb-20">
          <img src={`assets/img/icon/${icon}`} alt="" />
        </div>
        <h3 className="xb-item--title mb-20"><a href="visa-single.html">{title}</a></h3>
        <Newscroller news={news} />
        <div className="text-center mt-20">
          <a href="#" className="btn" style={{ background: '#00cc99', color: '#fff' }}>View All</a>
        </div>
      </div>
    </div>
  </div>
);

export default Visacard;
