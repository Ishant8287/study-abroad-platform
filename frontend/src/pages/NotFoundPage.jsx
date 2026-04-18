import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="nf-content">
        <div className="nf-illustration">
          <div className="nf-astronaut">👨‍🚀🧳</div>
        </div>
        <h1 className="nf-404">404</h1>
        <h2 className="nf-heading">Oops! Page Not Found</h2>
        <p className="nf-subtitle">
          The page you're looking for has gone abroad. It might have moved, or perhaps you just typed the wrong address.
        </p>
        <div className="nf-actions">
          <Link to="/" className="btn-nf-primary">Go Back Home</Link>
          <Link to="/programs" className="btn-nf-secondary">Browse Programs</Link>
        </div>
      </div>
    </div>
  );
}
