import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { instructorCards } from "../data/content";

export default function InstrukturPage() {
  return (
    <>
      <PageHero
        title="Tim Instruktur"
        description="Tim instruktur kami terdiri dari praktisi dan tenaga pelatih berpengalaman dalam pengembangan kewirausahaan dan manajemen usaha."
      />
      <section className="dark">
        <div className="container">
          <h2 className="section-title">Tenaga Pelatih Profesional</h2>
          <p className="section-desc">
            Instruktur memberikan pembelajaran berbasis praktik, coaching, serta evaluasi berkelanjutan untuk memastikan peserta mencapai kompetensi yang ditargetkan.
          </p>
          <div className="grid-4">
            {instructorCards.map((item) => (
              <article className="card" key={item.title}>
                <img className="instructor-photo" src={item.image} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: "28px" }}>
            <Link to="/testimoni" className="btn-secondary">Baca Testimoni</Link>
            <Link to="/daftar" className="btn-primary">Daftar Menjadi Peserta</Link>
          </div>
        </div>
      </section>
    </>
  );
}
