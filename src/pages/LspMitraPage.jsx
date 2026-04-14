import PageHero from "../components/common/PageHero";
import { lspMembers, trustedPartners } from "../data/content";

export default function LspMitraPage() {
  return (
    <>
      <PageHero
        title={<>Direktori<span className="accent-word"> LSP Mitra</span></>}
        description="Daftar lengkap LSP mitra beserta sektor, skema, dan informasi kontak untuk memudahkan pencarian."
      />
      <section className="alt">
        <div className="container">
          <div className="filter-row">
            <span className="filter-chip active">Semua Sektor</span>
            <span className="filter-chip">Teknologi</span>
            <span className="filter-chip">Manufaktur</span>
            <span className="filter-chip">Kesehatan</span>
            <span className="filter-chip">Pariwisata</span>
          </div>
          <div className="directory-grid">
            {lspMembers.map((item) => (
              <article className="directory-card" key={item.name}>
                <div className="directory-logo">{item.name.slice(0, 2)}</div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.sector}</p>
                  <span className="directory-meta">{item.location}</span>
                </div>
                <button type="button" className="btn-secondary">Lihat Profil</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="partner-head">
            <p className="section-kicker">Mitra Resmi</p>
            <h2 className="section-title">Didukung Lembaga Terpercaya</h2>
          </div>
          <div className="partner-grid">
            {trustedPartners.map((item) => (
              <article className="partner-card" key={item.name}>
                <div className="partner-icon">{item.name.slice(0, 1)}</div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span>{item.badge}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
