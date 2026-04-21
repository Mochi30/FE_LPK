import { useEffect, useState } from "react";
import { adminApi } from "../lib/adminApi";

const articleForm = {
  title: "",
  excerpt: "",
  author_name: "Admin WIRAPINDO",
  is_published: false,
};

const faqForm = {
  question: "",
  answer: "",
  is_active: true,
};

function Field({ label, children, full = false }) {
  return (
    <label className={full ? "full" : ""}>
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function AdminContentPage() {
  const [articles, setArticles] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [article, setArticle] = useState(articleForm);
  const [faq, setFaq] = useState(faqForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const [articleData, faqData] = await Promise.all([adminApi.getArticles(), adminApi.getFaqs()]);
      setArticles(articleData);
      setFaqs(faqData);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitArticle = async (event) => {
    event.preventDefault();
    try {
      await adminApi.createArticle(article);
      setArticle(articleForm);
      setMessage("Artikel berhasil ditambahkan.");
      setError("");
      loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  const submitFaq = async (event) => {
    event.preventDefault();
    try {
      await adminApi.createFaq(faq);
      setFaq(faqForm);
      setMessage("FAQ berhasil ditambahkan.");
      setError("");
      loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-page-head">
        <div>
          <p className="admin-kicker">Konten</p>
          <h1>Konten Berita & FAQ</h1>
          <p>Mengelola konten operasional yang termasuk dalam kewenangan admin biasa.</p>
        </div>
      </div>
      {message ? <div className="admin-alert success">{message}</div> : null}
      {error ? <div className="admin-alert error">{error}</div> : null}
      <div className="admin-grid-2 admin-align-start">
        <div className="admin-stack">
          <form className="admin-panel admin-form-panel" onSubmit={submitArticle}>
            <h2>Buat Berita / Event</h2>
            <div className="admin-form-grid">
              <Field label="Judul" full>
                <input value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} required />
              </Field>
              <Field label="Ringkasan" full>
                <textarea value={article.excerpt} onChange={(e) => setArticle({ ...article, excerpt: e.target.value })} />
              </Field>
              <Field label="Penulis">
                <input value={article.author_name} onChange={(e) => setArticle({ ...article, author_name: e.target.value })} />
              </Field>
              <Field label="Status">
                <select value={article.is_published ? "published" : "draft"} onChange={(e) => setArticle({ ...article, is_published: e.target.value === "published" })}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </Field>
            </div>
            <button className="admin-btn primary" type="submit">Simpan Artikel</button>
          </form>
          <form className="admin-panel admin-form-panel" onSubmit={submitFaq}>
            <h2>Tambah FAQ Kontak</h2>
            <div className="admin-form-grid">
              <Field label="Pertanyaan" full>
                <input value={faq.question} onChange={(e) => setFaq({ ...faq, question: e.target.value })} required />
              </Field>
              <Field label="Jawaban" full>
                <textarea value={faq.answer} onChange={(e) => setFaq({ ...faq, answer: e.target.value })} required />
              </Field>
            </div>
            <button className="admin-btn primary" type="submit">Simpan FAQ</button>
          </form>
        </div>
        <div className="admin-stack">
          <div className="admin-panel">
            <h2>Artikel</h2>
            <div className="admin-list">
              {articles.map((item) => (
                <article className="admin-list-card" key={item.id}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.author_name || "Admin"}</p>
                    <small>{item.is_published ? "Published" : "Draft"}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="admin-panel">
            <h2>FAQ</h2>
            <div className="admin-list">
              {faqs.map((item) => (
                <article className="admin-list-card" key={item.id}>
                  <div>
                    <strong>{item.question}</strong>
                    <p>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
