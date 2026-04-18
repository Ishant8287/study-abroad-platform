import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import "./UniversitiesPage.css";

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All Countries");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Popular");

  const filters = ["All Countries", "Canada", "UK", "Australia", "UAE", "USA"];

  useEffect(() => {
    // Attempt to load from API
    api.universities()
      .then(res => {
        const data = res.data || res;
        if (!data || data.length === 0) throw new Error("empty");
        setUniversities(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback mock data
        setUniversities([
          { _id: "1", name: "University of Windsor", city: "Windsor", country: "Canada", qsRanking: "751-800", partnerType: "Direct", scholarships: true, popularScore: 4.5, color: "#005587" },
          { _id: "2", name: "Imperial College London", city: "London", country: "UK", qsRanking: "6", partnerType: "Partner", scholarships: true, popularScore: 5.0, color: "#000099" },
          { _id: "3", name: "University of Sydney", city: "Sydney", country: "Australia", qsRanking: "19", partnerType: "Direct", scholarships: false, popularScore: 4.8, color: "#E03C31" },
          { _id: "4", name: "Middlesex University Dubai", city: "Dubai", country: "UAE", qsRanking: "801-1000", partnerType: "Direct", scholarships: true, popularScore: 4.2, color: "#E31837" },
          { _id: "5", name: "University of Waterloo", city: "Waterloo", country: "Canada", qsRanking: "112", partnerType: "Partner", scholarships: true, popularScore: 4.7, color: "#FFD54F" },
          { _id: "6", name: "University of Bristol", city: "Bristol", country: "UK", qsRanking: "55", partnerType: "Direct", scholarships: false, popularScore: 4.6, color: "#B01C2E" },
        ]);
        setLoading(false);
      });
  }, []);

  const getFlag = (country) => {
    const map = { "Canada": "🇨🇦", "UK": "🇬🇧", "Australia": "🇦🇺", "UAE": "🇦🇪", "USA": "🇺🇸" };
    return map[country] || "🌍";
  };

  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const hasHalf = score % 1 !== 0;
    const stars = [];
    for(let i=0; i<fullStars; i++) stars.push("★");
    if(hasHalf) stars.push("☆"); // Simple half-star rep
    while(stars.length < 5) stars.push("☆");
    return stars.join("");
  };

  const filteredUnis = universities
    .filter(u => activeFilter === "All Countries" || u.country === activeFilter)
    .filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.city.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "Popular") return b.popularScore - a.popularScore;
      if (sortBy === "Name") return a.name.localeCompare(b.name);
      if (sortBy === "Ranking") {
         const rankA = parseInt(a.qsRanking.split("-")[0]) || 9999;
         const rankB = parseInt(b.qsRanking.split("-")[0]) || 9999;
         return rankA - rankB;
      }
      return 0;
    });

  return (
    <div className="pub-page">
      {/* Public Navbar */}
      <nav className="pub-nav">
        <div className="pub-nav-container">
          <Link to="/" className="pub-brand">
            <span className="pub-logo">🌐</span>
            <span className="pub-brand-text">StepAbroad</span>
          </Link>
          <div className="pub-nav-links">
            <Link to="/universities" className="pub-nav-link active">Universities</Link>
            <Link to="/programs" className="pub-nav-link">Programs</Link>
            <Link to="/about" className="pub-nav-link">About</Link>
          </div>
          <div className="pub-nav-actions">
            <Link to="/login" className="btn-pub-text">Log in</Link>
            <Link to="/register" className="btn-pub-primary">Register</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="uni-hero">
        <div className="uni-hero-content">
          <h1>Find Your Dream University</h1>
          <p>Discover top-ranked institutions around the world and take the first step towards your global education.</p>
          
          <div className="uni-search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search universities by name or city..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn-search">Search</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="uni-main">
        {/* Filters & Sort */}
        <div className="uni-controls">
          <div className="uni-filter-pills">
            {filters.map(f => (
              <button 
                key={f}
                className={`uni-pill ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="uni-sort">
            <span className="text-secondary">Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="uni-select">
              <option value="Popular">Popularity</option>
              <option value="Ranking">QS Ranking</option>
              <option value="Name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="p-xl text-center">Loading universities...</div>
        ) : (
          <div className="uni-grid">
            {filteredUnis.length > 0 ? filteredUnis.map(uni => (
              <div key={uni._id} className="uni-card">
                <div className="uni-card-header" style={{ backgroundColor: uni.color || "#2563eb" }}>
                  <div className={`uni-partner-chip ${uni.partnerType === "Direct" ? "direct" : "partner"}`}>
                    {uni.partnerType} Partner
                  </div>
                </div>
                <div className="uni-card-body">
                  <h3 className="uni-card-name">{uni.name}</h3>
                  <div className="uni-card-location">
                    <span>{getFlag(uni.country)}</span> {uni.city}, {uni.country}
                  </div>
                  
                  <div className="uni-card-meta">
                    <div className="meta-item">
                      <span className="meta-label">QS Ranking</span>
                      <span className="meta-value badge-qs">#{uni.qsRanking}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Popularity</span>
                      <span className="meta-value stars">{renderStars(uni.popularScore)}</span>
                    </div>
                  </div>

                  {uni.scholarships && (
                    <div className="uni-scholarship-badge">
                      ✓ Scholarships Available
                    </div>
                  )}

                  <Link to={`/programs?university=${uni.name}`} className="btn-view-programs">
                    View Programs
                  </Link>
                </div>
              </div>
            )) : (
              <div className="uni-empty">
                <h3>No universities found</h3>
                <p>Try adjusting your search or filters to see more results.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
