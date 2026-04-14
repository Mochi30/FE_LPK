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

export default function TentangPage() {
  return (
    <>
      <PageHero
        title="Tentang WIRAPINDO"
        description="Asosiasi LSP P3 yang berperan sebagai pusat informasi, kolaborasi, dan penguatan mutu sertifikasi."
      />
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
    </>
  );
}


