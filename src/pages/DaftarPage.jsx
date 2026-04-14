import PageHero from "../components/common/PageHero";

export default function DaftarPage() {
  return (
    <>
      <PageHero
        title={<>Pendaftaran <span className="accent-word">Sertifikasi</span></>}
        description="Pilih LSP mitra dan skema sertifikasi, lalu lengkapi data dan dokumen yang dibutuhkan."
      />
      <section className="alt registration-section">
        <div className="container registration-shell">
          <h2 className="section-title">Form Pendaftaran Sertifikasi</h2>
          <p className="section-desc">
            Form ini membantu peserta memilih LSP mitra, menentukan skema, dan mengunggah dokumen pendukung.
          </p>
          <form className="form-wrap">
            <div className="form-step">1. Pilih LSP Mitra</div>
            <div className="form-grid">
              <div className="full">
                <label htmlFor="lsp">LSP Mitra</label>
                <select id="lsp" name="lsp">
                  <option>LSP Mitra Nusantara</option>
                  <option>LSP Profesional Digital</option>
                  <option>LSP Kesehatan Mandiri</option>
                </select>
              </div>
            </div>
            <div className="form-step">2. Pilih Skema Sertifikasi</div>
            <div className="form-grid">
              <div>
                <label htmlFor="skema">Skema Sertifikasi</label>
                <select id="skema" name="skema">
                  <option>Asesor Kompetensi</option>
                  <option>Teknisi Jaringan</option>
                  <option>Supervisor Produksi</option>
                </select>
              </div>
              <div>
                <label htmlFor="jadwal">Pilihan Jadwal</label>
                <input id="jadwal" name="jadwal" type="date" />
              </div>
            </div>
            <div className="form-step">3. Data Peserta</div>
            <div className="form-grid">
              <div>
                <label htmlFor="nama">Nama Lengkap</label>
                <input id="nama" name="nama" type="text" placeholder="Contoh: Andi Pratama" />
              </div>
              <div>
                <label htmlFor="telepon">No. HP</label>
                <input id="telepon" name="telepon" type="tel" placeholder="08xxxxxxxxxx" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="anda@email.com" />
              </div>
              <div>
                <label htmlFor="alamat">Alamat</label>
                <input id="alamat" name="alamat" type="text" placeholder="Alamat lengkap" />
              </div>
            </div>
            <div className="form-step">4. Dokumen Pendukung</div>
            <div className="form-grid">
              <div>
                <label htmlFor="ktp">Upload KTP</label>
                <input id="ktp" name="ktp" type="file" />
              </div>
              <div>
                <label htmlFor="ijazah">Upload Ijazah</label>
                <input id="ijazah" name="ijazah" type="file" />
              </div>
              <div className="full">
                <label htmlFor="pesan">Catatan Tambahan</label>
                <textarea id="pesan" name="pesan" placeholder="Catatan atau kebutuhan khusus"></textarea>
              </div>
              <div className="full">
                <button className="btn-primary" type="button">Kirim Pendaftaran</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
