import React, { useState, useEffect, useMemo } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import '../styles/GitHubContributions.css';

const GitHubContributions = () => {
  const [stats, setStats] = useState({ repos: 0, followers: 0 });
  const [joinYear, setJoinYear] = useState(null);
  const [selectedYear, setSelectedYear] = useState('last');
  const username = "KhanIsrakAhmed";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0
        });
        if (data.created_at) {
          setJoinYear(new Date(data.created_at).getFullYear());
        }
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, []);

  // Build the list of past full years available for this account, newest first,
  // so we can offer a "Last year" tab plus one tab per calendar year (like GitHub's
  // own profile page does below its contribution graph).
  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const startYear = joinYear || currentYear;
    const list = [];
    for (let y = currentYear; y >= startYear; y--) {
      list.push(y);
    }
    return list;
  }, [joinYear]);

  // Updated theme to match the vibrant green in your screenshot
  const theme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#4ade80'],
  };

  return (
    <section id="github" className="gh-contrib-container">
      <div className="section-header">
        <span className="section-title">GitHub</span>
      </div>

      <div className="gh-content">
        <span className="gh-tag">Open Source</span>
        <p className="gh-subtitle">Only I can call my dream stupid.</p>

        <div className="gh-stats-row">
          <div className="stat-item">
            <span className="stat-value">{stats.repos}</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{stats.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
        </div>

        <div className="gh-year-selector">
          <button
            type="button"
            className={`gh-year-btn${selectedYear === 'last' ? ' active' : ''}`}
            onClick={() => setSelectedYear('last')}
          >
            Last 12 months
          </button>
          {years.map((y) => (
            <button
              type="button"
              key={y}
              className={`gh-year-btn${selectedYear === y ? ' active' : ''}`}
              onClick={() => setSelectedYear(y)}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="gh-graph-card">
          {/* key forces a clean remount when switching years so the calendar
              re-fetches/re-renders that year's data instead of reusing stale state */}
          <GitHubCalendar
            key={selectedYear}
            username={username}
            year={selectedYear}
            theme={theme}
            fontSize={12}
            blockSize={11}
            blockMargin={3}
            showWeekdayLabels
          />
        </div>

        <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="gh-footer-link">
          Follow @{username} on GitHub →
        </a>
      </div>
    </section>
  );
};

export default GitHubContributions;
