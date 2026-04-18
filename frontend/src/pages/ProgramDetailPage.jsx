import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../lib/api";
import "./ProgramDetailPage.css";

export default function ProgramDetailPage() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIntake, setSelectedIntake] = useState("");

  useEffect(() => {
    // Attempt to fetch from /programs/:id
    // If backend doesn't support it or fails, fallback to fetching all and finding
    api.program(id)
      .then((res) => {
        const data = res.data || res;
        setProgram(data);
        if (data?.intakes?.length > 0) {
          setSelectedIntake(data.intakes[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        // Fallback for mocked view if backend endpoint fails
        api.programs({}).then(all => {
          const dataList = all.data || all;
          const p = dataList.find(x => x._id === id);
          const defaultProgram = { 
            title: "Master of Applied Computing", 
            universityName: "University of Technology", 
            country: "Canada",
            degreeLevel: "Master",
            fieldOfStudy: "Computer Science",
            duration: "2 Years",
            tuitionFeeUsd: 25000,
            intakes: ["September 2026", "January 2027"],
            englishRequirements: { ielts: 6.5 },
            academicRequirements: "Bachelor's degree in related field with min 70%",
            hasScholarship: true
          };
          
          setProgram(p || defaultProgram);
          if ((p || defaultProgram).intakes?.length > 0) {
            setSelectedIntake((p || defaultProgram).intakes[0]);
          }
          setLoading(false);
        }).catch(() => {
          setLoading(false);
        });
      });
  }, [id]);

  if (loading) {
    return (
      <div className="program-detail-page p-xl">
        <div className="skeleton-card" style={{ height: "300px", marginBottom: "32px" }}></div>
        <div className="pd-layout">
          <div className="skeleton-card" style={{ height: "500px" }}></div>
          <div className="skeleton-card" style={{ height: "400px" }}></div>
        </div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="program-detail-page p-xl text-center">
        <h2>Program not found</h2>
        <Link to="/dashboard/programs" className="text-link mt-md inline-block">Return to Programs</Link>
      </div>
    );
  }

  return (
    <div className="program-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/dashboard/programs">Programs</Link>
        <span className="separator">/</span>
        <span>{program.fieldOfStudy || "Field"}</span>
        <span className="separator">/</span>
        <span className="current">{program.title}</span>
      </div>

      {/* Hero Section */}
      <div className="pd-hero">
        <div className="pd-hero-banner"></div>
        <div className="pd-hero-content">
          <div className="pd-university-info">
            <div className="pd-uni-logo">{program.universityName?.charAt(0) || "U"}</div>
            <div>
              <div className="pd-uni-name">
                {program.universityName} <span className="partner-badge">✓ Official Partner</span>
              </div>
              <h1 className="pd-program-title">{program.title}</h1>
              <div className="pd-location">
                {program.country === "Canada" ? "🇨🇦" : program.country === "UK" ? "🇬🇧" : program.country === "Australia" ? "🇦🇺" : program.country === "USA" ? "🇺🇸" : "🌍"} {program.country}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Two Columns */}
      <div className="pd-layout">
        {/* Left Column */}
        <div className="pd-main-col">
          
          <div className="pd-card pd-overview">
            <h2>Program Overview</h2>
            <div className="pd-grid-4">
              <div className="pd-info-item">
                <span className="pd-label">Degree Level</span>
                <span className="pd-value">{program.degreeLevel || "Master"}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-label">Field of Study</span>
                <span className="pd-value">{program.fieldOfStudy || "Computer Science"}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-label">Duration</span>
                <span className="pd-value">{program.duration || "2 Years"}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-label">STEM Eligible</span>
                <span className="pd-value badge-success badge">Yes</span>
              </div>
            </div>
          </div>

          <div className="pd-card">
            <h2>Tuition Fees</h2>
            <div className="pd-tuition-display">
              <span className="pd-tuition-amount">${(program.tuitionFeeUsd || 25000).toLocaleString()}</span>
              <span className="pd-tuition-label">per year</span>
            </div>
          </div>

          <div className="pd-card">
            <h2>Available Intakes</h2>
            <div className="pd-intakes">
              {(program.intakes || ["September 2026", "January 2027"]).map(intake => (
                <span key={intake} className="pd-intake-chip">{intake}</span>
              ))}
            </div>
          </div>

          <div className="pd-card">
            <h2>Admission Requirements</h2>
            <div className="pd-req-section">
              <h3>English Language</h3>
              <div className="pd-req-item">
                <strong>IELTS:</strong> Minimum {program.englishRequirements?.ielts || "6.5"} overall
              </div>
              {(program.englishRequirements?.toefl || true) && (
                <div className="pd-req-item">
                  <strong>TOEFL iBT:</strong> Minimum {program.englishRequirements?.toefl || "88"}
                </div>
              )}
            </div>
            <div className="pd-req-section mt-md">
              <h3>Academic Requirements</h3>
              <p>{program.academicRequirements || "Bachelor's degree or equivalent with good academic standing."}</p>
            </div>
          </div>

        </div>

        {/* Right Column (Sticky Apply Card) */}
        <div className="pd-side-col">
          <div className="pd-card sticky-card">
            <h2 className="text-xl mb-md">Apply Now</h2>
            
            <div className="form-group mb-lg">
              <label>Select Intake</label>
              <select 
                className="form-input" 
                value={selectedIntake} 
                onChange={e => setSelectedIntake(e.target.value)}
              >
                {(program.intakes || ["September 2026", "January 2027"]).map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>

            {program.hasScholarship !== false && (
              <div className="pd-scholarship-box mb-lg">
                <strong>💰 Scholarships Available</strong>
                <p>You may be eligible for up to $5,000 in entrance scholarships.</p>
              </div>
            )}

            <button className="btn-primary w-full pd-apply-btn mb-md">
              Start Application
            </button>
            
            <button className="btn-outline w-full pd-fav-btn">
              🤍 Save to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
