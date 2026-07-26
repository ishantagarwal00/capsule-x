import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCapsules } from "../../store/capsules/capsulesSlice";
import "./searchForm.css";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [statusFilter, setStatusFilter] = useState("");
  const [launchFilter, setLaunchFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const originalData = useSelector((state) => state.capsules.originalData);

  const handleSearch = () => {
    const filteredCapsules = originalData.filter((capsule) => {
      return (
        (!statusFilter || capsule.status === statusFilter) &&
        (!launchFilter || capsule.original_launch?.startsWith(launchFilter)) &&
        (!typeFilter || capsule.type === typeFilter)
      );
    });
    dispatch(setCapsules(filteredCapsules));
  };

  const statusOptions = [...new Set(originalData.map((c) => c.status))];
  const launchOptions = [...new Set(originalData.map((c) => {
    const year = c.original_launch?.split("T")[0]?.split("-")[0];
    return year || "Unknown";
  }))].sort();
  const typeOptions = [...new Set(originalData.map((c) => c.type))];

  const handleClear = () => {
    setStatusFilter("");
    setLaunchFilter("");
    setTypeFilter("");
    dispatch(setCapsules(originalData));
  };

  return (
    <div className="searchform-container">
      <div className="searchform-header-wrapper">Search Capsules</div>
      <p className="searchform-desc">Filter by status, launch date, or capsule type</p>
      <div className="searchform-wrapper">
        <div className="dropdown-container">
          <div className="dropdown-wrapper">
            <label className="dropdown-label">Status</label>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">All Statuses</option>
              {statusOptions.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="dropdown-wrapper">
            <label className="dropdown-label">Launch</label>
            <select value={launchFilter} onChange={(e) => setLaunchFilter(e.target.value)}>
              <option value="">All Launch Dates</option>
              {launchOptions.map((launch) => (
                <option key={launch} value={launch}>{launch}</option>
              ))}
            </select>
          </div>
          <div className="dropdown-wrapper">
            <label className="dropdown-label">Type</label>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="">All Types</option>
              {typeOptions.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="action-button-container">
          <button className="search-button" onClick={handleSearch}>Apply Filters</button>
          <button className="clear-button" onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
};
export default SearchForm;
