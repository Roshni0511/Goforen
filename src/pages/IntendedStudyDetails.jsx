import React from 'react';

const IntendedStudyDetails = ({ data, updateData, onNext }) => {
  const handleChange = (e) => {
    updateData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">Personal Details</h3>

      <div>
        <label className="block font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={data.fullName || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter full name"
        />
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={data.email || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter email"
        />
      </div>

      <div>
        <label className="block font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={data.phone || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter phone number"
        />
      </div>

      <div>
        <label className="block font-medium">City</label>
        <input
          type="text"
          name="city"
          value={data.city || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter city"
        />
      </div>

      <div>
        <label className="block font-medium">State</label>
        <input
          type="text"
          name="state"
          value={data.state || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter state"
        />
      </div>

      <div>
        <label className="block font-medium">Country</label>
        <input
          type="text"
          name="country"
          value={data.country || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter country"
        />
      </div>

      <div>
        <label className="block font-medium">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={data.dob || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Gender</label>
        <select
          name="gender"
          value={data.gender || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button className="btn btn-primary mt-4" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default IntendedStudyDetails;
