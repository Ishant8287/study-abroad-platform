import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import "./ApplicationsPage.css";

const STATUS_TABS = ["All", "Draft", "Submitted", "Under Review", "Offer Received", "Enrolled", "Rejected"];

// Helper to convert backend status enum to display label and css class
const formatStatus = (status) => {
  const map = {
    "draft": { label: "Draft", class: "draft" },
    "submitted": { label: "Submitted", class: "submitted" },
    "under-review": { label: "Under Review", class: "under-review" },
    "offer-received": { label: "Offer Received", class: "offer-received" },
    "visa-processing": { label: "Visa Processing", class: "offer-received" },
    "enrolled": { label: "Enrolled", class: "enrolled" },
    "rejected": { label: "Rejected", class: "rejected" }
  };
  return map[status] || { label: status, class: "draft" };
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    api.applications()
      .then((res) => {
        const data = res.data || res;
        // Mock fallback if empty, to ensure we can show the UI design for demo
        if (!data || data.length === 0) {
          const mockData = [
            {
              _id: "app1",
              program: { title: "Master of Applied Computing" },
              universityName: "University of Windsor",
              destinationCountry: "Canada",
              intake: "September 2026",
              status: "under-review",
              createdAt: "2026-04-10T10:00:00Z"
            },
            {
              _id: "app2",
              program: { title: "MSc Computer Science" },
              universityName: "University of Bristol",
              destinationCountry: "UK",
              intake: "January 2027",
              status: "submitted",
              createdAt: "2026-04-12T10:00:00Z"
            },
            {
              _id: "app3",
              program: { title: "Master of Data Science" },
              universityName: "University of British Columbia",
              destinationCountry: "Canada",
              intake: "September 2026",
              status: "enrolled",
              createdAt: "2025-11-05T10:00:00Z"
            },
            {
              _id: "app4",
              program: { title: "MSc Software Engineering" },
              universityName: "Imperial College London",
              destinationCountry: "UK",
              intake: "September 2026",
              status: "rejected",
              createdAt: "2026-01-20T10:00:00Z"
            }
          ];
          setApplications(mockData);
        } else {
          setApplications(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const filteredApps = applications.filter(app => {
    if (activeTab === "All") return true;
    const { label } = formatStatus(app.status);
    return label === activeTab || (activeTab === "Offer Received" && app.status === "visa-processing");
  });

  if (loading) {
    return (
      <div className="p-xl">
        <div className="skeleton-card" style={{ height: "100px", marginBottom: "16px" }}></div>
        <div className="skeleton-card" style={{ height: "100px", marginBottom: "16px" }}></div>
        <div className="skeleton-card" style={{ height: "100px", marginBottom: "16px" }}></div>
      </div>
    );
  }

  return (
    <div className="apps-page">
      {/* Header */}
      <div className="apps-header">
        <div>
          <h1>My Applications</h1>
          <p className="text-secondary">Track and manage your university applications</p>
        </div>
        <Link to="/dashboard/programs" className="btn-new-app">
          <span style={{ fontSize: "1.2rem", lineHeight: 0 }}>+</span> New Application
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="apps-tabs">
        {STATUS_TABS.map(tab => (
          <button 
            key={tab} 
            className={`app-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Applications List */}
      <div className="apps-list">
        {filteredApps.length > 0 ? (
          filteredApps.map(app => {
            const statusInfo = formatStatus(app.status);
            const dateStr = new Date(app.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
            
            return (
              <div key={app._id} className="app-card">
                <div className={`app-status-bar status-bar-${statusInfo.class}`}></div>
                
                <div className="app-main-info">
                  <h3 className="app-prog-title">{app.program?.title || app.program || "Unknown Program"}</h3>
                  <p className="app-uni-name">{app.universityName || "University Name"}</p>
                  <div className="app-meta">
                    <span className="app-meta-item">{app.destinationCountry === "Canada" ? "🇨🇦" : app.destinationCountry === "UK" ? "🇬🇧" : app.destinationCountry === "Australia" ? "🇦🇺" : "🌍"} {app.destinationCountry || "Country"}</span>
                    <span className="app-meta-item">📅 Intake: {app.intake || "N/A"}</span>
                  </div>
                </div>

                <div className="app-status-col">
                  <span className={`status-badge ${statusInfo.class}`}>
                    {statusInfo.label}
                  </span>
                  <span className="app-date">Applied on {dateStr}</span>
                </div>

                <div className="app-action-col">
                  <Link to={`/dashboard/applications/${app._id}`} className="btn-view-details">
                    View Details
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-state">
            <div className="empty-illustration">
              <div className="empty-avatar-bg"></div>
              <span className="empty-emoji student">🤷🏽‍♀️</span>
              <span className="empty-emoji suitcase">🧳</span>
            </div>
            <h3>No Applications Yet</h3>
            <p>Start your journey by browsing programs and applying</p>
            <Link to="/dashboard/programs" className="btn-new-app mt-md" style={{ display: "inline-block", marginTop: "16px", padding: "12px 28px", borderRadius: "99px" }}>Browse Programs</Link>
          </div>
        )}
      </div>
    </div>
  );
}
