import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { sectors } from "../data/content";

export default function SektorSkemaPage() {
  const [activeSectorName, setActiveSectorName] = useState(sectors[0]?.name ?? "");
  const activeSector = sectors.find((item) => item.name === activeSectorName) ?? sectors[0];

  return (
    <>
      <PageHero
        title={<>Sektor & <span className="accent-word">Skema Sertifikasi</span></>}
        description="Informasi sektor dan daftar skema sertifikasi yang tersedia pada LSP mitra."
      />
      <section className="alt">
        <div className="container">
          <div className="sector-hero-head">
            <span className="sector-hero-kicker">Pilih Sektor</span>
            <h2 className="sector-hero-title">
              Klik Sektor untuk <span>Lihat Skema</span>
            </h2>
            <p className="section-desc">
              Setiap sektor memiliki daftar skema sertifikasi dengan persyaratan dan informasi lengkap.
            </p>
          </div>
          <div className="sector-grid">
            {sectors.map((item) => (
              <button
                type="button"
                className={`sector-card ${activeSector?.name === item.name ? "active" : ""}`}
                key={item.name}
                onClick={() => setActiveSectorName(item.name)}
              >
                {item.badge ? <span className="sector-badge">{item.badge}</span> : null}
                <div className="sector-icon">{item.icon}</div>
                <h3>{item.name}</h3>
                <span className="sector-count">{item.schemes} Skema Tersedia</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sector-detail-panel">
            <div className="sector-detail-head">
              <div className="sector-detail-icon">{activeSector.icon}</div>
              <div>
                <h2 className="sector-detail-title">{activeSector.name}</h2>
                <p className="sector-detail-desc">{activeSector.detailDescription}</p>
              </div>
            </div>
            <h3 className="sector-detail-subtitle">
              Skema Sertifikasi ({activeSector.detailSchemes.length} ditampilkan)
            </h3>

            <div className="sector-scheme-grid">
              {activeSector.detailSchemes.map((item) => (
                <article className="sector-scheme-card" key={item.title}>
                  <h4>{item.title}</h4>
                  <div className="sector-scheme-meta">
                    <span className="sector-pill blue">{item.kkni}</span>
                    <span className="sector-pill green">{item.duration}</span>
                    <span className="sector-pill orange">{item.price}</span>
                  </div>
                  <p>{item.summary}</p>
                  <Link to="/pendaftaran-sertifikasi" className="sector-scheme-link">
                    Daftar Skema Ini →
                  </Link>
                </article>
              ))}
            </div>

            <div className="sector-detail-actions">
              <Link to="/pendaftaran-sertifikasi" className="btn-primary">Daftar Sertifikasi</Link>
              <button type="button" className="btn-secondary sector-outline-btn">Download Panduan PDF</button>
            </div>
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
