import React from 'react';
import JobCard from './JobCard';

const JobCardContainer = ({ jobs }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobCardContainer;
