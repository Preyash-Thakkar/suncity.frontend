import React, { useState } from 'react';

const Popup = ({ visible, closePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    mobile: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateAndSubmit = () => {
    // Reset previous error styles
    setFormErrors({ name: false, email: false, mobile: false });

    // Validate form fields
    let isValid = true;
    for (const key in formData) {
      if (formData[key].trim() === '') {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [key]: true,
        }));
        isValid = false;
      }
    }

    if (!isValid) {
    //   alert('Name, Email, and Mobile Number are required fields.');
      return;
    }

    // alert('Form submitted!');
    closePopup();
  };

  const popupStyle = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    border: '2px solid #333',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    width: '350px',
    textAlign: 'left',
    borderRadius: '8px',
    zIndex: '1000',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius:'8px',
    marginTop:'3px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  const errorStyle = {
    border: '1px solid red',
  };

  const heading = {
    textAlign: 'center',
    fontSize:'23px'
  }

  return (
    <div style={popupStyle}>
      <h2 style={heading}>Customer Details</h2>
      <form>
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

        <button
          type="button"
          className="submit"
          onClick={validateAndSubmit}
          style={{
            ...buttonStyle,
            backgroundColor: '#4caf50',
            color: '#fff',
            marginTop: '20px',
          }}
        >
          Submit
        </button>
      </form>
      <button
        className="cancel"
        onClick={closePopup}
        style={{
          ...buttonStyle,
          backgroundColor: 'transparent',
          color: '#f44336',
          position: 'absolute',
          top: '-7px',
          right: '-150px',
        }}
      >
        ✖
      </button>
    </div>
  );
};

export default Popup;
