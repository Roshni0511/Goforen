import { useState } from "react";

const EmploymentDetails = ({ data, updateData, onNext, onBack }) => {
  const [employmentList, setEmploymentList] = useState(data.employmentList || [
    { company: "", jobTitle: "", startDate: "", endDate: "", responsibilities: "" }
  ]);

  const handleChange = (index, field, value) => {
    const updatedList = [...employmentList];
    updatedList[index][field] = value;
    setEmploymentList(updatedList);
    updateData({ employmentList: updatedList });
  };

  const addEmployment = () => {
    setEmploymentList([
      ...employmentList,
      { company: "", jobTitle: "", startDate: "", endDate: "", responsibilities: "" }
    ]);
  };

  const removeEmployment = (index) => {
    const updatedList = employmentList.filter((_, i) => i !== index);
    setEmploymentList(updatedList);
    updateData({ employmentList: updatedList });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Employment Details</h3>

      {employmentList.map((job, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border p-4 rounded-lg bg-gray-50">
          <input
            type="text"
            placeholder="Company Name"
            className="input input-bordered w-full"
            value={job.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
          />
          <input
            type="text"
            placeholder="Job Title"
            className="input input-bordered w-full"
            value={job.jobTitle}
            onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
          />
          <input
            type="month"
            placeholder="Start Date"
            className="input input-bordered w-full"
            value={job.startDate}
            onChange={(e) => handleChange(index, "startDate", e.target.value)}
          />
          <input
            type="month"
            placeholder="End Date (or Present)"
            className="input input-bordered w-full"
            value={job.endDate}
            onChange={(e) => handleChange(index, "endDate", e.target.value)}
          />
          <textarea
            placeholder="Responsibilities"
            className="textarea textarea-bordered w-full md:col-span-2"
            value={job.responsibilities}
            onChange={(e) => handleChange(index, "responsibilities", e.target.value)}
          />
          {employmentList.length > 1 && (
            <button
              className="text-red-600 mt-2 text-sm underline"
              onClick={() => removeEmployment(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        className="btn btn-outline btn-sm mb-4"
        onClick={addEmployment}
      >
        + Add More Employment
      </button>

      <div className="flex justify-between mt-6">
        <button className="btn" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default EmploymentDetails;
