import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { getToken } from "./lib/auth";
import ApplicationsPage from "./pages/ApplicationsPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import ProgramsPage from "./pages/ProgramsPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import UniversitiesPage from "./pages/UniversitiesPage";
import UniversityDetailPage from "./pages/UniversityDetailPage";
import ProfilePage from "./pages/ProfilePage";
import ProgramDetailPage from "./pages/ProgramDetailPage";
import ApplicationDetailPage from "./pages/ApplicationDetailPage";
import AdminLayout from "./components/AdminLayout";
import AdminOverviewPage from "./pages/AdminOverviewPage";
import AdminStudentsPage from "./pages/AdminStudentsPage";
import AdminApplicationsPage from "./pages/AdminApplicationsPage";
import NotFoundPage from "./pages/NotFoundPage";

function ProtectedRoute({ children }) {
  return getToken() ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/register" element={<AuthPage mode="register" />} />
      <Route path="/universities" element={<UniversitiesPage />} />
      <Route path="/universities/:id" element={<UniversityDetailPage />} />

      {/* Protected dashboard routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="programs/:id" element={<ProgramDetailPage />} />
        <Route path="applications" element={<ApplicationsPage />} />
        <Route path="applications/:id" element={<ApplicationDetailPage />} />
        <Route path="recommendations" element={<RecommendationsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      {/* Admin routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminOverviewPage />} />
        <Route path="students" element={<AdminStudentsPage />} />
        <Route path="applications" element={<AdminApplicationsPage />} />
      </Route>

      {/* 404 Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
