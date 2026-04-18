import { useState, useEffect } from "react";
import { api } from "../lib/api";
import "./AdminStudentsPage.css";

export default function AdminStudentsPage() {
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  
  const [students, setStudents] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchStudents = () => {
    setLoading(true);
    api.adminStudents({
      search,
      country: countryFilter,
      statusFilter,
      page,
      limit
    })
    .then(res => {
      const data = res.data || res;
      setStudents(data);
      setTotal(res.meta?.total || data.length || 0);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  };

  useEffect(() => {
    // Debounce search slightly
    const timer = setTimeout(() => {
      fetchStudents();
    }, 300);
    return () => clearTimeout(timer);
  }, [search, countryFilter, statusFilter, page, limit]);

  const getFlag = (country) => {
    const map = { "Canada": "🇨🇦", "UK": "🇬🇧", "Australia": "🇦🇺", "UAE": "🇦🇪", "USA": "🇺🇸" };
    return map[country] || "🌍";
  };

  return (
    <div className="admin-page">
      <div className="admin-header space-between">
        <div className="flex-align">
          <h1>All Students</h1>
          <span className="count-badge">{total}</span>
        </div>
        <button className="btn-primary-admin">Export CSV</button>
      </div>

      <div className="admin-table-card">
        <div className="admin-filter-bar">
          <div className="filter-group-row">
            <input 
              type="text" 
              className="admin-input search-input-wide" 
              placeholder="Search by name or email..." 
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
            <select className="admin-select" value={countryFilter} onChange={e => { setCountryFilter(e.target.value); setPage(1); }}>
              <option>All Countries</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Australia</option>
              <option>USA</option>
              <option>UAE</option>
            </select>
            <select className="admin-select" value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1); }}>
              <option>All Statuses</option>
              <option>Complete</option>
              <option>Incomplete</option>
            </select>
          </div>
        </div>

        <div className="table-responsive" style={{ minHeight: "400px" }}>
          {loading ? (
            <div className="p-xl text-center text-secondary">Loading students...</div>
          ) : (
            <table className="admin-table alt-rows">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Email</th>
                  <th>Target Countries</th>
                  <th>Interested Fields</th>
                  <th>Profile Status</th>
                  <th>Registered</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student._id}>
                    <td>
                      <div className="student-cell">
                        <div className="student-avatar">{(student.fullName || "?").charAt(0).toUpperCase()}</div>
                        <div className="student-name font-medium text-primary">{student.fullName}</div>
                      </div>
                    </td>
                    <td className="text-secondary">{student.email}</td>
                    <td>
                      <div className="chip-group">
                        {student.targetCountries?.length > 0 ? student.targetCountries.map(c => <span key={c} className="chip-flag" title={c}>{getFlag(c)}</span>) : "-"}
                      </div>
                    </td>
                    <td>
                      <div className="chip-group">
                        {student.interestedFields?.length > 0 ? student.interestedFields.slice(0,2).map(f => <span key={f} className="chip-tag">{f}</span>) : "-"}
                        {student.interestedFields?.length > 2 && <span className="text-secondary text-sm">+{student.interestedFields.length - 2}</span>}
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${student.profileComplete ? 'badge-success' : 'badge-danger'}`}>
                        {student.profileComplete ? 'Complete' : 'Incomplete'}
                      </span>
                    </td>
                    <td className="text-secondary">{new Date(student.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-action-outline">View Profile</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!loading && students.length === 0 && (
            <div className="admin-empty-state">
              <div className="empty-icon">👥</div>
              <h3>No students found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          )}
        </div>

        <div className="admin-pagination-footer">
          <div className="page-size-selector">
            <span className="text-secondary">Rows per page:</span>
            <select className="admin-select-sm" value={limit} onChange={e => { setLimit(Number(e.target.value)); setPage(1); }}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="pagination-controls">
            <span className="text-secondary">{(page - 1) * limit + 1}-{Math.min(page * limit, total)} of {total}</span>
            <button className={`btn-page ${page === 1 ? 'disabled' : ''}`} onClick={() => page > 1 && setPage(page - 1)}>{"<"}</button>
            <button className={`btn-page ${page * limit >= total ? 'disabled' : ''}`} onClick={() => page * limit < total && setPage(page + 1)}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
