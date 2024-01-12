import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Popup = ({ visible, closePopup, plotNumber }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    plotNumber: plotNumber,
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errMobile, setErrMobile] = useState(false);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      plotNumber: plotNumber,
    }));
  }, [plotNumber]);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      plotNumber: plotNumber,
    });
    setErrEmail(false);
    setErrMobile(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (formData) => {
    let errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexMobile = /^[0-9]{10}$/;

    if (!formData.name) {
      errors.name = "Name is required";
      setErrName(true);
    } else {
      setErrName(false);
    }

    if (!formData.email) {
      errors.email = "Email is required";
      setErrEmail(true);
    } else if (!regexEmail.test(formData.email)) {
      errors.email = "Invalid email";
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }

    if (!formData.mobile) {
      errors.mobile = "Mobile number is required";
      setErrMobile(true);
    } else if (!regexMobile.test(formData.mobile)) {
      errors.mobile = "Invalid mobile number";
      setErrMobile(true);
    } else {
      setErrMobile(false);
    }

    return errors;
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const errors = validate(formData); // Validate and get errors

    // Check if there are any errors before submitting
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true); // Set the submission state to true
      try {
        await axios.post("http://localhost:8000/api/submit-form", formData);
        toast.success("Thank you for your inquiry!");
        setTimeout(() => {
          closeAndResetPopup();
        }, 1000);
      } catch (error) {
        toast.error("Error submitting form.");
        setTimeout(() => {
          closeAndResetPopup();
        }, 1000);
      }
    } else {
      setIsSubmit(true); // Set the submission state to true for showing error messages
      // toast.error("Validation errors, please check your input.");
    }
  };

  const closeAndResetPopup = () => {
    closePopup();
    resetForm();
    setIsSubmit(false);
  };

  const validClassEmail =
    errEmail && isSubmit ? "form-control is-invalid" : "form-control";
  const validClassName =
    errName && isSubmit ? "form-control is-invalid" : "form-control";
  const validClassMobile =
    errMobile && isSubmit ? "form-control is-invalid" : "form-control";

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
      <form onSubmit={handleFormSubmission}>
        {/* Form fields here with inputStyle and errorStyle */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          style={{ ...inputStyle}}
          className={validClassName}
        />

        {isSubmit && errName && <p className="text-danger">Invalid Name</p>}

        <label htmlFor="email">Email:</label>
        <input
          // type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          style={{ ...inputStyle}}
          className={validClassEmail}
          // required
        />
        {isSubmit && errEmail && <p className="text-danger">Invalid Email</p>}

        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleInputChange}
          className={validClassMobile}
          style={{ ...inputStyle }}
          // required
        />
        {isSubmit && errMobile && (
          <p className="text-danger">Invalid Mobile Number</p>
        )}

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
        <Toaster />
      </form>

      <button
        className="cancel"
        onClick={closeAndResetPopup}
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
