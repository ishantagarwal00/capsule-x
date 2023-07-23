import React, { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "../popup";
import "./datagrid.css";

const DataGrid = () => {
  const capsulesData = useSelector((state) => state.capsules.capsulesData);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(capsulesData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, capsulesData.length);
  const currentData = capsulesData.slice(startIndex, endIndex);

  const handleCellClick = (data) => {
    setSelectedData(data);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="datagrid-container">
        <div className="datagrid">
          {currentData.map((capsule, index) => (
            <div
              key={index}
              className="datagrid-item"
              onClick={() => handleCellClick(capsule)}
            >
              <p>{capsule.capsule_serial}</p>
              <p>{capsule.status.toUpperCase()}</p>
              <p>{capsule.original_launch}</p>
              <p>{capsule.type}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="page-navigator">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {showPopup && <Popup data={selectedData} onClose={handlePopupClose} />}
    </div>
  );
};

export default DataGrid;
