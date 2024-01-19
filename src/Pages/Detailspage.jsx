import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoginPage from "./Loginpage";
import "../css/Detailspage.css";
import toast from "react-hot-toast";

const DetailsPage = ({ visible, closePopup, plotNumber }) => {
  const [isInquiry, setIsInquiry] = useState(false);
  const [isValidPlot , setIsValidPlot] = useState(true);

  const [showLogin, setShowLogin] = useState(false);

  const closeLogin = () => {
    setShowLogin(false);
    setIsInquiry(false);
  };
  const [plotDetails, setPlotDetails] = useState({
    plot_no: "",
    status: "",
    Length: "",
    width: "",
    area: "",
  });

  const handleInquiry = () => {
    setIsInquiry(true);
    setShowLogin(true);
  };

  useEffect(() => {
    const fetchPlotDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/plot-details/${plotNumber}`
        );
        const plotDetails = response.data;

        // const isStatusDefault = !['sold', 'available', 'reserved'].includes(plotDetails.status);


        setPlotDetails({
          plot_no: plotDetails.plot_no || "",
          status: plotDetails.status || "",
          Length: plotDetails.Length || "",
          width: plotDetails.width || "",
          area: plotDetails.area || "",
        });

        setIsValidPlot(true);
      } catch (error) {

        setPlotDetails({
          plot_no: 'NA',
          status:  "NA",
          Length:  "NA",
          width:  "NA",
          area:  "NA",
        });
        setIsValidPlot(false);
        toast.error("Not available")
        console.error("Error fetching plot details:", error);
      }
    };

    fetchPlotDetails();
  }, [plotNumber]);

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

  return (
    <>
      {isInquiry ? (
        <LoginPage
          visible={showLogin}
          closeLogin={closeLogin}
          plotNumber={plotNumber}
        />
      ) : (
        <div style={detailsContainerStyle}>
          <h1 className="heading">Plot Details</h1>
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
            className="buttonStyle submit-button"
            onClick={handleInquiry}
            disabled={!isValidPlot}
          >
            Inquiry
          </button>

          <button onClick={closePopup} className="closeButton">
            ✖
          </button>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
