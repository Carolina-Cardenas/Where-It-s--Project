function PaginationDots({ total, current }) {
  return (
    <section className="flex justify-center gap-2 mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`w-3 h-3 rounded-full transition-all ${
            i === current ? "bg-pink-500" : "bg-gray-300"
          }`}
        />
      ))}
    </section>
  );
}

export default PaginationDots;
