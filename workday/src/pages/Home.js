// Home.js
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import JobCard from '../components/JobCard/JobCard';
import FilterPanel from '../components/FilterPanel/FilterPanel';

async function getData(api) {
  console.log("API URL:", api); // Log the API URL
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      limit: 10,
      offset: 0
    })
  });
  return response.json();
}

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("https://api.weekday.technology/adhoc/getSampleJdJSON");
        if (data.jobs) {
          setJobs(data.jobs);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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
