import { useEffect, useState } from "react";
import { adminApi } from "../lib/adminApi";

const registrationForm = {
  participant_name: "",
  email: "",
  phone: "",
  scheme_name: "",
  notes: "",
};

function Field({ label, children, full = false }) {
  return (
    <label className={full ? "full" : ""}>
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function AdminRegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [form, setForm] = useState(registrationForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [exporting, setExporting] = useState(false);

  const loadData = () => adminApi.getRegistrations().then(setRegistrations).catch((err) => setError(err.message));

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await adminApi.createRegistration(form);
      setForm(registrationForm);
      setMessage("Pendaftaran peserta berhasil dicatat.");
      setError("");
      loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await adminApi.updateRegistrationStatus(id, { status, send_notification: true });
      setMessage(`Status pendaftaran diubah menjadi ${status}.`);
      setError("");
      loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleExport = async () => {
    try {
      setExporting(true);
      await adminApi.downloadRegistrationsExport();
      setMessage("Export pendaftaran berhasil diunduh.");
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setExporting(false);
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-page-head">
        <div>
          <p className="admin-kicker">Pendaftaran</p>
          <h1>Verifikasi Peserta Baru</h1>
          <p>Mencatat pendaftaran, memverifikasi status, dan mengekspor data peserta.</p>
        </div>
        <button className="admin-btn outline" type="button" onClick={handleExport} disabled={exporting}>
          {exporting ? "Mengunduh..." : "Export CSV"}
        </button>
      </div>
      {message ? <div className="admin-alert success">{message}</div> : null}
      {error ? <div className="admin-alert error">{error}</div> : null}
      <div className="admin-grid-2 admin-align-start">
        <form className="admin-panel admin-form-panel" onSubmit={handleSubmit}>
          <h2>Input Pendaftaran Baru</h2>
          <div className="admin-form-grid">
            <Field label="Nama Peserta">
              <input value={form.participant_name} onChange={(e) => setForm({ ...form, participant_name: e.target.value })} required />
            </Field>
            <Field label="Email">
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </Field>
            <Field label="Nomor HP">
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </Field>
            <Field label="Skema Sertifikasi">
              <input value={form.scheme_name} onChange={(e) => setForm({ ...form, scheme_name: e.target.value })} required />
            </Field>
            <Field label="Catatan" full>
              <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            </Field>
          </div>
          <button className="admin-btn primary" type="submit">Simpan Pendaftaran</button>
        </form>
        <div className="admin-panel">
          <h2>Daftar Peserta</h2>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Peserta</th>
                  <th>Skema</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((registration) => (
                  <tr key={registration.id}>
                    <td>
                      <strong>{registration.participant_name}</strong>
                      <small>{registration.email}</small>
                    </td>
                    <td>{registration.scheme_name}</td>
                    <td><span className={`status-pill ${registration.status}`}>{registration.status}</span></td>
                    <td>
                      <div className="admin-actions compact stacked">
                        <button className="admin-btn ghost" type="button" onClick={() => updateStatus(registration.id, "diverifikasi")}>Verifikasi</button>
                        <button className="admin-btn ghost" type="button" onClick={() => updateStatus(registration.id, "approved")}>Approve</button>
                        <button className="admin-btn outline" type="button" onClick={() => adminApi.resendRegistrationConfirmation(registration.id).then(() => setMessage("Konfirmasi berhasil dikirim ulang."))}>Kirim Ulang</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
