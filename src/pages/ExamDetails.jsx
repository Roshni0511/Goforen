import { useState } from "react";

const ExamDetails = ({ data, updateData, onNext, onBack }) => {
  const [examList, setExamList] = useState(data.examList || [
    { examName: "", dateTaken: "", overallScore: "" }
  ]);

  const handleChange = (index, field, value) => {
    const updatedList = [...examList];
    updatedList[index][field] = value;
    setExamList(updatedList);
    updateData({ examList: updatedList });
  };

  const addExam = () => {
    setExamList([...examList, { examName: "", dateTaken: "", overallScore: "" }]);
  };

  const removeExam = (index) => {
    const updatedList = examList.filter((_, i) => i !== index);
    setExamList(updatedList);
    updateData({ examList: updatedList });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Exam Details</h3>

      {examList.map((exam, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border p-4 rounded-lg bg-gray-50"
        >
          <input
            type="text"
            placeholder="Exam Name (e.g., IELTS, TOEFL)"
            className="input input-bordered w-full"
            value={exam.examName}
            onChange={(e) => handleChange(index, "examName", e.target.value)}
          />
          <input
            type="date"
            placeholder="Date Taken"
            className="input input-bordered w-full"
            value={exam.dateTaken}
            onChange={(e) => handleChange(index, "dateTaken", e.target.value)}
          />
          <input
            type="text"
            placeholder="Overall Score"
            className="input input-bordered w-full md:col-span-2"
            value={exam.overallScore}
            onChange={(e) => handleChange(index, "overallScore", e.target.value)}
          />
          {examList.length > 1 && (
            <button
              className="text-red-600 mt-2 text-sm underline"
              onClick={() => removeExam(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        className="btn btn-outline btn-sm mb-4"
        onClick={addExam}
      >
        + Add More Exam
      </button>

      <div className="flex justify-between mt-6">
        <button className="btn" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default ExamDetails;
