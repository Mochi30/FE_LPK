export default function PageHero({ title, description }) {
  return (
    <header className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
