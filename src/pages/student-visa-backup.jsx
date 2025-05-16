import React, { useState } from 'react';

const StudentVisaInquiryForm = () => {
  const [form, setForm] = useState({
    relation: '',
    name: '',
    father_name: '',
    contact_number: '',
    landline_number: '',
    alternate_number: '',
    email: '',
    date_of_birth: '',
    desired_country: '',
    spouse_dependent_visa: '',
    flat_no: '',
    building_name: '',
    road_street: '',
    pincode: '',
    area: '',
    city: '',
    field_of_study: '',
    level_of_study: '',
    is_valid_passport: '',
    citizenship: '',
    passport_no: '',
    father_occupation: '',
    family_income: '',
    blood_relative_foreign: '',
    countries_names: '',
    how_about_us: '',
    additional_query: ''
  });

  const [resume, setResume] = useState(null);
  const [education, setEducation] = useState([]);
  const [employment, setEmployment] = useState([]);
  const [exams, setExams] = useState([]);
  const [tests, setTests] = useState([]);
  const [intendedStudy, setIntendedStudy] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddRow = (state, setter, emptyItem) => {
    setter([...state, { ...emptyItem }]);
  };

  const handleNestedChange = (index, key, value, state, setter) => {
    const updated = [...state];
    updated[index][key] = value;
    setter(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (resume) {
      formData.append('resume', resume);
    }

    formData.append('education_qualifications', JSON.stringify(education));
    formData.append('employeement_details', JSON.stringify(employment));
    formData.append('exam_details', JSON.stringify(exams));
    formData.append('test_details', JSON.stringify(tests));
    formData.append('intended_study', JSON.stringify(intendedStudy));

    try {
      const res = await fetch('http://127.0.0.1:8000/submit_student_visa_inquiry/', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.success);
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      alert('Submission failed: ' + error.message);
    }
  };
const handleRemoveRow = (index, dataArray, setFunction) => {
  const updated = [...dataArray];
  updated.splice(index, 1);
  setFunction(updated);
};

  return (
    
    // <form onSubmit={handleSubmit}>
    //   <h2>Student Visa Inquiry</h2>

    //   <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required />
    //   <input name="relation" value={form.relation} onChange={handleChange} placeholder="Relation" />
    //   <input name="father_name" value={form.father_name} onChange={handleChange} placeholder="Father's Name" />
    //   <input name="contact_number" value={form.contact_number} onChange={handleChange} placeholder="Contact Number" />
    //   <input name="landline_number" value={form.landline_number} onChange={handleChange} placeholder="Landline Number" />
    //   <input name="alternate_number" value={form.alternate_number} onChange={handleChange} placeholder="Alternate Number" />
    //   <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" />
    //   <input name="date_of_birth" value={form.date_of_birth} onChange={handleChange} type="date" />
    //   <input name="desired_country" value={form.desired_country} onChange={handleChange} placeholder="Desired Country" />
    //   <input name="spouse_dependent_visa" value={form.spouse_dependent_visa} onChange={handleChange} placeholder="Spouse/Dependent Visa" />

    //   <input name="flat_no" value={form.flat_no} onChange={handleChange} placeholder="Flat No" />
    //   <input name="building_name" value={form.building_name} onChange={handleChange} placeholder="Building Name" />
    //   <input name="road_street" value={form.road_street} onChange={handleChange} placeholder="Road/Street" />
    //   <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode" />
    //   <input name="area" value={form.area} onChange={handleChange} placeholder="Area" />
    //   <input name="city" value={form.city} onChange={handleChange} placeholder="City" />

    //   <input name="field_of_study" value={form.field_of_study} onChange={handleChange} placeholder="Field of Study" />
    //   <input name="level_of_study" value={form.level_of_study} onChange={handleChange} placeholder="Level of Study" />

    //   <input name="is_valid_passport" value={form.is_valid_passport} onChange={handleChange} placeholder="Valid Passport (Yes/No)" />
    //   <input name="citizenship" value={form.citizenship} onChange={handleChange} placeholder="Citizenship" />
    //   <input name="passport_no" value={form.passport_no} onChange={handleChange} placeholder="Passport Number" />
    //   <input name="father_occupation" value={form.father_occupation} onChange={handleChange} placeholder="Father's Occupation" />
    //   <input name="family_income" value={form.family_income} onChange={handleChange} placeholder="Family Income" />
    //   <input name="blood_relative_foreign" value={form.blood_relative_foreign} onChange={handleChange} placeholder="Blood Relative Abroad (Yes/No)" />
    //   <input name="countries_names" value={form.countries_names} onChange={handleChange} placeholder="Countries Name (comma separated)" />
    //   <input name="how_about_us" value={form.how_about_us} onChange={handleChange} placeholder="How did you hear about us?" />
    //   <textarea name="additional_query" value={form.additional_query} onChange={handleChange} placeholder="Additional Query" />

    //   <input type="file" onChange={(e) => setResume(e.target.files[0])} />

    //   <hr />
    //   <h3>Education Details</h3>
    //   {education.map((edu, index) => (
    //     <div key={index}>
    //       <input placeholder="Qualification" value={edu.qualification || ''} onChange={(e) => handleNestedChange(index, 'qualification', e.target.value, education, setEducation)} />
    //       <input placeholder="Stream" value={edu.stream_of_degree || ''} onChange={(e) => handleNestedChange(index, 'stream_of_degree', e.target.value, education, setEducation)} />
    //       <input placeholder="Major" value={edu.major_degree || ''} onChange={(e) => handleNestedChange(index, 'major_degree', e.target.value, education, setEducation)} />
    //       <input placeholder="Completion Year" value={edu.year_of_completion || ''} onChange={(e) => handleNestedChange(index, 'year_of_completion', e.target.value, education, setEducation)} />
    //       <input placeholder="Percentage" value={edu.percentage || ''} onChange={(e) => handleNestedChange(index, 'percentage', e.target.value, education, setEducation)} />
    //       <input placeholder="Total Backlogs" value={edu.total_backlog || ''} onChange={(e) => handleNestedChange(index, 'total_backlog', e.target.value, education, setEducation)} />
    //     </div>
    //   ))}
    //   <button type="button" onClick={() => handleAddRow(education, setEducation, {})}>+ Add Education</button>

    //   <hr />
    //   <h3>Employment Details</h3>
    //   {employment.map((emp, index) => (
    //     <div key={index}>
    //       <input placeholder="Company" value={emp.company || ''} onChange={(e) => handleNestedChange(index, 'company', e.target.value, employment, setEmployment)} />
    //       <input placeholder="Designation" value={emp.designation || ''} onChange={(e) => handleNestedChange(index, 'designation', e.target.value, employment, setEmployment)} />
    //       <input placeholder="From Date" value={emp.from_date || ''} onChange={(e) => handleNestedChange(index, 'from_date', e.target.value, employment, setEmployment)} />
    //       <input placeholder="To Date" value={emp.to_date || ''} onChange={(e) => handleNestedChange(index, 'to_date', e.target.value, employment, setEmployment)} />
    //       <input placeholder="Years" value={emp.no_of_years || ''} onChange={(e) => handleNestedChange(index, 'no_of_years', e.target.value, employment, setEmployment)} />
    //     </div>
    //   ))}
    //   <button type="button" onClick={() => handleAddRow(employment, setEmployment, {})}>+ Add Employment</button>

    //   <hr />
    //   <h3>Exam Details</h3>
    //   {exams.map((exam, index) => (
    //     <div key={index}>
    //       <input placeholder="Exam" value={exam.exam || ''} onChange={(e) => handleNestedChange(index, 'exam', e.target.value, exams, setExams)} />
    //       <input placeholder="Listening" value={exam.listening || ''} onChange={(e) => handleNestedChange(index, 'listening', e.target.value, exams, setExams)} />
    //       <input placeholder="Reading" value={exam.reading || ''} onChange={(e) => handleNestedChange(index, 'reading', e.target.value, exams, setExams)} />
    //       <input placeholder="Writing" value={exam.writing || ''} onChange={(e) => handleNestedChange(index, 'writing', e.target.value, exams, setExams)} />
    //       <input placeholder="Speaking" value={exam.speaking || ''} onChange={(e) => handleNestedChange(index, 'speaking', e.target.value, exams, setExams)} />
    //       <input placeholder="Final Score" value={exam.final_score || ''} onChange={(e) => handleNestedChange(index, 'final_score', e.target.value, exams, setExams)} />
    //     </div>
    //   ))}
    //   <button type="button" onClick={() => handleAddRow(exams, setExams, {})}>+ Add Exam</button>

    //   <hr />
    //   <h3>Test Details</h3>
    //   {tests.map((test, index) => (
    //     <div key={index}>
    //       <input placeholder="Test Name" value={test.exam || ''} onChange={(e) => handleNestedChange(index, 'exam', e.target.value, tests, setTests)} />
    //       <input placeholder="Verbal Reasoning" value={test.verbal_reasoning || ''} onChange={(e) => handleNestedChange(index, 'verbal_reasoning', e.target.value, tests, setTests)} />
    //       <input placeholder="Quantitative Reasoning" value={test.quantitative_reasoning || ''} onChange={(e) => handleNestedChange(index, 'quantitative_reasoning', e.target.value, tests, setTests)} />
    //       <input placeholder="Analytical Writing" value={test.analytical_writing || ''} onChange={(e) => handleNestedChange(index, 'analytical_writing', e.target.value, tests, setTests)} />
    //       <input placeholder="Final Score" value={test.final_score || ''} onChange={(e) => handleNestedChange(index, 'final_score', e.target.value, tests, setTests)} />
    //     </div>
    //   ))}
    //   <button type="button" onClick={() => handleAddRow(tests, setTests, {})}>+ Add Test</button>

    //   <hr />
    //   <h3>Intended Study</h3>
    //   {intendedStudy.map((study, index) => (
    //     <div key={index}>
    //       <input placeholder="Month" value={study.month || ''} onChange={(e) => handleNestedChange(index, 'month', e.target.value, intendedStudy, setIntendedStudy)} />
    //       <input placeholder="Year" value={study.year || ''} onChange={(e) => handleNestedChange(index, 'year', e.target.value, intendedStudy, setIntendedStudy)} />
    //     </div>
    //   ))}
    //   <button type="button" onClick={() => handleAddRow(intendedStudy, setIntendedStudy, {})}>+ Add Intended Study</button>

    //   <hr />
    //   <button type="submit">Submit Inquiry</button>
    // </form>
    <form onSubmit={handleSubmit} className="container mt-4">
    
    <div className="row g-3">
        {[
        { label: 'Full Name', name: 'name' },
        { label: 'Relation', name: 'relation' },
        { label: "Father's Name", name: 'father_name' },
        { label: 'Contact Number', name: 'contact_number' },
        { label: 'Landline Number', name: 'landline_number' },
        { label: 'Alternate Number', name: 'alternate_number' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Date of Birth', name: 'date_of_birth', type: 'date' },
        { label: 'Desired Country', name: 'desired_country' },
        { label: 'Spouse/Dependent Visa', name: 'spouse_dependent_visa' },
        { label: 'Flat No', name: 'flat_no' },
        { label: 'Building Name', name: 'building_name' },
        { label: 'Road/Street', name: 'road_street' },
        { label: 'Pincode', name: 'pincode' },
        { label: 'Area', name: 'area' },
        { label: 'City', name: 'city' },
        { label: 'Field of Study', name: 'field_of_study' },
        { label: 'Level of Study', name: 'level_of_study' },
        { label: 'Valid Passport (Yes/No)', name: 'is_valid_passport' },
        { label: 'Citizenship', name: 'citizenship' },
        { label: 'Passport Number', name: 'passport_no' },
        { label: "Father's Occupation", name: 'father_occupation' },
        { label: 'Family Income', name: 'family_income' },
        { label: 'Blood Relative Abroad (Yes/No)', name: 'blood_relative_foreign' },
        { label: 'Countries Name (comma separated)', name: 'countries_names' },
        { label: 'How did you hear about us?', name: 'how_about_us' }
        ].map(({ label, name, type = 'text' }) => (
        <div className="col-md-6" key={name}>
            <label className="form-label">{label}</label>
            <input
            name={name}
            type={type}
            value={form[name]}
            onChange={handleChange}
            className="form-control"
            required={name === 'name'}
            />
        </div>
        ))}
        <div className="col-12">
        <label className="form-label">Additional Query</label>
        <textarea
            name="additional_query"
            value={form.additional_query}
            onChange={handleChange}
            className="form-control"
        />
        </div>
        <div className="col-12">
        <label className="form-label">Upload Resume</label>
        <input type="file" onChange={(e) => setResume(e.target.files[0])} className="form-control" />
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
    <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(education, setEducation, {})}>
        + Add Education
    </button>

    <hr />
    <h3>Employment Details</h3>
    {employment.map((emp, index) => (
        <div className="row g-3 align-items-end" key={index}>
        {[
            { label: 'Company', name: 'company' },
            { label: 'Designation', name: 'designation' },
            { label: 'From Date', name: 'from_date' },
            { label: 'To Date', name: 'to_date' },
            { label: 'Years', name: 'no_of_years' }
        ].map(({ label, name }) => (
            <div className="col-md-4" key={name}>
            <label className="form-label">{label}</label>
            <input
                value={emp[name] || ''}
                onChange={(e) => handleNestedChange(index, name, e.target.value, employment, setEmployment)}
                className="form-control"
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
    <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(employment, setEmployment, {})}>
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
    <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(exams, setExams, {})}>
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
    <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(tests, setTests, {})}>
        + Add Test
    </button>

    <hr />
    <h3>Intended Study</h3>
    {intendedStudy.map((study, index) => (
        <div className="row g-3 align-items-end" key={index}>
        <div className="col-md-5">
            <label className="form-label">Month</label>
            <input
            value={study.month || ''}
            onChange={(e) => handleNestedChange(index, 'month', e.target.value, intendedStudy, setIntendedStudy)}
            className="form-control"
            />
        </div>
        <div className="col-md-5">
            <label className="form-label">Year</label>
            <input
            value={study.year || ''}
            onChange={(e) => handleNestedChange(index, 'year', e.target.value, intendedStudy, setIntendedStudy)}
            className="form-control"
            />
        </div>
        <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index, intendedStudy, setIntendedStudy)}>
            Remove
            </button>
        </div>
        </div>
    ))}
    <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(intendedStudy, setIntendedStudy, {})}>
        + Add Intended Study
    </button>

    <hr />
    <button type="submit" className="btn btn-success">Submit Inquiry</button>
    </form>


  );
};

export default StudentVisaInquiryForm;
