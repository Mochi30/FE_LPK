import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { testimonialCards } from "../data/content";

export default function TestimoniPage() {
  return (
    <>
      <PageHero
        title="Testimoni Alumni"
        description="Umpan balik peserta dan alumni menjadi bagian penting evaluasi mutu pelatihan di LPK ENTREPREXA."
      />
      <section>
        <div className="container">
          <h2 className="section-title">Dampak Program bagi Peserta</h2>
          <p className="section-desc">
            Alumni kami merasakan manfaat pada aspek manajemen usaha, peningkatan keterampilan, serta kesiapan menjalankan bisnis secara profesional.
          </p>
          <div className="grid-3">
            {testimonialCards.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: "28px" }}>
            <Link to="/program" className="btn-secondary">Lihat Program</Link>
            <Link to="/daftar" className="btn-primary">Daftar Sekarang</Link>
          </div>
        </div>
      </section>
    </>
  );
}
