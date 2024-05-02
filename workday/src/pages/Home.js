// Home.js
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import JobCard from '../components/JobCard/JobCard';
import FilterPanel from '../components/FilterPanel/FilterPanel';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 10,
      "offset": 0
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    const fetchJobs = async () => {
      try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const data = await response.json();
        if (data.jobs) {
          setJobs(data.jobs);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Layout>
      <FilterPanel />
      <div className="home-container">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
