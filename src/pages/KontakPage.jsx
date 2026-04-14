import PageHero from "../components/common/PageHero";
import { faqs } from "../data/content";

export default function KontakPage() {
  return (
    <>
      <PageHero
        title="Kontak & FAQ"
        description="Hubungi asosiasi untuk informasi keanggotaan, skema, dan kerjasama."
      />
      <section>
        <div className="container contact-grid">
          <div className="contact-card">
            <h2 className="section-title">Kontak Utama</h2>
            <p className="section-desc">Sekretariat WIRAPINDO siap membantu kebutuhan informasi Anda.</p>
            <div className="contact-item">
              <strong>Alamat</strong>
              <span>Jl. Prof. Sertifikasi No. 12, Jakarta</span>
            </div>
            <div className="contact-item">
              <strong>Email</strong>
              <span>info@wirapindo.or.id</span>
            </div>
            <div className="contact-item">
              <strong>Telepon</strong>
              <span>(021) 555 2468</span>
            </div>
          </div>
          <form className="form-wrap">
            <div className="form-grid">
              <div>
                <label htmlFor="nama">Nama</label>
                <input id="nama" name="nama" type="text" placeholder="Nama lengkap" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="nama@email.com" />
              </div>
              <div className="full">
                <label htmlFor="kategori">Kategori Pertanyaan</label>
                <select id="kategori" name="kategori">
                  <option>Keanggotaan LSP</option>
                  <option>Sektor & Skema</option>
                  <option>Kerjasama</option>
                </select>
              </div>
              <div className="full">
                <label htmlFor="pesan">Pesan</label>
                <textarea id="pesan" name="pesan" placeholder="Tulis pertanyaan Anda"></textarea>
              </div>
              <div className="full">
                <button className="btn-primary" type="button">Kirim Pesan</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="alt">
        <div className="container">
          <h2 className="section-title">Pertanyaan Umum</h2>
          <div className="faq-grid">
            {faqs.map((item) => (
              <article className="faq-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
