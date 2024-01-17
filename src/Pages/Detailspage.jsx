import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Popup";
import LoginPage from "./Loginpage";

const DetailsPage = ({ visible, closePopup, plotNumber }) => {
  const [isInquiry, setIsInquiry] = useState(false);


  const [showLogin, setShowLogin] = useState(false);

  
    
  // const closeForm = () => {
  //   setShowForm(false);
  //   setIsInquiry(false);
  // };
  const closeLogin = () =>{
    setShowLogin(false);
    setIsInquiry(false);
  }
  // Details data
  const [plotDetails, setPlotDetails] = useState({
    plot_no: "",
    status: "",
    Length: "",
    width: "",
    area: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const handleInquiry = () => {
    setIsInquiry(true);
    // setShowForm(true);
    setShowLogin(true);
  };

  useEffect(() => {
    const fetchPlotDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/plot-details/${plotNumber}`
        );
        const plotDetails = response.data;

        setPlotDetails({
          plot_no: plotDetails.plot_no || "",
          status: plotDetails.status || "",
          Length: plotDetails.Length || "",
          width: plotDetails.width || "",
          area: plotDetails.area || "",
        });
      } catch (error) {
        console.error("Error fetching plot details:", error);
      }
    };

    fetchPlotDetails();
  }, [plotNumber]);

  // Styles
  const detailsContainerStyle = {
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

  const closeButtonStyle = {
    backgroundColor: "transparent",
    color: "#f44336",
    position: "absolute",
    top: "3px",
    right: "3px",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
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

  const heading = {
    fontSize: "25px",
    textAlign: "center",
  };

  return (
    <>
      {isInquiry ? (
        <LoginPage
        visible = {showLogin}
          // visible={showForm}
        // closeForm={closeForm}
        closeLogin = {closeLogin}
        plotNumber={plotNumber}/>
      ) : (
        <div style={detailsContainerStyle}>
          <h1 style={heading}>Plot Details</h1>
          <div>
            <p>
              <strong>Plot No:</strong> {plotDetails.plot_no}
            </p>
            <p>
              <strong>Status:</strong> {plotDetails.status}
            </p>
            <p>
              <strong>Length:</strong> {plotDetails.Length} meters
            </p>
            <p>
              <strong>Width:</strong> {plotDetails.width} meters
            </p>
            <p>
              <strong>Area:</strong> {plotDetails.area} square meters
            </p>
          </div>

          <button
            type="submit"
            style={{
              ...buttonStyle,
              backgroundColor: "blue",
              color: "#fff",
              marginTop: "20px",
            }}
            onClick={handleInquiry}
          >
            Inquiry
          </button>

          <button onClick={closePopup} style={closeButtonStyle}>
            ✖
          </button>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
