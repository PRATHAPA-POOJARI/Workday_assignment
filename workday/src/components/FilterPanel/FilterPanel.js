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
    <div className="filter-panel" style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '5px', marginBottom: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <input
          type="text"
          name="minExperience"
          value={filters.minExperience}
          onChange={handleInputChange}
          placeholder="Min Experience"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          name="companyName"
          value={filters.companyName}
          onChange={handleInputChange}
          placeholder="Company Name"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
          placeholder="Location"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <label style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="isRemote"
            checked={filters.isRemote}
            onChange={handleCheckboxChange}
            style={{ marginRight: '5px' }}
          />
          Remote
        </label>
        <input
          type="text"
          name="techStack"
          value={filters.techStack}
          onChange={handleInputChange}
          placeholder="Tech Stack"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          name="role"
          value={filters.role}
          onChange={handleInputChange}
          placeholder="Role"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          name="minBasePay"
          value={filters.minBasePay}
          onChange={handleInputChange}
          placeholder="Min Base Pay"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Apply Filters</button>
      </form>
    </div>
  );
};

export default FilterPanel;
