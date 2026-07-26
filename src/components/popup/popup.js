import React, { useEffect } from "react";
import "./popup.css";

const Popup = ({ data, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="popup-header">
          <h2 className="popup-title">{data.capsule_serial}</h2>
          <span className={`popup-badge badge-${data.status}`}>{data.status}</span>
        </div>
        <div className="popup-body">
          <div className="popup-field">
            <span className="popup-label">Type</span>
            <span className="popup-value">{data.type}</span>
          </div>
          <div className="popup-field">
            <span className="popup-label">Launch Date</span>
            <span className="popup-value">{data.original_launch?.split("T")[0] || "N/A"}</span>
          </div>
          <div className="popup-field">
            <span className="popup-label">Landings</span>
            <span className="popup-value">{data.landings ?? "N/A"}</span>
          </div>
          <div className="popup-field">
            <span className="popup-label">Details</span>
            <span className="popup-value">{data.details || "No details available"}</span>
          </div>
          {data.missions?.length > 0 && (
            <div className="popup-field">
              <span className="popup-label">Missions</span>
              <span className="popup-value">{data.missions.map((m) => m.name).join(", ")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
