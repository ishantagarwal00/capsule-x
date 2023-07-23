import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCapsules } from "../../store/capsules/capsulesSlice";
import "./searchForm.css";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [statusFilter, setStatusFilter] = useState("");
  const [launchFilter, setLaunchFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const capsulesData = useSelector((state) => state.capsules.capsulesData);
  const originalData = useSelector((state) => state.capsules.originalData);

  const handleSearch = () => {
    const filteredCapsules = capsulesData.filter((capsule) => {
      return (
        (!statusFilter || capsule.status === statusFilter) &&
        (!launchFilter || capsule.original_launch === launchFilter) &&
        (!typeFilter || capsule.type === typeFilter)
      );
    });

    dispatch(setCapsules(filteredCapsules));
  };
  const statusOptions = [
    ...new Set(capsulesData.map((capsule) => capsule.status)),
  ];
  const launchOptions = [
    ...new Set(capsulesData.map((capsule) => capsule.original_launch)),
  ];
  const typeOptions = [...new Set(capsulesData.map((capsule) => capsule.type))];

  const handleClear = () => {
    setStatusFilter("");
    setLaunchFilter("");
    setTypeFilter("");
    dispatch(setCapsules(originalData));
  };
  return (
    <div className="searchform-container">
      <div className="searchform-header-wrapper">SpaceX Explore Finder</div>
      <div className="searchform-wrapper">
        <div className="dropdown-container">
          <div className="dropdown-wrapper">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Select Status</option>
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div className="dropdown-wrapper">
            <select
              value={launchFilter}
              onChange={(e) => setLaunchFilter(e.target.value)}
            >
              <option value="">Select Launch Date</option>
              {launchOptions.map((launch) => (
                <option key={launch} value={launch}>
                  {launch}
                </option>
              ))}
            </select>
          </div>
          <div className="dropdown-wrapper">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">Select Type</option>
              {typeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="action-button-container">
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
          <button className="clear-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
