import { useEffect, useState } from "react";
import { adminApi } from "../lib/adminApi";

const issueForm = {
  registrationId: "",
  approval_reference: "",
  issued_by: "Admin Konten & Operasional",
};

function Field({ label, children, full = false }) {
  return (
    <label className={full ? "full" : ""}>
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function AdminCertificatesPage() {
  const [certificates, setCertificates] = useState([]);
  const [form, setForm] = useState(issueForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadData = () => adminApi.getCertificates().then(setCertificates).catch((err) => setError(err.message));

  useEffect(() => {
    loadData();
  }, []);

  const handleIssue = async (event) => {
    event.preventDefault();
    try {
      await adminApi.issueCertificate(form.registrationId, {
        approval_reference: form.approval_reference,
        issued_by: form.issued_by,
      });
      setMessage("Sertifikat berhasil diterbitkan.");
      setError("");
      setForm(issueForm);
      loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-page-head">
        <div>
          <p className="admin-kicker">Sertifikat</p>
          <h1>Penerbitan & Pengiriman Sertifikat</h1>
          <p>Menerbitkan sertifikat untuk peserta approved dan mengirim ulang sertifikat bila diperlukan.</p>
        </div>
      </div>
      {message ? <div className="admin-alert success">{message}</div> : null}
      {error ? <div className="admin-alert error">{error}</div> : null}
      <div className="admin-grid-2 admin-align-start">
        <form className="admin-panel admin-form-panel" onSubmit={handleIssue}>
          <h2>Terbitkan Sertifikat</h2>
          <div className="admin-form-grid">
            <Field label="ID Pendaftaran">
              <input value={form.registrationId} onChange={(e) => setForm({ ...form, registrationId: e.target.value })} required />
            </Field>
            <Field label="Referensi Approval">
              <input value={form.approval_reference} onChange={(e) => setForm({ ...form, approval_reference: e.target.value })} required />
            </Field>
            <Field label="Diterbitkan Oleh" full>
              <input value={form.issued_by} onChange={(e) => setForm({ ...form, issued_by: e.target.value })} />
            </Field>
          </div>
          <button className="admin-btn primary" type="submit">Terbitkan Sertifikat</button>
        </form>
        <div className="admin-panel">
          <h2>Daftar Sertifikat</h2>
          <div className="admin-list">
            {certificates.map((certificate) => (
              <article className="admin-list-card" key={certificate.id}>
                <div>
                  <strong>{certificate.certificate_number}</strong>
                  <p>{certificate.registration?.participant_name || "Peserta tidak ditemukan"}</p>
                  <small>{certificate.email_delivery_status} - resend {certificate.resend_count}x</small>
                </div>
                <div className="admin-actions compact">
                  <button className="admin-btn outline" type="button" onClick={() => adminApi.resendCertificate(certificate.id).then(() => { setMessage("Sertifikat berhasil dikirim ulang."); loadData(); })}>
                    Kirim Ulang
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
