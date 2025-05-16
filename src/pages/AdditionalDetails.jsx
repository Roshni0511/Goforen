const AdditionalDetails = ({ data, updateData, onNext, onBack }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Additional Details</h3>
      {/* Example: marital status dropdown */}
      <select
        value={data.maritalStatus || ''}
        onChange={(e) => updateData({ ...data, maritalStatus: e.target.value })}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Marital Status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
      </select>

      <div className="flex justify-between mt-4">
        <button className="btn" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default AdditionalDetails;
