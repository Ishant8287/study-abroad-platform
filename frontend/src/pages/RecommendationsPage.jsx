import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import { getUser } from "../lib/auth";
import "./RecommendationsPage.css";

function MatchRing({ score }) {
  const pct = score <= 1 ? Math.round(score * 100) : Math.round(score);
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div style={{ position: "relative", width: "80px", height: "80px" }}>
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="36" fill="none" stroke="#e5e7eb" strokeWidth="6" />
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="#2563eb"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 40 40)"
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-heading)",
        fontWeight: 800,
        fontSize: "1.2rem",
        color: "#111827"
      }}>
        {pct}%
      </div>
    </div>
  );
}

export default function RecommendationsPage() {
  const user = getUser();
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    api.recommendations()
      .then((res) => {
        const data = res.data || res;
        
        // Mock data fallback if empty
        if (!data || !data.recommendations || data.recommendations.length === 0) {
          const mockData = {
            student: {
              fullName: user.fullName || "Student",
              targetCountries: ["Canada", "UK"],
              interestedFields: ["Computer Science"]
            },
            recommendations: [
              {
                _id: "p1",
                program: { _id: "p1", title: "Master of Applied Computing", degreeLevel: "Master", tuitionFeeUsd: 25000 },
                university: { name: "University of Windsor", country: "Canada" },
                score: 0.92,
                reasons: ["Preferred country match", "Within budget", "Intake available"]
              },
              {
                _id: "p2",
                program: { _id: "p2", title: "MSc Computer Science", degreeLevel: "Master", tuitionFeeUsd: 28000 },
                university: { name: "University of Bristol", country: "UK" },
                score: 0.88,
                reasons: ["Preferred country match", "High academic match", "Field match"]
              },
              {
                _id: "p3",
                program: { _id: "p3", title: "Master of Data Science", degreeLevel: "Master", tuitionFeeUsd: 32000 },
                university: { name: "University of British Columbia", country: "Canada" },
                score: 0.85,
                reasons: ["Top university", "Preferred country match", "Field match"]
              },
              {
                _id: "p4",
                program: { _id: "p4", title: "MSc Software Engineering", degreeLevel: "Master", tuitionFeeUsd: 40000 },
                university: { name: "Imperial College London", country: "UK" },
                score: 0.81,
                reasons: ["Preferred country match", "Field match"]
              },
              {
                _id: "p5",
                program: { _id: "p5", title: "Master of IT", degreeLevel: "Master", tuitionFeeUsd: 30000 },
                university: { name: "University of Melbourne", country: "Australia" },
                score: 0.78,
                reasons: ["Alternative country", "Within budget", "Intake available"]
              }
            ]
          };
          setResult(mockData);
        } else {
          setResult(data);
        }
      })
      .catch((err) => setError(err.message));
  }, [user?.email]);

  if (!result) return (
    <div className="p-xl">
      <div className="skeleton-card" style={{ height: "150px", marginBottom: "20px" }}></div>
      <div className="skeleton-card" style={{ height: "150px", marginBottom: "20px" }}></div>
    </div>
  );

  return (
    <div className="recs-page">
      {/* Header */}
      <div className="recs-header">
        <div className="recs-title-area">
          <h1>Your Recommended Programs</h1>
          <p className="recs-subtitle">Powered by AI based on your profile</p>
        </div>
        <div className="ai-badge">
          ⚡ AI Powered
        </div>
      </div>

      {/* Profile Summary Strip */}
      <div className="student-summary-strip">
        <div className="summary-item">
          <span className="summary-label">Target Countries:</span>
          <div className="summary-chips">
            {result.student?.targetCountries?.length > 0 
              ? result.student.targetCountries.map(c => <span key={c} className="summary-chip">{c}</span>)
              : <span className="summary-chip">Not set</span>
            }
          </div>
        </div>
        <div className="summary-item">
          <span className="summary-label">Fields of Study:</span>
          <div className="summary-chips">
            {result.student?.interestedFields?.length > 0
              ? result.student.interestedFields.map(f => <span key={f} className="summary-chip">{f}</span>)
              : <span className="summary-chip">Not set</span>
            }
          </div>
        </div>
      </div>

      {/* Recommendations List */}
      <div className="rec-list">
        {result.recommendations.map((item) => {
          // Normalize flat vs nested data structures depending on backend API version
          const title = item.title || item.program?.title;
          const degreeLevel = item.degreeLevel || item.program?.degreeLevel;
          const tuitionFeeUsd = item.tuitionFeeUsd || item.program?.tuitionFeeUsd;
          const uniName = item.universityName || item.university?.name;
          const country = item.country || item.university?.country;
          const score = item.score !== undefined ? item.score : item.matchScore;
          const programId = item.program?._id || item._id;

          return (
            <div key={item._id} className="rec-row-card">
              <div className="rec-score-col">
                <MatchRing score={score || 0.85} />
                <span className="rec-score-label">Match</span>
              </div>

              <div className="rec-info-col">
                <h3 className="rec-prog-title">{title}</h3>
                <p className="rec-uni-name">{uniName}</p>
                <div className="rec-meta">
                  <span className="rec-meta-chip">{country === "Canada" ? "🇨🇦" : country === "UK" ? "🇬🇧" : country === "Australia" ? "🇦🇺" : "🌍"} {country}</span>
                  <span className="rec-meta-chip">{degreeLevel}</span>
                  <span className="rec-tuition">${tuitionFeeUsd?.toLocaleString()} / yr</span>
                </div>
              </div>

              <div className="rec-reasons-col">
                {(item.reasons || ["Preferred country match", "Within budget"]).map((reason, idx) => (
                  <div key={idx} className="reason-tag">
                    <span className="reason-icon">✓</span> {reason}
                  </div>
                ))}
              </div>

              <div className="rec-actions-col">
                <Link to={`/dashboard/programs/${programId}`} className="btn-view-prog">View Program</Link>
                <button className="btn-apply-now">Apply Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
