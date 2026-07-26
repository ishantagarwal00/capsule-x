import React, { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "../popup";
import "./datagrid.css";

const SkeletonCards = () => (
  <div className="datagrid">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="datagrid-item skeleton" style={{ animationDelay: `${i * 0.05}s` }}>
        <div className="skeleton-line w-60" />
        <div className="skeleton-line w-40" />
        <div className="skeleton-line w-80" />
        <div className="skeleton-line w-50" />
      </div>
    ))}
  </div>
);

const StatusBadge = ({ status }) => {
  const cls = status === "active" ? "badge-active" :
    status === "retired" ? "badge-retired" :
    status === "unknown" ? "badge-unknown" : "badge-destroyed";
  return <span className={`status-badge ${cls}`}>{status}</span>;
};

const DataGrid = () => {
  const capsulesData = useSelector((state) => state.capsules.capsulesData);
  const loading = useSelector((state) => state.capsules.loading);
  const error = useSelector((state) => state.capsules.error);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(capsulesData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, capsulesData.length);
  const currentData = capsulesData.slice(startIndex, endIndex);

  const handleCellClick = (data) => { setSelectedData(data); setShowPopup(true); };
  const handlePopupClose = () => { setShowPopup(false); };
  const handlePageChange = (pageNumber) => { setCurrentPage(pageNumber); };

  if (loading) {
    return (
      <div className="datagrid-section">
        <SkeletonCards />
      </div>
    );
  }

  if (error) {
    return (
      <div className="datagrid-section">
        <div className="message-state">
          <div className="message-icon error-icon">!</div>
          <h3>Failed to load capsules</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!capsulesData.length) {
    return (
      <div className="datagrid-section">
        <div className="message-state">
          <div className="message-icon empty-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          </div>
          <h3>No capsules found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="datagrid-section">
      <div className="datagrid-header">
        <span className="datagrid-count">{capsulesData.length} capsule{capsulesData.length !== 1 ? "s" : ""} found</span>
      </div>
      <div className="datagrid-container">
        <div className="datagrid">
          {currentData.map((capsule, index) => (
            <div
              key={capsule.capsule_serial || index}
              className="datagrid-item"
              onClick={() => handleCellClick(capsule)}
              style={{ animationDelay: `${(index % itemsPerPage) * 0.04}s` }}
            >
              <div className="card-top">
                <span className="card-serial">{capsule.capsule_serial}</span>
                <StatusBadge status={capsule.status} />
              </div>
              <div className="card-detail">
                <span className="card-label">Type</span>
                <span className="card-value">{capsule.type}</span>
              </div>
              <div className="card-detail">
                <span className="card-label">Launched</span>
                <span className="card-value">{capsule.original_launch?.split("T")[0] || "N/A"}</span>
              </div>
              <div className="card-detail">
                <span className="card-label">Landings</span>
                <span className="card-value">{capsule.landings ?? "N/A"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="page-navigator">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${i + 1 === currentPage ? "active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
      {showPopup && <Popup data={selectedData} onClose={handlePopupClose} />}
    </div>
  );
};
export default DataGrid;
