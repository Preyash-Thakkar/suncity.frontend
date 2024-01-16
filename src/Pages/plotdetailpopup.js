// PlotDetailsPopup.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root'); // Set the root element for accessibility

const PlotDetailsPopup = ({ plotNumber, isOpen, onClose }) => {
  const [plotDetails, setPlotDetails] = useState(null);

  useEffect(() => {
    const fetchPlotDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/plot-details/${plotNumber}`);
        setPlotDetails(response.data);
      } catch (error) {
        console.error('Error fetching plot details:', error);
      }
    };

    if (isOpen) {
      fetchPlotDetails();
    }
  }, [isOpen, plotNumber]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={`Plot Details - ${plotNumber}`}
    >
      <h2>Plot Details - {plotNumber}</h2>
      {plotDetails ? (
        <div>
          <p>Status: {plotDetails.status}</p>
          <p>Length: {plotDetails.Length}</p>
          <p>Width: {plotDetails.width}</p>
          <p>Area: {plotDetails.area}</p>
          <p>Price: {plotDetails.price}</p>
        </div>
      ) : (
        <p>Loading plot details...</p>
      )}
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default PlotDetailsPopup;
