import React from "react";
import "./popup.css";

const Popup = ({ data, onClose }) => {
  console.log("dta", data);
  return (
    <div className="popup">
      <div className="popup-content">
        <div>Serial: {data.capsule_serial}</div>
        <div>Status: {data.status.toUpperCase()}</div>
        <div>Landings: {data.landings}</div>
        <div>Details: {data.details}</div>
        <div>Launch Date: {data.original_launch}</div>
        <div>Type: {data.type}</div>

        <div className="close-action-button">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
