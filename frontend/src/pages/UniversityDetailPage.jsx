import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../lib/api";
import "./UniversityDetailPage.css";

export default function UniversityDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");
  const [loading, setLoading] = useState(true);

  // Mock data for UI demonstration
  const uni = {
    id: id || "1",
    name: "Imperial College London",
    city: "London",
    country: "UK",
    color: "#000099",
    qsRanking: "6",
    partnerType: "Partner",
    scholarships: true,
    popularScore: 5.0,
    website: "https://imperial.ac.uk",
    about: "Imperial College London is a world-class university with a mission to benefit society through excellence in science, engineering, medicine and business. The university has consistently been ranked among the top 10 universities globally.",
    tags: ["Engineering", "Medicine", "Business", "Science", "Research Intensive"],
    programs: [
      { id: "p1", title: "MSc Computer Science", field: "Computer Science", degree: "Master's", tuition: "£35,000 / year", intakes: ["Sep 2026"] },
      { id: "p2", title: "BSc Mechanical Engineering", field: "Engineering", degree: "Bachelor's", tuition: "£33,000 / year", intakes: ["Sep 2026", "Jan 2027"] },
      { id: "p3", title: "MBA", field: "Business", degree: "Master's", tuition: "£55,000 / year", intakes: ["Sep 2026"] }
    ]
  };

  useEffect(() => {
    // In a real app, fetch uni details by ID
    setTimeout(() => setLoading(false), 300);
  }, [id]);

  const getFlag = (country) => {
    const map = { "Canada": "🇨🇦", "UK": "🇬🇧", "Australia": "🇦🇺", "UAE": "🇦🇪", "USA": "🇺🇸" };
    return map[country] || "🌍";
  };

  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const hasHalf = score % 1 !== 0;
    const stars = [];
    for(let i=0; i<fullStars; i++) stars.push("★");
    if(hasHalf) stars.push("☆");
    while(stars.length < 5) stars.push("☆");
    return stars.join("");
  };

  if (loading) return <div className="p-xl text-center">Loading university details...</div>;

  return (
    <div className="pub-page">
      {/* Public Navbar */}
      <nav className="pub-nav" style={{backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
            <span style={{fontSize: '1.8rem'}}>🌐</span>
            <span style={{fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#0f172a'}}>StepAbroad</span>
          </Link>
          <div className="pub-nav-links-wrap" style={{display: 'flex', gap: '32px'}}>
            <Link to="/universities" style={{textDecoration: 'none', color: '#2563eb', fontWeight: 600, fontSize: '1rem'}}>Universities</Link>
            <Link to="/programs" style={{textDecoration: 'none', color: '#64748b', fontWeight: 600, fontSize: '1rem'}}>Programs</Link>
            <Link to="/about" style={{textDecoration: 'none', color: '#64748b', fontWeight: 600, fontSize: '1rem'}}>About</Link>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <Link to="/login" style={{textDecoration: 'none', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem'}}>Log in</Link>
            <Link to="/register" style={{background: '#2563eb', color: 'white', textDecoration: 'none', padding: '10px 24px', borderRadius: '99px', fontWeight: 600, fontSize: '0.95rem'}}>Register</Link>
          </div>
        </div>
      </nav>

      <div className="ud-container">
        <div className="breadcrumb">
          <Link to="/universities" className="breadcrumb-link">Universities</Link> <span style={{margin: '0 8px'}}>/</span> {uni.name}
        </div>

        <div className="ud-hero-banner" style={{ backgroundColor: uni.color }}>
          <div className="ud-hero-overlay-name">{uni.name}</div>
        </div>

        <div className="ud-layout">
          <div className="ud-left">
            <div className="ud-header-info">
              <h1 className="ud-title">{uni.name}</h1>
              <div className="ud-location">
                <span style={{fontSize: '1.4rem'}}>{getFlag(uni.country)}</span> {uni.city}, {uni.country}
              </div>
              <div className="ud-badges">
                <span className="ud-badge badge-partner">✓ {uni.partnerType} Partner</span>
                <span className="ud-badge badge-qs">🏆 QS Ranking #{uni.qsRanking}</span>
                <a href={uni.website} target="_blank" rel="noreferrer" className="ud-badge badge-link">🔗 Website</a>
              </div>
            </div>

            <div className="ud-tabs">
              <button 
                className={`ud-tab ${activeTab === "Overview" ? "active" : ""}`}
                onClick={() => setActiveTab("Overview")}
              >
                Overview
              </button>
              <button 
                className={`ud-tab ${activeTab === "Programs" ? "active" : ""}`}
                onClick={() => setActiveTab("Programs")}
              >
                Programs ({uni.programs.length})
              </button>
            </div>

            <div className="ud-tab-content">
              {activeTab === "Overview" && (
                <div className="ud-overview-animate">
                  <div className="ud-tags-row">
                    {uni.tags.map(tag => <span key={tag} className="ud-tag">{tag}</span>)}
                  </div>
                  <p className="ud-about-text">{uni.about}</p>
                  
                  {uni.scholarships && (
                    <div className="ud-scholarship-box">
                      <h3>🎉 Scholarships Available</h3>
                      <p>This university offers dedicated scholarships for international students. Our counselors can help you identify and apply for eligible financial aid directly through StepAbroad.</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "Programs" && (
                <div className="ud-programs-list">
                  {uni.programs.map(prog => (
                    <div key={prog.id} className="ud-prog-card">
                      <div className="ud-prog-header">
                        <div>
                          <h4 className="ud-prog-title">{prog.title}</h4>
                          <div className="ud-prog-field">{prog.field}</div>
                        </div>
                        <Link to={`/programs/${prog.id}`} className="btn-sm-apply">View & Apply</Link>
                      </div>
                      <div className="ud-prog-meta">
                        <div className="ud-meta-item">
                          <span className="ud-meta-label">Level</span>
                          <span className="ud-meta-value">{prog.degree}</span>
                        </div>
                        <div className="ud-meta-item">
                          <span className="ud-meta-label">Est. Tuition</span>
                          <span className="ud-meta-value" style={{color: '#2563eb'}}>{prog.tuition}</span>
                        </div>
                        <div className="ud-meta-item">
                          <span className="ud-meta-label">Intakes</span>
                          <span className="ud-meta-value">{prog.intakes.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="ud-right">
            <div className="ud-quick-stats">
              <h3>Quick Stats</h3>
              <div className="qs-list">
                <div className="qs-item">
                  <div className="qs-icon">🏆</div>
                  <div className="qs-content">
                    <span className="qs-label">QS World Ranking</span>
                    <span className="qs-value">#{uni.qsRanking}</span>
                  </div>
                </div>
                <div className="qs-item">
                  <div className="qs-icon">⭐</div>
                  <div className="qs-content">
                    <span className="qs-label">Popularity</span>
                    <span className="qs-value" style={{color: "#eab308", letterSpacing: "1px"}}>{renderStars(uni.popularScore)}</span>
                  </div>
                </div>
                <div className="qs-item">
                  <div className="qs-icon">🎓</div>
                  <div className="qs-content">
                    <span className="qs-label">Total Programs</span>
                    <span className="qs-value">{uni.programs.length} Active</span>
                  </div>
                </div>
              </div>
              <Link to={`/programs?university=${encodeURIComponent(uni.name)}`} className="btn-lg-apply">
                Apply to This University
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
