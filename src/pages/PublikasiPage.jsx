import PageHero from "../components/common/PageHero";
import { publicationFilters, resources, webinars } from "../data/content";

export default function PublikasiPage() {
  return (
    <>
      <PageHero
        title="Publikasi & Resource"
        description="Memberikan akses mudah ke dokumen, regulasi, dan referensi untuk mendukung layanan sertifikasi."
      />
      <section className="alt">
        <div className="container">
          <div className="publication-filters">
            {publicationFilters.map((item, idx) => (
              <button
                type="button"
                className={`filter-chip ${idx === 0 ? "active" : ""}`}
                key={item.value}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="publication-grid">
            {resources.map((item) => (
              <article className={`publication-card ${item.color}`} key={item.title}>
                <div className="publication-visual">
                  <span className="publication-type">{item.type}</span>
                  <div className="publication-icon">{item.icon === "doc" ? "📄" : item.icon === "note" ? "📝" : "🧩"}</div>
                </div>
                <div className="publication-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="publication-meta">
                    <span>{item.size}</span>
                    <button type="button">Download</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="publication-video">
        <div className="container">
          <div className="publication-heading">
            <span className="section-kicker">Video & Webinar</span>
            <h2 className="section-title">Rekaman Seminar & Workshop</h2>
            <p className="section-desc">Akses rekaman webinar dan workshop edukatif WIRAPINDO secara gratis.</p>
          </div>
          <div className="webinar-grid">
            {webinars.map((item) => (
              <article className={`webinar-card ${item.color}`} key={item.title}>
                <div className="webinar-visual">
                  <span>▶</span>
                </div>
                <div className="webinar-body">
                  <h3>{item.title}</h3>
                  <p>{item.duration}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
