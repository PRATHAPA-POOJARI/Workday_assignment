import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import JobCard from '../components/JobCard/JobCard';
import axios from 'axios';
import FilterPanel from '../components/FilterPanel/FilterPanel';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", {
          limit: 10,
          offset: 0
        });
        if (response.data.jobs) {
          setJobs(response.data.jobs);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Layout>
      <FilterPanel /> {/* Assuming you have a FilterPanel component for filtering */}
      <div className="home-container">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
