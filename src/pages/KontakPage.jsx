import PageHero from "../components/common/PageHero";

const contactFaqs = [
  {
    question: "Bagaimana cara mendaftarkan LSP sebagai anggota?",
    answer: "Lengkapi formulir kontak atau hubungi email kemitraan, lalu tim WIRAPINDO akan mengirim alur verifikasi dan dokumen yang dibutuhkan."
  },
  {
    question: "Apakah ada biaya untuk menjadi anggota?",
    answer: "Biaya keanggotaan dan administrasi mengikuti kategori layanan dan akan dijelaskan pada tahap konfirmasi dari tim kemitraan."
  },
  {
    question: "Berapa lama proses persetujuan keanggotaan?",
    answer: "Proses review umumnya memerlukan 3–7 hari kerja, tergantung kelengkapan dokumen dan jadwal verifikasi."
  },
  {
    question: "Apa manfaat menjadi LSP Mitra WIRAPINDO?",
    answer: "Anggota memperoleh akses direktori resmi, dukungan publikasi, kolaborasi program, informasi skema, dan jaringan mitra industri."
  },
  {
    question: "Bagaimana cara mengurus perpanjangan sertifikat?",
    answer: "Silakan ajukan permohonan melalui LSP terkait dengan membawa dokumen evaluasi, sertifikat sebelumnya, dan bukti kompetensi terbaru."
  },
  {
    question: "Apakah WIRAPINDO menerima pengaduan?",
    answer: "Ya. Pengaduan dapat dikirim melalui formulir kontak dengan kategori yang sesuai agar ditindaklanjuti oleh tim terkait."
  }
];

export default function KontakPage() {
  return (
    <>
      <PageHero
        title={<>Kontak & <span className="accent-word">FAQ</span></>}
        description="Hubungi asosiasi untuk informasi keanggotaan, skema, dan kerjasama."
      />
      <section>
        <div className="container contact-grid">
          <div className="contact-info-column">
            <div className="contact-intro">
              <span className="contact-kicker">Informasi Kontak</span>
              <h2 className="contact-title">Hubungi <span>Kami</span></h2>
            </div>

            <div className="contact-list">
              <article className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div>
                  <small>Alamat</small>
                  <strong>Jl. Gatot Subroto No. 123, Jakarta Selatan</strong>
                  <span>DKI Jakarta 12930, Indonesia</span>
                </div>
              </article>

              <article className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div>
                  <small>Telepon</small>
                  <strong>+62 21 5555 1234</strong>
                  <span>Senin – Jumat, 08.00 – 17.00 WIB</span>
                </div>
              </article>

              <article className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div>
                  <small>Email Umum</small>
                  <strong>info@wirapindo.or.id</strong>
                  <span>Respons dalam 1–2 hari kerja</span>
                </div>
              </article>

              <article className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div>
                  <small>Email Kemitraan</small>
                  <strong>kemitraan@wirapindo.or.id</strong>
                  <span>Khusus pendaftaran anggota LSP baru</span>
                </div>
              </article>
            </div>

            <div className="contact-socials">
              <span>📷</span>
              <span>📱</span>
              <span>💼</span>
              <span>▶️</span>
              <span>🕊️</span>
              <span>💬</span>
            </div>

            <a href="https://maps.google.com" className="contact-map-card">
              <div className="contact-map-visual">🗺️</div>
              <div className="contact-map-caption">Klik untuk Google Maps</div>
            </a>
          </div>

          <form className="form-wrap contact-form-card">
            <div className="contact-form-head">
              <h2>Kirim Pesan</h2>
              <p>Isi formulir dan tim kami akan segera merespons.</p>
            </div>
            <div className="form-grid">
              <div>
                <label htmlFor="nama">Nama Lengkap *</label>
                <input id="nama" name="nama" type="text" placeholder="Nama Anda" />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" placeholder="email@anda.com" />
              </div>
              <div>
                <label htmlFor="telepon">Nomor HP</label>
                <input id="telepon" name="telepon" type="tel" placeholder="+62 8xx xxxx xxxx" />
              </div>
              <div>
                <label htmlFor="instansi">Instansi</label>
                <input id="instansi" name="instansi" type="text" placeholder="Perusahaan / Lembaga" />
              </div>
              <div className="full">
                <label htmlFor="kategori">Kategori *</label>
                <select id="kategori" name="kategori">
                  <option>Informasi Keanggotaan</option>
                  <option>Sektor & Skema</option>
                  <option>Kerjasama</option>
                </select>
              </div>
              <div className="full">
                <label htmlFor="pesan">Pesan *</label>
                <textarea id="pesan" name="pesan" placeholder="Tulis pesan atau pertanyaan Anda..."></textarea>
              </div>
              <div className="full">
                <button className="btn-primary contact-submit-btn" type="button">Kirim Pesan →</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="alt">
        <div className="container faq-section">
          <div className="faq-section-head">
            <span className="contact-kicker">FAQ</span>
            <h2 className="faq-title">Pertanyaan <span>Umum</span></h2>
          </div>
          <div className="faq-grid">
            {contactFaqs.map((item, index) => (
              <details className="faq-card faq-accordion" key={item.question} open={index === 0}>
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-toggle">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
