// Home.js
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import JobCard from '../components/JobCard/JobCard';
import FilterPanel from '../components/FilterPanel/FilterPanel';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            limit: 10,
            offset: 0
          })
        });
        const data = await response.json();
        setJobs(data.jdList); // Update state with the job list
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const applyFilters = (filters) => {
    // Implement filtering logic here
    console.log(filters);
  };

  return (
    <Layout>
      <FilterPanel applyFilters={applyFilters} />
      <div className="home-container">
        {jobs.map((job, index) => ( // Map over the jobs array and render JobCard for each job
          <JobCard key={index} job={job} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
