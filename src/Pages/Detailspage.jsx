import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginPage from "./Loginpage";
import Popup from "./Popup";
import toast from "react-hot-toast";
import InquiryDetailsPopup from "../Pages/InquirydDetails";


const DetailsPage = ({ visible, closePopup, plotNumber }) => {
  const [isInquiry, setIsInquiry] = useState(false);
  const [isValidPlot, setIsValidPlot] = useState(true);
  const [popup, setPopup] = useState(false);
  const [executiveEmail, setExecutiveEmail] = useState("");
  const [inquiryDetails, setInquiryDetails] = useState([]); // State to store inquiry details
  const [showInquiryDetailsPopup, setShowInquiryDetailsPopup] = useState(false); // State to control visibility of InquiryDetailsPopup
  const [plotDetails, setPlotDetails] = useState({
    plot_no: "",
    status: "",
    buyerName: "",
    buyerEmail: "",
    buyerMobileNo: "",
    Length: "",
    width: "",
    area: "",
  });

  useEffect(() => {
    const fetchPlotDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/plot-details/${plotNumber}`
        );
        const plotDetails = response.data;

        let updatedPlotDetails = {
          plot_no: plotDetails.plot_no || "",
          status: plotDetails.status || "",
          Length: plotDetails.Length || "",
          width: plotDetails.width || "",
          area: plotDetails.area || "",
          buyerName: plotDetails.buyerName || "",
          buyerEmail: plotDetails.buyerEmail || "",
          buyerMobileNo: plotDetails.buyerMobileNo || ""
        };

        setPlotDetails(updatedPlotDetails);
        setIsValidPlot(true);
      } catch (error) {
        setPlotDetails({
          plot_no: "NA",
          status: "NA",
          Length: "NA",
          width: "NA",
          area: "NA",
          buyerName: "",
          buyerEmail: "",
          buyerMobileNo: ""
        });
        setIsValidPlot(false);
        console.error("Error fetching plot details:", error);
      }
    };

    fetchPlotDetails();
  }, [plotNumber]);

  const handleInquiry = () => {
    setIsInquiry(true);
    const user = localStorage.getItem("executive");
    const userEmail = localStorage.getItem("executiveEmail");
    if (user) {
      setPopup(true);
    }
    setIsInquiry(true);
    setExecutiveEmail(userEmail);
  };

  const handleCustomerDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/listinquirybyplot?plotNumber=${plotNumber}`
      );
      setInquiryDetails(response.data); // Assuming this correctly fetches and sets data
      setShowInquiryDetailsPopup(true); // This should display the popup
    } catch (error) {
      console.error("Error fetching inquiry details:", error);
      toast.error("Failed to fetch inquiry details");
    }
  };
  

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
    position: 'absolute',
    top: '10px', // Adjust as needed for proper alignment
    right: '10px', // Adjust as needed for proper alignment
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  };

  return (
    <>
      {isInquiry ? (
        <LoginPage visible={true} closeLogin={() => setIsInquiry(false)} plotNumber={plotNumber} />
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

            {/* Display buyer details if the plot is sold */}
            {plotDetails.status === "sold" && (
              <div>
                <p>
                  <strong>Buyer Name:</strong> {plotDetails.buyerName}
                </p>
                <p>
                  <strong>Buyer Email:</strong> {plotDetails.buyerEmail}
                </p>
                <p>
                  <strong>Buyer Mobile No:</strong> {plotDetails.buyerMobileNo}
                </p>
              </div>
            )}
          </div>

          {/* Render buttons based on plot status */}
          {(plotDetails.status === "available" || plotDetails.status === "reserved") && (
            <button
              type="submit"
              className="buttonStyle submit-button"
              onClick={handleInquiry}
              disabled={!isValidPlot}
            >
              Inquiry
            </button>
          )}

          {plotDetails.status === "reserved" && (
            <button
              type="button"
              className="buttonStyle submit-button"
              onClick={handleCustomerDetails}
              disabled={!isValidPlot}
            >
              Customer Details
            </button>
          )}
          {showInquiryDetailsPopup && (
        <InquiryDetailsPopup
          visible={showInquiryDetailsPopup}
          closePopup={() => setShowInquiryDetailsPopup(false)}
          inquiryDetails={inquiryDetails} // Pass fetched inquiry details as props
        />
      )}

      <button onClick={closePopup} style={closeButtonStyle}>
            ✖
          </button>
        </div>
      )}
      {popup && <Popup visible={true} closeInquiry={() => setPopup(false)} plotNumber={plotNumber} executiveEmail={executiveEmail} />}
    </>
  );
};

export default DetailsPage;