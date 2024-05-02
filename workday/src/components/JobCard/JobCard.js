import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const JobCard = ({ job }) => {
  const { jdUid, jdLink, jobDetailsFromCompany } = job;

  // Define inline styles
  const headingStyle = {
    fontSize: '1.2rem',
    marginBottom: '10px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  // Function to truncate the job description text
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <Card sx={{ display: 'inline-block', maxWidth: "300px", m: 2, '@media (max-width: 600px)': { maxWidth: '100%' } }}>
      <CardContent>
        <Typography variant="h5" style={headingStyle} gutterBottom>
          Job Details:
        </Typography>
        <Typography variant="body1">Job ID: {jdUid}</Typography>
        <Typography variant="body1">Job Link: <a href={jdLink} style={linkStyle} target="_blank" rel="noopener noreferrer">{jdLink}</a></Typography>
        <Typography variant="body1">Job Description: {truncateDescription(jobDetailsFromCompany, 150)}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small">Easy Apply</Button>
        <Button variant="contained" color="secondary" size="small">Referral</Button>
      </CardActions>
    </Card>
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
