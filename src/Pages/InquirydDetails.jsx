import React from 'react';

const InquiryDetailsPopup = ({ visible, closePopup, inquiryDetails }) => {
  if (!visible) return null;

  return (
    <div style={popupContainerStyle}>
      <div style={popupContentStyle}>
        <div style={popupHeaderStyle}>
          <h2 style={{ margin: 0 }}>Customer Details</h2>
          <button onClick={closePopup} style={closeButtonStyleHeader}>✖</button>
        </div>
        <div style={popupBodyStyle}>
          {inquiryDetails && inquiryDetails.length > 0 ? (
            inquiryDetails.map((detail, index) => (
              <div key={index} style={inquiryDetailBlockStyle}>
                <p><strong>Inquiry Name:</strong> {detail.InquiryName}</p>
                <p><strong>Inquiry Mobile:</strong> {detail.InquiryMobile}</p>
                <p><strong>Inquiry Email:</strong> {detail.InquiryMail}</p>
              </div>
            ))
          ) : (
            <p>No inquiries found for this plot.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const popupContainerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1001',
};

const popupContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  width: '350px',
  textAlign: 'center',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

const popupHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const popupBodyStyle = {
  maxHeight: '300px',
  overflowY: 'auto',
  textAlign: 'left',
};

const inquiryDetailBlockStyle = {
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  backgroundColor: '#f0f0f0', // Light grey background to distinguish each block
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: adds a subtle shadow to each block
};

const closeButtonStyleHeader = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '24px',
};

export default InquiryDetailsPopup;
