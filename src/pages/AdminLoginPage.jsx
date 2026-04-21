import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { adminApi } from "../lib/adminApi";
import { isAdminAuthenticated, saveAdminSession } from "../lib/adminSession";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  if (isAdminAuthenticated()) {
    return <Navigate to="/admin" replace />;
  }

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await adminApi.login(form);
      saveAdminSession({
        token: result.token,
        user: result.user,
        name: result.user.name,
        email: result.user.email,
        role: result.user.role,
        loginAt: new Date().toISOString(),
      });
      const nextPath = location.state?.from?.pathname || "/admin";
      navigate(nextPath, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-login-shell">
      <div className="admin-login-card">
        <div className="admin-page-head">
          <div>
            <p className="admin-kicker">Admin Login</p>
            <h1>Panel Operasional WIRAPINDO</h1>
            <p>Masuk sebagai Admin Konten & Operasional untuk mengelola konten, LSP Mitra, peserta, dan sertifikat.</p>
          </div>
        </div>

        {error ? <div className="admin-alert error">{error}</div> : null}

        <form className="admin-form-panel" onSubmit={handleSubmit}>
          <div className="admin-form-grid">
            <label className="full">
              <span>Email Admin</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="admin@wirapindo.local"
                required
              />
            </label>
            <label className="full">
              <span>Password</span>
              <input
                type="password"
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                placeholder="Masukkan password"
                required
              />
            </label>
          </div>
          <div className="admin-actions">
            <button className="admin-btn primary" type="submit" disabled={loading}>
              {loading ? "Memproses..." : "Masuk ke Panel"}
            </button>
          </div>
        </form>

        <div className="admin-login-note">
          <strong>Catatan:</strong> login ini sekarang memakai endpoint backend admin. Pastikan user admin sudah dimigrasikan dan diseed di Laravel.
        </div>
      </div>
    </section>
  );
}
