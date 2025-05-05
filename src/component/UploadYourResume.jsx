import React from "react";

export default function UploadYourResume() {
  return (
    <div>
      <div className="container mt-5">
        <div className="xb-contact pos-rel" style={{ overflow: "visible" }}>
          <div className="row">
            <div className="col-12">
              <div className="p-5">
                <div className="xb-item--holder mb-25">
                  <h3 className="wow skewIn ">Upload Your Resume</h3>
                </div>
                <form className="xb-item--form contact-from" action="#!">
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="">
                        Resume (.doc, .docx, .pdf, .png, .jpeg) :{" "}
                      </label>
                      <div className="xb-item--field">
                        <span>
                          <img src="assets/img/icon/c_upload.svg" alt="" />
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          id="resumeUpload"
                          className="form-control"
                          placeholder="Upload Your Resume"
                        />
                      </div>
                      <span> File size must be less than or equal to 2 MB</span>
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
