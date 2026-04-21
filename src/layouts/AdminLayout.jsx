import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { adminApi } from "../lib/adminApi";
import { clearAdminSession, getAdminSession } from "../lib/adminSession";

const navItems = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/lsp-mitra", label: "LSP Mitra" },
  { to: "/admin/pendaftaran", label: "Pendaftaran" },
  { to: "/admin/sertifikat", label: "Sertifikat" },
  { to: "/admin/konten", label: "Konten" },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const session = getAdminSession();

  const handleLogout = async () => {
    try {
      await adminApi.logout();
    } catch {
      // ignore API logout failure and clear local session anyway
    }

    clearAdminSession();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <strong>WIRAPINDO</strong>
          <span>Admin Konten & Operasional</span>
        </div>
        <div className="admin-user-card">
          <strong>{session?.user?.name || session?.name || "Admin"}</strong>
          <span>{session?.user?.role || session?.role || "Panel Operasional"}</span>
          <small>{session?.user?.email || session?.email || "Session lokal"}</small>
        </div>
        <nav className="admin-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `admin-nav-link ${isActive ? "active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="admin-btn outline admin-logout" type="button" onClick={handleLogout}>
          Keluar
        </button>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
