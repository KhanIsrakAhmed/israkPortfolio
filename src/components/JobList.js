import React from "react";

const jobs = [];

const JobList = ({ activeKey, handleSelect }) => {
  if (jobs.length === 0) {
    return null; // or return <div>No experience added yet.</div>;
  }

  const activeJob = jobs.find((job) => job.key === activeKey) || jobs[0];

  return (
    <div className="joblist-root">
      <div className="joblist-tabs">
        {jobs.map((job) => (
          <button
            key={job.key}
            type="button"
            className={`joblist-tab${activeKey === job.key ? " active" : ""}`}
            onClick={() => handleSelect(job.key)}
          >
            {job.company}
          </button>
        ))}
      </div>

      <div className="joblist-content">
        <div>
          <span className="joblist-job-title">{activeJob.title}</span>
          <span className="joblist-job-company">@ {activeJob.company}</span>
        </div>
        <div className="joblist-duration">{activeJob.duration}</div>

        <ul className="job-description">
          {activeJob.description.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobList;