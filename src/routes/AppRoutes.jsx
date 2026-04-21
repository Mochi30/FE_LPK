import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import { isAdminAuthenticated } from "../lib/adminSession";
import MainLayout from "../layouts/MainLayout";
import AdminCertificatesPage from "../pages/AdminCertificatesPage";
import AdminContentPage from "../pages/AdminContentPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminLspPartnersPage from "../pages/AdminLspPartnersPage";
import AdminRegistrationsPage from "../pages/AdminRegistrationsPage";
import BeritaEventPage from "../pages/BeritaEventPage";
import DaftarPage from "../pages/DaftarPage";
import HomePage from "../pages/HomePage";
import KontakPage from "../pages/KontakPage";
import LspDetailPage from "../pages/LspDetailPage";
import LspMitraPage from "../pages/LspMitraPage";
import PublikasiPage from "../pages/PublikasiPage";
import SektorSkemaPage from "../pages/SektorSkemaPage";
import TentangPage from "../pages/TentangPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLoginPage />} />

      <Route
        path="/admin"
        element={
          <RequireAdminAuth>
            <AdminLayout />
          </RequireAdminAuth>
        }
      >
        <Route index element={<AdminDashboardPage />} />
        <Route path="lsp-mitra" element={<AdminLspPartnersPage />} />
        <Route path="pendaftaran" element={<AdminRegistrationsPage />} />
        <Route path="sertifikat" element={<AdminCertificatesPage />} />
        <Route path="konten" element={<AdminContentPage />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<TentangPage />} />
        <Route path="/lsp-mitra" element={<LspMitraPage />} />
        <Route path="/lsp-mitra/:slug" element={<LspDetailPage />} />
        <Route path="/sektor-skema" element={<SektorSkemaPage />} />
        <Route path="/berita-event" element={<BeritaEventPage />} />
        <Route path="/publikasi" element={<PublikasiPage />} />
        <Route path="/kontak" element={<KontakPage />} />
        <Route path="/pendaftaran-sertifikasi" element={<DaftarPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function RequireAdminAuth({ children }) {
  const location = useLocation();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
}
