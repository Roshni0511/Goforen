import React from 'react'

export default function AdditionalDetails() {
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
                  <div className="col-12">
                    <label htmlFor="">
                    Do You Have A Valid Passport ?
                    </label>
                    <br />
                   <div style={{marginTop:'10px'}}>
                   <span style={{ marginRight: "8px",marginBottom: "0px" }}>
                    No  
                  </span>
                  <label className="experience-toggle-switch">
                    <input
                      type="checkbox"
                   
                    />
                    <span className="experience-slider" style={{ marginBottom: "0px" }}></span>
                  </label>
                  <span style={{ marginLeft: "8px", marginBottom: "0px" }}>Yes</span>
                   </div>
                  </div>


                <div className="col-lg-6"></div>



                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
