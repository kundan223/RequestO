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
      
    
    </div>
  );
};

export default PopupForm;
