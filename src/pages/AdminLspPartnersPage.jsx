import { useEffect, useState } from "react";
import { adminApi } from "../lib/adminApi";

const emptyForm = {
  name: "",
  sector: "",
  city: "",
  province: "",
  contact_email: "",
  contact_phone: "",
  website_url: "",
  description: "",
  is_active: true,
};

function Field({ label, children, full = false }) {
  return (
    <label className={full ? "full" : ""}>
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function AdminLspPartnersPage() {
  const [partners, setPartners] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadData = () => adminApi.getLspPartners().then(setPartners).catch((err) => setError(err.message));

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    try {
      if (editingId) {
        await adminApi.updateLspPartner(editingId, form);
        setMessage("Data LSP Mitra berhasil diperbarui.");
      } else {
        await adminApi.createLspPartner(form);
        setMessage("LSP Mitra baru berhasil ditambahkan.");
      }
      setForm(emptyForm);
      setEditingId(null);
      loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleArchive = async (partner) => {
    try {
      if (partner.deleted_at) {
        await adminApi.restoreLspPartner(partner.id);
      } else {
        await adminApi.archiveLspPartner(partner.id);
      }
      loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-page-head">
        <div>
          <p className="admin-kicker">LSP Mitra</p>
          <h1>Kelola Direktori LSP Mitra</h1>
          <p>Menambah, memperbarui, dan mengarsipkan data LSP Mitra.</p>
        </div>
      </div>
      {message ? <div className="admin-alert success">{message}</div> : null}
      {error ? <div className="admin-alert error">{error}</div> : null}
      <div className="admin-grid-2 admin-align-start">
        <form className="admin-panel admin-form-panel" onSubmit={handleSubmit}>
          <h2>{editingId ? "Edit LSP Mitra" : "Tambah LSP Mitra"}</h2>
          <div className="admin-form-grid">
            <Field label="Nama LSP">
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </Field>
            <Field label="Sektor">
              <input value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })} required />
            </Field>
            <Field label="Kota">
              <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            </Field>
            <Field label="Provinsi">
              <input value={form.province} onChange={(e) => setForm({ ...form, province: e.target.value })} />
            </Field>
            <Field label="Email Kontak">
              <input type="email" value={form.contact_email} onChange={(e) => setForm({ ...form, contact_email: e.target.value })} />
            </Field>
            <Field label="Telepon">
              <input value={form.contact_phone} onChange={(e) => setForm({ ...form, contact_phone: e.target.value })} />
            </Field>
            <Field label="Website" full>
              <input value={form.website_url} onChange={(e) => setForm({ ...form, website_url: e.target.value })} />
            </Field>
            <Field label="Deskripsi" full>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </Field>
          </div>
          <div className="admin-actions">
            <button className="admin-btn primary" type="submit">{editingId ? "Simpan Perubahan" : "Tambah LSP"}</button>
            {editingId ? (
              <button className="admin-btn ghost" type="button" onClick={() => { setEditingId(null); setForm(emptyForm); }}>
                Batal
              </button>
            ) : null}
          </div>
        </form>
        <div className="admin-panel">
          <h2>Daftar LSP Mitra</h2>
          <div className="admin-list">
            {partners.map((partner) => (
              <article className={`admin-list-card ${partner.deleted_at ? "archived" : ""}`} key={partner.id}>
                <div>
                  <strong>{partner.name}</strong>
                  <p>{partner.sector} - {partner.city || "-"}</p>
                  <small>{partner.contact_email || "Email belum tersedia"}</small>
                </div>
                <div className="admin-actions compact">
                  <button className="admin-btn ghost" type="button" onClick={() => { setEditingId(partner.id); setForm({ ...emptyForm, ...partner }); }}>Edit</button>
                  <button className="admin-btn outline" type="button" onClick={() => toggleArchive(partner)}>
                    {partner.deleted_at ? "Pulihkan" : "Arsipkan"}
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
