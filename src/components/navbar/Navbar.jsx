import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`${scrolled ? "scrolled" : ""} ${isHome ? "home-nav" : ""}`.trim()}>
      <NavLink to="/" className="logo">
        <span className="logo-icon">W</span>
        <span className="logo-text">WIRA<span>PINDO</span></span>
      </NavLink>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {navLinks.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>{item.label}</NavLink>
          </li>
        ))}
      </ul>

      <NavLink to="/pendaftaran-sertifikasi" className="nav-cta">Daftar Sertifikasi</NavLink>
      <button type="button" className="hamburger" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
