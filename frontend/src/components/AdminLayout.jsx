import { Outlet, Link, useLocation } from "react-router-dom";
import "./AdminLayout.css";

export default function AdminLayout() {
  const location = useLocation();
  const navItems = [
    { to: "/admin", label: "Overview", icon: "📊" },
    { to: "/admin/students", label: "Students", icon: "👥" },
    { to: "/admin/programs", label: "Programs", icon: "🎓" },
    { to: "/admin/universities", label: "Universities", icon: "🏛️" },
    { to: "/admin/applications", label: "Applications", icon: "📝" },
    { to: "/admin/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="brand-logo">🌐</span>
          <span className="brand-text">StepAbroad</span>
          <span className="admin-badge">ADMIN</span>
        </div>
        
        <nav className="admin-nav">
          {navItems.map((item) => {
            const isActive = item.to === "/admin" 
              ? location.pathname === "/admin" 
              : location.pathname.startsWith(item.to);
              
            return (
              <Link 
                key={item.to} 
                to={item.to} 
                className={`admin-nav-item ${isActive ? "active" : ""}`}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="admin-user-profile">
          <div className="admin-avatar">A</div>
          <div className="admin-user-info">
            <div className="admin-name">Admin User</div>
            <div className="admin-role">Super Admin</div>
          </div>
        </div>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
