// components/FilterPanel/FilterPanel.js

import React, { useState } from 'react';

const FilterPanel = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    isRemote: false,
    techStack: '',
    role: '',
    minBasePay: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(filters);
  };

  return (
    <div className="filter-panel">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="minExperience"
          value={filters.minExperience}
          onChange={handleInputChange}
          placeholder="Min Experience"
        />
        <input
          type="text"
          name="companyName"
          value={filters.companyName}
          onChange={handleInputChange}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
          placeholder="Location"
        />
        <label>
          <input
            type="checkbox"
            name="isRemote"
            checked={filters.isRemote}
            onChange={handleCheckboxChange}
          />
          Remote
        </label>
        <input
          type="text"
          name="techStack"
          value={filters.techStack}
          onChange={handleInputChange}
          placeholder="Tech Stack"
        />
        <input
          type="text"
          name="role"
          value={filters.role}
          onChange={handleInputChange}
          placeholder="Role"
        />
        <input
          type="text"
          name="minBasePay"
          value={filters.minBasePay}
          onChange={handleInputChange}
          placeholder="Min Base Pay"
        />
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default FilterPanel; 
