const SpouseDetails = ({ data, updateData, onNext, onBack }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Spouse Details</h3>
      {/* Spouse fields here */}
      <div className="flex justify-between mt-4">
        <button className="btn" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default SpouseDetails;
