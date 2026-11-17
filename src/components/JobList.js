import React from "react";

// Keyed by company name. Each entry: jobTitle, duration, desc (bullet list).
const defaultExperienceItems = {
  "Progeny Technologies Ltd": {
    jobTitle: "Hands-on Trainee, ERP Development @",
    duration: "MMM YYYY - MMM YYYY", // TODO: fill in your actual dates
    desc: [
      "Completed hands-on training in ERP development at Progeny Technologies Ltd.",
      // TODO: add 2-3 more bullets (modules worked on, tech stack, what you built)
    ],
  },
};

const JobList = ({ activeKey, handleSelect }) => {
  const companies = Object.keys(defaultExperienceItems);
  // Experience.js starts with activeKey "1", so fall back to the first company
  const currentKey = companies.includes(activeKey) ? activeKey : companies[0];
  const job = defaultExperienceItems[currentKey];

  // The title already ends with "@" in the data; strip it so we don't render "@ @"
  const title = job.jobTitle.replace(/\s*@\s*$/, "");

  return (
    <div className="joblist-root">
      <div className="joblist-tabs">
        {companies.map((company) => (
          <button
            key={company}
            type="button"
            className={`joblist-tab${company === currentKey ? " active" : ""}`}
            onClick={() => handleSelect(company)}
          >
            {company}
          </button>
        ))}
      </div>

      <div className="joblist-content">
        <div>
          <span className="joblist-job-title">{title}</span>{" "}
          <span className="joblist-job-company">@ {currentKey}</span>
        </div>
        <div className="joblist-duration">{job.duration}</div>
        <ul className="job-description">
          {job.desc.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobList;
