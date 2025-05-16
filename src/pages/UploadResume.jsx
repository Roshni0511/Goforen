const UploadResume = ({ file, setFile, onSubmit, onBack }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Upload Your Resume</h3>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <div className="flex justify-between mt-4">
        <button className="btn" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default UploadResume;
