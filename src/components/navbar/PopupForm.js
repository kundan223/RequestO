// PopupForm.js
import React, { useState } from "react";
import "./form.css";

const PopupForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    serviceType: "",
    location: "",
    description: "",
    skills: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closePopup();
  };

  return (
    <div className="popup w-[700px] mx-auto mt-10 p-8 bg-white rounded-lg border-2 border-orange-500">
      <span className="close text-3xl font-bold cursor-pointer" onClick={closePopup}>
        &times;
      </span>
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-6 text-orange-500">Ask For Service</h1>
        <div className="input-group mb-4">
          <label className="block text-sm font-semibold mb-2 text-white" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:border focus:border-orange-600 bg-black bg-opacity-50 text-white"
            required
          />
        </div>

        <div className="input-group mb-4">
          <label className="block text-sm font-semibold mb-2 text-white" htmlFor="serviceType">
            Type of Service:
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:border focus:border-orange-600 bg-black bg-opacity-50 text-white"
            required
          >
            <option value="">Select Service Type</option>
            <option value="A">Service A</option>
            <option value="B">Service B</option>
            <option value="C">Service C</option>
          </select>
        </div>

        <div className="input-group mb-4">
          <label className="block text-sm font-semibold mb-2 text-white" htmlFor="location">
            Location (optional):
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:border focus:border-orange-600 bg-black bg-opacity-50 text-white"
          />
        </div>

        <div className="input-group mb-4">
          <label className="block text-sm font-semibold mb-2 text-white" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:border focus:border-orange-600 bg-black bg-opacity-50 text-white"
            required
          />
        </div>

        <div className="input-group mb-4">
          <label className="block text-sm font-semibold mb-2 text-white" htmlFor="skills">
            Skills Needed:
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:border focus:border-orange-600 bg-black bg-opacity-50 text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PopupForm;
