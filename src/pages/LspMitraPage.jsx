import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { lspDirectory, trustedPartners } from "../data/content";

const sectorTabs = ["Semua", "TI", "Kesehatan", "Manufaktur", "Keuangan", "Pariwisata", "Konstruksi", "Energi"];
const sectorOptions = ["Semua Sektor", "TI", "Kesehatan", "Manufaktur", "Keuangan", "Pariwisata", "Konstruksi", "Energi"];
const regionOptions = ["Semua Wilayah", "Jakarta", "Surabaya", "Bekasi", "Yogyakarta", "Bandung", "Balikpapan"];

export default function LspMitraPage() {
  const [keyword, setKeyword] = useState("");
  const [activeSector, setActiveSector] = useState("Semua");
  const [selectedSector, setSelectedSector] = useState("Semua Sektor");
  const [selectedRegion, setSelectedRegion] = useState("Semua Wilayah");

  const visibleLsp = lspDirectory.filter((item) => {
    const matchKeyword = `${item.name} ${item.category} ${item.region}`
      .toLowerCase()
      .includes(keyword.toLowerCase());
    const matchSectorTab = activeSector === "Semua" || item.sector === activeSector;
    const matchSectorSelect = selectedSector === "Semua Sektor" || item.sector === selectedSector;
    const matchRegion = selectedRegion === "Semua Wilayah" || item.region === selectedRegion;

    return matchKeyword && matchSectorTab && matchSectorSelect && matchRegion;
  });

  const resetFilters = () => {
    setKeyword("");
    setActiveSector("Semua");
    setSelectedSector("Semua Sektor");
    setSelectedRegion("Semua Wilayah");
  };

  return (
    <>
      <PageHero
        title={<>Direktori<span className="accent-word"> LSP Mitra</span></>}
        description="Daftar lengkap LSP mitra beserta sektor, skema, dan informasi kontak untuk memudahkan pencarian."
      />
      <section className="alt">
        <div className="container">
          <div className="directory-toolbar">
            <div className="directory-field search">
              <label htmlFor="search-lsp">Cari LSP</label>
              <input
                id="search-lsp"
                type="text"
                placeholder="Nama LSP atau kata kunci..."
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
            </div>
            <div className="directory-field">
              <label htmlFor="filter-sector">Sektor</label>
              <select
                id="filter-sector"
                value={selectedSector}
                onChange={(event) => setSelectedSector(event.target.value)}
              >
                {sectorOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="directory-field">
              <label htmlFor="filter-region">Wilayah</label>
              <select
                id="filter-region"
                value={selectedRegion}
                onChange={(event) => setSelectedRegion(event.target.value)}
              >
                {regionOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <button type="button" className="directory-reset" onClick={resetFilters}>Reset</button>
          </div>

          <div className="directory-tabs">
            {sectorTabs.map((item) => (
              <button
                type="button"
                key={item}
                className={`directory-tab ${activeSector === item ? "active" : ""}`}
                onClick={() => setActiveSector(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="directory-grid">
            {visibleLsp.map((item) => (
              <article className="directory-card" key={item.name}>
                <div className="directory-top">
                  <div className="directory-logo">{item.icon}</div>
                  <div>
                    <h3>{item.name}</h3>
                    <span className="directory-location">📍 {item.region}</span>
                  </div>
                </div>
                <span className="directory-category">{item.category}</span>
                <p className="directory-description">{item.description}</p>
                <div className="directory-footer">
                  <span><strong>{item.schemes}</strong> skema tersedia</span>
                  <Link to={`/lsp-mitra/${item.slug}`} className="directory-link">Lihat Detail →</Link>
                </div>
              </article>
            ))}
          </div>

          {!visibleLsp.length && (
            <div className="directory-empty">
              <h3>Tidak ada LSP yang cocok</h3>
              <p>Coba ubah kata kunci, sektor, atau wilayah pencarian Anda.</p>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="partner-head">
            <p className="section-kicker">Mitra Resmi</p>
            <h2 className="section-title">Didukung Lembaga Terpercaya</h2>
          </div>
          <div className="partner-grid">
            {trustedPartners.map((item) => (
              <article className="partner-card" key={item.name}>
                <div className="partner-icon">{item.name.slice(0, 1)}</div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span>{item.badge}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
