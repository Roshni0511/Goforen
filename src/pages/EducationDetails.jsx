import { useState } from "react";

const EducationDetails = ({ data, updateData, onNext, onBack }) => {
  const [educationList, setEducationList] = useState(data.educationList || [
    { degree: "", institution: "", year: "", grade: "" }
  ]);

  const handleChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index][field] = value;
    setEducationList(updatedList);
    updateData({ educationList: updatedList });
  };

  const addEducation = () => {
    setEducationList([...educationList, { degree: "", institution: "", year: "", grade: "" }]);
  };

  const removeEducation = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
    updateData({ educationList: updatedList });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Education Details</h3>
      
      {educationList.map((edu, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border p-4 rounded-lg bg-gray-50">
          <input
            type="text"
            placeholder="Degree (e.g., Bachelor's, Master's)"
            className="input input-bordered w-full"
            value={edu.degree}
            onChange={(e) => handleChange(index, "degree", e.target.value)}
          />
          <input
            type="text"
            placeholder="Institution Name"
            className="input input-bordered w-full"
            value={edu.institution}
            onChange={(e) => handleChange(index, "institution", e.target.value)}
          />
          <input
            type="text"
            placeholder="Year of Completion"
            className="input input-bordered w-full"
            value={edu.year}
            onChange={(e) => handleChange(index, "year", e.target.value)}
          />
          <input
            type="text"
            placeholder="Grade / Percentage"
            className="input input-bordered w-full"
            value={edu.grade}
            onChange={(e) => handleChange(index, "grade", e.target.value)}
          />
          {educationList.length > 1 && (
            <button
              className="text-red-600 mt-2 text-sm underline"
              onClick={() => removeEducation(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        className="btn btn-outline btn-sm mb-4"
        onClick={addEducation}
      >
        + Add More Education
      </button>

      <div className="flex justify-between mt-6">
        <button className="btn" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default EducationDetails;
