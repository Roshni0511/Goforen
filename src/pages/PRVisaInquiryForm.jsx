import React, { useEffect, useState } from 'react';
import axios from 'axios';

const custom_input = {
  border: '1px solid #ced4da',
  borderRadius: '4px',
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
};

const PRVisaInquiryForm = () => {
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
  });

  const [resume, setResume] = useState(null);

  const [education, setEducation] = useState([
    { qualification: '', stream_of_degree: '', major_degree: '', year_of_completion: '', percentage: '', total_backlog: '' }
  ]);
    const [countries, setCountries] = useState([]);
    const [VisaTypes, setVisaTypes] = useState([]);
  
    // Fetch country data
    useEffect(() => {
      axios.get("http://localhost:8000/get_country_data/")
        .then((res) => setCountries(res.data))
        .catch((err) => console.error("Error fetching countries:", err));
    }, []);
  
    // Fetch visa data
    useEffect(() => {
      axios.get("http://localhost:8000/get_visa_services/")
        .then((res) => setVisaTypes(res.data))
        .catch((err) => console.error("Error fetching countries:", err));
    }, []);
  
const handleSelect2 = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const [employment, setEmployment] = useState([
    { company: '', designation: '', from_date: '', to_date: '', no_of_years: '' }
  ]);

  const [exams, setExams] = useState([
    { exam: '', listening: '', reading: '', writing: '', speaking: '', final_score: '' }
  ]);

  const [tests, setTests] = useState([
    { exam: '', verbal_reasoning: '', quantitative_reasoning: '', analytical_writing: '', final_score: '' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (index, key, value, state, setter) => {
    const updated = [...state];
    updated[index][key] = value;
    setter(updated);
  };

  const handleAddRow = (state, setter, emptyTemplate) => {
    setter([...state, emptyTemplate]);
  };

  const handleRemoveRow = (index, state, setter) => {
    const updated = [...state];
    updated.splice(index, 1);
    setter(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submission = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submission.append(key, value);
      });

      submission.append('resume', resume);
      submission.append('education_qualifications', JSON.stringify(education));
      submission.append('employeement_details', JSON.stringify(employment));
      submission.append('exam_details', JSON.stringify(exams));
      submission.append('test_details', JSON.stringify(tests));

      const response = await axios.post('http://localhost:8000/submit-pr-visa-inquiry/', submission, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      alert(response.data.success + "\nInquiry ID: " + response.data.inquiry_id);
    } catch (error) {
      console.error(error);
      alert('Error submitting form: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="container mt-4">
<div className="row g-3">
    <div className="col-md-6">
      <label className="form-label">Desired Country</label>
    <select onChange={handleSelect2} name="desired_country" className="form-select" style={custom_input}>
        <option value="">Select a Country...</option>
        {countries.map((country) => (
          <option key={country.id} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>
    </div>

 <div className="col-md-6">
  <label className="form-label">Desired Visa Route</label>
  <select
    name="desired_visa_route"
    className="form-control"
    style={custom_input}
    onChange={handleSelect2}
    required
  >
    <option value="">-- Select Visa Route --</option>
    {VisaTypes.map((visa) => (
      <option key={visa.id} value={visa.visa_type}>
        {visa.visa_type}
      </option>
    ))}
  </select>
</div>


  <div className="col-md-6">
    <label className="form-label">Relation</label>
    <input
      type="text"
      name="relation"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Full Name</label>
    <input
      type="text"
      name="name"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Mobile Number</label>
    <input
      type="text"
      name="number"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Landline</label>
    <input
      type="text"
      name="landline"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Alternate Number</label>
    <input
      type="text"
      name="alt_number"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input
      type="email"
      name="email"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Date of Birth</label>
    <input
      type="date"
      name="dob"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Marital Status</label>
    <select
      name="marital_status"
      className="form-select"
      style={custom_input}
      onChange={handleChange}
    >
      <option value="">Select</option>
      <option value="Single">Single</option>
      <option value="Married">Married</option>
      <option value="Divorced">Divorced</option>
      <option value="Widowed">Widowed</option>
    </select>
  </div>

  <div className="col-md-6">
    <label className="form-label">Number of Children</label>
    <input
      type="number"
      name="no_of_child"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Flat No.</label>
    <input
      type="text"
      name="flat_no"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Building Name</label>
    <input
      type="text"
      name="building_name"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Road/Street</label>
    <input
      type="text"
      name="road_street"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Pincode</label>
    <input
      type="text"
      name="pincode"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Area</label>
    <input
      type="text"
      name="area"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">City</label>
    <input
      type="text"
      name="city"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

        <div className="col-md-6">
          <label className="form-label">Upload Resume</label>
          <input type="file" className="form-control" onChange={(e) => setResume(e.target.files[0])} required />
        </div>
      </div>

      <hr />
      <h3>Education Details</h3>
      {education.map((edu, index) => (
        <div className="row g-3 align-items-end" key={index}>
          {[
            { label: 'Qualification', name: 'qualification' },
            { label: 'Stream', name: 'stream_of_degree' },
            { label: 'Major', name: 'major_degree' },
            { label: 'Completion Year', name: 'year_of_completion' },
            { label: 'Percentage', name: 'percentage' },
            { label: 'Total Backlogs', name: 'total_backlog' }
          ].map(({ label, name }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label">{label}</label>
              <input
                value={edu[name] || ''}
                onChange={(e) => handleNestedChange(index, name, e.target.value, education, setEducation)}
                className="form-control"
              />
            </div>
          ))}
          <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index, education, setEducation)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(education, setEducation, {
        qualification: '', stream_of_degree: '', major_degree: '', year_of_completion: '', percentage: '', total_backlog: ''
      })}>
        + Add Education
      </button>

      <hr />
      <h3>Employment Details</h3>
      {employment.map((emp, index) => (
        <div className="row g-3 align-items-end" key={index}>
          {[
            { label: 'Company', name: 'company', type: 'text' },
            { label: 'Designation', name: 'designation', type: 'text' },
            { label: 'From Date', name: 'from_date', type: 'date' },
            { label: 'To Date', name: 'to_date', type: 'date' },
            { label: 'Years', name: 'no_of_years', type: 'text' }
          ].map(({ label, name, type }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label">{label}</label>
              <input
                type={type}
                value={emp[name] || ''}
                onChange={(e) => handleNestedChange(index, name, e.target.value, employment, setEmployment)}
                className="form-control"
                style={custom_input}
              />
            </div>
          ))}
          <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index, employment, setEmployment)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(employment, setEmployment, {
        company: '', designation: '', from_date: '', to_date: '', no_of_years: ''
      })}>
        + Add Employment
      </button>

      <hr />
      <h3>Exam Details</h3>
      {exams.map((exam, index) => (
        <div className="row g-3 align-items-end" key={index}>
          {[
            { label: 'Exam', name: 'exam' },
            { label: 'Listening', name: 'listening' },
            { label: 'Reading', name: 'reading' },
            { label: 'Writing', name: 'writing' },
            { label: 'Speaking', name: 'speaking' },
            { label: 'Final Score', name: 'final_score' }
          ].map(({ label, name }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label">{label}</label>
              <input
                value={exam[name] || ''}
                onChange={(e) => handleNestedChange(index, name, e.target.value, exams, setExams)}
                className="form-control"
              />
            </div>
          ))}
          <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index, exams, setExams)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(exams, setExams, {
        exam: '', listening: '', reading: '', writing: '', speaking: '', final_score: ''
      })}>
        + Add Exam
      </button>

      <hr />
      <h3>Test Details</h3>
      {tests.map((test, index) => (
        <div className="row g-3 align-items-end" key={index}>
          {[
            { label: 'Test Name', name: 'exam' },
            { label: 'Verbal Reasoning', name: 'verbal_reasoning' },
            { label: 'Quantitative Reasoning', name: 'quantitative_reasoning' },
            { label: 'Analytical Writing', name: 'analytical_writing' },
            { label: 'Final Score', name: 'final_score' }
          ].map(({ label, name }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label">{label}</label>
              <input
                value={test[name] || ''}
                onChange={(e) => handleNestedChange(index, name, e.target.value, tests, setTests)}
                className="form-control"
              />
            </div>
          ))}
          <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index, tests, setTests)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(tests, setTests, {
        exam: '', verbal_reasoning: '', quantitative_reasoning: '', analytical_writing: '', final_score: ''
      })}>
        + Add Test
      </button>

      <hr />
      <button type="submit" className="btn btn-primary mt-4">Submit Inquiry</button>
    </form>
  );
};

export default PRVisaInquiryForm;
