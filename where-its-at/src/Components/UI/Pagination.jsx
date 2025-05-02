import "../../styles/Pagination.css";

function PaginationDots({ total, current }) {
  return (
    <section className="pagination-dots">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`dot ${i === current ? "dot--active" : ""}`} />
      ))}
    </section>
  );
}

export default PaginationDots;
