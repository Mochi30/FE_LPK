import PageHero from "../components/common/PageHero";
import { resources } from "../data/content";

export default function PublikasiPage() {
  return (
    <>
      <PageHero
        title="Publikasi & Resource"
        description="Download panduan, template, dan materi edukasi untuk mendukung proses sertifikasi."
      />
      <section className="alt">
        <div className="container">
          <div className="resource-grid">
            {resources.map((item) => (
              <article className="resource-card" key={item.title}>
                <span className="resource-tag">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button type="button" className="btn-secondary">Download</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
