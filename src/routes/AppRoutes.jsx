import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import TentangPage from "../pages/TentangPage";
import LspMitraPage from "../pages/LspMitraPage";
import LspDetailPage from "../pages/LspDetailPage";
import SektorSkemaPage from "../pages/SektorSkemaPage";
import BeritaEventPage from "../pages/BeritaEventPage";
import PublikasiPage from "../pages/PublikasiPage";
import KontakPage from "../pages/KontakPage";
import DaftarPage from "../pages/DaftarPage";

export default function AppRoutes() {
  return (
    <Routes>
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
