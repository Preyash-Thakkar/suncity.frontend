// PlotDetail.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlotDetailsPopup from './PlotDetailsPopup';

const PlotDetail = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedPlotNumber, setSelectedPlotNumber] = useState('');

  const openPopup = (plotNumber) => {
    setSelectedPlotNumber(plotNumber);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedPlotNumber('');
    setPopupOpen(false);
  };

  return (
    <div>
      {/* Your component content */}
      <Link to="/plot-detail">View Plot Details</Link>

      <PlotDetailsPopup
        plotNumber={selectedPlotNumber}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </div>
  );
};

export default PlotDetail;
