// JobCard.js
import React from 'react';
import PropTypes from 'prop-types';

const JobCard = ({ job }) => {
  const { jdUid, jdLink, jobDetailsFromCompany } = job;

  // Define inline styles
  const cardStyle = {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '1.2rem',
    marginBottom: '10px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>Job Details:</h2>
      <p>Job ID: {jdUid}</p>
      <p>Job Link: <a href={jdLink} style={linkStyle} target="_blank" rel="noopener noreferrer">{jdLink}</a></p>
      <p>Job Description: {jobDetailsFromCompany}</p>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    jdUid: PropTypes.string.isRequired,
    jdLink: PropTypes.string.isRequired,
    jobDetailsFromCompany: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
