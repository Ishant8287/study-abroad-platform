import { useState, useEffect } from "react";
import { api } from "../lib/api";
import "./AdminOverviewPage.css";

// Basic SVG Donut Chart
function DonutChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  if (total === 0) return <div className="p-xl text-center text-secondary">No data yet</div>;

  let currentOffset = 0;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="chart-container">
      <svg width="200" height="200" viewBox="0 0 160 160">
        {data.map((item, i) => {
          const strokeLength = (item.value / total) * circumference;
          const strokeDasharray = `${strokeLength} ${circumference}`;
          const strokeDashoffset = -currentOffset;
          currentOffset += strokeLength;
          
          return (
            <circle
              key={item.label}
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth="20"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 80 80)"
            />
          );
        })}
      </svg>
      <div className="donut-legend">
        {data.map(item => (
          <div key={item.label} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: item.color }}></span>
            <span className="legend-label">{item.label}</span>
            <span className="legend-value">{Math.round((item.value / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Basic CSS Bar Chart
function BarChart({ data }) {
  const max = Math.max(...data.map(d => d.value), 1);
  if (data.every(d => d.value === 0)) return <div className="p-xl text-center text-secondary">No data yet</div>;
  
  return (
    <div className="bar-chart">
      {data.map(item => (
        <div key={item.label} className="bar-col">
          <div className="bar-value-label">{item.value}</div>
          <div className="bar-track">
            <div 
              className="bar-fill" 
              style={{ height: `${(item.value / max) * 100}%`, backgroundColor: item.color }}
            ></div>
          </div>
          <div className="bar-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function AdminOverviewPage() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [overview, setOverview] = useState(null);
  const [recentApps, setRecentApps] = useState([]);

  useEffect(() => {
    Promise.all([
      api.dashboard(),
      api.applications({ limit: 5 })
    ])
    .then(([dashRes, appRes]) => {
      setOverview(dashRes.data || dashRes);
      setRecentApps(appRes.data || []);
      setLoading(false);
    })
    .catch(err => {
      console.error("Dashboard fetch error:", err);
      setLoading(false);
    });
  }, []);

  const formatStatus = (s) => s.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  const getStatusClass = (s) => {
    const map = {
      "submitted": "badge-accent",
      "under-review": "badge-warning",
      "offer-received": "badge-teal",
      "enrolled": "badge-success",
      "rejected": "badge-danger"
    };
    return map[s] || "badge-info";
  };

  const getStatusColor = (s) => {
    const map = {
      "draft": "#94a3b8",
      "submitted": "#3b82f6",
      "under-review": "#eab308",
      "offer-received": "#8b5cf6",
      "visa-processing": "#8b5cf6",
      "enrolled": "#10b981",
      "rejected": "#ef4444"
    };
    return map[s] || "#94a3b8";
  };

  const getCountryColor = (c) => {
    const map = {
      "Canada": "#ef4444",
      "UK": "#3b82f6",
      "Australia": "#eab308",
      "UAE": "#10b981",
      "USA": "#8b5cf6"
    };
    return map[c] || "#94a3b8";
  };

  if (loading) return <div className="p-xl text-center">Loading dashboard...</div>;
  if (!overview) return <div className="p-xl text-center text-danger">Failed to load dashboard</div>;

  const enrolledCount = overview.statusBreakdown.find(s => s._id === "enrolled")?.count || 0;

  const stats = [
    { label: "Total Students", value: overview.totalStudents, change: "--", trend: "up", icon: "👥" },
    { label: "Total Programs", value: overview.totalPrograms, change: "--", trend: "up", icon: "🎓" },
    { label: "Total Applications", value: overview.totalApplications, change: "--", trend: "up", icon: "📝" },
    { label: "Enrolled Students", value: enrolledCount, change: "--", trend: "up", icon: "✅" }
  ];

  const appStatusData = ["draft", "submitted", "under-review", "offer-received", "visa-processing", "enrolled", "rejected"].map(status => {
    const match = overview.statusBreakdown.find(s => s._id === status);
    return {
      label: formatStatus(status),
      value: match ? match.count : 0,
      color: getStatusColor(status)
    };
  }).filter(d => d.value > 0 || d.label === "Submitted" || d.label === "Enrolled");

  const destData = overview.topCountries.map(c => ({
    label: c._id,
    value: c.count,
    color: getCountryColor(c._id)
  }));

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Platform Overview</h1>
        <p className="text-secondary">Welcome back! Here's what's happening on StepAbroad today.</p>
      </div>

      {/* Top Stats Row */}
      <div className="admin-stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="admin-stat-card">
            <div className="stat-header">
              <span className="stat-title">{stat.label}</span>
              <span className="stat-icon">{stat.icon}</span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.trend === 'up' ? 'text-success' : 'text-danger'}`}>
               Live Database Metrics
            </div>
          </div>
        ))}
      </div>

      {/* Middle Charts Row */}
      <div className="admin-charts-row">
        <div className="admin-chart-card flex-2">
          <h2>Applications by Status</h2>
          <div className="chart-wrapper">
             <BarChart data={appStatusData} />
          </div>
        </div>
        <div className="admin-chart-card flex-1">
          <h2>Top Destination Countries</h2>
          <div className="chart-wrapper center">
            <DonutChart data={destData} />
          </div>
        </div>
      </div>

      {/* Bottom Table Row */}
      <div className="admin-table-card">
        <div className="table-header">
          <h2>Recent Applications</h2>
          <div className="table-actions">
            <input 
              type="text" 
              className="admin-input search-input" 
              placeholder="Search applications..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn-outline">Export CSV</button>
          </div>
        </div>
        
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Program</th>
                <th>Country</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentApps.filter(a => a.student?.fullName?.toLowerCase().includes(search.toLowerCase()) || a.program?.title?.toLowerCase().includes(search.toLowerCase())).map(app => (
                <tr key={app._id}>
                  <td className="text-secondary">{app._id.substring(0, 8).toUpperCase()}</td>
                  <td className="font-medium text-primary">{app.student?.fullName || "Unknown"}</td>
                  <td>{app.program?.title || "Unknown"}</td>
                  <td>{app.destinationCountry === "Canada" ? "🇨🇦" : app.destinationCountry === "UK" ? "🇬🇧" : app.destinationCountry === "Australia" ? "🇦🇺" : "🇦🇪"} {app.destinationCountry}</td>
                  <td><span className={`badge ${getStatusClass(app.status)}`}>{formatStatus(app.status)}</span></td>
                  <td className="text-secondary">{new Date(app.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {recentApps.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-md">No recent applications</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
