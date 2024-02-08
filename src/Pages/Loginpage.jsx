import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Popup from "./Popup";
import "../css/Loginpage.css";

const LoginPage = ({ visible, closeLogin, plotNumber }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);

  const [iForm, setiForm] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [excecutiveEmail, setExcecutiveEmail] = useState("");

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

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (validate()) {
      try {
        const response = await axios.post("http://localhost:8000/api/login", {
          email,
          password,
        });

        console.log("res",response);
        toast.success("Login successful!");
        setiForm(true);
        setShowForm(true);
        setExcecutiveEmail(email);
        localStorage.setItem("executive",response.data.executivename);
        localStorage.setItem("executiveEmail",response.data.executiveEmail)
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

  const closeForm = () => {
    setShowForm(false);
    setiForm(false);
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

  const validClassEmail =
    errEmail && isSubmit ? "form-control is-invalid" : "form-control";

  const validClassPassword =
    errPassword && isSubmit ? "form-control is-invalid" : "form-control";

  return (
    <>
      {iForm ? (
        <Popup
          visible={showForm}
          closeLogin={closeLogin}
          closeForm={closeForm}
          plotNumber={plotNumber}
          excecutiveEmail={excecutiveEmail}
        />
      ) : (
        <div style={popupStyle}>
          <h2 className="heading">Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="text">Email:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`inputStyle ${validClassEmail}`}
            />

            {isSubmit && errEmail && (
              <p className="text-danger paragraphStyle">Invalid Email</p>
            )}

            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`inputStyle ${validClassPassword}`}
            />
            {isSubmit && errPassword && (
              <p className="text-danger paragraphStyle">Invalid Password</p>
            )}

            <button type="submit" className="submit-button-login buttonStyle">
              Login
            </button>
            <Toaster />
          </form>

          <button
            className="cancel buttonStyle close-button"
            onClick={closeLoginPopup}
          >
            ✖
          </button>
        </div>
      )}
    </>
  );
};

export default LoginPage;
