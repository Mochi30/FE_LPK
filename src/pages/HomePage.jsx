import { Link } from "react-router-dom";
import { faqs, heroStats, lspMembers, newsEvents, sectors, testimonials } from "../data/content";

export default function HomePage() {
  return (
    <>
      <header className="hero home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="hero-pill">Asosiasi Resmi LSP P3</span>
            <h1 className="hero-title">
              Mendorong
              <span className="accent-word">Profesionalisme</span>
              & Sertifikasi
              Berkualitas
            </h1>
            <p>
              WIRAPINDO hadir sebagai asosiasi terpercaya yang menghubungkan Lembaga Sertifikasi Profesi dengan dunia
              industri untuk menciptakan tenaga kerja bersertifikat berkualitas tinggi.
            </p>
            <div className="hero-actions">
              <Link to="/lsp-mitra" className="btn-primary">Jelajahi LSP Mitra</Link>
              <Link to="/sektor-skema" className="btn-secondary">Lihat Skema Sertifikasi</Link>
            </div>
            <div className="hero-metrics">
              {heroStats.map((item) => (
                <div className="hero-metric" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="home-hero-visual">
            <div className="visual-card tall">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Kolaborasi LSP" loading="lazy" />
            </div>
            <div className="visual-card">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Forum Sertifikasi" loading="lazy" />
            </div>
            <div className="visual-card">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" alt="Asesmen Kompetensi" loading="lazy" />
            </div>
            <div className="visual-chip">
              <span>310+</span>
              <small>Skema aktif</small>
            </div>
          </div>
        </div>
      </header>

      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Direktori Utama</p>
              <h2 className="section-title">Anggota LSP Mitra</h2>
              <p className="section-desc">Pilih LSP mitra berdasarkan sektor, lokasi, dan fokus layanan sertifikasi.</p>
            </div>
            <Link to="/lsp-mitra" className="btn-secondary">Lihat Direktori Lengkap</Link>
          </div>
          <div className="lsp-grid">
            {lspMembers.map((item) => (
              <article className="lsp-card" key={item.name}>
                <div className="lsp-logo">{item.name.slice(0, 2)}</div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.sector} · {item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="alt section-tight testimonial-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Sektor & Skema</p>
              <h2 className="section-title">Sektor Unggulan</h2>
              <p className="section-desc">Ikon sektor interaktif dengan ringkasan jumlah skema sertifikasi.</p>
            </div>
            <Link to="/sektor-skema" className="btn-secondary">Jelajahi Semua Sektor</Link>
          </div>
          <div className="sector-grid">
            {sectors.map((item) => (
              <article className="sector-card" key={item.name}>
                <div className="sector-icon">{item.name.slice(0, 2)}</div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="sector-tag">{item.schemes} skema</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Berita & Event</p>
              <h2 className="section-title">Update Kegiatan Asosiasi</h2>
              <p className="section-desc">Agenda, workshop, dan informasi terbaru seputar sertifikasi.</p>
            </div>
            <Link to="/berita-event" className="btn-secondary">Lihat Semua Berita</Link>
          </div>
          <div className="news-grid">
            {newsEvents.map((item) => (
              <article className="news-card" key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="news-body">
                  <span>{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="alt section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Testimoni</p>
              <h2 className="section-title">Cerita Sukses</h2>
              <p className="section-desc">Pengalaman LSP mitra dan peserta sertifikasi.</p>
            </div>
            <Link to="/kontak" className="btn-secondary">Hubungi Kami</Link>
          </div>
          <div className="grid-3">
            {testimonials.map((item) => (
              <article className="card" key={item.name}>
                <h3>{item.name}</h3>
                <p className="section-desc" style={{ marginBottom: "12px" }}>{item.role}</p>
                <p>{item.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <h2>Siap Daftar Sertifikasi?</h2>
          <p>Mulai proses pendaftaran skema sertifikasi dengan panduan langkah demi langkah.</p>
          <div className="cta-actions">
            <Link to="/pendaftaran-sertifikasi" className="btn-primary">Daftar Sertifikasi</Link>
            <Link to="/publikasi" className="btn-secondary">Download Panduan</Link>
          </div>
          <div className="cta-faq">
            {faqs.map((item) => (
              <div key={item.question}>
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
