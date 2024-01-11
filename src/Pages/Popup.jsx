import React, { useState } from "react";
import axios from "axios";

import toast, { Toaster } from 'react-hot-toast';
const Popup = ({ visible, closePopup,plotNumber }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    plotNumber:plotNumber
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    mobile: false,
    plotNumber:plotNumber
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      plotNumber:plotNumber

    });
    setFormErrors({
      name: false,
      email: false,
      mobile: false,
      plotNumber:plotNumber
    });
    // Any other state resets if necessary
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showSuccessToast = () => {
    toast.success("Thank you for your inquiry!");
    console.log("Show success toast invoked successfuly")
  };
  
  const showErrorToast = () => {
    toast.error("Error submitting form.");
  };
  
  const handleFormSubmission = async () => {
    try {
      await axios.post("http://localhost:8000/api/submit-form", formData);
      console.log(formData);
      showSuccessToast(); // Show success toast with hot-toast
      closeAndResetPopup(); // Then close and reset popup
    } catch (error) {
      console.error("Error:", error);
      showErrorToast(); // Show error toast with hot-toast
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleFormSubmission();
    console.log(plotNumber) // Handle the complete form submission process
  };
  
  const closeAndResetPopup = () => {
    closePopup(); // Close popup
    resetForm(); // Then reset the form
  };
  
  const popupStyle = {
    display: visible ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    border: "2px solid #333",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    width: "350px",
    textAlign: "left",
    borderRadius: "8px",
    zIndex: "1000",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginTop: "3px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  };

  const errorStyle = {
    border: "1px solid red",
  };

  const heading = {
    textAlign: "center",
    fontSize: "23px",
  };

  return (
    <div style={popupStyle}>
      <h2 style={heading}>Customer Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields here with inputStyle and errorStyle */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          style={{ ...inputStyle, ...(formErrors.email && errorStyle) }}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          style={{ ...inputStyle, ...(formErrors.email && errorStyle) }}
          required
        />

        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleInputChange}
          style={{ ...inputStyle, ...(formErrors.mobile && errorStyle) }}
          required
        />
        {/* {plotNumber} */}
        <button
          type="submit"
          style={{
            ...buttonStyle,
            backgroundColor: "#4caf50",
            color: "#fff",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      <Toaster/>

      </form>

      <button
        className="cancel"
        onClick={closePopup}
        style={{
          ...buttonStyle,
          backgroundColor: "transparent",
          color: "#f44336",
          position: "absolute",
          top: "-7px",
          right: "-150px",
        }}
      >
        ✖
      </button>
    </div>
  );
};

export default Popup;
