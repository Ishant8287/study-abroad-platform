import React, { useState, useEffect } from "react";
import { api } from "../lib/api";
import "./AdminApplicationsPage.css";

const STATUS_STEPS = ["draft", "submitted", "under-review", "offer-received", "visa-processing", "enrolled"];

const validTransitions = {
  "draft": ["submitted"],
  "submitted": ["under-review", "rejected"],
  "under-review": ["offer-received", "rejected"],
  "offer-received": ["visa-processing", "rejected"],
  "visa-processing": ["enrolled", "rejected"],
  "enrolled": [],
  "rejected": []
};

const formatStatus = (s) => s.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
const getStatusClass = (s) => {
  const map = {
    "draft": "badge-info",
    "submitted": "badge-accent",
    "under-review": "badge-warning",
    "offer-received": "badge-teal",
    "visa-processing": "badge-teal",
    "enrolled": "badge-success",
    "rejected": "badge-danger"
  };
  return map[s] || "badge-info";
};

export default function AdminApplicationsPage() {
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [openStatusDropdown, setOpenStatusDropdown] = useState(null);

  const [apps, setApps] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  
  // Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const fetchApps = () => {
    setLoading(true);
    api.applications({
      page,
      limit,
      ...(statusFilter && statusFilter !== "All Statuses" ? { status: statusFilter } : {})
    })
    .then(res => {
      const data = res.data || res;
      setApps(data);
      setTotal(res.meta?.total || data.length || 0);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchApps();
  }, [page, limit, statusFilter]);

  const toggleRow = (id) => {
    const next = new Set(expandedRows);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedRows(next);
  };

  const toggleSelect = (id) => {
    const next = new Set(selectedRows);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedRows(next);
  };

  const toggleSelectAll = (e) => {
    if (e.target.checked) setSelectedRows(new Set(apps.map(a => a._id)));
    else setSelectedRows(new Set());
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.updateApplicationStatus(id, { status: newStatus });
      setApps(apps.map(a => {
        if (a._id === id) {
          return { ...a, status: newStatus, timeline: [...(a.timeline || []), { status: newStatus, date: new Date().toISOString(), note: `Status updated to ${newStatus}.` }] };
        }
        return a;
      }));
    } catch (err) {
      alert("Failed to update status: " + err.message);
    }
    setOpenStatusDropdown(null);
  };

  const filteredApps = search 
    ? apps.filter(a => a.student?.fullName?.toLowerCase().includes(search.toLowerCase())) 
    : apps;

  return (
    <div className="admin-page">
      <div className="admin-header space-between">
        <div className="flex-align">
          <h1>All Applications</h1>
          <span className="count-badge">{total}</span>
        </div>
        {selectedRows.size > 0 && (
          <div className="bulk-actions">
            <span className="text-secondary">{selectedRows.size} selected</span>
            <button className="btn-primary-admin">Bulk Update</button>
          </div>
        )}
      </div>

      <div className="admin-table-card">
        <div className="admin-filter-bar">
          <div className="filter-group-row">
            <input 
              type="text" 
              className="admin-input search-input-wide" 
              placeholder="Search by student name..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <select className="admin-select" value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1); }}>
              <option value="">All Statuses</option>
              {STATUS_STEPS.map(s => <option key={s} value={s}>{formatStatus(s)}</option>)}
              <option value="rejected">Rejected</option>
            </select>
            <button className="btn-primary-admin" onClick={fetchApps}>Apply Filters</button>
            <button className="btn-outline" onClick={() => { setSearch(""); setStatusFilter(""); setPage(1); }}>Reset</button>
          </div>
        </div>

        <div className="table-responsive" style={{ minHeight: "400px" }}>
          {loading ? (
            <div className="p-xl text-center text-secondary">Loading applications...</div>
          ) : (
            <table className="admin-table alt-rows">
              <thead>
                <tr>
                  <th><input type="checkbox" checked={selectedRows.size === apps.length && apps.length > 0} onChange={toggleSelectAll} /></th>
                  <th>Student</th>
                  <th>Program & University</th>
                  <th>Country</th>
                  <th>Intake</th>
                  <th>Status</th>
                  <th>Date Applied</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredApps.map(app => (
                  <React.Fragment key={app._id}>
                    <tr>
                      <td><input type="checkbox" checked={selectedRows.has(app._id)} onChange={() => toggleSelect(app._id)} /></td>
                      <td className="font-medium text-primary">{app.student?.fullName || "Unknown"}</td>
                      <td>
                        <div>{app.program?.title || "Unknown"}</div>
                        <div className="text-secondary" style={{ fontSize: "0.85rem" }}>{app.university?.name || "Unknown"}</div>
                      </td>
                      <td>{app.destinationCountry === "Canada" ? "🇨🇦" : app.destinationCountry === "UK" ? "🇬🇧" : app.destinationCountry === "Australia" ? "🇦🇺" : "🇦🇪"} {app.destinationCountry}</td>
                      <td>{app.intake}</td>
                      <td>
                        <div className="status-dropdown-container">
                          <button 
                            className={`badge ${getStatusClass(app.status)} status-btn-dropdown`}
                            onClick={() => setOpenStatusDropdown(openStatusDropdown === app._id ? null : app._id)}
                          >
                            {formatStatus(app.status)} ▼
                          </button>
                          {openStatusDropdown === app._id && (
                            <div className="status-dropdown-menu">
                              <div className="dropdown-label">Update Status</div>
                              {validTransitions[app.status]?.map(nextStatus => (
                                <button 
                                  key={nextStatus}
                                  className={`dropdown-item highlight ${nextStatus === 'rejected' ? 'text-danger' : ''}`}
                                  onClick={() => handleStatusChange(app._id, nextStatus)}
                                >
                                  → {formatStatus(nextStatus)}
                                </button>
                              ))}
                              {(!validTransitions[app.status] || validTransitions[app.status].length === 0) && (
                                <div className="dropdown-item text-secondary">No further transitions</div>
                              )}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="text-secondary">{new Date(app.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button className="btn-action-outline" onClick={() => toggleRow(app._id)}>
                          {expandedRows.has(app._id) ? "Hide Timeline" : "Show Timeline"}
                        </button>
                      </td>
                    </tr>
                    {expandedRows.has(app._id) && (
                      <tr className="expanded-row-bg">
                        <td colSpan="8">
                          <div className="mini-timeline-container">
                            <h4>Application Timeline</h4>
                            <div className="mini-timeline">
                              {(app.timeline || []).map((h, i) => (
                                <div key={i} className="mini-timeline-step">
                                  <div className="mt-dot"></div>
                                  <div className="mt-content">
                                    <div className="mt-status">{formatStatus(h.status)}</div>
                                    <div className="mt-date">{new Date(h.date || h.createdAt || app.createdAt).toLocaleDateString()}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}
          {!loading && filteredApps.length === 0 && (
            <div className="p-xl text-center text-secondary">
              No applications found matching your criteria.
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
