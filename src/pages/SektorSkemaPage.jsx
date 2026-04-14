import PageHero from "../components/common/PageHero";
import { lspSchemes, sectors } from "../data/content";

export default function SektorSkemaPage() {
  return (
    <>
      <PageHero
        title="Sektor & Skema Sertifikasi"
        description="Informasi sektor dan daftar skema sertifikasi yang tersedia pada LSP mitra."
      />
      <section>
        <div className="container">
          <div className="sector-grid">
            {sectors.map((item) => (
              <article className="sector-card" key={item.name}>
                <div className="sector-icon">{item.name.slice(0, 2)}</div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="sector-tag">{item.schemes} skema</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Skema Sertifikasi</p>
              <h2 className="section-title">Model Skema Profesional</h2>
              <p className="section-desc">
                Rekomendasi skema sertifikasi yang disusun berdasarkan kebutuhan kompetensi dan level KKNI.
              </p>
            </div>
            <button type="button" className="btn-secondary">Lihat Semua Skema</button>
          </div>
          <div className="scheme-grid">
            {lspSchemes.map((item) => (
              <article className="scheme-card" key={item.title}>
                <div className="scheme-head">
                  <span className="scheme-code">{item.code}</span>
                  <span className="scheme-level">{item.level}</span>
                </div>
                <h3>{item.title}</h3>
                <div className="scheme-meta">
                  <span>{item.units} unit kompetensi</span>
                  <span>{item.days} hari</span>
                </div>
                <p>{item.description}</p>
                <div className="scheme-scope">
                  <span>Ruang Lingkup:</span>
                  <ul>
                    {item.scope.map((scope) => (
                      <li key={scope}>{scope}</li>
                    ))}
                  </ul>
                </div>
                <button type="button" className="btn-primary">Daftar Uji Kompetensi</button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="container">
          <h2 className="section-title">Contoh Informasi Skema</h2>
          <p className="section-desc">
            Setiap skema menampilkan deskripsi singkat, syarat, durasi, biaya, dan jadwal sesi sertifikasi.
          </p>
          <div className="table-wrap">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Nama Skema</th>
                  <th>Syarat</th>
                  <th>Durasi</th>
                  <th>Biaya</th>
                  <th>Jadwal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Asesor Kompetensi</td>
                  <td>Ijazah D3/S1, CV, Portofolio</td>
                  <td>3 Hari</td>
                  <td>Rp2.500.000</td>
                  <td>Setiap Jumat</td>
                </tr>
                <tr>
                  <td>Teknisi Jaringan</td>
                  <td>KTP, Sertifikat pelatihan</td>
                  <td>2 Hari</td>
                  <td>Rp1.800.000</td>
                  <td>Minggu ke-2 setiap bulan</td>
                </tr>
                <tr>
                  <td>Supervisor Produksi</td>
                  <td>Pengalaman kerja 2 tahun</td>
                  <td>3 Hari</td>
                  <td>Rp2.200.000</td>
                  <td>By request</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
