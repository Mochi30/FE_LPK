import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";

const values = [
  {
    title: "Visi",
    text: "Menjadi asosiasi LSP yang mendorong profesionalisme dan kualitas sertifikasi berbasis standar kompetensi nasional."
  },
  {
    title: "Misi",
    text: "Menguatkan kolaborasi LSP mitra, memastikan mutu layanan sertifikasi, dan memperluas akses informasi bagi peserta."
  },
  {
    title: "Struktur Organisasi",
    text: "Pengurus, komite teknis, dan tim pengembangan layanan bekerja terstruktur untuk memastikan program berjalan efektif."
  }
];

const memberships = [
  {
    title: "Anggota Inti",
    text: "LSP mitra aktif yang terdaftar dan menjalankan skema sertifikasi sesuai standar asosiasi."
  },
  {
    title: "Anggota Afiliasi",
    text: "Mitra strategis dari sektor industri, pendidikan, dan pelatihan yang mendukung peningkatan kualitas."
  },
  {
    title: "Anggota Kehormatan",
    text: "Tokoh profesional yang berkontribusi pada penguatan ekosistem sertifikasi."
  }
];

const achievements = [
  { value: "128", label: "LSP Mitra Terdaftar" },
  { value: "310+", label: "Skema Tersertifikasi" },
  { value: "24", label: "Sektor yang Dicakup" },
  { value: "15K+", label: "Peserta Bersertifikat" }
];

export default function TentangPage() {
  return (
    <>
      <PageHero
        title={<>Tentang <span className="accent-word">WIRAPINDO</span></>}
        description="Asosiasi LSP P3 yang berperan sebagai pusat informasi, kolaborasi, dan penguatan mutu sertifikasi."
      />
      <section className="alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Prestasi & Statistik</p>
              <h2 className="section-title">Dampak Asosiasi</h2>
              <p className="section-desc">
                Ringkasan pencapaian dan skala layanan sertifikasi yang sudah dijalankan bersama LSP mitra.
              </p>
            </div>
          </div>
          <div className="impact-grid">
            {achievements.map((item) => (
              <article className="impact-card" key={item.label}>
                <div className="impact-value">{item.value}</div>
                <div className="impact-label">{item.label}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container about-visual-grid">
          <div>
            <h2 className="section-title">Profil Asosiasi</h2>
            <p className="section-desc">
              WIRAPINDO adalah asosiasi LSP mitra yang mengoordinasikan standar layanan, memperkuat jaringan sertifikasi,
              dan menyediakan direktori resmi LSP, sektor, serta skema sertifikasi. Fokus kami adalah transparansi,
              kualitas layanan, dan kemudahan akses informasi bagi peserta sertifikasi.
            </p>
          </div>
          <div className="about-cover">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
              alt="Rapat koordinasi asosiasi LSP"
              loading="lazy"
            />
          </div>
        </div>

        <div className="container" style={{ marginTop: "28px" }}>
          <div className="grid-3">
            {values.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: "28px" }}>
            <Link to="/lsp-mitra" className="btn-secondary">Direktori LSP Mitra</Link>
            <Link to="/pendaftaran-sertifikasi" className="btn-primary">Daftar Sertifikasi</Link>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Struktur Organisasi</p>
              <h2 className="section-title">Struktur Pengurus & Komite</h2>
              <p className="section-desc">
                Diagram organisasi yang menggambarkan struktur pengurus, komite teknis, dan sekretariat.
              </p>
            </div>
          </div>
          <div className="org-chart">
            <div className="org-level org-level-top">
              <div className="org-node primary">
                <div className="org-icon">🏛️</div>
                <small>Dewan Pembina</small>
                <h3>Dr. H. Bambang Sutrisno, M.M.</h3>
                <p>Ketua Umum</p>
              </div>
            </div>
            <div className="org-connector"></div>
            <div className="org-level org-level-mid">
              <div className="org-node mid">
                <small>Manajemen Eksekutif</small>
                <h3>Ir. Budi Santoso, MBA</h3>
                <p>Direktur Utama</p>
              </div>
            </div>
            <div className="org-line"></div>
            <div className="org-level org-level-bottom">
              <div className="org-node">
                <div className="org-avatar">👩‍💼</div>
                <small>Divisi Akademik</small>
                <h3>Dr. Sari Dewi, M.Pd.</h3>
                <p>Direktur Akademik</p>
              </div>
              <div className="org-node">
                <div className="org-avatar">🧑‍💼</div>
                <small>Divisi Operasional</small>
                <h3>Hendra Kusuma, S.T., M.M.</h3>
                <p>Direktur Operasional</p>
              </div>
              <div className="org-node">
                <div className="org-avatar">📊</div>
                <small>Divisi Keuangan</small>
                <h3>Ahmad Ridwan, CFA</h3>
                <p>Direktur Keuangan</p>
              </div>
              <div className="org-node">
                <div className="org-avatar">🤝</div>
                <small>Divisi Kemitraan</small>
                <h3>Rina Susanti, M.B.A.</h3>
                <p>Direktur Kemitraan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Keanggotaan</p>
              <h2 className="section-title">Jenis Anggota & Syarat</h2>
              <p className="section-desc">
                Keanggotaan terbuka bagi LSP mitra dan mitra strategis sesuai ketentuan asosiasi.
              </p>
            </div>
          </div>
          <div className="grid-3">
            {memberships.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Dokumentasi</p>
              <h2 className="section-title">Kegiatan & Workshop</h2>
              <p className="section-desc">Foto kegiatan asosiasi, seminar, dan workshop terbaru.</p>
            </div>
          </div>
          <div className="showcase-grid">
            <article className="showcase-item">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Seminar asosiasi" />
              <div className="showcase-caption">Seminar Nasional LSP Mitra</div>
            </article>
            <article className="showcase-item">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="Workshop sertifikasi" />
              <div className="showcase-caption">Workshop Penyelarasan Skema</div>
            </article>
            <article className="showcase-item">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="Rapat koordinasi" />
              <div className="showcase-caption">Rapat Koordinasi Pengurus</div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}


