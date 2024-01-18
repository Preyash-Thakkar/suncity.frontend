import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../css/popup.css";

const Popup = ({
  visible,
  closeForm,
  plotNumber,
  excecutiveEmail,
  closeLogin,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    plotNumber: plotNumber,
    excecutiveEmail: excecutiveEmail,
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errMobile, setErrMobile] = useState(false);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      plotNumber: plotNumber,
      excecutiveEmail: excecutiveEmail,
    }));
  }, [plotNumber, excecutiveEmail]);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      plotNumber: plotNumber,
      excecutiveEmail: excecutiveEmail,
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
    const errors = validate(formData); 

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true); 
      try {
        await axios.post("http://localhost:8000/api/submit-form", formData);
        toast.success("Thank you for your inquiry!");
        setTimeout(() => {
          closeAndResetPopup();
        }, 1000);
        closeLogin();
      } catch (error) {
        toast.error("Error submitting form.");
        setTimeout(() => {
          closeAndResetPopup();
        }, 1000);
      }
    } else {
      setIsSubmit(true); 
    }
  };

  const closeAndResetPopup = () => {
    closeForm();
    resetForm();
    console.log("car invoked");
    setIsSubmit(false);
  };

  const validClassEmail =
    errEmail && isSubmit ? "form-control is-invalid" : "form-control";
  const validClassName =
    errName && isSubmit ? "form-control is-invalid" : "form-control";
  const validClassMobile =
    errMobile && isSubmit ? "form-control is-invalid" : "form-control";

  return (
    <div className={`popup ${visible ? "visible" : ""}`}>
      <h2 className="heading">Customer Details</h2>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          className={`input ${validClassName}`}
        />

        {isSubmit && errName && (
          <p className="paragraph text-danger">Invalid Name</p>
        )}

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          className={`input ${validClassEmail}`}
        />
        {isSubmit && errEmail && (
          <p className="paragraph text-danger">Invalid Email</p>
        )}

        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleInputChange}
          className={`input ${validClassMobile}`}

        />
        {isSubmit && errMobile && (
          <p className="paragraph text-danger">Invalid Mobile Number</p>
        )}

        <label htmlFor="excecutiveEmail">Market Excecutive:</label>
        <input
          type="text"
          id="mobile"
          name="Market Excecutive"
          value={formData.excecutiveEmail}
          className="input"
          readOnly
        />

        <button type="submit" className="button submit-button">
          Submit
        </button>
        <Toaster />
      </form>

      <button
        className="button cancel close-button"
        onClick={closeAndResetPopup}
      >
        ✖
      </button>
    </div>
  );
};

export default Popup;
