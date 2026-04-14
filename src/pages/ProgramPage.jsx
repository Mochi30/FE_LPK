import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { programCards } from "../data/content";

export default function ProgramPage() {
  return (
    <>
      <PageHero
        title="Program Pelatihan"
        description="Program pelatihan kerja kewirausahaan disusun untuk membangun kompetensi, kemandirian usaha, dan kesiapan menghadapi persaingan pasar."
      />
      <section className="alt">
        <div className="container">
          <h2 className="section-title">Struktur Program LPK</h2>
          <p className="section-desc">
            Setiap program mencakup materi inti, praktik, evaluasi kompetensi, dan pendampingan implementasi agar peserta siap menjalankan usaha secara nyata.
          </p>
          <div className="grid-3">
            {programCards.map((item) => (
              <article className="card" key={item.title}>
                <img className="card-media" src={item.image} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: "28px" }}>
            <Link to="/instruktur" className="btn-secondary">Lihat Tim Instruktur</Link>
            <Link to="/daftar" className="btn-primary">Ajukan Pendaftaran</Link>
          </div>
        </div>
      </section>
    </>
  );
}
