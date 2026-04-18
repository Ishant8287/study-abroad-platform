import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../lib/api";
import "./ApplicationDetailPage.css";

const STATUS_STEPS = [
  { id: "draft", label: "Draft" },
  { id: "submitted", label: "Submitted" },
  { id: "under-review", label: "Under Review" },
  { id: "offer-received", label: "Offer Received" },
  { id: "visa-processing", label: "Visa Processing" },
  { id: "enrolled", label: "Enrolled" }
];

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

export default function ApplicationDetailPage() {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Attempt to fetch specific application
    api.application(id)
      .then((res) => {
        const data = res.data || res;
        // Construct mock fallback if backend doesn't have rich data yet
        if (!data || !data.universityName) {
           throw new Error("Need rich data mockup");
        }
        setApp(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback to fetch all and find, or mock data for UI demo
        api.applications().then((res) => {
          const list = res.data || res;
          let found = list.find(a => a._id === id);
          if (!found) {
            found = {
              _id: id,
              program: { title: "Master of Applied Computing" },
              universityName: "University of Windsor",
              destinationCountry: "Canada",
              intake: "September 2026",
              status: "under-review",
              createdAt: "2026-04-10T10:00:00Z"
            };
          }
          
          // Inject mock history/documents if missing from backend
          if (!found.history) {
             found.history = [
                { status: "draft", date: "2026-04-05T14:30:00Z", note: "Application draft started." },
                { status: "submitted", date: "2026-04-10T10:00:00Z", note: "Documents verified and application sent to university." }
             ];
             if (found.status === "under-review" || found.status === "offer-received" || found.status === "enrolled") {
               found.history.push({ status: "under-review", date: "2026-04-12T09:15:00Z", note: "University admissions committee is currently reviewing your profile." });
             }
             if (found.status === "offer-received" || found.status === "enrolled") {
               found.history.push({ status: "offer-received", date: "2026-05-01T11:00:00Z", note: "Congratulations! You have received an offer." });
             }
             if (found.status === "enrolled") {
               found.history.push({ status: "enrolled", date: "2026-06-15T10:00:00Z", note: "Enrollment confirmed. Welcome!" });
             }
          }
          if (!found.documents) {
             found.documents = [
                { id: "d1", name: "Passport_Copy.pdf", size: "2.4 MB" },
                { id: "d2", name: "Bachelors_Transcript.pdf", size: "4.1 MB" },
                { id: "d3", name: "IELTS_Score_Report.pdf", size: "1.1 MB" }
             ];
          }

          setApp(found);
          setLoading(false);
        }).catch(() => {
          setLoading(false);
        });
      });
  }, [id]);

  if (loading) {
    return <div className="p-xl">Loading application details...</div>;
  }

  if (!app) {
    return (
      <div className="p-xl text-center">
        <h2>Application not found</h2>
        <Link to="/dashboard/applications" className="text-link mt-md inline-block">Return to Applications</Link>
      </div>
    );
  }

  const statusInfo = formatStatus(app.status);
  const isRejected = app.status === "rejected";

  return (
    <div className="app-detail-page">
      <Link to="/dashboard/applications" className="back-link">
        <span>←</span> Back to Applications
      </Link>

      {/* Top Card */}
      <div className="ad-top-card">
        <div>
          <h1 className="ad-prog-title">{app.program?.title || app.program || "Unknown Program"}</h1>
          <div className="ad-uni-info">
            <span>{app.universityName || "University Name"}</span>
            <span>•</span>
            <span>{app.destinationCountry === "Canada" ? "🇨🇦" : app.destinationCountry === "UK" ? "🇬🇧" : app.destinationCountry === "Australia" ? "🇦🇺" : "🌍"} {app.destinationCountry || "Country"}</span>
            <span>•</span>
            <span>📅 Intake: {app.intake || "N/A"}</span>
          </div>
        </div>
        <div className={`ad-status-badge status-badge ${statusInfo.class}`}>
          {statusInfo.label}
        </div>
      </div>

      <div className="ad-layout">
        {/* Left Column - Timeline Stepper */}
        <div className="ad-left-col">
          <div className="ad-card">
            <h2>Status History</h2>
            <div className="timeline">
              {STATUS_STEPS.map((step, index) => {
                if (isRejected && index > 2) return null; // hide steps after under-review if rejected for demo

                const historyEntry = app.history?.find(h => h.status === step.id);
                
                let stateClass = "";
                let icon = "";
                
                if (historyEntry && app.status === step.id) {
                  stateClass = "active";
                  icon = "●";
                } else if (historyEntry) {
                  stateClass = "completed";
                  icon = "✓";
                } 

                if (!historyEntry && !stateClass) {
                  icon = index + 1;
                }

                return (
                  <div key={step.id} className={`timeline-step ${stateClass}`}>
                    <div className="timeline-line"></div>
                    <div className="timeline-icon">
                      {icon}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <span className="timeline-title">{step.label}</span>
                        {historyEntry && (
                          <span className="timeline-date">
                            {new Date(historyEntry.date).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                          </span>
                        )}
                      </div>
                      {historyEntry?.note && (
                        <div className="timeline-note">
                          "{historyEntry.note}"
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              
              {isRejected && (
                <div className="timeline-step active">
                  <div className="timeline-line"></div>
                  <div className="timeline-icon" style={{ borderColor: "#ef4444", color: "#ef4444" }}>✕</div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-title">Rejected</span>
                      <span className="timeline-date">
                        {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <div className="timeline-note">
                      "Unfortunately, the university cannot offer you admission at this time."
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Summary & Docs */}
        <div className="ad-right-col">
          <div className="ad-card">
            <h2>Program Summary</h2>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Program</span>
                <span className="info-value">{app.program?.title || app.program || "Unknown"}</span>
              </div>
              <div className="info-item">
                <span className="info-label">University</span>
                <span className="info-value">{app.universityName || "Unknown"}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Intake</span>
                <span className="info-value">{app.intake || "N/A"}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Applied Date</span>
                <span className="info-value">
                  {new Date(app.createdAt || Date.now()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Counselor</span>
                <span className="info-value">Sarah Jenkins</span>
              </div>
            </div>
          </div>

          <div className="ad-card">
            <h2>Documents</h2>
            
            <div className="upload-area">
              <div className="upload-icon">📄</div>
              <p className="text-secondary" style={{ fontSize: "0.9rem", marginBottom: "8px" }}>
                Drag and drop your files here, or click to browse.
              </p>
              <button className="btn-upload">Upload Document</button>
            </div>

            <div className="doc-list">
              {app.documents?.map(doc => (
                <div key={doc.id} className="doc-item">
                  <div className="doc-info">
                    <div className="doc-icon">📑</div>
                    <div>
                      <div className="doc-name">{doc.name}</div>
                      <div className="doc-size">{doc.size}</div>
                    </div>
                  </div>
                  <button className="btn-delete-doc" title="Delete">×</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
