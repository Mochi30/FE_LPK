import { Link, Navigate, useParams } from "react-router-dom";
import { lspDirectory } from "../data/content";

export default function LspDetailPage() {
  const { slug } = useParams();
  const lsp = lspDirectory.find((item) => item.slug === slug);

  if (!lsp) {
    return <Navigate to="/lsp-mitra" replace />;
  }

  return (
    <section className="lsp-detail-page">
      <div className="container">
        <article className="lsp-detail-card">
          <Link to="/lsp-mitra" className="lsp-detail-close" aria-label="Kembali ke daftar LSP">
            ×
          </Link>

          <div className="lsp-detail-icon">{lsp.icon}</div>

          <div className="lsp-detail-head">
            <h1>{lsp.name}</h1>
            <div className="lsp-detail-tags">
              <span className="directory-category">{lsp.category}</span>
              <span className="lsp-detail-region">📍 {lsp.region}</span>
            </div>
            <p>{lsp.description}</p>
          </div>

          <div className="lsp-detail-stats">
            <div className="lsp-detail-stat">
              <span>Berdiri Sejak</span>
              <strong>{lsp.established}</strong>
            </div>
            <div className="lsp-detail-stat">
              <span>Total Skema</span>
              <strong>{lsp.schemes} Skema</strong>
            </div>
            <div className="lsp-detail-stat">
              <span>Tersertifikasi</span>
              <strong>{lsp.certified}</strong>
            </div>
            <div className="lsp-detail-stat">
              <span>Status</span>
              <strong className="active">✓ {lsp.status}</strong>
            </div>
          </div>

          <div className="lsp-detail-schemes">
            <h2>Skema Tersedia</h2>
            <div className="lsp-detail-scheme-list">
              {lsp.availableSchemes.map((scheme) => (
                <div className="lsp-detail-scheme-item" key={scheme}>
                  <span>📋</span>
                  <span>{scheme}</span>
                </div>
              ))}
            </div>
          </div>

          <Link to="/pendaftaran-sertifikasi" className="lsp-detail-cta">
            Daftar via LSP ini →
          </Link>
        </article>
      </div>
    </section>
  );
}
