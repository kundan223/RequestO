// PopupForm.js

import React, { useState } from "react";
import "./form.css";

const PopupForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    password:"",// Added email field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   const response= await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
        }
    const data = await response.json();
    console.log(formData);
    closePopup();
  });

  return (
    <div className="popup w-[700px] mx-auto mt-10 p-8 bg-white rounded-lg border-2 border-orange-500">
      <span className="close text-3xl font-bold cursor-pointer" onClick={closePopup}>
        &times;
      </span>
        <h1> LOGIN/SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Add other input fields as needed */}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-500 mx-[auto] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
