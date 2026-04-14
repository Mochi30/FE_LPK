import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { articleCards } from "../data/content";

export default function ArtikelPage() {
  return (
    <>
      <PageHero
        title="Artikel Kewirausahaan"
        description="Konten edukasi untuk membantu calon peserta memahami langkah praktis memulai dan menjalankan usaha."
      />
      <section>
        <div className="container">
          <h2 className="section-title">Wawasan Praktis untuk Calon Wirausaha</h2>
          <p className="section-desc">
            Artikel disusun oleh tim mentor dan instruktur untuk mendukung proses belajar peserta sebelum dan sesudah mengikuti pelatihan.
          </p>
          <div className="grid-3">
            {articleCards.map((item) => (
              <article className="card article-card" key={item.title}>
                <span className="article-cat">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: "28px" }}>
            <Link to="/program" className="btn-secondary">Lihat Program Pelatihan</Link>
            <Link to="/daftar" className="btn-primary">Daftar Menjadi Peserta</Link>
          </div>
        </div>
      </section>
    </>
  );
}
