import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Popup from "./Popup";

const LoginPage = ({ visible, closeLogin, plotNumber }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [plotNumber,setPlotNumber] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);

  const [iForm, setiForm] = useState(false);
  const [showForm,setShowForm] = useState(false);

  const [excecutiveEmail,setExcecutiveEmail] = useState("");

  const validate = () => {
    let isValid = true;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setErrEmail(true);
      isValid = false;
    } else if (!regexEmail.test(email)) {
      setErrEmail(true);
      isValid = false;
    } else {
      setErrEmail(false);
    }

    if (!password) {
      setErrPassword(true);
      isValid = false;
    } else {
      setErrPassword(false);
    }

    return isValid;
  };

  //   useEffect(() => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       plotNumber: plotNumber,
  //     }));
  //   }, [plotNumber]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (validate()) {
      try {
         await axios.post("http://localhost:8000/api/login", {
          email,
          password,
        });
        toast.success("Login successful!");
        setiForm(true);
        setShowForm(true);
        setExcecutiveEmail(email);
        // Handle login success (e.g., redirect to a dashboard)
      } catch (error) {
        toast.error("Authentication Error!");
      }
    }
  };

  const closeLoginPopup = () => {
    console.log("car invoked");
    closeLogin();
    setIsSubmit(false);
  };

  const closeForm = () =>{
    setShowForm(false);
    setiForm(false);
  }

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

  const paragraphStyle = {
    marginTop: "-10px",
  };
  const heading = {
    textAlign: "center",
    fontSize: "23px",
  };
  const validClassEmail =
    errEmail && isSubmit ? "form-control is-invalid" : "form-control";

  const validClassPassword =
    errPassword && isSubmit ? "form-control is-invalid" : "form-control";

  return (
    <>
      {iForm ? (
        <Popup   visible={showForm}
        closeLogin={closeLogin}
         closeForm={closeForm} plotNumber={plotNumber} excecutiveEmail={excecutiveEmail}/>
      ) : (
        <div style={popupStyle}>
          <h2 style={heading}>Login</h2>
          <form onSubmit={handleLogin}>
            {/* Form fields here with inputStyle and errorStyle */}
            <label htmlFor="text">Email:</label>
            <input
              type="email"
              id="name"
              name="name"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ ...inputStyle }}
              className={validClassEmail}
            />

            {isSubmit && errEmail && (
              <p style={{ ...paragraphStyle }} className="text-danger">
                Invalid Email
              </p>
            )}

            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={validClassPassword}
              style={{ ...inputStyle }}
              // required
            />
            {isSubmit && errPassword && (
              <p style={{ ...paragraphStyle }} className="text-danger" m>
                Invalid Password
              </p>
            )}

            {/* <label htmlFor="password">{plotNumber}</label> */}

            <button
              type="submit"
              style={{
                ...buttonStyle,
                backgroundColor: "#4caf50",
                color: "#fff",
                marginTop: "20px",
              }}
            >
              Login
            </button>
            <Toaster />
          </form>

          <button
            className="cancel"
            onClick={closeLoginPopup}
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
      )}
    </>
  );
};

export default LoginPage;
