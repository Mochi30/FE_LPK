import PageHero from "../components/common/PageHero";
import { newsEvents } from "../data/content";

export default function BeritaEventPage() {
  return (
    <>
      <PageHero
        title="Berita & Event"
        description="Update kegiatan, seminar, dan agenda asosiasi LSP mitra."
      />
      <section>
        <div className="container">
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
    </>
  );
}
