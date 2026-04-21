import { useEffect, useState } from "react";
import { adminApi } from "../lib/adminApi";

export default function AdminDashboardPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminApi.getDashboard().then(setData).catch((err) => setError(err.message));
  }, []);

  return (
    <section className="admin-page">
      <div className="admin-page-head">
        <div>
          <p className="admin-kicker">Dashboard</p>
          <h1>Ringkasan Operasional</h1>
          <p>Memantau LSP Mitra, pendaftaran peserta, dokumen, dan sertifikat.</p>
        </div>
      </div>

      {error ? <div className="admin-alert error">{error}</div> : null}

      <div className="admin-stat-grid">
        <AdminStatCard title="LSP Mitra Aktif" value={data?.lsp_partners?.active ?? "-"} />
        <AdminStatCard title="Pendaftaran Pending" value={data?.registrations?.pending ?? "-"} />
        <AdminStatCard title="Dokumen Pending Review" value={data?.documents?.pending_review ?? "-"} />
        <AdminStatCard title="Sertifikat Terbit" value={data?.certificates?.issued ?? "-"} />
      </div>

      <div className="admin-grid-2">
        <article className="admin-panel">
          <h2>Status Pendaftaran</h2>
          <div className="admin-summary-list">
            <SummaryRow label="Pending" value={data?.registrations?.pending} />
            <SummaryRow label="Diverifikasi" value={data?.registrations?.verified} />
            <SummaryRow label="Approved" value={data?.registrations?.approved} />
            <SummaryRow label="Rejected" value={data?.registrations?.rejected} />
          </div>
        </article>
        <article className="admin-panel">
          <h2>Status Sertifikat</h2>
          <div className="admin-summary-list">
            <SummaryRow label="Pending Approval" value={data?.certificates?.pending_approval} />
            <SummaryRow label="Email Terkirim" value={data?.certificates?.email_sent} />
            <SummaryRow label="Email Gagal" value={data?.certificates?.email_failed} />
            <SummaryRow label="Notifikasi Sent" value={data?.notifications?.sent} />
          </div>
        </article>
      </div>
    </section>
  );
}

function AdminStatCard({ title, value }) {
  return (
    <article className="admin-stat-card">
      <span>{title}</span>
      <strong>{value}</strong>
    </article>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="admin-summary-row">
      <span>{label}</span>
      <strong>{value ?? "-"}</strong>
    </div>
  );
}
