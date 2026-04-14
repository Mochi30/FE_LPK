import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">W</span>
            <div>
              <strong>WIRA<span>PINDO</span></strong>
              <p>Asosiasi LSP P3 yang mendorong profesionalisme dan sertifikasi berkualitas.</p>
            </div>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="YouTube">yt</a>
            <a href="#" aria-label="Facebook">fb</a>
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Program</h4>
            <ul>
              <li><Link to="/sektor-skema">Skema Sertifikasi</Link></li>
              <li><Link to="/lsp-mitra">Direktori LSP</Link></li>
              <li><Link to="/publikasi">Panduan & Resource</Link></li>
              <li><Link to="/berita-event">Agenda Sertifikasi</Link></li>
              <li><Link to="/pendaftaran-sertifikasi">Pendaftaran</Link></li>
            </ul>
          </div>
          <div>
            <h4>Perusahaan</h4>
            <ul>
              <li><Link to="/tentang">Tentang Kami</Link></li>
              <li><Link to="/kontak">Kontak</Link></li>
              <li><Link to="/publikasi">Publikasi</Link></li>
              <li><a href="#">Karier</a></li>
              <li><a href="#">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h4>Kontak</h4>
            <ul className="footer-contact">
              <li>Jl. Wirasusaha No. 1, Jakarta</li>
              <li>(021) 1234-5678</li>
              <li>info@wirapindo.id</li>
              <li>Senin–Jumat, 08.00–17.00</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 WIRAPINDO. Semua hak cipta dilindungi.</p>
        <div className="footer-legal">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
