import PageHero from "../components/common/PageHero";
import { newsEvents } from "../data/content";

export default function BeritaEventPage() {
  const categories = [
    { label: "Semua", count: 24 },
    { label: "Berita Asosiasi", count: 12 },
    { label: "Event & Seminar", count: 18 },
    { label: "Kebijakan", count: 9 },
    { label: "Cerita Sukses", count: 7 },
  ];

  const upcomingEvents = [
    { date: "18 Apr", title: "Webinar Sertifikasi IT 2026", place: "Online (Zoom)" },
    { date: "23 Apr", title: "Workshop Asesor Nasional", place: "Jakarta Convention Center" },
    { date: "05 Mei", title: "Rakornas LSP P3 2026", place: "Bali International" },
    { date: "20 Mei", title: "Job Fair Sertifikasi 2026", place: "Gedung BNSP Jakarta" }
  ];

  return (
    <>
      <PageHero
        title={<>Berita & <span className="accent-word">Event</span></>}
        description="Update kegiatan, seminar, dan agenda asosiasi LSP mitra."
      />
      <section className="alt">
        <div className="container">
          <div className="news-filters">
            {categories.map((item) => (
              <button type="button" className="filter-chip" key={item.label}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="news-layout">
            <div className="news-main">
              <article className="news-feature">
                <div
                  className="news-feature-visual"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')" }}
                >
                  <div className="news-feature-chip">Berita Utama</div>
                </div>
                <div className="news-feature-body">
                  <div className="news-meta">10 April 2026 · Tim Redaksi</div>
                  <h2>WIRAPINDO Tandatangani MOU dengan 5 Perusahaan Multinasional</h2>
                  <p>
                    Penandatanganan MOU merupakan langkah strategis dalam memperluas pengakuan sertifikasi profesi
                    Indonesia di pasar kerja global.
                  </p>
                </div>
              </article>

              <div className="news-card-grid">
                {newsEvents.map((item) => (
                  <article className="news-tile" key={item.title}>
                    <div
                      className="news-tile-visual"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    >
                      <span>{item.date}</span>
                    </div>
                    <div className="news-tile-body">
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="news-sidebar">
              <div className="sidebar-card">
                <h4>Event Mendatang</h4>
                <ul>
                  {upcomingEvents.map((event) => (
                    <li key={event.title}>
                      <span className="event-date">{event.date}</span>
                      <div>
                        <strong>{event.title}</strong>
                        <small>{event.place}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-card">
                <h4>Kategori</h4>
                <ul className="category-list">
                  {categories.map((item) => (
                    <li key={item.label}>
                      <span>{item.label}</span>
                      <span className="category-count">{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-card newsletter-card">
                <h4>Newsletter</h4>
                <p>Dapatkan update berita & event WIRAPINDO di inbox Anda.</p>
                <input type="email" placeholder="email@contoh.com" />
                <button type="button" className="btn-primary">Subscribe Gratis</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
